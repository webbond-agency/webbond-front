import type { TypedObject } from "@portabletext/types";

/** Контент статті блогу з Sanity (блоки + кастомні типи). */
export type BlogPortableTextValue = TypedObject[] | null | undefined;

/** Рядок таблиці (sanity table / tableBlock). */
export type PtTableCell = {
  text?: string;
  strong?: boolean;
};

export type PtTableRow = {
  cells?: PtTableCell[];
};

export type PtTableBlock = {
  _type?: string;
  _key?: string;
  caption?: string;
  hasHeaderRow?: boolean;
  rows?: PtTableRow[];
};

/** Зображення в portable text (стандартний блок image). */
export type PtImageBlock = {
  _type?: string;
  _key?: string;
  alt?: string | { da?: string; en?: string };
  caption?: string | null;
  orientation?: "landscape" | "portrait";
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: { width?: number; height?: number };
    };
  };
  image?: {
    alt?: string | { da?: string; en?: string };
    asset?: PtImageBlock["asset"];
  };
};
