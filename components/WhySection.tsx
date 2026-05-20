"use client";

import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const steps = [
  {
    num: 1,
    title: "Rapid Response",
    body: "Infrastructure support for emergency and scheduled dispatch needs.",
  },
  {
    num: 2,
    title: "Scalable Workforce",
    body: "Flexible technician support for single-site and multi-site projects.",
  },
  {
    num: 3,
    title: "Project Execution",
    body: "Professional deployment coordination, documentation, and field operations.",
  },
  {
    num: 4,
    title: "Partner Network",
    body: "Texas statewide coverage with nationwide support coordination.",
  },
];

export default function WhySection() {
  return (
    <section className="dark">
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Why Chrome Tech
            </div>
            <h2>
              Operationally mature support for organizations that cannot afford
              downtime.
            </h2>
            <p className="lead">
              Chrome Tech combines infrastructure expertise, responsive field
              support, deployment capability, and scalable workforce operations.
            </p>
          </div>
        </FadeIn>

        <StaggerGrid className="process">
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="step">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
