import { blogPostBySlugQuery } from "@/lib/queries";
import type { BlogPostBySlug } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";
import Hero from "@/components/article-page/hero/hero";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string; locale: string }>;
}) {
  const { article, locale } = await params;

  const blogPost = await fetchSanityData<BlogPostBySlug | null>(
    blogPostBySlugQuery,
    {
      slug: article,
      lang: locale,
    },
  );

  if (!blogPost) {
    return <section></section>;
  }

  return (
    <>
      <Hero article={blogPost} />
    </>
  );
}
