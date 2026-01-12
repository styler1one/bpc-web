import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://bestpractice.company';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/diensten',
    '/aanpak',
    '/over-ons',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
