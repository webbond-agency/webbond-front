import type { BlogRecommendedPost } from "@/types/blog";
import ArticlesCarousel from "./articles-carousel";
import Container from "@/components/ui/container";

interface ArticleRecommendedMobileProps {
  posts: BlogRecommendedPost[];
}

export default function ArticleRecommendedMobile({
  posts,
}: ArticleRecommendedMobileProps) {
  return (
    <section className="block lg:hidden mb-[198px]">
      <Container>
        <ArticlesCarousel posts={posts} />
      </Container>
    </section>
  );
}
