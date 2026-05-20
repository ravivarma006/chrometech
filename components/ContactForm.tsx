"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Managed IT Services",
  "Cybersecurity Services",
  "Infrastructure & Deployment",
  "Smart Hands & Field Services",
  "Structured Cabling & Fiber",
  "Workforce & Staff Augmentation",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `[Website Inquiry] ${service || "General"} — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@chrome-tech.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--blue)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 style={{ marginBottom: 8 }}>Your Email Client Should Open</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          We&apos;ve prepared your message. If your email client didn&apos;t open,
          please email us directly at{" "}
          <a href="mailto:info@chrome-tech.com" style={{ color: "var(--blue)" }}>
            info@chrome-tech.com
          </a>
        </p>
        <button
          className="btn btn-primary"
          style={{ marginTop: 20 }}
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@company.com" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Needed *</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service...</option>
            {serviceOptions.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or requirements..."
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "16px 24px" }}>
        Send Message
      </button>
    </form>
  );
}
