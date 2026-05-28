// Converts the 6 new service section images to WebP
// for both the homepage services grid (svc-*.webp) AND service subpage "What We Do" sections.
// Run: node scripts/optimize-service-images.mjs

import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.resolve(ROOT, "..", "images");
const OUT_IMG = path.join(ROOT, "public", "img");

// Map: source file → [output file(s), width, height, quality]
// Each new image is used in 2 places:
//   1. Homepage services grid card (800x500 displayed) → svc-*.webp
//   2. Service subpage "What We Do" section (1200x500 displayed) → svc-*-detail.webp
const jobs = [
  // --- Infrastructure & Deployment ---
  {
    src: "service section infrastructure deployment.png",
    outputs: [
      { file: "svc-infrastructure.webp",        width: 1000, height: 625,  quality: 78 },
      { file: "svc-infrastructure-detail.webp",  width: 1600, height: 900,  quality: 80 },
    ],
  },
  // --- Smart Hands & Field Services ---
  {
    src: "service section smart hands field.png",
    outputs: [
      { file: "svc-smarthands.webp",             width: 1000, height: 625,  quality: 78 },
      { file: "svc-smarthands-detail.webp",      width: 1600, height: 900,  quality: 80 },
    ],
  },
  // --- Structured Cabling & Fiber ---
  {
    src: "service section structured cabling fiber.png",
    outputs: [
      { file: "svc-cabling.webp",                width: 1000, height: 625,  quality: 78 },
      { file: "svc-cabling-detail.webp",         width: 1600, height: 900,  quality: 80 },
    ],
  },
  // --- Workforce & Staff Augmentation ---
  {
    src: "service section workforce team.png",
    outputs: [
      { file: "svc-workforce.webp",              width: 1000, height: 625,  quality: 78 },
      { file: "svc-workforce-detail.webp",       width: 1600, height: 900,  quality: 80 },
    ],
  },
  // --- Managed IT & Technology Support ---
  {
    src: "service section managed it support.png",
    outputs: [
      { file: "svc-managed-it.webp",             width: 1000, height: 625,  quality: 78 },
      { file: "svc-managed-it-detail.webp",      width: 1600, height: 900,  quality: 80 },
    ],
  },
  // --- Cybersecurity & Infrastructure Protection ---
  {
    src: "service section cybersecurity protection.png",
    outputs: [
      { file: "svc-cybersecurity.webp",          width: 1000, height: 625,  quality: 78 },
      { file: "svc-cybersecurity-detail.webp",   width: 1600, height: 900,  quality: 80 },
    ],
  },
];

function fmt(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + " MB";
  if (n > 1024) return (n / 1024).toFixed(1) + " KB";
  return n + " B";
}
async function fileSize(p) {
  try { return (await stat(p)).size; } catch { return 0; }
}

let ok = 0, fail = 0, totalIn = 0, totalOut = 0;

for (const job of jobs) {
  const srcPath = path.join(SOURCE_DIR, job.src);
  const inSize = await fileSize(srcPath);
  totalIn += inSize;
  console.log(`\nSource: ${job.src} (${fmt(inSize)})`);

  for (const out of job.outputs) {
    const outPath = path.join(OUT_IMG, out.file);
    try {
      await sharp(srcPath)
        .resize({ width: out.width, height: out.height, fit: "cover", position: "centre" })
        .webp({ quality: out.quality, effort: 6, smartSubsample: true })
        .toFile(outPath);
      const outSize = await fileSize(outPath);
      totalOut += outSize;
      const pct = Math.round((1 - outSize / inSize) * 100);
      console.log(`  ✓ ${out.file.padEnd(34)} → ${fmt(outSize).padStart(9)}  (-${pct}%)`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${out.file}: ${e.message}`);
      fail++;
    }
  }
}

console.log(`\nDone. ${ok} outputs ok, ${fail} failed.`);
console.log(`Total saved: ${fmt(totalIn)} source → ${fmt(totalOut)} output`);
