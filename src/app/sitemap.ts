import { routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const locales = routing.locales;
  const currentDate = new Date();

  // Статичные основные разделы с якорями (на главной)
  const mainPages = [''];

  // Главные страницы для каждого языка
  const urls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    mainPages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ''}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    })),
  );

  return [...urls];
}
