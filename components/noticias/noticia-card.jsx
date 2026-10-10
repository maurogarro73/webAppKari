import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export function NoticiaCard({ slug, title, description, date, cover, tags }) {
  const toLocalDate = (value) => {
    // Si ya es Date, listo
    if (value instanceof Date) return value;

    // Si viene como número (timestamp)
    if (typeof value === 'number') return new Date(value);

    // Si viene como string "YYYY-MM-DD"
    if (typeof value === 'string') {
      const [y, m, d] = value.split('-').map(Number);
      return new Date(y, m - 1, d); // local
    }

    // Fallback
    return new Date(String(value));
  };

  const formattedDate = toLocalDate(date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col overflow-hidden border-border bg-card text-card-foreground shadow-none transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      {cover && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <CardTitle className="font-serif text-2xl font-medium leading-snug text-primary">
          <Link href={`/noticias/${slug}`} className="transition-colors hover:text-muted-foreground">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">{description}</CardDescription>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link
          href={`/noticias/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] text-primary uppercase transition-colors hover:text-muted-foreground"
        >
          Ver nota
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
