'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '5492954605557';
  const whatsappMessage = 'Hola, necesito asesoramiento legal y me gustaría coordinar una cita.';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactame</h2>
          <p className="text-lg mb-12 text-blue-100 leading-relaxed">
            Dar el primer paso también es defender tus derechos. Escribime y agendemos tu consulta.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <MessageCircle className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-blue-100">Pedí tu turno de manera rápida</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">Teléfono</h3>
              <p className="text-sm text-blue-100">+54 9 2954 605557</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">Correo</h3>
              <p className="text-sm text-blue-100 text-center break-all">{['estudiojuridicomendiara', 'gmail.com'].join('@')}</p>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-6 text-lg transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactame via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
