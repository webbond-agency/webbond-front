import type { SanityImage } from "@/types/case";
import type { BlogPortableTextValue } from "@/types/portable-text";

/** Дані для картки рекомендованої статті (відповідає blogPostsRecommendedQuery). */
export type BlogRecommendedPost = {
  id: string;
  slug: string;
  publishedAt: string;
  heroTitle: string;
  heroDescription: string;
  author: string;
  heroDesktopImage?: SanityImage;
  heroMobileImage?: SanityImage;
};

export type BlogPostBySlug = {
  id: string;
  _type: "blogPost";
  _createdAt: string;
  _updatedAt: string;
  slug: string;
  publishedAt: string;
  heroTitle: string;
  heroDescription: string;
  author: string;
  heroDesktopImage?: SanityImage;
  heroMobileImage?: SanityImage;
  content: BlogPortableTextValue;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};
