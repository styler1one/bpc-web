import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/diensten',
    '/diensten/consulting',
    '/diensten/creations',
    '/diensten/contracting',
    '/aanpak',
    '/over-ons',
    '/werken-bij',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
