'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const whatsappNumber = '5492954605557';
  const whatsappMessage = 'Hola, necesito asesoramiento legal y me gustaría coordinar una cita.';

  const handleWhatsAppClick = () => {
    // Abre WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    // Envía evento de conversión a Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17674436925/GUz4CLLWj7MbEL2C6utB',
      });
    }
  };

  return (
    <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-[#e0dcd2] uppercase">Estoy para acompañarte</p>
          <h2 className="mb-4 font-serif text-4xl font-medium md:text-5xl">Contactame</h2>
          <p className="mb-12 text-lg leading-relaxed text-[#e0dcd2]">
            Dar el primer paso también es defender tus derechos. Escribime y agendemos tu consulta.
          </p>

          <div className="mb-12 grid gap-5 md:grid-cols-3">
            <div className="flex flex-col items-center border border-[#786b63] bg-white/5 p-7">
              <MessageCircle className="h-8 w-8 mb-3" />
              <h3 className="mb-2 font-serif text-2xl font-medium">WhatsApp</h3>
              <p className="text-sm text-[#e0dcd2]">Pedí tu turno de manera rápida</p>
            </div>
            <div className="flex flex-col items-center border border-[#786b63] bg-white/5 p-7">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="mb-2 font-serif text-2xl font-medium">Teléfono</h3>
              <p className="text-sm text-[#e0dcd2]">+54 9 2954 605557</p>
            </div>
            <div className="flex flex-col items-center border border-[#786b63] bg-white/5 p-7">
              <Mail className="h-8 w-8 mb-3" />
              <h3 className="mb-2 font-serif text-2xl font-medium">Correo</h3>
              <p className="text-center text-sm text-[#e0dcd2] break-all">{['estudiojuridicomendiara', 'gmail.com'].join('@')}</p>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="mx-auto flex cursor-pointer items-center justify-center rounded-sm bg-background px-8 py-6 text-base tracking-[0.06em] text-primary uppercase transition-colors hover:bg-[#e0dcd2]"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Contactame vía WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
