import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About Us | Chrome Tech LLC",
  description:
    "Chrome Tech LLC is a trusted IT services and cybersecurity partner delivering enterprise-grade solutions for businesses across Texas and nationwide.",
  alternates: { canonical: "https://chrome-tech.com/about" },
  openGraph: {
    title: "About Us | Chrome Tech LLC",
    description:
      "Enterprise technology experiences, purpose-built for security. Managed IT, network engineering, cybersecurity, and infrastructure deployment.",
    url: "https://chrome-tech.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="dark" style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="tag" style={{ color: "var(--cyan)" }}>
              About Chrome Tech
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 18 }}>
              Enterprise Technology Experiences,
              <br />
              Purpose-Built for Security
            </h1>
            <p
              style={{
                color: "#a8c8e8",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              Chrome Tech LLC is a trusted IT services and cybersecurity partner
              delivering reliable, enterprise-grade solutions for businesses
              across Texas and nationwide.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section>
          <div className="container split">
            <div className="media-stack">
              <Image
                src="/img/about-team.webp"
                alt="Chrome Tech LLC infrastructure team in the data center"
                width={1200}
                height={520}
                style={{
                  height: 520,
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 30,
                }}
              />
              <div className="floating">
                <strong style={{ fontSize: 22, color: "var(--navy)" }}>
                  Supporting Commercial, Enterprise &amp; Mission-Critical
                  Environments
                </strong>
                <p
                  style={{ color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}
                >
                  Responsive infrastructure execution across Texas and beyond.
                </p>
              </div>
            </div>
            <div>
              <div className="tag">Who We Are</div>
              <h2>
                A disciplined, security-focused technology partner you can trust.
              </h2>
              <p className="lead">
                We specialize in managed IT support, low-voltage cabling, network
                engineering, infrastructure deployment, and end-to-end
                cybersecurity services. Our certified engineers bring years of
                experience supporting organizations of all sizes — from startups
                to large enterprises — ensuring every client receives secure,
                scalable, and future-ready technology that works.
              </p>
              <div style={{ marginTop: 30 }}>
                <Link href="/contact" className="btn btn-primary">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="dark">
          <div className="container">
            <div className="section-head" style={{ textAlign: "center" }}>
              <div className="tag" style={{ color: "var(--cyan)" }}>
                Our Purpose
              </div>
              <h2>Guided by mission. Driven by vision.</h2>
            </div>
            <div className="about-mission-grid">
              <div className="about-mission-card">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with secure, innovative, and dependable
                  technology solutions that enhance productivity, reduce risk, and
                  support long-term growth.
                </p>
              </div>
              <div className="about-mission-card">
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted IT and Network Engineering partner in
                  Texas and across the nation — recognized for excellence,
                  reliability, and a customer-first approach. We aim to empower
                  organizations with modern, future-ready technology that drives
                  growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="container">
            <div className="section-head" style={{ textAlign: "center" }}>
              <div className="tag">Why Choose Chrome Tech</div>
              <h2>Where security prevents costly business disruptions.</h2>
              <p>
                Clients choose Chrome Tech for the confidence that comes from
                working with a disciplined, security-focused technology partner.
              </p>
            </div>
            <AboutValues />
          </div>
        </section>

        {/* CTA */}
        <section className="dark">
          <div className="container" style={{ textAlign: "center", padding: "60px 0" }}>
            <h2 style={{ marginBottom: 16 }}>
              Ready to strengthen your infrastructure?
            </h2>
            <p
              style={{
                color: "#a8c8e8",
                fontSize: 18,
                maxWidth: 540,
                margin: "0 auto 30px",
              }}
            >
              Let Chrome Tech handle your IT infrastructure so you can focus on
              growing your business.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">
                Request a Consultation
              </Link>
              <Link href="/careers" className="btn btn-outline-light">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
