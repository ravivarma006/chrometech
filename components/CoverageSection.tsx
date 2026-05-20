"use client";

import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const pills = [
  "✔ Texas Statewide Coverage",
  "✔ Nationwide Support Through Strategic Technician Network",
  "✔ Commercial & Enterprise Environments",
  "✔ Emergency & Scheduled Dispatch Support",
];

export default function CoverageSection() {
  return (
    <section className="coverage">
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag">Service Coverage</div>
            <h2>Coverage for planned deployments and rapid response support.</h2>
          </div>
        </FadeIn>

        <StaggerGrid className="pill-grid">
          {pills.map((pill) => (
            <StaggerItem key={pill}>
              <div className="pill">{pill}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
