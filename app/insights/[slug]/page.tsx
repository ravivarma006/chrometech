import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import ArticleContent from "@/components/ArticleContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Chrome Tech LLC`,
    description: article.excerpt,
    alternates: { canonical: `https://chrome-tech.com/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://chrome-tech.com/insights/${article.slug}`,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="dark" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <Link href="/insights" className="article-back">
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            <div className="article-meta-top">
              <span className="blog-category-badge" style={{ position: "static" }}>
                {article.category}
              </span>
              <span className="article-date">
                <Calendar size={14} /> {article.date}
              </span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
          </div>
        </section>

        {/* Featured Image */}
        <div className="article-hero-image">
          <div className="container" style={{ maxWidth: 860 }}>
            <Image
              src={article.image}
              alt={article.title}
              width={860}
              height={460}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 16,
                objectFit: "cover",
              }}
              priority
            />
          </div>
        </div>

        {/* Article Body */}
        <section>
          <div className="container" style={{ maxWidth: 760 }}>
            <ArticleContent paragraphs={article.content} />
          </div>
        </section>

        {/* CTA */}
        <section className="dark">
          <div className="container" style={{ textAlign: "center", padding: "50px 0" }}>
            <h2 style={{ fontSize: 28, marginBottom: 12 }}>
              Need help with {article.category.toLowerCase()}?
            </h2>
            <p style={{ color: "#a8c8e8", fontSize: 17, maxWidth: 520, margin: "0 auto 24px" }}>
              Chrome Tech provides expert {article.category.toLowerCase()} services
              for businesses across Texas.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a Consultation
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section>
            <div className="container">
              <div className="section-head" style={{ textAlign: "center" }}>
                <div className="tag">Related Articles</div>
                <h2>More on {article.category}</h2>
              </div>
              <div className="related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/insights/${r.slug}`}
                    className="related-card"
                  >
                    <div className="related-card-image">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 620px) 100vw, 33vw"
                      />
                    </div>
                    <div className="related-card-body">
                      <span className="related-card-category">{r.category}</span>
                      <h3>{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
