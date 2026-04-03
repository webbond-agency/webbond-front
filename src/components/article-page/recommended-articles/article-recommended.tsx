"use client";

import type { BlogRecommendedPost } from "@/types/blog";
import ArticleCard, {
  type ArticleCardImage,
} from "@/components/ui/article-card";
import { m } from "framer-motion";

interface ArticleRecommendedProps {
  posts: BlogRecommendedPost[];
}

const withQuality100 = (url?: string) => {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("q", "100");
    return parsed.toString();
  } catch {
    return url;
  }
};

function cardImage(post: BlogRecommendedPost): ArticleCardImage | null {
  const desktop = post.heroDesktopImage?.asset?.url;
  const mobile = post.heroMobileImage?.asset?.url;
  const src = withQuality100(desktop) ?? withQuality100(mobile);
  if (!src) return null;
  const alt =
    post.heroDesktopImage?.alt ?? post.heroMobileImage?.alt ?? post.heroTitle;
  return { src, alt };
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

export default function ArticleRecommended({ posts }: ArticleRecommendedProps) {
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
              image={cardImage(post)}
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
