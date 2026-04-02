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
    <section className="flex flex-col py-12 lg:py-14">
      <Container className="flex flex-col md:flex-row gap-20 md:gap-12">
        <div>
          <BlogPortableTextRenderer value={content} locale={locale} />
        </div>
        <div className="w-[320px]"></div>
      </Container>
    </section>
  );
}
