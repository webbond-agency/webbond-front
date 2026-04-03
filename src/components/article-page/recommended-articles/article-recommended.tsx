import type { BlogRecommendedPost } from "@/types/blog";
import ArticleCard, {
  type ArticleCardImage,
} from "@/components/ui/article-card";

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

export default function ArticleRecommended({ posts }: ArticleRecommendedProps) {
  if (!posts.length) return null;

  return (
    <section className="hidden lg:block h-full w-[320px] shrink-0">
      <ul className="flex flex-col gap-6">
        {posts.slice(0, 7).map((post) => (
          <li key={post.id}>
            <ArticleCard
              href={`/blog/${post.slug}`}
              image={cardImage(post)}
              title={post.heroTitle}
              description={post.heroDescription}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
