import Link from "next/link";

interface ServiceCTAProps {
  heading?: string;
  subtext?: string;
}

export default function ServiceCTA({
  heading = "Ready to Get Started?",
  subtext = "Contact Chrome Tech LLC today for responsive infrastructure support, smart hands dispatch, and enterprise field operations across Texas and beyond.",
}: ServiceCTAProps) {
  return (
    <section>
      <div className="container">
        <div className="service-cta">
          <div>
            <h2>{heading}</h2>
            <p>{subtext}</p>
          </div>
          <div className="service-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              Request Support
            </Link>
            <Link
              href="/#contact"
              className="btn btn-outline"
              style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
