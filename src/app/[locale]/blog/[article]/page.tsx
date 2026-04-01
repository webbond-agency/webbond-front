import { blogPostBySlugQuery } from "@/lib/queries";
import type { BlogPostBySlug } from "@/types/blog";
import { fetchSanityData } from "@/utils/fetchSanityData";

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

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip">
      {blogPost?.heroTitle}
    </div>
  );
}
