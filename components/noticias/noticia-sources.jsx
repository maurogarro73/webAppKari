import { ExternalLink } from 'lucide-react';

export function NoticiaSources({ sources }) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="mb-4 font-serif text-3xl font-medium text-primary">Fuentes</h2>
      <ul className="space-y-2">
        {sources.map((source, i) => (
          <li key={i} className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-muted-foreground"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
