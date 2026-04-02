"use client";

import {
  PortableText,
  defaultComponents,
  mergeComponents,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { m } from "framer-motion";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import type { BlogPortableTextValue } from "@/types/portable-text";
import PtImage from "./pt-image";
import PtTable from "./pt-table";

/** Однакова поява блоків у зоні видимості */
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function buildComponents(locale: string): Partial<PortableTextReactComponents> {
  return {
    block: {
      normal: ({ children }) => (
        <m.p
          className="mb-3 font-montserrat text-[16px] font-light leading-[160%] text-white/90"
          {...reveal}
        >
          {children}
        </m.p>
      ),
      h2: ({ children }) => (
        <m.h2
          className="mb-8 not-first:mt-20 font-manrope text-[24px] font-light uppercase leading-[120%] text-white lg:text-[36px]"
          {...reveal}
        >
          {children}
        </m.h2>
      ),
      h3: ({ children }) => (
        <m.h3
          className="mb-4 mt-6 font-montserrat text-[14px] font-medium leading-[120%] text-white lg:text-[16px]"
          {...reveal}
        >
          {children}
        </m.h3>
      ),
      h4: ({ children }) => (
        <m.h4
          className="mb-2 mt-5 font-manrope text-[18px] font-light uppercase leading-[120%] text-white"
          {...reveal}
        >
          {children}
        </m.h4>
      ),
      blockquote: ({ children }) => (
        <m.blockquote
          className="my-4 border-l-4 border-white/25 pl-4 font-montserrat text-[16px] font-light italic leading-[160%] text-white/85"
          {...reveal}
        >
          {children}
        </m.blockquote>
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
        const isExternal = /^https?:\/\//i.test(href) || href.startsWith("//");

        const target =
          blank && !isExternal
            ? "_blank"
            : !blank && isExternal
              ? "_self"
              : undefined;

        return (
          <GooeyWhiteLink
            href={href}
            linkType={isExternal ? "external" : "internal"}
            {...(target ? { target } : {})}
            height={48}
            centerText
            fitContent
            className="my-2 inline-flex w-auto max-w-full text-[14px] font-montserrat font-light text-black"
          >
            {children}
          </GooeyWhiteLink>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <m.ul
          className="mb-3 ml-1 list-disc space-y-1 pl-6 font-montserrat text-[16px] font-light leading-[160%] text-white/90 marker:text-white"
          {...reveal}
        >
          {children}
        </m.ul>
      ),
      number: ({ children }) => (
        <m.ol
          className="mb-3 ml-1 list-decimal space-y-1 pl-6 font-montserrat text-[16px] font-light leading-[160%] text-white/90 marker:text-white"
          {...reveal}
        >
          {children}
        </m.ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    types: {
      image: ({ value }) => (
        <m.div className="w-full" {...reveal}>
          <PtImage value={value} locale={locale} />
        </m.div>
      ),
      tableBlock: ({ value }) => (
        <m.div className="w-full" {...reveal}>
          <PtTable value={value} />
        </m.div>
      ),
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
