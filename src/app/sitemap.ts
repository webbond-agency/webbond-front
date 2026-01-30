import { routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';
import { CASES_MOCK_DATA } from '@/components/cases/cases-mock-data';

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

  // Динамические страницы кейсов
  const casesUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    CASES_MOCK_DATA.map((item) => ({
      url: `${baseUrl}/${locale}/cases/${item.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  );

  return [...urls, ...casesUrls];
}
