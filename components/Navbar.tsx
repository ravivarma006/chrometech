"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  Building2,
  Wrench,
  Cable,
  Users,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const services: { icon: ReactNode; label: string; href: string }[] = [
  {
    icon: <Building2 size={18} />,
    label: "Infrastructure & Deployment",
    href: "/services/infrastructure-deployment",
  },
  {
    icon: <Wrench size={18} />,
    label: "Smart Hands & Field Services",
    href: "/services/smart-hands-field-services",
  },
  {
    icon: <Cable size={18} />,
    label: "Structured Cabling & Fiber",
    href: "/services/structured-cabling-fiber",
  },
  {
    icon: <Users size={18} />,
    label: "Workforce & Staff Augmentation",
    href: "/services/workforce-staff-augmentation",
  },
  {
    icon: <Monitor size={18} />,
    label: "Managed IT & Technology Support",
    href: "/services/managed-it-technology-support",
  },
  {
    icon: <ShieldCheck size={18} />,
    label: "Cybersecurity & Infrastructure Protection",
    href: "/services/cybersecurity-infrastructure-protection",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="container">
          {/* Brand */}
          <Link className="brand" href="/">
            <Image
              src="https://chrome-tech.com/wp-content/uploads/2025/12/cropped-20251216_185708.png"
              alt="Chrome Tech LLC logo"
              width={120}
              height={32}
              style={{ width: 120, height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="links">
            <Link href="/about">About</Link>

            {/* Services Dropdown */}
            <div className="nav-item">
              <a href="/#infrastructure">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="dropdown">
                {services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="dropdown-item"
                  >
                    <span className="dropdown-icon">{svc.icon}</span>
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#industries">Industries</a>
            <a href="/#partnerships">Partnerships</a>
            <Link href="/insights">Insights</Link>
            <Link href="/contact" className="btn btn-primary">
              Request Support
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <div className="mobile-drawer">
          <div className="mobile-close">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>

          <Link
            href="/about"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#industries"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/#partnerships"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Partnerships
          </Link>
          <Link
            href="/insights"
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </Link>

          <div className="mobile-services-label">Our Services</div>
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="mobile-service-link"
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ color: "var(--blue)" }}>{svc.icon}</span>
              {svc.label}
            </Link>
          ))}

          <div style={{ marginTop: 28 }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Request Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
