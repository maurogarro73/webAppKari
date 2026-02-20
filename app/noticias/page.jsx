import Link from 'next/link';
import { getAllNoticias } from '@/lib/noticias';
import { NoticiasSearch } from '@/components/noticias/noticias-search';

export const metadata = {
  title: 'Noticias | Estudio Jurídico Mendiara',
  description: 'Cobertura y análisis de casos y novedades jurídicas.',
};

export default function NoticiasPage() {
  const noticias = getAllNoticias();

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-[#0055aa] py-12 text-primary-foreground">
        <section className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-sm text-white hover:text-foreground transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </section>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Intervenciones profesionales en medios</h1>
          <p className="mt-2 max-w-2xl text-primary-foreground/80">
            En esta sección se reúnen apariciones periodísticas y publicaciones públicas vinculadas a casos en los que el Estudio
            interviene profesionalmente. Los resúmenes se elaboran a partir de información publicada por los medios, respetando la
            confidencialidad y el estado de cada proceso.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>

        <NoticiasSearch noticias={noticias} />
      </section>
    </main>
  );
}
