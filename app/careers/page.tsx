import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersGrid from "@/components/CareersGrid";

export const metadata: Metadata = {
  title: "Careers | Chrome Tech LLC",
  description:
    "Join the Chrome Tech team. We're hiring field technicians, network engineers, and IT professionals across Texas.",
  alternates: { canonical: "https://chrome-tech.com/careers" },
  openGraph: {
    title: "Careers | Chrome Tech LLC",
    description:
      "Build your career in enterprise IT. Chrome Tech is hiring across Texas.",
    url: "https://chrome-tech.com/careers",
  },
};

const perks = [
  {
    title: "Growth-Focused Culture",
    body: "We invest in certifications, training, and hands-on learning so you grow alongside the technology you support.",
  },
  {
    title: "Diverse Projects",
    body: "Work across data centers, commercial buildings, enterprise campuses, and mission-critical environments throughout Texas.",
  },
  {
    title: "Competitive Compensation",
    body: "Market-rate pay, performance bonuses, and benefits designed for IT professionals who deliver results.",
  },
  {
    title: "Supportive Team",
    body: "Collaborate with experienced engineers and technicians who share knowledge and have each other's backs in the field.",
  },
];

const openings = [
  {
    title: "Field Network Technician",
    location: "Houston / Dallas / Austin, TX",
    type: "Full-Time",
    description:
      "Install, configure, and troubleshoot network equipment at client sites. Structured cabling, rack builds, and switch deployments.",
  },
  {
    title: "Smart Hands Technician",
    location: "Texas (Multiple Locations)",
    type: "Full-Time / Contract",
    description:
      "Provide on-site technical support in data centers including hardware swaps, cable management, and remote-hands tasks.",
  },
  {
    title: "Network Engineer",
    location: "Georgetown, TX (Hybrid)",
    type: "Full-Time",
    description:
      "Design and implement enterprise network solutions. Configure firewalls, switches, and wireless systems for business clients.",
  },
  {
    title: "Low-Voltage Cabling Installer",
    location: "Texas (Multiple Locations)",
    type: "Full-Time",
    description:
      "Run, terminate, and certify Cat6/Cat6A and fiber optic cabling in commercial and enterprise environments.",
  },
  {
    title: "IT Support Specialist",
    location: "Georgetown, TX",
    type: "Full-Time",
    description:
      "Deliver managed IT support to business clients. Handle helpdesk tickets, remote troubleshooting, and onsite escalations.",
  },
];

export default function CareersPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="dark" style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Careers
            </div>
            <h1
              style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 18 }}
            >
              Build Your Career in Enterprise IT
            </h1>
            <p
              style={{
                color: "#a8c8e8",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Join a growing team of engineers, technicians, and IT professionals
              delivering secure infrastructure solutions for businesses across
              Texas.
            </p>
          </div>
        </section>

        {/* Why Work Here */}
        <section>
          <div className="container">
            <div className="section-head" style={{ textAlign: "center" }}>
              <div className="tag">Why Chrome Tech</div>
              <h2>A career that grows with you.</h2>
            </div>
            <CareersGrid perks={perks} />
          </div>
        </section>

        {/* Open Positions */}
        <section className="dark">
          <div className="container">
            <div className="section-head" style={{ textAlign: "center" }}>
              <div className="tag" style={{ color: "var(--cyan)" }}>
                Open Positions
              </div>
              <h2>Current opportunities at Chrome Tech.</h2>
              <p style={{ color: "#a8c8e8" }}>
                Don&apos;t see the right role? Send your resume to{" "}
                <a
                  href="mailto:careers@chrome-tech.com"
                  style={{ color: "var(--cyan)" }}
                >
                  careers@chrome-tech.com
                </a>
              </p>
            </div>
            <div className="careers-list">
              {openings.map((job) => (
                <div key={job.title} className="careers-card">
                  <div className="careers-card-header">
                    <h3>{job.title}</h3>
                    <span className="careers-badge">{job.type}</span>
                  </div>
                  <p className="careers-location">{job.location}</p>
                  <p>{job.description}</p>
                  <Link
                    href={`mailto:careers@chrome-tech.com?subject=Application: ${job.title}`}
                    className="btn btn-outline"
                    style={{ marginTop: 16 }}
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div
            className="container"
            style={{ textAlign: "center", padding: "60px 0" }}
          >
            <h2 style={{ marginBottom: 16 }}>
              Ready to make an impact?
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 18,
                maxWidth: 540,
                margin: "0 auto 30px",
              }}
            >
              We&apos;re always looking for talented professionals who share our
              commitment to excellence and security.
            </p>
            <Link
              href="mailto:careers@chrome-tech.com"
              className="btn btn-primary"
            >
              Send Your Resume
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
