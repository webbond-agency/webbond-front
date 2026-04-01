import { blogPostBySlugQuery } from "@/lib/queries";
import type { BlogPostBySlug } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";
import Hero from "@/components/article-page/hero/hero";
import { getTranslations } from "next-intl/server";
import ArticleNotFound from "@/components/article-page/article-not-found";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string; locale: string }>;
}) {
  const { article, locale } = await params;
  const t = await getTranslations("ArticlePage.ArticleNotFound");

  const blogPost = await fetchSanityData<BlogPostBySlug | null>(
    blogPostBySlugQuery,
    {
      slug: article,
      lang: locale,
    },
  );

  if (!blogPost) {
    return <ArticleNotFound title={t("title")} description={t("description")} />;
  }

  return (
    <>
      <Hero article={blogPost} />
    </>
  );
}
