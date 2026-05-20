"use client";

import { Shield, ClipboardCheck, HeadsetIcon } from "lucide-react";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const values = [
  {
    icon: <Shield size={32} />,
    title: "Hands-On Protection, Not Just Advice",
    body: "We actively design, implement, and manage secure systems — ensuring security controls are correctly deployed, maintained, and adapted as your environment evolves.",
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Clear Processes, Predictable Outcomes",
    body: "Clients benefit from structured delivery, clear communication, and transparent reporting — so security improvements are measurable, reliable, and aligned with business priorities.",
  },
  {
    icon: <HeadsetIcon size={32} />,
    title: "Dedicated Security Support When It Matters",
    body: "Clients work with a dedicated technical team that monitors, responds, and supports their systems in real time — helping prevent incidents before they become costly disruptions.",
  },
];

export default function AboutValues() {
  return (
    <StaggerGrid className="grid">
      {values.map((v) => (
        <StaggerItem key={v.title}>
          <article className="about-value-card">
            <div className="about-value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
