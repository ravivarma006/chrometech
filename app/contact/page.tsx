import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Chrome Tech LLC",
  description:
    "Get in touch with Chrome Tech LLC for IT support, cybersecurity services, network infrastructure, and deployment operations across Texas and nationwide.",
  alternates: { canonical: "https://chrome-tech.com/contact" },
  openGraph: {
    title: "Contact Us | Chrome Tech LLC",
    description:
      "Reach out for IT support, cybersecurity guidance, infrastructure services, and general inquiries.",
    url: "https://chrome-tech.com/contact",
  },
};

const contactDetails = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office",
    lines: ["601 Quail Valley Drive", "Georgetown, TX 78626"],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    lines: [
      { text: "+1 (512) 737-0592", href: "tel:+15127370592" },
      { text: "WhatsApp: +1 (737) 397-1127", href: "https://wa.me/17373971127" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: [
      { text: "info@chrome-tech.com", href: "mailto:info@chrome-tech.com" },
      { text: "support@chrome-tech.com", href: "mailto:support@chrome-tech.com" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: By Appointment", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="dark" style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Contact Us
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 18 }}>
              Let&apos;s Talk About Your IT Needs
            </h1>
            <p style={{ color: "#a8c8e8", fontSize: 18, lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
              Whether you need IT support, cybersecurity guidance, network infrastructure, or a
              consultation — our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section>
          <div className="container">
            <div className="contact-layout">
              {/* Left — Form */}
              <div>
                <h2 style={{ marginBottom: 8 }}>Send Us a Message</h2>
                <p className="lead" style={{ marginBottom: 32 }}>
                  Fill out the form and we&apos;ll get back to you promptly.
                </p>
                <ContactForm />
              </div>

              {/* Right — Contact Info */}
              <div>
                <div className="contact-info-grid">
                  {contactDetails.map((detail) => (
                    <div className="contact-info-card" key={detail.label}>
                      <div className="contact-info-icon">{detail.icon}</div>
                      <div>
                        <h3 style={{ fontSize: 17, marginBottom: 6 }}>{detail.label}</h3>
                        {detail.lines.map((line, i) =>
                          typeof line === "string" ? (
                            <p key={i} style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
                              {line}
                            </p>
                          ) : (
                            <p key={i} style={{ fontSize: 15, lineHeight: 1.7 }}>
                              <a href={line.href} style={{ color: "var(--blue)" }}>
                                {line.text}
                              </a>
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
