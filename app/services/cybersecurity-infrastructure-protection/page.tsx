import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceCTA from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Cybersecurity & Infrastructure Protection | Chrome Tech LLC",
  description:
    "Security-focused technology support, network hardening, firewall configuration, endpoint protection, vulnerability assessments, and infrastructure best practices across Texas.",
  alternates: {
    canonical: "https://chrome-tech.com/services/cybersecurity-infrastructure-protection",
  },
  openGraph: {
    title: "Cybersecurity & Infrastructure Protection | Chrome Tech LLC",
    description:
      "Security-focused technology support and infrastructure best practices for enterprises across Texas.",
    url: "https://chrome-tech.com/services/cybersecurity-infrastructure-protection",
    images: [{ url: "/services/cybersecurity-hero.png", width: 1200, height: 630 }],
  },
};

const capabilities = [
  {
    icon: "🔍",
    title: "Security Assessments",
    desc: "Comprehensive evaluation of your infrastructure security posture — identifying gaps, risks, and remediation priorities.",
  },
  {
    icon: "🔥",
    title: "Firewall Configuration",
    desc: "Professional firewall setup, rule management, policy hardening, and firmware updates for enterprise networks.",
  },
  {
    icon: "🛡️",
    title: "Endpoint Protection",
    desc: "Deploying and managing EDR, antivirus, and endpoint security tools to protect all business devices.",
  },
  {
    icon: "🔒",
    title: "Network Hardening",
    desc: "Applying security best practices to switch configurations, VLAN segmentation, wireless security, and access controls.",
  },
  {
    icon: "📉",
    title: "Vulnerability Assessments",
    desc: "Systematic scanning and analysis of your network and systems to identify vulnerabilities before attackers do.",
  },
  {
    icon: "📋",
    title: "Security Best Practices",
    desc: "Advisory and implementation of security frameworks, policies, and procedures aligned to NIST and industry standards.",
  },
];

const steps = [
  {
    num: "01",
    title: "Assess",
    desc: "We review your current infrastructure, policies, and security tools to establish a baseline risk profile.",
  },
  {
    num: "02",
    title: "Harden",
    desc: "Apply targeted security configurations, patches, and controls to close identified gaps and reduce attack surface.",
  },
  {
    num: "03",
    title: "Monitor",
    desc: "Ongoing monitoring of security events, alerts, and anomalies to detect threats in real time.",
  },
  {
    num: "04",
    title: "Respond",
    desc: "Defined incident response procedures ensure swift, contained, and documented response to security events.",
  },
];

const whyCards = [
  {
    icon: "🏗️",
    title: "Infrastructure-First Security",
    desc: "We approach security from the infrastructure layer — firewalls, switches, servers — where protection matters most.",
  },
  {
    icon: "📜",
    title: "Standards-Aligned",
    desc: "Our security guidance aligns with NIST, CIS Controls, and industry best practices for small and enterprise organizations.",
  },
  {
    icon: "🔗",
    title: "Integrated With Your Team",
    desc: "We work alongside your internal IT team or MSP to strengthen your security posture without disrupting operations.",
  },
  {
    icon: "🚨",
    title: "Incident Response Ready",
    desc: "Defined response procedures and communication protocols to minimize damage and recovery time during a security event.",
  },
];

export default function CybersecurityPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <div className="service-hero">
        <Image
          src="/services/cybersecurity-hero.webp"
          alt="Cybersecurity infrastructure protection visualization"
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
            <span style={{ color: "white" }}>Cybersecurity & Infrastructure Protection</span>
          </nav>
          <div className="service-hero-badge">🛡️ Security Services</div>
          <h1>Cybersecurity &amp; Infrastructure Protection</h1>
          <p>
            Security-focused technology support, network hardening, and infrastructure
            protection best practices for enterprises, data centers, and commercial
            environments across Texas.
          </p>
          <div className="service-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request Security Assessment
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
              <h2>Protecting the Infrastructure Your Business Depends On</h2>
              <p>
                Cybersecurity starts at the infrastructure layer. Chrome Tech LLC delivers
                security-focused technology support that strengthens your firewalls, hardens
                your network, secures your endpoints, and keeps your infrastructure protected
                against evolving threats.
              </p>
              <p>
                We work with your IT team or as your primary security advisor to assess,
                harden, monitor, and respond — providing enterprise-grade security practices
                scaled for your business.
              </p>
              <div className="checklist">
                {[
                  "Infrastructure security assessments and gap analysis",
                  "Firewall configuration, hardening, and policy management",
                  "Endpoint protection and EDR deployment",
                  "Network segmentation, VLAN security, and access controls",
                  "Vulnerability scanning and remediation guidance",
                ].map((item) => (
                  <div className="check" key={item}>
                    <i>✓</i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/img/svc-cybersecurity-detail.webp"
              alt="Chrome Tech cybersecurity analyst monitoring infrastructure protection dashboard"
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
            <h2>Cybersecurity Services We Deliver</h2>
            <p className="lead">
              Practical, infrastructure-focused security services that protect your business
              from the ground up.
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
            <h2>Assess. Harden. Monitor. Respond.</h2>
            <p className="lead">
              A structured 4-phase security engagement designed to systematically reduce
              risk and strengthen your infrastructure protection posture.
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
            <h2>Infrastructure Security Done Right</h2>
            <p className="lead" style={{ color: "#a8c8e8" }}>
              We combine deep infrastructure knowledge with security best practices to deliver
              protection that works at the physical and digital layers of your environment.
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
              <b>NIST</b>
              <span>Framework Aligned</span>
            </div>
            <div className="stat-box">
              <b>24/7</b>
              <span>Monitoring Available</span>
            </div>
            <div className="stat-box">
              <b>TX</b>
              <span>Primary Service Area</span>
            </div>
            <div className="stat-box">
              <b>100%</b>
              <span>Documented Assessments</span>
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
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Strengthen Your Infrastructure Security Today"
        subtext="Chrome Tech LLC delivers practical, infrastructure-first cybersecurity support to help your business reduce risk and stay protected. Request an assessment today."
        primaryCta="Request Security Assessment"
        secondaryCta="Schedule Consultation"
      />
    </ServicePageLayout>
  );
}
