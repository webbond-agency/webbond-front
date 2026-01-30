import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'sovll42h',
  dataset: "production",
  apiVersion: "2026-01-05",
  useCdn: true,
  stega: {
    enabled: false,
  },
});

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: Parameters<typeof imageBuilder.image>[0]) =>
  imageBuilder.image(source);
