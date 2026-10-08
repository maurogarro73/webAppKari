import Link from 'next/link';
import { getAllNoticias } from '@/lib/noticias';
import { NoticiasSearch } from '@/components/noticias/noticias-search';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Noticias | Estudio Jurídico Mendiara',
  description: 'Cobertura y análisis de casos y novedades jurídicas.',
};

export default function NoticiasPage() {
  const noticias = getAllNoticias();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-primary pt-28 pb-14 text-primary-foreground md:pt-32 md:pb-18">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/" className="text-xs font-medium tracking-[0.12em] text-primary-foreground/75 uppercase transition-colors hover:text-primary-foreground">
                ← Volver al inicio
              </Link>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-[#e0dcd2] uppercase">Noticias</p>
            <h1 className="font-serif text-4xl font-medium leading-none text-balance md:text-5xl">Intervenciones profesionales en medios</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#e0dcd2]">
              En esta sección se reúnen apariciones periodísticas y publicaciones públicas vinculadas a casos en los que el Estudio
              interviene profesionalmente.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <NoticiasSearch noticias={noticias} />
        </section>
      </main>
      <Footer />
    </>
  );
}
