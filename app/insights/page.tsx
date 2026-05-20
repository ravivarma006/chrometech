import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import { articles, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights & Blog | Chrome Tech LLC",
  description:
    "IT insights, infrastructure best practices, cybersecurity guidance, and technology news from the Chrome Tech team.",
  alternates: { canonical: "https://chrome-tech.com/insights" },
  openGraph: {
    title: "Insights & Blog | Chrome Tech LLC",
    description:
      "IT insights, infrastructure best practices, cybersecurity guidance, and technology news.",
    url: "https://chrome-tech.com/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="dark" style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="tag" style={{ color: "var(--cyan)" }}>
              Insights &amp; Blog
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 18 }}>
              IT Knowledge &amp; Best Practices
            </h1>
            <p
              style={{
                color: "#a8c8e8",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Expert guidance on networking, cybersecurity, structured cabling,
              infrastructure, and IT support for Texas businesses.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section>
          <div className="container">
            <BlogGrid articles={articles} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
