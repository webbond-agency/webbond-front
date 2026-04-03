import BlogPortableTextRenderer from "@/components/shared/portable-text/portable-text";
import Container from "@/components/ui/container";
import type { BlogPostBySlug } from "@/types/blog";

interface ContentProps {
  article: BlogPostBySlug;
  locale: string;
}

export default function Content({ article, locale }: ContentProps) {
  const { content } = article;

  if (!content?.length) return null;

  return (
    <section>
      <BlogPortableTextRenderer value={content} locale={locale} />
    </section>
  );
}
