import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/*
        Video: preload=none stops the browser fetching it during initial page load.
        The poster image (already optimised via Unsplash params) acts as the visual
        fallback on mobile where autoplay is often blocked anyway.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-bg.jpg"
        className="hero-video"
      >
        <source
          src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container">
        {/* Left column */}
        <div>
          <span className="eyebrow">
            ⚙️ Infrastructure, Deployment &amp; Enterprise Technology Support
          </span>
          <h1>Data Center, Infrastructure &amp; Field Support Services.</h1>
          <p>
            Chrome Tech LLC provides responsive data center support, smart hands
            services, network infrastructure deployment, structured cabling,
            workforce support, and field operations services for data centers,
            MSPs, enterprise environments, commercial projects, and
            mission-critical infrastructure operations across Texas and beyond.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              Request Support
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Schedule Consultation
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <b>TX</b>
              <span>Statewide Coverage</span>
            </div>
            <div className="stat">
              <b>24/7</b>
              <span>Rapid Response Ready</span>
            </div>
            <div className="stat">
              <b>USA</b>
              <span>Partner Network</span>
            </div>
          </div>
        </div>

        {/* Right column — LCP image, priority loaded */}
        <div className="hero-card">
          <Image
            src="/hero-datacenter.jpg"
            alt="Data center infrastructure racks"
            width={1200}
            height={430}
            sizes="(max-width: 1000px) 100vw, 50vw"
            style={{ height: 430, width: "100%", objectFit: "cover", borderRadius: 22 }}
            priority
            fetchPriority="high"
          />
          <div className="mini">
            <div>
              <b>Smart Hands</b>
              <span>Onsite technical dispatch and field support</span>
            </div>
            <div>
              <b>Deployments</b>
              <span>Rack, stack, cabling, rollout and infrastructure projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
