import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAllSlugs, getNoticiaBySlug } from '@/lib/noticias';
import { MarkdownContent } from '@/components/noticias/markdown-content';
import { NoticiaSources } from '@/components/noticias/noticia-sources';
import { NoticiaVideos } from '@/components/noticias/noticia-videos';
import Header from '@/components/header';
import Footer from '@/components/footer';

const SITE_URL = 'https://estudiojuridicomendiara.com.ar';

function toAbsoluteUrl(url) {
  return new URL(url, SITE_URL).toString();
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) return { title: 'Noticia no encontrada' };

  const url = toAbsoluteUrl(`/noticias/${slug}`);
  const image = toAbsoluteUrl(noticia.cover || '/logo-512.png');
  const isDefaultImage = !noticia.cover;

  return {
    title: noticia.title,
    description: noticia.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: noticia.title,
      description: noticia.description,
      publishedTime: noticia.date ? `${noticia.date}T00:00:00-03:00` : undefined,
      tags: noticia.tags,
      images: [
        {
          url: image,
          width: isDefaultImage ? 512 : undefined,
          height: isDefaultImage ? 512 : undefined,
          alt: isDefaultImage ? 'Monograma de Estudio Jurídico Mendiara' : noticia.title,
        },
      ],
    },
    twitter: {
      card: isDefaultImage ? 'summary' : 'summary_large_image',
      title: noticia.title,
      description: noticia.description,
      images: [image],
    },
  };
}

export default async function NoticiaDetailPage({ params }) {
  const { slug } = await params; // ✅
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) notFound();

  const noticiaUrl = toAbsoluteUrl(`/noticias/${slug}`);
  const articleImage = toAbsoluteUrl(noticia.cover || '/logo-512.png');
  const publishedAt = noticia.date ? `${noticia.date}T00:00:00-03:00` : undefined;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': noticiaUrl,
    },
    headline: noticia.title,
    description: noticia.description,
    image: articleImage,
    ...(publishedAt && { datePublished: publishedAt, dateModified: publishedAt }),
    author: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Mendiara',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Mendiara',
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl('/logo-512.png'),
      },
    },
  };

  const toLocalDate = (value) => {
    if (value instanceof Date) return value;
    if (typeof value === 'number') return new Date(value);

    if (typeof value === 'string') {
      // Si viene como "YYYY-MM-DD", construimos fecha local (sin UTC shift)
      const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
      // Si viene con hora o formato distinto, fallback
      return new Date(value);
    }

    return new Date(String(value));
  };

  const formattedDate = toLocalDate(noticia.date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background" tabIndex={-1}>
        <section className="bg-primary pt-28 pb-14 text-primary-foreground md:pt-32 md:pb-18">
          <div className="mx-auto max-w-3xl px-4">
            <Link
              href="/noticias"
              className="mb-7 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] text-primary-foreground/75 uppercase transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a noticias
            </Link>

            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-[#e0dcd2] uppercase">Noticias</p>
            <h1 className="font-serif text-4xl font-medium leading-[0.95] text-balance md:text-5xl">{noticia.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Calendar className="h-4 w-4" />
                <time dateTime={noticia.date}>{formattedDate}</time>
              </div>

              {noticia.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {noticia.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-12">
          {noticia.cover && (
            <div className="relative mb-8 aspect-video w-full overflow-hidden border border-border">
              <Image src={noticia.cover} alt={noticia.title} fill className="object-cover" priority />
            </div>
          )}

          <MarkdownContent content={noticia.content} />
          <NoticiaSources sources={noticia.sources} />
          <NoticiaVideos videos={noticia.youtube} />
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
