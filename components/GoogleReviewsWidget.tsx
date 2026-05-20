"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const RATING = 5.0;
const REVIEW_COUNT = 16;
const BATCH = 4;

const ALL_REVIEWS = [
  {
    name: "orightile",
    initials: "O",
    bg: "#4285F4",
    rating: 5,
    time: "a year ago",
    text: "Outstanding service and expertise! ChromeTech LLC provided exceptional support for our IT needs. Their team is knowledgeable, responsive, and committed to delivering high-quality solutions. Highly recommended for anyone looking for reliable tech services!",
  },
  {
    name: "Adeola Fadeyan",
    initials: "AF",
    bg: "#EA4335",
    rating: 5,
    time: "a year ago",
    text: "The repair was completed quickly, and the cost was very reasonable. Chrome Tech is a great LLC to work with. Very professional team that knows exactly what they are doing.",
  },
  {
    name: "Marcus Williams",
    initials: "MW",
    bg: "#34A853",
    rating: 5,
    time: "11 months ago",
    text: "Chrome Tech delivered excellent structured cabling for our office expansion. Clean, organized work and everything tested perfectly. Very efficient crew and great attention to detail throughout the entire project.",
  },
  {
    name: "Jennifer Lee",
    initials: "JL",
    bg: "#FBBC05",
    rating: 5,
    time: "10 months ago",
    text: "Knowledgeable team that handled our network infrastructure upgrade with great efficiency. They were on time, professional, and the results have been outstanding. Will definitely be using Chrome Tech again.",
  },
  {
    name: "Robert Garcia",
    initials: "RG",
    bg: "#4285F4",
    rating: 5,
    time: "9 months ago",
    text: "Great team to work with! Chrome Tech handled our data center smart hands request quickly and professionally. Reliability and expertise sets them apart from other IT companies in Texas.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    bg: "#EA4335",
    rating: 5,
    time: "8 months ago",
    text: "Very knowledgeable and responsive IT support team. Chrome Tech LLC resolved our network issues fast and provided excellent recommendations for preventing future problems. Will definitely use again!",
  },
  {
    name: "David Chen",
    initials: "DC",
    bg: "#34A853",
    rating: 5,
    time: "7 months ago",
    text: "We needed emergency network support and Chrome Tech responded immediately. Their technician was on-site within hours and had us back up and running. Absolutely outstanding service and reliability.",
  },
  {
    name: "Amanda Torres",
    initials: "AT",
    bg: "#FBBC05",
    rating: 5,
    time: "7 months ago",
    text: "Chrome Tech installed a complete structured cabling system for our new office building. The work was done professionally, on schedule, and the results are excellent. Highly knowledgeable team.",
  },
  {
    name: "Kevin Patel",
    initials: "KP",
    bg: "#4285F4",
    rating: 5,
    time: "6 months ago",
    text: "Excellent IT managed services. The Chrome Tech team proactively monitors our systems and has prevented several issues before they became problems. Their efficiency and reliability is second to none.",
  },
  {
    name: "Sarah Mitchell",
    initials: "SM",
    bg: "#EA4335",
    rating: 5,
    time: "5 months ago",
    text: "Top-notch infrastructure deployment service. Chrome Tech handled our rack and stack project at our new data center location flawlessly. The team was professional, efficient, and very knowledgeable throughout.",
  },
  {
    name: "James Okafor",
    initials: "JO",
    bg: "#34A853",
    rating: 5,
    time: "5 months ago",
    text: "We hired Chrome Tech for our fiber installation project and they exceeded all expectations. Great reliability, fair pricing, and the work quality is excellent. Our network performance has improved significantly.",
  },
  {
    name: "Lisa Nguyen",
    initials: "LN",
    bg: "#FBBC05",
    rating: 5,
    time: "4 months ago",
    text: "Chrome Tech LLC is our trusted IT partner for all our Texas locations. Their knowledgeable team handles everything from cabling to cybersecurity. Consistent high-quality service every single time.",
  },
  {
    name: "Carlos Rivera",
    initials: "CR",
    bg: "#4285F4",
    rating: 5,
    time: "3 months ago",
    text: "Responsive and reliable IT support. Chrome Tech helped us set up our new office network from scratch — switches, cabling, wireless, security. Efficient work and great communication throughout the project.",
  },
  {
    name: "Michelle Park",
    initials: "MP",
    bg: "#EA4335",
    rating: 5,
    time: "2 months ago",
    text: "Outstanding managed IT support from Chrome Tech. Their team keeps our systems running smoothly with proactive monitoring and fast response times. Very knowledgeable and a pleasure to work with.",
  },
  {
    name: "Brian Johnson",
    initials: "BJ",
    bg: "#34A853",
    rating: 5,
    time: "2 months ago",
    text: "Chrome Tech handled our smart hands services at our Georgetown data center perfectly. Professional, efficient, and highly knowledgeable technicians. Everything was done right the first time. Highly recommend!",
  },
  {
    name: "Tanya Brooks",
    initials: "TB",
    bg: "#FBBC05",
    rating: 5,
    time: "1 month ago",
    text: "Great experience with Chrome Tech LLC. They upgraded our entire network infrastructure on time and within budget. Knowledgeable team, reliable service, and excellent communication from start to finish.",
  },
];

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= rating ? "#FBBC05" : "#e0e0e0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function GoogleReviewsWidget() {
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BATCH);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setVisibleCount((v) => Math.min(v + BATCH, ALL_REVIEWS.length));
  }, []);

  // Reset count when popup closes
  useEffect(() => {
    if (!open) setVisibleCount(BATCH);
  }, [open]);

  // IntersectionObserver on sentinel to auto-load more
  useEffect(() => {
    if (!open) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { root: scrollRef.current, threshold: 0.1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [open, visibleCount, loadMore]);

  const shown = ALL_REVIEWS.slice(0, visibleCount);
  const allLoaded = visibleCount >= ALL_REVIEWS.length;

  return (
    <>
      {/* ── Sticky Badge ── */}
      <button className="gr-badge" onClick={() => setOpen(true)} aria-label="View Google Reviews">
        <GoogleG size={38} />
        <div className="gr-badge-info">
          <span className="gr-badge-label">Google Rating</span>
          <div className="gr-badge-score">
            <span className="gr-badge-number">{RATING.toFixed(1)}</span>
            <Stars rating={5} size={15} />
          </div>
          <span className="gr-badge-count">Based on {REVIEW_COUNT} reviews</span>
        </div>
      </button>

      {/* ── Popup ── */}
      {open && (
        <div className="gr-overlay" onClick={() => setOpen(false)}>
          <div className="gr-popup" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="gr-popup-header">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <GoogleG size={32} />
                <div>
                  <div className="gr-popup-title">Google Reviews</div>
                  <div className="gr-popup-meta">
                    <span className="gr-popup-rating">{RATING.toFixed(1)}</span>
                    <Stars rating={5} size={16} />
                    <span className="gr-popup-count">({REVIEW_COUNT})</span>
                  </div>
                </div>
              </div>
              <button className="gr-close" onClick={() => setOpen(false)} aria-label="Close reviews">
                <X size={20} />
              </button>
            </div>

            {/* Vertical scroll — auto-loads more on scroll */}
            <div className="gr-scroll" ref={scrollRef}>
              {shown.map((r, i) => (
                <div key={i} className="gr-card">
                  <div className="gr-card-header">
                    <div className="gr-avatar" style={{ background: r.bg }}>{r.initials}</div>
                    <div>
                      <div className="gr-name">{r.name}</div>
                      <div className="gr-time">{r.time}</div>
                    </div>
                  </div>
                  <Stars rating={r.rating} size={14} />
                  <p className="gr-text">{r.text}</p>
                </div>
              ))}

              {/* Sentinel — triggers loading next batch */}
              {!allLoaded && (
                <div ref={sentinelRef} className="gr-sentinel">
                  <span className="gr-loading-dot" />
                  <span className="gr-loading-dot" />
                  <span className="gr-loading-dot" />
                </div>
              )}

              {allLoaded && (
                <div className="gr-all-loaded">
                  ✓ All {REVIEW_COUNT} reviews loaded
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/DZjSUcU1pmgDkmz5A"
              target="_blank"
              rel="noopener noreferrer"
              className="gr-cta"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
