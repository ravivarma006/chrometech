import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Managed IT & Technology Support | Chrome Tech LLC",
  description:
    "Managed IT services, remote monitoring, endpoint support, IT consulting, firewall management, and infrastructure technology support for businesses across Texas.",
  alternates: { canonical: "https://chrome-tech.com/services/managed-it-technology-support" },
  openGraph: {
    title: "Managed IT & Technology Support | Chrome Tech LLC",
    description:
      "Business technology support and infrastructure assistance for enterprises across Texas and beyond.",
    url: "https://chrome-tech.com/services/managed-it-technology-support",
    images: [{ url: "/services/managed-it-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "💻",
    title: "Managed IT Services",
    desc: "Fully managed IT environment — we monitor, maintain, and support your technology infrastructure 24/7.",
  },
  {
    icon: "📊",
    title: "Remote Monitoring (RMM)",
    desc: "Proactive monitoring of servers, endpoints, and network devices to detect and resolve issues before they escalate.",
  },
  {
    icon: "🖥️",
    title: "Endpoint Support",
    desc: "Desktop, laptop, and device support including provisioning, imaging, patching, and helpdesk resolution.",
  },
  {
    icon: "🎯",
    title: "IT Consulting",
    desc: "Strategic technology consulting to align your IT investments, infrastructure design, and operational practices with business goals.",
  },
  {
    icon: "🔥",
    title: "Firewall Management",
    desc: "Firewall configuration, policy management, rule audits, and firmware updates for enterprise network security.",
  },
  {
    icon: "🛡️",
    title: "Endpoint Protection",
    desc: "Antivirus, EDR, patch management, and endpoint security best practices to protect your business devices.",
  },
];

const steps = [
  {
    num: "01",
    title: "Onboard",
    desc: "We audit your existing environment, document your infrastructure, and establish monitoring and support baselines.",
  },
  {
    num: "02",
    title: "Monitor",
    desc: "24/7 remote monitoring of your systems with alerting, automated responses, and proactive issue detection.",
  },
  {
    num: "03",
    title: "Support",
    desc: "Helpdesk and field support for end-users, infrastructure teams, and escalated technical issues.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Regular reviews, reporting, and recommendations to continuously improve your IT environment and reduce costs.",
  },
];

const whyCards = [
  {
    icon: "📡",
    title: "Proactive, Not Reactive",
    desc: "Our RMM platform monitors your environment around the clock, catching issues before they become outages.",
  },
  {
    icon: "💡",
    title: "Strategic IT Guidance",
    desc: "Beyond support, we provide IT strategy and consulting to help you plan, budget, and optimize your technology investments.",
  },
  {
    icon: "🔧",
    title: "Field + Remote Combined",
    desc: "Unique combination of remote managed services and on-site smart hands support — one partner for everything.",
  },
  {
    icon: "📋",
    title: "Transparent Reporting",
    desc: "Monthly reports, SLA dashboards, and incident logs keep you fully informed about your IT environment&apos;s health.",
  },
];

export default function ManagedITPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/managed-it-hero.png"
          alt="Modern Network Operations Center with monitoring screens"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#technology">Services</Link>
            <span>›</span>
            <span style={{ color: "white" }}>Managed IT & Technology Support</span>
          </nav>
          <div className="service-hero-badge">💻 Managed IT</div>
          <h1>Managed IT &amp; Technology Support</h1>
          <p>
            Comprehensive business technology support and infrastructure management — from
            remote monitoring and endpoint support to IT consulting and firewall management
            for enterprises across Texas.
          </p>
          <div className="service-hero-actions">
            <Link href="/#contact" className="btn btn-primary">
              Get a Free Assessment
            </Link>
            <Link
              href="/#contact"
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
              <h2>Technology Support That Keeps Your Business Moving</h2>
              <p>
                Chrome Tech LLC provides managed IT and technology support services that
                keep your business infrastructure running reliably, securely, and efficiently.
                We act as your extended IT team — monitoring, maintaining, and supporting
                your technology environment around the clock.
              </p>
              <p>
                From endpoint management and helpdesk support to strategic IT consulting
                and firewall administration, we handle the technology details so you can
                focus on running your business.
              </p>
              <div className="checklist">
                {[
                  "24/7 remote monitoring and management (RMM)",
                  "Helpdesk and endpoint support for end-users",
                  "Firewall configuration, patching, and policy management",
                  "IT consulting and technology strategy advisory",
                  "Endpoint protection and patch management programs",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="IT professionals in a technology operations environment"
              width={1200}
              height={460}
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-head">
            <div className="tag">Capabilities</div>
            <h2>Managed IT Services We Deliver</h2>
            <p className="lead">
              A full suite of technology support services designed to maintain, protect,
              and optimize your business IT environment.
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
            <h2>How We Manage Your IT</h2>
            <p className="lead">
              A proven 4-phase managed services lifecycle that ensures your environment is
              always monitored, supported, and continuously improving.
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
            <h2>More Than Just IT Support</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              We combine proactive monitoring, responsive support, and strategic consulting
              to deliver technology services that truly support your business goals.
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
              <span>Remote Monitoring</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Primary Service Area</span>
            </div>
            <div className="stat-box">
              <b>USA</b>
              <span>Partner Network</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>SLA Accountability</span>
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
            <Link href="/services/infrastructure-deployment" className="related-card">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Infrastructure"
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
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to Modernize Your IT Support?"
        subtext="Chrome Tech LLC delivers managed IT and technology support services that keep your business running — proactively monitored, professionally supported, and strategically guided."
      />
    </ServicePageLayout>
  );
}
