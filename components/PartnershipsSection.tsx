"use client";

import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const partners = [
  {
    title: "OEM Relationships",
    body: "Support relationship-driven outreach and enterprise credibility.",
  },
  {
    title: "Deployment Collaboration",
    body: "Field operations and subcontracting support for infrastructure projects.",
  },
  {
    title: "Strategic Growth Team",
    body: "Business development and technology advisory support aligned with expansion initiatives.",
  },
];

export default function PartnershipsSection() {
  return (
    <section className="dark" id="partnerships">
      <div className="container split">
        {/* Left — copy */}
        <FadeIn direction="left">
          <div>
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Partnerships
            </div>
            <h2>Technology &amp; infrastructure relationships.</h2>
            <p className="lead">
              Chrome Tech LLC works to build strategic relationships with
              technology manufacturers, distributors, infrastructure providers,
              MSPs, OEMs, and enterprise support organizations.
            </p>
            <div className="notice">
              Vendor ecosystem and industry relationships may include Cisco, TD
              SYNNEX, Dell Technologies, Fortinet, Kaseya, and infrastructure
              deployment partners. No unauthorized certification or official OEM
              service authorization is implied unless formally approved.
            </div>
          </div>
        </FadeIn>

        {/* Right — partner cards + CTA */}
        <div>
          <StaggerGrid className="partner-grid">
            {partners.map((p) => (
              <StaggerItem key={p.title}>
                <div className="partner">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-primary">
              Partner With Chrome Tech
            </a>
            <a href="/contact" className="btn btn-outline">
              Request Subcontractor Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
