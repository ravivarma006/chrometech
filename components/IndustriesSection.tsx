"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const industries = [
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    alt: "Data centers and colocation facilities",
    title: "Data Centers & Colocation",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    alt: "Managed service provider team",
    title: "Managed Service Providers",
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    alt: "Enterprise IT environment",
    title: "Enterprise IT Environments",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    alt: "Telecom infrastructure",
    title: "Telecommunications",
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial construction buildout",
    title: "Commercial Buildouts",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    alt: "Government and public sector projects",
    title: "Government & Public Sector",
  },
  {
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    alt: "Retail and multi-site operations",
    title: "Retail & Multi-Site Operations",
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
    alt: "Logistics and distribution facilities",
    title: "Logistics & Distribution",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag">Industries We Support</div>
            <h2>
              Built for commercial, enterprise, and mission-critical operations.
            </h2>
          </div>
        </FadeIn>

        <StaggerGrid className="industry-grid">
          {industries.map((ind) => (
            <StaggerItem key={ind.title}>
              <div className="industry">
                <Image
                  src={ind.img}
                  alt={ind.alt}
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.54)", zIndex: 0 }}
                  sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <h3>{ind.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
