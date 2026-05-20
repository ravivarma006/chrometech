const partners = [
  "Cisco",
  "Dell Technologies",
  "Fortinet",
  "TD SYNNEX",
  "Kaseya",
  "CompTIA",
  "Palo Alto Networks",
  "Microsoft",
];

// Pure server component — no JS bundle cost, CSS-only animation
export default function TrustedBySection() {
  // Quadruple for seamless infinite loop without JS
  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section style={{ padding: "48px 0", background: "var(--white)", overflow: "hidden" }}>
      <p className="trusted-label">Technology Ecosystem &amp; Industry Partnerships</p>
      <div className="logo-track-wrapper">
        <div className="logo-track-fade logo-track-fade-left" />
        <div className="logo-track logo-track-css">
          {items.map((name, i) => (
            <div className="logo-item" key={i}>
              {name}
            </div>
          ))}
        </div>
        <div className="logo-track-fade logo-track-fade-right" />
      </div>
    </section>
  );
}
