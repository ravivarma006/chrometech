"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Wrench,
  Cable,
  Users,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";
import type { ReactNode } from "react";

const services: {
  img: string;
  alt: string;
  icon: ReactNode;
  title: string;
  body: string;
  href: string;
  id?: string;
}[] = [
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    alt: "Data center infrastructure",
    icon: <Building2 size={24} />,
    title: "Infrastructure & Deployment Services",
    body: "Enterprise infrastructure support and deployment operations — smart hands, rack & stack, hardware installation, IMAC, migrations, staging, and asset management.",
    href: "/services/infrastructure-deployment",
  },
  {
    img: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1000&q=80",
    alt: "Field technician working on network rack",
    icon: <Wrench size={24} />,
    title: "Smart Hands & Field Services",
    body: "Responsive on-site technical support — field technician dispatch, break/fix, remote hands, site surveys, infrastructure audits, and emergency response.",
    href: "/services/smart-hands-field-services",
  },
  {
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80",
    alt: "Structured cabling and fiber",
    icon: <Cable size={24} />,
    title: "Structured Cabling & Fiber Support",
    body: "Professional low-voltage and connectivity infrastructure — Cat5e, Cat6, Cat6A, fiber installation, termination, testing, certification, and rack connectivity.",
    href: "/services/structured-cabling-fiber",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
    alt: "Deployment workforce technician team",
    icon: <Users size={24} />,
    title: "Workforce & Staff Augmentation",
    body: "Scalable technician and deployment workforce support — short-term staffing, long-term project staffing, deployment teams, and resource coordination.",
    href: "/services/workforce-staff-augmentation",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    alt: "Managed IT and technology support",
    icon: <Monitor size={24} />,
    title: "Managed IT & Technology Support",
    body: "Business technology support and infrastructure assistance — managed IT, remote monitoring, endpoint support, IT consulting, and firewall management.",
    href: "/services/managed-it-technology-support",
    id: "technology",
  },
  {
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    alt: "Cybersecurity and infrastructure protection",
    icon: <ShieldCheck size={24} />,
    title: "Cybersecurity & Infrastructure Protection",
    body: "Security-focused technology support and infrastructure best practices — security assessments, firewall configuration, endpoint protection, and network hardening.",
    href: "/services/cybersecurity-infrastructure-protection",
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="infrastructure">
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag">Our Services</div>
            <h2>Infrastructure &amp; Technology Services for Enterprise Environments.</h2>
            <p>
              Enterprise infrastructure support, smart hands operations, structured
              cabling, deployment resources, managed IT, and field execution for commercial
              and mission-critical environments.
            </p>
          </div>
        </FadeIn>

        <StaggerGrid className="grid">
          {services.map((svc) => (
            <StaggerItem key={svc.title}>
              <article className="card" id={svc.id}>
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  width={1000}
                  height={210}
                  style={{ height: 210, width: "100%", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.body}</p>
                  <Link href={svc.href} className="card-link">
                    Learn More →
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
