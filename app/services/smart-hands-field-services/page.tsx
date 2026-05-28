import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Smart Hands & Field Services | Chrome Tech LLC",
  description:
    "Responsive on-site smart hands technical support, field technician dispatch, break/fix, site surveys, remote hands, and emergency response across Texas.",
  alternates: { canonical: "https://chrome-tech.com/services/smart-hands-field-services" },
  openGraph: {
    title: "Smart Hands & Field Services | Chrome Tech LLC",
    description:
      "Responsive onsite technical support and deployment assistance across Texas and beyond.",
    url: "https://chrome-tech.com/services/smart-hands-field-services",
    images: [{ url: "/services/smart-hands-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "📡",
    title: "On-Demand Dispatch",
    desc: "Rapid field technician dispatch to your site — available 24/7 for urgent and scheduled support needs.",
  },
  {
    icon: "🔧",
    title: "Break/Fix Support",
    desc: "Fast diagnosis and repair of failed hardware components, network equipment, and infrastructure systems.",
  },
  {
    icon: "🖥️",
    title: "Remote Hands",
    desc: "Executing remote hands tasks on behalf of your NOC or helpdesk — reboots, cable swaps, LED readings, and more.",
  },
  {
    icon: "🗺️",
    title: "Site Surveys",
    desc: "Detailed on-site assessments including floor plans, power surveys, network diagrams, and physical audits.",
  },
  {
    icon: "🚨",
    title: "Emergency Dispatch",
    desc: "Critical-path emergency response for outages, hardware failures, and time-sensitive infrastructure issues.",
  },
  {
    icon: "📋",
    title: "Infrastructure Audits",
    desc: "Full physical plant audits — equipment inventory, labeling review, cable plant documentation, and compliance checks.",
  },
];

const steps = [
  {
    num: "01",
    title: "Request",
    desc: "Submit your support ticket or call our dispatch line. We gather all relevant site details and requirements.",
  },
  {
    num: "02",
    title: "Dispatch",
    desc: "A vetted field technician is assigned and dispatched to your location with the appropriate tools and documentation.",
  },
  {
    num: "03",
    title: "Execute",
    desc: "The technician performs the required work following your SOW, change controls, and safety procedures.",
  },
  {
    num: "04",
    title: "Report",
    desc: "A detailed completion report with photos, test results, and next steps is delivered before ticket closure.",
  },
];

const whyCards = [
  {
    icon: "⚡",
    title: "Fastest Response Times",
    desc: "We maintain a ready pool of field technicians across Texas for same-day and next-day dispatch to your site.",
  },
  {
    icon: "📸",
    title: "Photo-Documented Work",
    desc: "Every smart hands task includes before/after photos and detailed notes for your records and remote team.",
  },
  {
    icon: "🤝",
    title: "Works With Your NOC",
    desc: "Our field technicians are trained to take direction from your remote NOC, helpdesk, or project managers seamlessly.",
  },
  {
    icon: "🔐",
    title: "Vetted & Trusted",
    desc: "All technicians are background-checked, experienced, and cleared for access to secure data center environments.",
  },
];

export default function SmartHandsPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/smart-hands-hero.webp"
          alt="Field technician working on network rack"
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
            <span style={{ color: "white" }}>Smart Hands & Field Services</span>
          </nav>
          <div className="service-hero-badge">🛠️ Field Services</div>
          <h1>Smart Hands &amp; Field Services</h1>
          <p>
            Responsive on-site technical support and field dispatch for data centers,
            enterprise environments, and commercial facilities across Texas and beyond.
          </p>
          <div className="service-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Dispatch Smart Hands Team
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
              style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}
            >
              Emergency Smart Hands Support
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
              <h2>Your Eyes, Hands, and Feet on the Ground</h2>
              <p>
                When you need a trusted technician at your site right now, Chrome Tech LLC
                delivers. Our smart hands and field services give your remote team, NOC,
                or management layer a reliable physical presence — able to execute any
                on-site task with precision and professionalism.
              </p>
              <p>
                From break/fix dispatch and remote hands support to infrastructure audits
                and emergency response, our field technicians are trained, equipped, and
                ready to represent your organization on the ground.
              </p>
              <div className="checklist">
                {[
                  "24/7 on-demand field technician dispatch across Texas",
                  "Remote hands support for NOC and helpdesk teams",
                  "Break/fix, hardware diagnostics, and emergency response",
                  "Site surveys, infrastructure audits, and cable plant documentation",
                  "Detailed photo reports and work order completion records",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/img/svc-smarthands-detail.webp"
              alt="Chrome Tech field technician providing smart hands on-site support"
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
            <h2>Smart Hands Services We Deliver</h2>
            <p className="lead">
              Comprehensive field support services to keep your infrastructure running
              and your remote teams fully empowered.
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
            <h2>From Request to Completion</h2>
            <p className="lead">
              A streamlined dispatch and execution process ensures your field support
              needs are met fast, professionally, and fully documented.
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
            <h2>Field Support You Can Trust</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              Our smart hands teams operate as an extension of your own — reliable,
              communicative, and ready to execute any task you need done on the ground.
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
              <span>Dispatch Ready</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Statewide Coverage</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>Documented Tasks</span>
            </div>
            <div className="stat-box">
              <b>USA</b>
              <span>Partner Network</span>
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
            <Link href="/services/managed-it-technology-support" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
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
        heading="Need a Field Technician Now?"
        subtext="Chrome Tech LLC dispatches experienced smart hands technicians across Texas and beyond. Contact us for same-day or scheduled on-site support."
        primaryCta="Request Field Technician"
        secondaryCta="Emergency Smart Hands Support"
      />
    </ServicePageLayout>
  );
}
