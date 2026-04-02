"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { urlForImage } from "@/lib/sanityClient";
import type { PtImageBlock } from "@/types/portable-text";

function resolveAlt(
  alt: PtImageBlock["alt"],
  locale: string,
): string {
  if (!alt) return "";
  if (typeof alt === "string") return alt;
  if (locale === "da") return alt.da ?? alt.en ?? "";
  return alt.en ?? alt.da ?? "";
}

function imageUrlFromValue(value: PtImageBlock): string | null {
  const asset = value.asset;
  if (
    asset &&
    typeof (asset as { url?: string }).url === "string" &&
    (asset as { url: string }).url
  ) {
    return (asset as { url: string }).url;
  }

  if (!asset && !value.image) return null;

  try {
    return urlForImage(value as Parameters<typeof urlForImage>[0])
      .width(1200)
      .auto("format")
      .quality(90)
      .url();
  } catch {
    return null;
  }
}

function dimensionsPtImage(value: PtImageBlock): { w: number; h: number } {
  const asset = value.asset;
  if (!asset) return { w: 1200, h: 675 };

  const dims = (
    asset as {
      metadata?: { dimensions?: { width?: number; height?: number } };
    }
  ).metadata?.dimensions;
  if (dims?.width && dims?.height) return { w: dims.width, h: dims.height };

  return { w: 1200, h: 675 };
}

type PtImageProps = {
  value: PtImageBlock;
  locale?: string;
};

export default function PtImage({ value, locale = "da" }: PtImageProps) {
  const url = imageUrlFromValue(value);
  if (!url) return null;

  const alt =
    resolveAlt(value.alt, locale) ||
    resolveAlt(value.image?.alt, locale) ||
    "";
  const orientation = value.orientation ?? "landscape";
  const { w, h } = dimensionsPtImage(value);
  const caption =
    typeof value.caption === "string" ? value.caption : undefined;

  return (
    <figure
      className={twMerge(
        "my-4 w-full max-w-full",
        orientation === "portrait" ? "mx-auto max-w-md" : "",
      )}
    >
      <div
        className={twMerge(
          "relative w-full overflow-hidden rounded-xl bg-white/5",
          orientation === "portrait" ? "aspect-[3/4]" : "aspect-video",
        )}
      >
        <Image
          src={url}
          alt={alt}
          width={w}
          height={h}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, min(720px, 100%)"
          quality={90}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center font-montserrat text-[13px] font-light leading-[140%] text-white/55">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
