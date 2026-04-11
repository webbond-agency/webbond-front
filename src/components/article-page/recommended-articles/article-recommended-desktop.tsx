"use client";

import type { BlogRecommendedPost } from "@/types/blog";
import ArticleCard from "@/components/ui/article-card";
import { m } from "framer-motion";
import { cardImageFromPost } from "./recommended-article-helpers";

interface ArticleRecommendedDesktopProps {
  posts: BlogRecommendedPost[];
}

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ArticleRecommendedDesktop({
  posts,
}: ArticleRecommendedDesktopProps) {
  if (!posts.length) return null;

  const visible = posts.slice(0, 7);

  return (
    <section className="hidden h-full w-[320px] shrink-0 lg:block">
      <m.ul
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={listVariants}
      >
        {visible.map((post) => (
          <m.li key={post.id} variants={cardVariants}>
            <ArticleCard
              href={`/blog/${post.slug}`}
              image={cardImageFromPost(post)}
              title={post.heroTitle}
              description={post.heroDescription}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          </m.li>
        ))}
      </m.ul>
    </section>
  );
}
