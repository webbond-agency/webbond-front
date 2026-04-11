import type { BlogRecommendedPost } from "@/types/blog";
import type { ArticleCardImage } from "@/components/ui/article-card";

export function withQuality100(url?: string) {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("q", "100");
    return parsed.toString();
  } catch {
    return url;
  }
}

export function cardImageFromPost(
  post: BlogRecommendedPost,
): ArticleCardImage | null {
  const desktop = post.heroDesktopImage?.asset?.url;
  const mobile = post.heroMobileImage?.asset?.url;
  const src = withQuality100(desktop) ?? withQuality100(mobile);
  if (!src) return null;
  const alt =
    post.heroDesktopImage?.alt ?? post.heroMobileImage?.alt ?? post.heroTitle;
  return { src, alt };
}
