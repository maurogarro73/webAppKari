'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/law-firm-logo-scales-of-justice.jpg" alt="Estudio Jurídico Mendiara" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-[#003366]">Estudio Jurídico</span>
              <span className="font-serif text-sm text-[#003366]">Mendiara</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-[#003366]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium text-left"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium text-left"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#003366] hover:text-[#0055aa] transition-colors font-medium text-left"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
