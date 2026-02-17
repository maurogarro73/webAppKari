"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NoticiaCard } from "./noticia-card";

export function NoticiasSearch({ noticias }) {
  const [query, setQuery] = useState("");

  const filtered = noticias.filter((n) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.description.toLowerCase().includes(q) ||
      n.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por titulo, descripcion o tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No se encontraron noticias para{" "}
            <span className="font-medium text-foreground">
              {'"'}
              {query}
              {'"'}
            </span>
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((noticia) => (
            <NoticiaCard key={noticia.slug} {...noticia} />
          ))}
        </div>
      )}
    </div>
  );
}
