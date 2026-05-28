"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Chrome Tech's smart hands team has been critical to keeping our data center operations running smoothly. Their response times are outstanding and their technicians are always professional.",
    name: "Joshua A.",
    role: "Data Center Operations Manager",
    industry: "Colocation Provider — Texas",
    avatar: "/img/avatar-male.webp",
  },
  {
    quote:
      "We've relied on Chrome Tech for multiple infrastructure deployments across our Texas locations. Their project coordination and documentation are exactly what enterprise clients need.",
    name: "Thyra O.",
    role: "VP of IT Infrastructure",
    industry: "Enterprise Technology — Houston",
    avatar: "/img/avatar-female.webp",
  },
  {
    quote:
      "Finding reliable field technicians was our biggest challenge until we partnered with Chrome Tech. Their workforce augmentation service scaled perfectly with our project demands.",
    name: "Taylor T.",
    role: "Project Manager",
    industry: "Managed Service Provider — Austin",
    avatar: "/img/avatar-neutral.webp",
  },
  {
    quote:
      "Chrome Tech handled our structured cabling project from planning through certification. The quality of work and attention to detail exceeded our expectations.",
    name: "Marcus R.",
    role: "Facilities Director",
    industry: "Commercial Real Estate — Dallas",
    avatar: "/img/avatar-male.webp",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="dark" style={{ overflow: "hidden" }}>
      <div className="container">
        <FadeIn>
          <div className="section-head">
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Client Feedback
            </div>
            <h2>Trusted by teams that depend on uptime.</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="testimonial-carousel">
            <button className="testimonial-arrow" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={22} />
            </button>

            <div className="testimonial-content">
              <Quote size={36} className="testimonial-quote-icon" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="testimonial-text">
                    {testimonials[index].quote}
                  </blockquote>
                  <div className="testimonial-author">
                    <Image
                      src={testimonials[index].avatar}
                      alt={testimonials[index].name}
                      width={96}
                      height={96}
                      className="testimonial-avatar"
                    />
                    <div>
                      <strong>{testimonials[index].name}</strong>
                      <span>{testimonials[index].role}</span>
                      <span className="testimonial-industry">{testimonials[index].industry}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="testimonial-arrow" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
