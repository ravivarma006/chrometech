"use client";

import { GraduationCap, Briefcase, DollarSign, Users } from "lucide-react";
import StaggerGrid, { StaggerItem } from "./StaggerGrid";
import { type ReactNode } from "react";

const iconMap: Record<number, ReactNode> = {
  0: <GraduationCap size={28} />,
  1: <Briefcase size={28} />,
  2: <DollarSign size={28} />,
  3: <Users size={28} />,
};

export default function CareersGrid({
  perks,
}: {
  perks: { title: string; body: string }[];
}) {
  return (
    <StaggerGrid className="careers-perks-grid">
      {perks.map((perk, i) => (
        <StaggerItem key={perk.title}>
          <article className="careers-perk-card">
            <div className="careers-perk-icon">{iconMap[i]}</div>
            <h3>{perk.title}</h3>
            <p>{perk.body}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
