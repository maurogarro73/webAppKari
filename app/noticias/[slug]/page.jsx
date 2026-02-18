import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAllSlugs, getNoticiaBySlug } from '@/lib/noticias';
import { MarkdownContent } from '@/components/noticias/markdown-content';
import { NoticiaSources } from '@/components/noticias/noticia-sources';
import { NoticiaVideos } from '@/components/noticias/noticia-videos';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) return { title: 'Noticia no encontrada' };

  return {
    title: `${noticia.title} | Noticias`,
    description: noticia.description,
  };
}

export default async function NoticiaDetailPage({ params }) {
  const { slug } = await params; // ✅
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) notFound();

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
    <main className="min-h-screen bg-background">
      <section className="bg-[#0055aa] py-12 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/noticias"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a noticias
          </Link>

          <h1 className="text-2xl font-bold leading-tight text-balance md:text-3xl lg:text-4xl">{noticia.title}</h1>

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
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg border border-border">
            <Image src={noticia.cover} alt={noticia.title} fill className="object-cover" priority />
          </div>
        )}

        <MarkdownContent content={noticia.content} />

        <NoticiaSources sources={noticia.sources} />
        <NoticiaVideos videos={noticia.youtube} />
      </article>
    </main>
  );
}
