import Container from "@/components/ui/container";
import type { BlogPostBySlug } from "@/types/blog";
import { formatPublishedDate } from "@/utils/formatPublishedDate";
import Image from "next/image";
import * as motion from "motion/react-client";

interface HeroProps {
  article: BlogPostBySlug;
}

const withQuality100 = (url?: string) => {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("q", "100");
    return parsed.toString();
  } catch {
    return url;
  }
};

export default function Hero({ article }: HeroProps) {
  const mobileImageUrl = withQuality100(article.heroMobileImage?.asset?.url);
  const desktopImageUrl = withQuality100(article.heroDesktopImage?.asset?.url);
  const mobileAlt = article.heroMobileImage?.alt || article.heroTitle;
  const desktopAlt = article.heroDesktopImage?.alt || article.heroTitle;
  const author = article.author;
  const publishedAt = article.publishedAt;

  return (
    <section className="relative mb-12 lg:mb-[90px] min-h-[569px] lg:min-h-[674px]">
      <div className="absolute -z-10 inset-0 pointer-events-none bg-[linear-gradient(90.16deg,_rgba(0,0,0,0.5)_18.33%,_rgba(102,102,102,0.5)_99.86%)]" />
      {mobileImageUrl ? (
        <Image
          src={mobileImageUrl}
          alt={mobileAlt}
          fill
          quality={100}
          priority
          fetchPriority="high"
          className="object-cover md:hidden -z-20"
        />
      ) : null}
      {desktopImageUrl ? (
        <Image
          src={desktopImageUrl}
          alt={desktopAlt}
          fill
          quality={100}
          priority
          fetchPriority="high"
          className="hidden object-cover md:block -z-20"
        />
      ) : null}
      <Container className=" pt-[138px] lg:pt-[158px] pb-6 lg:pb-[43px]">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:max-w-[420px] lg:max-w-[628px] mb-4.5 lg:mb-6font-manrope text-[24px] lg:text-[48px] leading-[120%] text-white uppercase font-light"
          >
            {article.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:max-w-[420px] lg:max-w-[628px] mb-8 lg:mb-9 whitespace-pre-line font-montserrat text-[14px] lg:text-[16px] leading-[120%] text-white font-light"
          >
            {article.heroDescription}
          </motion.p>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="inline-block not-last:mr-3 px-7 py-4 rounded-full bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px] font-manrope text-[16px] leading-[120%] text-white font-light uppercase"
            >
              {author}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="inline-block not-last:mr-3 px-7 py-4 rounded-full bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px] font-manrope text-[14px] lg:text-[16px] leading-[120%] text-white font-light"
            >
              {formatPublishedDate(publishedAt)}
            </motion.span>
          </div>
        </div>
      </Container>
    </section>
  );
}
