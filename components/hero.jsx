'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#f5f7fa] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-6 text-balance">
              Asesoramiento legal con más de 30 años de experiencia familiar
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
              En Estudio Jurídico Mendiara, continuamos una trayectoria dedicada a brindar soluciones legales personalizadas, con
              compromiso, cercanía y confianza.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-[#003366] hover:bg-[#0055aa] text-white px-8 py-6 text-lg transition-all hover:scale-105 cursor-pointer"
            >
              Contactame
            </Button>
          </div>

          {/* Attorney Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#003366] rounded-lg transform rotate-3"></div>
              <img
                src="/professional-female-attorney.png"
                alt="Attorney"
                className="relative rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
