'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function WhatsAppFloat() {
  const whatsappNumber = '5492954605557';
  const whatsappMessage = 'Hola, necesito asesoramiento legal y me gustaría coordinar una cita.';

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17674436925/GUz4CLLWj7MbEL2C6utB',
      });
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed right-6 bottom-6 z-50 h-14 w-14 cursor-pointer rounded-full border border-[#786b63] bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(71,29,31,0.24)] transition-all hover:scale-105 hover:bg-[#4e403c] hover:shadow-[0_10px_28px_rgba(71,29,31,0.32)] focus-visible:ring-2 focus-visible:ring-[#e0dcd2] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
    </Button>
  );
}
