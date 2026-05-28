import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Workforce & Staff Augmentation | Chrome Tech LLC",
  description:
    "Scalable IT technician and deployment workforce support — short-term staffing, long-term project staffing, smart hands teams, and resource coordination across Texas.",
  alternates: { canonical: "https://chrome-tech.com/services/workforce-staff-augmentation" },
  openGraph: {
    title: "Workforce & Staff Augmentation | Chrome Tech LLC",
    description:
      "Scalable technician and deployment workforce support for IT projects across Texas and beyond.",
    url: "https://chrome-tech.com/services/workforce-staff-augmentation",
    images: [{ url: "/services/workforce-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "⚡",
    title: "Short-Term Technician Support",
    desc: "Rapid deployment of qualified field technicians for urgent or temporary project staffing needs.",
  },
  {
    icon: "📅",
    title: "Long-Term Project Staffing",
    desc: "Dedicated technician teams embedded in your project for weeks, months, or longer rollout timelines.",
  },
  {
    icon: "🛠️",
    title: "Smart Hands Staffing",
    desc: "Specialized smart hands technicians available on-demand or on retainer for ongoing data center support.",
  },
  {
    icon: "🚀",
    title: "Deployment Teams",
    desc: "Fully coordinated deployment teams for large-scale national or regional technology rollout programs.",
  },
  {
    icon: "🔗",
    title: "Resource Coordination",
    desc: "We handle scheduling, dispatch, tracking, and reporting — so you get results without the overhead.",
  },
  {
    icon: "📈",
    title: "Workforce Scaling",
    desc: "Scale your technical workforce up or down based on project phases, budgets, and changing requirements.",
  },
];

const steps = [
  {
    num: "01",
    title: "Scope",
    desc: "We gather your project requirements, skill needs, timeline, and location to build a staffing plan.",
  },
  {
    num: "02",
    title: "Source",
    desc: "Our talent network is screened and matched to your exact technical requirements and site qualifications.",
  },
  {
    num: "03",
    title: "Deploy",
    desc: "Vetted technicians arrive on time, briefed, equipped, and ready to execute from day one.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "We adjust team size and composition as your project evolves, with continuous performance oversight.",
  },
];

const whyCards = [
  {
    icon: "🌐",
    title: "Nationwide Talent Network",
    desc: "Access to a broad network of certified field technicians, cabling professionals, and deployment specialists across the US.",
  },
  {
    icon: "✅",
    title: "Pre-Vetted Technicians",
    desc: "Every technician in our network is background-checked, skills-verified, and experienced in enterprise field operations.",
  },
  {
    icon: "📊",
    title: "Full Visibility & Reporting",
    desc: "Real-time dispatch tracking, daily progress reports, and project status updates keep you informed at every step.",
  },
  {
    icon: "💼",
    title: "Flexible Engagement Models",
    desc: "Day-rate, project-based, or retainer models available to match your budget, timeline, and procurement requirements.",
  },
];

export default function WorkforcePage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/workforce-hero.webp"
          alt="Professional IT deployment team"
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
            <span style={{ color: "white" }}>Workforce & Staff Augmentation</span>
          </nav>
          <div className="service-hero-badge">👥 Workforce Services</div>
          <h1>Workforce &amp; Staff Augmentation</h1>
          <p>
            Scalable, pre-vetted field technician and deployment workforce support for IT
            rollouts, data center projects, and enterprise technology operations across Texas
            and nationwide.
          </p>
          <div className="service-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request Deployment Team
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
              style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}
            >
              Schedule Consultation
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
              <h2>The Right Technicians, Right When You Need Them</h2>
              <p>
                Whether you need a single technician for a one-day task or a 50-person
                deployment team for a national rollout, Chrome Tech LLC provides the workforce
                infrastructure to make it happen — fast, reliably, and at scale.
              </p>
              <p>
                We source, vet, coordinate, and manage field technicians so your project
                managers can focus on outcomes rather than logistics. Our flexible engagement
                models fit any budget and procurement structure.
              </p>
              <div className="checklist">
                {[
                  "Short-term and long-term field technician staffing",
                  "Smart hands teams for data center operations",
                  "Deployment teams for national or regional rollouts",
                  "Scheduling, dispatch coordination, and progress tracking",
                  "Flexible day-rate, project-based, or retainer engagements",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/img/svc-workforce-detail.webp"
              alt="Chrome Tech professional IT deployment workforce team collaboration"
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
            <h2>Workforce Services We Deliver</h2>
            <p className="lead">
              From a single deployment technician to a full project staffing program, we
              build the workforce solution your project demands.
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
            <h2>From Scope to Execution</h2>
            <p className="lead">
              A disciplined 4-step workforce engagement model that ensures the right people
              are in the right place at the right time.
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
            <h2>Workforce Support Built for Scale</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              We don&apos;t just find technicians — we build and manage workforce programs
              that deliver consistent, accountable results across every site and every shift.
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
              <b>USA</b>
              <span>Nationwide Network</span>
            </div>
            <div className="stat-box">
              <b>24/7</b>
              <span>Deployment Ready</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Primary Coverage</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>Vetted Technicians</span>
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
                <p>Responsive onsite technical support and deployment assistance.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
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
            <Link href="/services/managed-it-technology-support" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Managed IT"
                width={800}
                height={180}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="related-card-body">
                <div className="tag">Managed IT</div>
                <h3>Managed IT & Technology Support</h3>
                <p>Business technology support and infrastructure assistance.</p>
                <span className="related-link">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Scale Your Technical Workforce Today"
        subtext="Whether you need one technician or a full deployment team, Chrome Tech LLC provides the pre-vetted workforce you need, when and where you need it."
        primaryCta="Request Deployment Team"
        secondaryCta="Schedule Consultation"
      />
    </ServicePageLayout>
  );
}
