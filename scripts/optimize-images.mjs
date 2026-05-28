// One-off image optimization script.
// Converts source PNGs from ../images and existing public/services PNGs
// into highly-compressed WebP files sized for their actual usage.
// Run with: node scripts/optimize-images.mjs

import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.resolve(ROOT, "..", "images");
const OUT_IMG = path.join(ROOT, "public", "img");
const OUT_SERVICES = path.join(ROOT, "public", "services");

// Each entry: src (relative to SOURCE_DIR), out (absolute), width, height, quality
// width/height are the OUTPUT pixel dims — chosen at ~2x the displayed size for retina
// while staying small enough to load fast.
const jobs = [
  // --- Homepage hero (LCP) — narrower, very high priority ---
  {
    src: "Hero Sectionimage.png",
    out: path.join(OUT_IMG, "hero.webp"),
    width: 1600,
    height: 1147, // matches source 4:3-ish; component object-fits to 1200x430
    quality: 78,
    note: "Hero LCP",
  },

  // --- About sections ---
  {
    src: "About Us Section.png",
    out: path.join(OUT_IMG, "about-home.webp"),
    width: 1400,
    height: 1000,
    quality: 80,
    note: "Homepage About",
  },
  {
    src: "aboutpage team.png",
    out: path.join(OUT_IMG, "about-team.webp"),
    width: 1400,
    height: 1000,
    quality: 80,
    note: "About page team",
  },

  // --- Service cards (homepage grid) — displayed at 800x500 prop, ~210px tall actual ---
  {
    src: "service section infrastructer.png",
    out: path.join(OUT_IMG, "svc-infrastructure.webp"),
    width: 1000,
    height: 625,
    quality: 78,
  },
  {
    src: "Services Section IT Support.png",
    out: path.join(OUT_IMG, "svc-smarthands.webp"),
    width: 1000,
    height: 625,
    quality: 78,
  },
  {
    src: "Services Section Enterprise & Government IT.png",
    out: path.join(OUT_IMG, "svc-workforce.webp"),
    width: 1000,
    height: 625,
    quality: 78,
  },
  {
    src: "service section managed it.png",
    out: path.join(OUT_IMG, "svc-managed-it.webp"),
    width: 1000,
    height: 625,
    quality: 78,
  },
  {
    src: "Services Section Cybersecurity.png",
    out: path.join(OUT_IMG, "svc-cybersecurity.webp"),
    width: 1000,
    height: 625,
    quality: 78,
  },

  // --- Testimonial avatars — displayed at 96x96, 2x = 192 ---
  {
    src: "testimonial profile avatar male.png",
    out: path.join(OUT_IMG, "avatar-male.webp"),
    width: 256,
    height: 256,
    quality: 82,
  },
  {
    src: "testimonial profile avatar female.png",
    out: path.join(OUT_IMG, "avatar-female.webp"),
    width: 256,
    height: 256,
    quality: 82,
  },
  {
    src: "testimonial profile avatar Neutral.png",
    out: path.join(OUT_IMG, "avatar-neutral.webp"),
    width: 256,
    height: 256,
    quality: 82,
  },

  // --- CTA / promo images — placed as section backgrounds ---
  {
    src: "CTA section Cybersecurity Assessment.png",
    out: path.join(OUT_IMG, "cta-cybersecurity.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    note: "CTA background (optional decorative)",
  },
  {
    src: "Let Get Started Section.png",
    out: path.join(OUT_IMG, "cta-get-started.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    note: "CTA background (optional decorative)",
  },

  // --- Service subpage hero images (already exist as PNG) -> convert in place to WebP ---
  {
    src: path.join(OUT_SERVICES, "cabling-hero.png"),
    out: path.join(OUT_SERVICES, "cabling-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },
  {
    src: path.join(OUT_SERVICES, "cybersecurity-hero.png"),
    out: path.join(OUT_SERVICES, "cybersecurity-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },
  {
    src: path.join(OUT_SERVICES, "infrastructure-hero.png"),
    out: path.join(OUT_SERVICES, "infrastructure-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },
  {
    src: path.join(OUT_SERVICES, "managed-it-hero.png"),
    out: path.join(OUT_SERVICES, "managed-it-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },
  {
    src: path.join(OUT_SERVICES, "smart-hands-hero.png"),
    out: path.join(OUT_SERVICES, "smart-hands-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },
  {
    src: path.join(OUT_SERVICES, "workforce-hero.png"),
    out: path.join(OUT_SERVICES, "workforce-hero.webp"),
    width: 1600,
    height: 900,
    quality: 75,
    absolute: true,
  },

  // svc-cabling needs a source — reuse cabling-hero (no dedicated source provided)
  {
    src: path.join(OUT_SERVICES, "cabling-hero.png"),
    out: path.join(OUT_IMG, "svc-cabling.webp"),
    width: 1000,
    height: 625,
    quality: 78,
    absolute: true,
    note: "svc-cabling reuses cabling-hero source (no dedicated image provided)",
  },
];

async function fileSize(p) {
  try {
    const s = await stat(p);
    return s.size;
  } catch {
    return 0;
  }
}

function fmt(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + " MB";
  if (n > 1024) return (n / 1024).toFixed(1) + " KB";
  return n + " B";
}

await mkdir(OUT_IMG, { recursive: true });

let totalIn = 0;
let totalOut = 0;
let ok = 0;
let fail = 0;

for (const job of jobs) {
  const srcPath = job.absolute ? job.src : path.join(SOURCE_DIR, job.src);
  try {
    const inSize = await fileSize(srcPath);
    await sharp(srcPath)
      .resize({
        width: job.width,
        height: job.height,
        fit: "cover",
        position: "centre",
        withoutEnlargement: false,
      })
      .webp({
        quality: job.quality,
        effort: 6, // max compression effort
        smartSubsample: true,
      })
      .toFile(job.out);
    const outSize = await fileSize(job.out);
    totalIn += inSize;
    totalOut += outSize;
    ok++;
    const pct = inSize ? Math.round((1 - outSize / inSize) * 100) : 0;
    console.log(
      `✓ ${path.basename(job.out).padEnd(28)} ${fmt(inSize).padStart(10)} → ${fmt(outSize).padStart(10)}  (-${pct}%)${job.note ? "  // " + job.note : ""}`,
    );
  } catch (e) {
    fail++;
    console.error(`✗ ${path.basename(job.out)}: ${e.message}`);
  }
}

console.log("");
console.log(`Done. ${ok} ok, ${fail} failed.`);
console.log(`Total: ${fmt(totalIn)} → ${fmt(totalOut)}  (-${Math.round((1 - totalOut / totalIn) * 100)}%)`);
