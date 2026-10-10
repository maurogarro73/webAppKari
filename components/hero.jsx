'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="overflow-hidden bg-gradient-to-b from-background via-background to-secondary/70 pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-5 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
              Karina Alvarez Mendiara · Abogada
            </p>
            <h1 className="mb-6 font-serif text-5xl leading-[0.92] font-medium text-primary text-balance md:text-6xl lg:text-7xl">
              Asesoramiento legal <span className="italic">para cada decisión.</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed">
              En Estudio Jurídico Mendiara, continuamos una trayectoria dedicada a brindar soluciones legales personalizadas, con
              compromiso, cercanía y confianza.
            </p>
            <Button
              onClick={scrollToContact}
              className="rounded-sm bg-primary px-8 py-6 text-base tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-[#4e403c] cursor-pointer"
            >
              Contactame
            </Button>
          </div>

          {/* Attorney Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary md:translate-x-5 md:translate-y-5" />
              <Image
                src="/personal.jpg"
                alt="Karina Alvarez Mendiara en el estudio jurídico"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="relative w-full border border-[#e0dcd2] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
