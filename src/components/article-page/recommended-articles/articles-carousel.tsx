"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArticleCard from "@/components/ui/article-card";
import type { BlogRecommendedPost } from "@/types/blog";
import { cardImageFromPost } from "./recommended-article-helpers";

interface ArticlesCarouselProps {
  posts: BlogRecommendedPost[];
}

const ArticlesCarousel = ({ posts }: ArticlesCarouselProps) => {
  if (!posts.length) return null;

  const visible = posts.slice(0, 7);
  const slides =
    visible.length > 0 && visible.length < 3
      ? Array.from({ length: 3 }, (_, i) => visible[i % visible.length])
      : visible;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((post, idx) => (
          <CarouselItem
            key={`${post.id}-${idx}`}
            className="basis-full sm:basis-1/2"
          >
            <ArticleCard
              href={`/blog/${post.slug}`}
              image={cardImageFromPost(post)}
              title={post.heroTitle}
              description={post.heroDescription}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center gap-3 lg:justify-end">
        <CarouselPrevious
          iconSize={32}
          className="static h-11 w-11 translate-y-0 cursor-pointer rounded-full border-2 border-white text-white transition-colors"
        />
        <CarouselNext
          iconSize={32}
          className="static h-11 w-11 translate-y-0 cursor-pointer rounded-full bg-white transition-colors"
        />
      </div>
    </Carousel>
  );
};

export default ArticlesCarousel;
