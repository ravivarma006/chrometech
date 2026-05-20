"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
};

export default function BlogGrid({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="blog-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`blog-filter${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles */}
      <motion.div className="blog-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((article) => (
            <motion.article
              key={article.slug}
              className="blog-card"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/insights/${article.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className="blog-category-badge">{article.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-date">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="blog-read-more">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--muted)", padding: "60px 0" }}>
          No articles found in this category yet.
        </p>
      )}
    </>
  );
}
