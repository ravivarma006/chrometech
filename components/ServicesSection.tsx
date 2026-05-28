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
    img: "/img/svc-infrastructure.webp",
    alt: "Enterprise data center infrastructure hall",
    icon: <Building2 size={24} />,
    title: "Infrastructure & Deployment Services",
    body: "Enterprise infrastructure support and deployment operations — smart hands, rack & stack, hardware installation, IMAC, migrations, staging, and asset management.",
    href: "/services/infrastructure-deployment",
  },
  {
    img: "/img/svc-smarthands.webp",
    alt: "Technician providing onsite smart hands and field support",
    icon: <Wrench size={24} />,
    title: "Smart Hands & Field Services",
    body: "Responsive on-site technical support — field technician dispatch, break/fix, remote hands, site surveys, infrastructure audits, and emergency response.",
    href: "/services/smart-hands-field-services",
  },
  {
    img: "/img/svc-cabling.webp",
    alt: "Structured cabling and overhead cable tray installation",
    icon: <Cable size={24} />,
    title: "Structured Cabling & Fiber Support",
    body: "Professional low-voltage and connectivity infrastructure — Cat5e, Cat6, Cat6A, fiber installation, termination, testing, certification, and rack connectivity.",
    href: "/services/structured-cabling-fiber",
  },
  {
    img: "/img/svc-workforce.webp",
    alt: "Chrome Tech deployment workforce and technician team",
    icon: <Users size={24} />,
    title: "Workforce & Staff Augmentation",
    body: "Scalable technician and deployment workforce support — short-term staffing, long-term project staffing, deployment teams, and resource coordination.",
    href: "/services/workforce-staff-augmentation",
  },
  {
    img: "/img/svc-managed-it.webp",
    alt: "Managed IT remote monitoring dashboard",
    icon: <Monitor size={24} />,
    title: "Managed IT & Technology Support",
    body: "Business technology support and infrastructure assistance — managed IT, remote monitoring, endpoint support, IT consulting, and firewall management.",
    href: "/services/managed-it-technology-support",
    id: "technology",
  },
  {
    img: "/img/svc-cybersecurity.webp",
    alt: "Cybersecurity and infrastructure protection shield",
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
                  width={800}
                  height={500}
                  sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
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
