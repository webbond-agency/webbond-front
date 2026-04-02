import { blogPostBySlugQuery } from "@/lib/queries";
import type { BlogPostBySlug } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";
import Hero from "@/components/article-page/hero/hero";
import { getTranslations } from "next-intl/server";
import ArticleNotFound from "@/components/article-page/article-not-found";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Faq from "@/components/article-page/faq/faq";
import Content from "@/components/article-page/content/content";
import Container from "@/components/ui/container";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string; locale: string }>;
}) {
  const t = await getTranslations("Breadcrumbs");
  const tNotFound = await getTranslations("ArticlePage.ArticleNotFound");

  const { article, locale } = await params;

  const blogPost = await fetchSanityData<BlogPostBySlug | null>(
    blogPostBySlugQuery,
    {
      slug: article,
      lang: locale,
    },
  );

  if (!blogPost) {
    return (
      <ArticleNotFound
        title={tNotFound("title")}
        description={tNotFound("description")}
      />
    );
  }

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: `${t("blog")}`, href: `/blog` },
    { label: blogPost.heroTitle },
  ];

  return (
    <>
      <Hero article={blogPost} />
      <Breadcrumbs steps={breadcrumbSteps} className="pb-10 lg:pb-20" />

      <Container>
        <Content article={blogPost} locale={locale} />
      </Container>

      <Faq faq={blogPost.faq} />
    </>
  );
}
