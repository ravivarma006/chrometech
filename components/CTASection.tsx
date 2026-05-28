import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta">
          <div>
            <div className="tag" style={{ color: "#c8f3ff" }}>
              Need Infrastructure Support?
            </div>
            <h2>
              Chrome Tech LLC is ready to support your deployment operations.
            </h2>
            <p
              style={{
                color: "#dcecff",
                lineHeight: 1.7,
                fontSize: 17,
              }}
            >
              Request support for field services, infrastructure projects,
              deployment operations, workforce needs, and mission-critical
              environments.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <Link className="btn btn-primary" href="/contact">
              Request Infrastructure Support
            </Link>
            <a className="btn btn-light" href="tel:+15127370592">
              Schedule Consultation
            </a>
            <Link
              className="btn btn-outline"
              href="/contact"
            >
              Request Subcontractor Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
