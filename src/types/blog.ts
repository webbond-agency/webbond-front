import type {
  PortableTextBlock,
  SanityImage,
} from "@/types/case";

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
  content: PortableTextBlock[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};
