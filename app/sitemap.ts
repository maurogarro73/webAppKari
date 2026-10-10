import type { MetadataRoute } from 'next';
import { getAllNoticias } from '@/lib/noticias';

const SITE_URL = 'https://estudiojuridicomendiara.com.ar';

function toValidDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const noticias = getAllNoticias();
  const latestNewsDate = noticias[0]?.date ? toValidDate(noticias[0].date) : new Date();

  return [
    {
      url: SITE_URL,
      lastModified: latestNewsDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/noticias`,
      lastModified: latestNewsDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...noticias.map((noticia) => ({
      url: `${SITE_URL}/noticias/${noticia.slug}`,
      lastModified: toValidDate(noticia.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
