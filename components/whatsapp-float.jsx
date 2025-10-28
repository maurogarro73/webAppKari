'use client';

import { MessageCircle } from 'lucide-react';
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
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 cursor-pointer"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
}
