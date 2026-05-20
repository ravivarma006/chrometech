import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--navy)",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "clamp(80px, 15vw, 160px)",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 900,
            letterSpacing: "-4px",
            lineHeight: 1,
            color: "var(--cyan)",
            marginBottom: 16,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            marginBottom: 16,
            letterSpacing: "-1px",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "#a8c8e8",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 32px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/#contact" className="btn btn-outline" style={{ border: "1px solid rgba(255,255,255,0.38)", color: "white" }}>
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
