"use client";
import Container from "@/components/ui/container";
import Pagination from "@/components/ui/pagination";
import ArticleCard from "@/components/ui/article-card";
import type { BlogRecommendedPost } from "@/types/blog";
import { cardImageFromPost } from "@/components/article-page/recommended-articles/recommended-article-helpers";
import { useTranslations } from "next-intl";
import NotFound from "@/components/shared/not-found/not-found";
import { useRef } from "react";
import { useBlogArticlesPerPage } from "@/hooks/use-articles-per-page";

interface BlogListProps {
  posts: BlogRecommendedPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const t = useTranslations("BlogPage.list");
  const sectionRef = useRef<HTMLElement | null>(null);

  const itemsPerPage = useBlogArticlesPerPage();

  if (!posts || !posts.length) {
    return (
      <NotFound
        title={t("notFound.title")}
        description={t("notFound.description")}
      />
    );
  }

  return (
    <section ref={sectionRef} className="pb-25 lg:pb-[192px]">
      <Container>
        <Pagination
          items={posts}
          useItemsPerPage={() => itemsPerPage}
          scrollTargetRef={sectionRef}
          renderItems={(currentItems) => (
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-5">
              {currentItems.map((post) => (
                <li
                  key={post.id}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)]"
                >
                  <ArticleCard
                    href={`/blog/${post.slug}`}
                    image={cardImageFromPost(post)}
                    title={post.heroTitle}
                    description={post.heroDescription}
                    author={post.author}
                    publishedAt={post.publishedAt}
                  />
                </li>
              ))}
            </ul>
          )}
        />
      </Container>
    </section>
  );
}
