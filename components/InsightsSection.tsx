"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";

const insights = [
  {
    title: "Smart Hands Support",
    body: "How responsive field support helps data centers, MSPs, and enterprise teams move faster.",
  },
  {
    title: "Infrastructure Deployment Best Practices",
    body: "Planning, documentation, staging, and coordination for rollout success.",
  },
  {
    title: "Structured Cabling Strategies",
    body: "Connectivity planning for scalable, organized, and reliable infrastructure.",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights">
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag">Insights</div>
            <h2>Infrastructure knowledge and enterprise technology guidance.</h2>
            <p>
              Thought leadership topics built around smart hands support, deployment
              best practices, data center operations, structured cabling, enterprise
              planning, and workforce scaling.
            </p>
          </div>
        </FadeIn>

        <StaggerGrid className="grid">
          {insights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="quote">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/insights" className="btn btn-outline">
              View All Insights <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
