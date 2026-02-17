import { ExternalLink } from 'lucide-react';

export function NoticiaSources({ sources }) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground">Fuentes</h2>
      <ul className="space-y-2">
        {sources.map((source, i) => (
          <li key={i} className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-[#0055aa]"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
