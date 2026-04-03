"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { formatPublishedDate } from "@/utils/formatPublishedDate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";
import GooeyWhiteButton from "./gooey-white-button";

export type ArticleCardImage = {
  src: string;
  alt: string;
};

export interface ArticleCardProps {
  /** URL статті: верх картки — Link; кнопка GooeyWhiteLink окремо (без вкладених посилань). */
  href: string;
  image: ArticleCardImage | null;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  className?: string;
}

export default function ArticleCard({
  href,
  image,
  title,
  description,
  author,
  publishedAt,
  className,
}: ArticleCardProps) {
  const t = useTranslations("ArticlePage.Recommended");

  return (
    <article
      className={cn(
        "relative group overflow-hidden h-full rounded-[12px] bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      <Image
        src="/article-page-card-shadow-top.webp"
        alt="Article Card Background"
        width={276}
        height={435}
        className="absolute -z-10 top-7 left-0 object-cover"
      />
      <Image
        src="/article-page-card-shadow-bottom.webp"
        alt="Article Card Background"
        width={312}
        height={302}
        className="absolute -z-10 bottom-0 right-0 object-cover"
      />
      <Link
        href={href}
        className={cn("flex flex-col h-full rounded-t-[8px] outline-none")}
      >
        <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[8px]">
          {image?.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-4">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="inline-block not-last:mr-3 rounded-full bg-white/3 px-7 py-4 font-manrope text-[12px] font-light uppercase leading-[120%] text-white shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px]"
            >
              {author}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="inline-block not-last:mr-3 rounded-full bg-white/3 px-7 py-4 font-manrope text-[12px] font-light leading-[120%] text-white shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px]"
            >
              {formatPublishedDate(publishedAt)}
            </motion.span>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 gap-6 px-4 py-6">
          {" "}
          <div className="flex flex-col gap-6">
            <h3 className="line-clamp-4 font-manrope text-[20px] font-light uppercase leading-[120%] text-white">
              {title}
            </h3>
            <p className="line-clamp-4 font-montserrat text-[14px] font-light leading-[120%] text-white">
              {description}
            </p>
          </div>
          <GooeyWhiteButton
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            height={42}
            centerText
            text={t("showMore")}
          ></GooeyWhiteButton>
        </div>
      </Link>
    </article>
  );
}
