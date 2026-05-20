"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const checkItems = [
  {
    label: "Mission.",
    body: "To empower businesses with secure, innovative, and dependable technology solutions that enhance productivity, reduce risk, and support long-term growth.",
  },
  {
    label: "Vision.",
    body: "To become the most trusted IT and Network Engineering partner in Texas and across the nation — through excellence, reliability, and customer-focused service.",
  },
  {
    label: "Execution Partner.",
    body: "Hands-on protection with clear processes, dedicated support, and real-time monitoring — from startups to large enterprises.",
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container split">
        {/* Left — image stack */}
        <FadeIn direction="left">
          <div className="media-stack">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Enterprise infrastructure planning team"
              width={1200}
              height={520}
              style={{ height: 520, width: "100%", objectFit: "cover", borderRadius: 30 }}
            />
            <div className="floating">
              <strong style={{ fontSize: 22, color: "var(--navy)" }}>
                Supporting Commercial, Enterprise &amp; Mission-Critical Environments
              </strong>
              <p style={{ color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
                Responsive infrastructure execution across Texas and beyond.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Right — copy */}
        <FadeIn direction="right" delay={0.15}>
          <div>
            <div className="tag">About Chrome Tech LLC</div>
            <h2>Infrastructure support built for modern enterprise environments.</h2>
            <p className="lead">
              Chrome Tech LLC is a Texas-based infrastructure and field services
              company specializing in data center support, network infrastructure
              deployment, structured cabling, low-voltage systems, workforce
              support, and enterprise onsite technical services.
            </p>
            <div className="checklist">
              {checkItems.map((item) => (
                <div className="check" key={item.label}>
                  <i>✓</i>
                  <div>
                    <b>{item.label}</b>
                    <br />
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
