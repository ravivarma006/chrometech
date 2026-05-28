import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Structured Cabling & Fiber Support | Chrome Tech LLC",
  description:
    "Professional low-voltage structured cabling, fiber optic installation, Cat5e/Cat6/Cat6A, patch panels, rack connectivity, testing and certification across Texas.",
  alternates: { canonical: "https://chrome-tech.com/services/structured-cabling-fiber" },
  openGraph: {
    title: "Structured Cabling & Fiber Support | Chrome Tech LLC",
    description:
      "Professional low-voltage and connectivity infrastructure solutions across Texas and beyond.",
    url: "https://chrome-tech.com/services/structured-cabling-fiber",
    images: [{ url: "/services/cabling-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "🔌",
    title: "Cat5e / Cat6 / Cat6A Cabling",
    desc: "Professional installation of copper cabling for high-speed LAN infrastructure in commercial and enterprise environments.",
  },
  {
    icon: "🌐",
    title: "Fiber Optic Installation",
    desc: "Single-mode and multi-mode fiber runs, termination, fusion splicing, and OTDR testing for backbone connectivity.",
  },
  {
    icon: "🎛️",
    title: "Patch Panels & Rack Connectivity",
    desc: "Patch panel installation, port mapping, labeling, and structured rack connectivity for clean, manageable networks.",
  },
  {
    icon: "🔬",
    title: "Testing & Certification",
    desc: "Full cable plant testing using certified equipment — continuity, length, attenuation, and pass/fail certification reports.",
  },
  {
    icon: "🏷️",
    title: "Labeling & Documentation",
    desc: "ANSI/TIA-compliant labeling of all ports, cables, and panels with full as-built documentation and floor plans.",
  },
  {
    icon: "🏗️",
    title: "Low-Voltage Infrastructure",
    desc: "Complete low-voltage systems including conduit work, cable trays, J-hooks, and cable management infrastructure.",
  },
];

const steps = [
  {
    num: "01",
    title: "Design",
    desc: "We review your floor plan, bandwidth requirements, and network topology to create a detailed cabling design.",
  },
  {
    num: "02",
    title: "Install",
    desc: "Certified low-voltage technicians run, terminate, and dress all cabling per ANSI/TIA-568 standards.",
  },
  {
    num: "03",
    title: "Test",
    desc: "Every cable and fiber run is tested with calibrated equipment to verify performance and compliance.",
  },
  {
    num: "04",
    title: "Certify",
    desc: "Certification reports and full as-built documentation are delivered, ready for your records or inspection.",
  },
];

const whyCards = [
  {
    icon: "📐",
    title: "ANSI/TIA Standards Compliant",
    desc: "All installations follow ANSI/TIA-568 and industry best practices for performance, safety, and longevity.",
  },
  {
    icon: "🧪",
    title: "Certified Test Results",
    desc: "We provide printed and electronic certification reports for every cable run, fiber segment, and panel port.",
  },
  {
    icon: "🏢",
    title: "Commercial & Data Center",
    desc: "From office buildouts to enterprise data center cable plants, we handle any scale of structured cabling project.",
  },
  {
    icon: "📁",
    title: "Full As-Built Documentation",
    desc: "Detailed as-built drawings, port maps, and labeling schemes delivered at project closeout for your records.",
  },
];

export default function StructuredCablingPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/cabling-hero.webp"
          alt="Structured cabling fiber optic installation"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#infrastructure">Services</Link>
            <span>›</span>
            <span style={{ color: "white" }}>Structured Cabling & Fiber Support</span>
          </nav>
          <div className="service-hero-badge">🔌 Cabling & Fiber</div>
          <h1>Structured Cabling &amp; Fiber Support</h1>
          <p>
            Professional low-voltage cabling, fiber optic installation, and connectivity
            infrastructure solutions for commercial buildings, data centers, and enterprise
            environments across Texas.
          </p>
          <div className="service-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request Cabling Quote
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
              style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}
            >
              Schedule Site Survey
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section>
        <div className="container">
          <div className="service-overview">
            <div className="service-overview-text">
              <div className="tag">What We Do</div>
              <h2>Clean, Certified Cabling Infrastructure Built to Last</h2>
              <p>
                A well-designed cable plant is the foundation of every reliable network.
                Chrome Tech LLC delivers structured cabling installations that are clean,
                compliant, tested, and built to support your infrastructure for years to come.
              </p>
              <p>
                From Cat6A copper runs and fiber backbone installation to patch panel buildouts
                and cable tray systems, our certified low-voltage technicians handle every
                detail — and deliver complete documentation at closeout.
              </p>
              <div className="checklist">
                {[
                  "Cat5e, Cat6, and Cat6A copper cabling installation",
                  "Single-mode and multi-mode fiber optic runs and termination",
                  "Patch panels, rack connectivity, and cable management",
                  "Full testing and certification with printed reports",
                  "ANSI/TIA-568 compliant labeling and as-built documentation",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/img/svc-cabling-detail.webp"
              alt="Chrome Tech technician installing structured cabling and fiber infrastructure"
              width={1600}
              height={900}
              style={{ borderRadius: 16, width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-head">
            <div className="tag">Capabilities</div>
            <h2>Cabling Services We Deliver</h2>
            <p className="lead">
              Comprehensive structured cabling and fiber services for any building type,
              network scale, or compliance requirement.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((cap) => (
              <div className="capability-card" key={cap.title}>
                <div className="cap-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="tag">Our Process</div>
            <h2>Design to Certification</h2>
            <p className="lead">
              A structured 4-phase process ensures every cabling project is delivered on
              time, on spec, and with complete certified documentation.
            </p>
          </div>
          <div className="service-process">
            {steps.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chrome Tech */}
      <section className="dark">
        <div className="container">
          <div className="section-head">
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Why Chrome Tech
            </div>
            <h2>Precision Cabling for Enterprise Environments</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              We don&apos;t just run cables — we build connectivity infrastructure that your
              network team can depend on, manage, and expand for years to come.
            </p>
          </div>
          <div className="why-grid">
            {whyCards.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="stats-row">
            <div className="stat-box">
              <b>TIA</b>
              <span>568 Compliant</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>Tested & Certified</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Statewide Coverage</span>
            </div>
            <div className="stat-box">
              <b>24/7</b>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="tag">Explore More</div>
            <h2>Related Services</h2>
          </div>
          <div className="related-grid">
            <Link href="/services/infrastructure-deployment" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Infrastructure Deployment"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Infrastructure</div>
                <h3>Infrastructure & Deployment Services</h3>
                <p>Enterprise infrastructure support and deployment operations.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
            <Link href="/services/smart-hands-field-services" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=800&q=80"
                alt="Smart Hands"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Field Services</div>
                <h3>Smart Hands & Field Services</h3>
                <p>Responsive on-site technical support and deployment assistance.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
            <Link href="/services/cybersecurity-infrastructure-protection" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                alt="Cybersecurity"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Security</div>
                <h3>Cybersecurity & Infrastructure Protection</h3>
                <p>Security-focused technology support and infrastructure best practices.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Build Your Cabling Infrastructure?"
        subtext="Chrome Tech LLC delivers clean, certified structured cabling and fiber installations across Texas. Request a site survey or quote today."
        primaryCta="Request Cabling Quote"
        secondaryCta="Schedule Site Survey"
      />
    </ServicePageLayout>
  );
}
