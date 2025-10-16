import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 text-center">Ubicación del estudio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Para una atención personalizada, reserva un turno previamente por WhatsApp.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4 p-6 bg-[#f5f7fa] rounded-lg">
              <MapPin className="h-6 w-6 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#003366] mb-2">Dirección</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bartolomé Mitre 350
                  <br />
                  Santa Rosa, La Pampa
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#f5f7fa] rounded-lg">
              <Clock className="h-6 w-6 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#003366] mb-2">Horarios de atención</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lunes a viernes: 9:00 a 18:00
                  <br />
                  Sábados y domingos: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.06954080327!2d-64.2913506!3d-36.624712699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd00cab1c3a7%3A0x4edf3230000ad785!2sEstudio%20Juridico%20Mendiara!5e0!3m2!1ses!2sar!4v1760538838115!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
