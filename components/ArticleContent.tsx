"use client";

import { motion } from "framer-motion";

export default function ArticleContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="article-body">
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {p}
        </motion.p>
      ))}
    </div>
  );
}
