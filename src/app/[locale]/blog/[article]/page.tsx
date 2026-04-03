import { blogPostBySlugQuery, blogPostsRecommendedQuery } from "@/lib/queries";
import type { BlogPostBySlug, BlogRecommendedPost } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";
import Hero from "@/components/article-page/hero/hero";
import { getTranslations } from "next-intl/server";
import ArticleNotFound from "@/components/article-page/article-not-found";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Faq from "@/components/article-page/faq/faq";
import Content from "@/components/article-page/content/content";
import Container from "@/components/ui/container";
import ArticleRecommended from "@/components/article-page/recommended-articles/article-recommended";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string; locale: string }>;
}) {
  const t = await getTranslations("Breadcrumbs");
  const tNotFound = await getTranslations("ArticlePage.ArticleNotFound");

  const { article, locale } = await params;

  const [blogPost, recommendedPosts] = await Promise.all([
    fetchSanityData<BlogPostBySlug | null>(blogPostBySlugQuery, {
      slug: article,
      lang: locale,
    }),
    fetchSanityData<BlogRecommendedPost[]>(blogPostsRecommendedQuery, {
      excludeSlug: article,
      lang: locale,
    }),
  ]);

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
        <div className="flex flex-col md:flex-row gap-20 md:gap-12 pb-12 lg:pb-[192px]">
          <Content article={blogPost} locale={locale} />
          <ArticleRecommended posts={recommendedPosts} />
        </div>
      </Container>

      <Faq faq={blogPost.faq} />
    </>
  );
}
