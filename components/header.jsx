'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (pathname !== '/') {
      window.location.assign(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-left cursor-pointer" aria-label="Ir al inicio">
            <span className="font-serif text-4xl leading-none text-primary" aria-hidden="true">AM</span>
            <div className="flex flex-col">
              <span className="font-serif text-xl leading-none text-primary md:text-2xl">Karina Alvarez Mendiara</span>
              <span className="mt-1 text-[0.62rem] font-medium tracking-[0.24em] text-muted-foreground">ABOGADA</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer"
            >
              Contacto
            </button>

            <Link href="/noticias" className="text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-primary cursor-pointer">
              Noticias
            </Link>

            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://www.youtube.com/@karinaluciaalvarezmendiara3813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-primary"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://www.instagram.com/abogada_alvarezmendiarakarina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-primary"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="text-primary hover:bg-secondary hover:text-primary lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 border-t border-border pt-4 pb-2 lg:hidden">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
            >
              Contacto
            </button>

            <Link
              href="/noticias"
              className="text-left text-sm font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Noticias
            </Link>

            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://www.youtube.com/@karinaluciaalvarezmendiara3813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <FaYoutube size={26} />
              </a>
              <a
                href="https://www.instagram.com/abogada_alvarezmendiarakarina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                <FaInstagram size={26} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
