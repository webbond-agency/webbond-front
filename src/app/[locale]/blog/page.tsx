import Hero from "@/components/blog-page/hero/hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import BlogList from "@/components/blog-page/blog-list/blog-list";
import { blogPostsAllQuery } from "@/lib/queries";
import type { BlogRecommendedPost } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Breadcrumbs");

  const posts = await fetchSanityData<BlogRecommendedPost[]>(
    blogPostsAllQuery,
    {
      lang: locale,
    },
  );

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("blog") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <BlogList posts={posts} />
    </div>
  );
}
