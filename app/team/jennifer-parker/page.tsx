import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Jennifer Parker — Strategic Technology Consultant | Chrome Tech LLC",
  description:
    "Jennifer Parker supports Chrome Tech LLC as a Strategic Technology Consultant, contributing cybersecurity insight, infrastructure awareness, and technology-focused advisory support.",
  alternates: { canonical: "https://chrome-tech.com/team/jennifer-parker" },
  openGraph: {
    title: "Jennifer Parker — Strategic Technology Consultant | Chrome Tech LLC",
    description:
      "Strategic Technology Consultant contributing cybersecurity and infrastructure advisory support at Chrome Tech LLC.",
    url: "https://chrome-tech.com/team/jennifer-parker",
  },
};

export default function JenniferParkerPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="dark" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="tag" style={{ color: "var(--cyan)" }}>
            Strategic Growth Team Profile
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", marginBottom: 12 }}>
            Jennifer Parker
          </h1>
          <p
            style={{
              color: "var(--cyan)",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 8,
              lineHeight: 1.4,
            }}
          >
            Strategic Technology Consultant | Chrome Tech LLC
          </p>
          <p
            style={{
              color: "#c8ddf0",
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            Cybersecurity, Infrastructure &amp; Technology Advisory
          </p>
        </div>
      </section>

      {/* Strategic Technology Advisory */}
      <section>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="tag">Strategic Technology Advisory</div>
          <h2>Supporting Technology Growth &amp; Infrastructure Strategy</h2>
          <p
            style={{
              color: "#455466",
              fontSize: 17,
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            Jennifer Parker works alongside Chrome Tech LLC as part of the
            company&apos;s Strategic Growth Team, contributing technology
            insight, cybersecurity guidance, and operational support aligned
            with the company&apos;s infrastructure and enterprise services
            direction.
          </p>
          <p
            style={{
              color: "#455466",
              fontSize: 17,
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            Her background in technology operations, infrastructure
            environments, SaaS platforms, and security-focused service
            delivery supports Chrome Tech&apos;s commitment to scalable,
            reliable, and professionally managed technology solutions.
          </p>
          <p
            style={{
              color: "#455466",
              fontSize: 17,
              lineHeight: 1.85,
            }}
          >
            Her involvement reflects Chrome Tech&apos;s focus on
            strengthening operational capability, technology awareness, and
            long-term infrastructure support initiatives.
          </p>
        </div>
      </section>

      {/* About / Advisory Support */}
      <section className="dark">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="tag" style={{ color: "var(--cyan)" }}>
            Technology &amp; Cybersecurity Advisory Support
          </div>
          <h2>Advisory Focus</h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, marginBottom: 24 }}>
            Jennifer Parker supports Chrome Tech LLC as a Strategic
            Technology Consultant, contributing cybersecurity insight,
            infrastructure awareness, operational guidance, and
            technology-focused advisory support.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, marginBottom: 24 }}>
            Her background reflects experience across enterprise technology
            environments, engineering operations, infrastructure strategy,
            SaaS platforms, and security-conscious service delivery.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85 }}>
            At Chrome Tech, Jennifer contributes a practical and
            security-focused perspective aimed at helping organizations
            strengthen technology environments, improve operational
            resilience, and support long-term infrastructure stability.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "center" }}>
            <div className="tag">Areas of Expertise</div>
            <h2>Strategic Technology Insights</h2>
          </div>
          <div
            className="grid"
            style={{ maxWidth: 960, margin: "0 auto" }}
          >
            {[
              {
                title: "Cybersecurity Advisory",
                body: "Security-focused guidance for infrastructure environments, risk mitigation, and compliance-conscious operations.",
              },
              {
                title: "Infrastructure Strategy",
                body: "Technology planning and operational design for scalable, resilient enterprise infrastructure.",
              },
              {
                title: "Technology Operations",
                body: "Operational support across enterprise technology environments, SaaS platforms, and service delivery workflows.",
              },
            ].map((item) => (
              <article className="card" key={item.title}>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="service-cta">
            <div>
              <h2>Connect with Jennifer Parker</h2>
              <p>
                Learn more about Chrome Tech&apos;s Strategic Growth Team
                and how our technology advisory support can help strengthen
                your infrastructure and operations.
              </p>
            </div>
            <div className="service-cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
                style={{
                  border: "1px solid rgba(255,255,255,0.38)",
                  color: "white",
                }}
              >
                Contact Chrome Tech
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
