import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Infrastructure & Deployment Services | Chrome Tech LLC",
  description:
    "Enterprise infrastructure support and deployment operations — data center smart hands, rack & stack, hardware installation, IMAC, migrations, and asset management across Texas.",
  alternates: { canonical: "https://chrome-tech.com/services/infrastructure-deployment" },
  openGraph: {
    title: "Infrastructure & Deployment Services | Chrome Tech LLC",
    description:
      "Enterprise infrastructure support and deployment operations across Texas and beyond.",
    url: "https://chrome-tech.com/services/infrastructure-deployment",
    images: [{ url: "/services/infrastructure-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "🏢",
    title: "Smart Hands Support",
    desc: "Remote and on-site smart hands technician dispatch for real-time infrastructure support and issue resolution.",
  },
  {
    icon: "📦",
    title: "Rack & Stack Deployments",
    desc: "Full rack assembly, equipment mounting, cable management, and labeling for new or expanded deployments.",
  },
  {
    icon: "🔧",
    title: "Hardware Installation",
    desc: "Server, storage, and networking hardware installation across single or multi-site enterprise environments.",
  },
  {
    icon: "🔄",
    title: "IMAC Services",
    desc: "Install, Move, Add, and Change operations managed efficiently with minimal downtime.",
  },
  {
    icon: "🚚",
    title: "Data Center Migrations",
    desc: "End-to-end migration planning and physical execution — decommission, pack, transport, and redeploy.",
  },
  {
    icon: "🏷️",
    title: "Asset Tagging & Staging",
    desc: "Asset tagging, inventory management, staging configuration, and documentation for enterprise fleets.",
  },
];

const steps = [
  {
    num: "01",
    title: "Assess",
    desc: "Site survey, infrastructure review, and requirements gathering to build an accurate deployment plan.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Detailed project scoping, resource allocation, scheduling, and risk mitigation strategy.",
  },
  {
    num: "03",
    title: "Deploy",
    desc: "Certified technicians execute on-site with precision, following documented procedures and safety standards.",
  },
  {
    num: "04",
    title: "Validate",
    desc: "Post-deployment testing, documentation handoff, and sign-off confirmation for every project.",
  },
];

const whyCards = [
  {
    icon: "⚡",
    title: "Rapid Response Nationwide",
    desc: "24/7 dispatch capability with technicians across Texas and a nationwide partner network for multi-site projects.",
  },
  {
    icon: "🎓",
    title: "Certified Field Technicians",
    desc: "Our teams are trained, vetted, and experienced in enterprise data center environments and mission-critical operations.",
  },
  {
    icon: "📋",
    title: "Documented & Compliant",
    desc: "Every deployment is fully documented with SOW adherence, change controls, and audit-ready records.",
  },
  {
    icon: "🔗",
    title: "Scalable Resources",
    desc: "From a single technician dispatch to a multi-team rollout, we scale our resources to match your project scope.",
  },
];

export default function InfrastructureDeploymentPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/infrastructure-hero.webp"
          alt="Enterprise data center infrastructure"
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
            <span style={{ color: "white" }}>Infrastructure & Deployment</span>
          </nav>
          <div className="service-hero-badge">🏢 Infrastructure Services</div>
          <h1>Infrastructure &amp; Deployment Services</h1>
          <p>
            Enterprise infrastructure support and deployment operations for data centers,
            commercial environments, and mission-critical facilities across Texas and beyond.
          </p>
          <div className="service-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Start Deployment Project
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
              style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}
            >
              Request Deployment Team
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
              <h2>End-to-End Infrastructure Deployment You Can Count On</h2>
              <p>
                Chrome Tech LLC delivers comprehensive infrastructure support and deployment
                operations for enterprises, MSPs, and data center operators. From single-site
                rack-and-stack projects to large-scale multi-facility rollouts, our certified
                field technicians execute with precision, speed, and full documentation.
              </p>
              <p>
                We handle every phase of your infrastructure lifecycle — from initial staging
                and hardware installation through migrations, IMAC operations, and ongoing
                smart hands support — so your team can focus on what matters most.
              </p>
              <div className="checklist">
                {[
                  "Smart hands and on-site field technician dispatch",
                  "Rack assembly, equipment mounting, and cable management",
                  "Hardware installation, break/fix, and device diagnostics",
                  "Full data center migrations and decommissions",
                  "Asset tagging, inventory control, and staging support",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/img/svc-infrastructure-detail.webp"
              alt="Chrome Tech technician performing rack assembly and infrastructure deployment"
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
            <h2>Infrastructure Services We Deliver</h2>
            <p className="lead">
              From smart hands dispatch to full-scale deployments, our infrastructure team
              covers every aspect of your physical IT environment.
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
            <h2>How We Engage</h2>
            <p className="lead">
              A proven 4-step methodology ensures every infrastructure project is delivered
              on time, within scope, and fully documented.
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
            <h2>Built for Enterprise Reliability</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              We combine certified technician expertise, 24/7 availability, and disciplined
              project execution to deliver infrastructure results that enterprise clients depend on.
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
              <b>24/7</b>
              <span>Dispatch Availability</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Statewide Coverage</span>
            </div>
            <div className="stat-box">
              <b>USA</b>
              <span>Partner Network</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>Documented Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="tag">Explore More</div>
            <h2>Related Services</h2>
          </div>
          <div className="related-grid">
            <Link href="/services/smart-hands-field-services" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=800&q=80"
                alt="Smart Hands Field Services"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Field Services</div>
                <h3>Smart Hands & Field Services</h3>
                <p>Responsive onsite technical support and deployment assistance.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
            <Link href="/services/structured-cabling-fiber" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80"
                alt="Structured Cabling"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Cabling</div>
                <h3>Structured Cabling & Fiber Support</h3>
                <p>Professional low-voltage and connectivity infrastructure solutions.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
            <Link href="/services/workforce-staff-augmentation" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Workforce Augmentation"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Workforce</div>
                <h3>Workforce & Staff Augmentation</h3>
                <p>Scalable technician and deployment workforce support.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Deploy Your Infrastructure?"
        subtext="Chrome Tech LLC is ready to support your next data center project, rack deployment, or infrastructure migration. Contact us today."
        primaryCta="Start Deployment Project"
        secondaryCta="Request Deployment Team"
      />
    </ServicePageLayout>
  );
}
