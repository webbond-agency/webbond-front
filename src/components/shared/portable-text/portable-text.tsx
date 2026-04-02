"use client";

import {
  PortableText,
  defaultComponents,
  mergeComponents,
  type PortableTextReactComponents,
} from "@portabletext/react";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import type { BlogPortableTextValue } from "@/types/portable-text";
import PtImage from "./pt-image";
import PtTable from "./pt-table";

function buildComponents(locale: string): Partial<PortableTextReactComponents> {
  return {
    block: {
      normal: ({ children }) => (
        <p className="mb-3 font-montserrat text-[16px] font-light leading-[160%] text-white/90">
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2 className="mb-8 not-first:mt-20 font-manrope text-[24px] font-light uppercase leading-[120%] text-white lg:text-[36px]">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-4 mt-6 font-montserrat text-[14px] font-medium leading-[120%] text-white lg:text-[16px]">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-2 mt-5 font-manrope text-[18px] font-light uppercase leading-[120%] text-white">
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-4 border-l-4 border-white/25 pl-4 font-montserrat text-[16px] font-light italic leading-[160%] text-white/85">
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-white">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => (
        <span className="underline decoration-white/40 underline-offset-2">
          {children}
        </span>
      ),
      "strike-through": ({ children }) => (
        <span className="line-through opacity-70">{children}</span>
      ),
      link: ({ value, children }) => {
        const v = value as {
          href?: string;
          blank?: boolean;
          openInNewTab?: boolean;
        };
        const href = v?.href || "#";
        const blank = Boolean(v?.blank ?? v?.openInNewTab);
        const external = /^https?:\/\//i.test(href);
        const target = external
          ? blank
            ? undefined
            : "_self"
          : blank
            ? "_blank"
            : undefined;

        return (
          <GooeyWhiteLink
            href={href}
            linkType={external ? "external" : "internal"}
            target={target}
            height={48}
            centerText
            className="my-8 inline-flex w-full md:w-fit md:min-w-[313px] text-[14px] font-montserrat font-light text-black"
          >
            {children}
          </GooeyWhiteLink>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-3 ml-1 list-disc space-y-1 pl-6 font-montserrat text-[16px] font-light leading-[160%] text-white/90 marker:text-white">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="mb-3 ml-1 list-decimal space-y-1 pl-6 font-montserrat text-[16px] font-light leading-[160%] text-white/90 marker:text-white">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    types: {
      image: ({ value }) => <PtImage value={value} locale={locale} />,
      tableBlock: ({ value }) => <PtTable value={value} />,
    },
  };
}

export default function BlogPortableTextRenderer({
  value,
  locale = "da",
}: {
  value?: BlogPortableTextValue;
  locale?: string;
}) {
  if (!value?.length) return null;

  const components = mergeComponents(
    defaultComponents,
    buildComponents(locale),
  );

  return <PortableText value={value} components={components} />;
}
