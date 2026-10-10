import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">Atención presencial</p>
          <h2 className="mb-4 font-serif text-4xl font-medium text-primary md:text-5xl">Ubicación del estudio</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          Para una atención personalizada, reserva un turno previamente por WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 border border-border bg-secondary p-7">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 font-serif text-2xl font-medium text-primary">Dirección</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Bartolomé Mitre 350
                  <br />
                  Santa Rosa, La Pampa
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-border bg-secondary p-7">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 font-serif text-2xl font-medium text-primary">Horarios de atención</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Lunes a viernes: 9:00 a 18:00
                  <br />
                  Sábados y domingos: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.06954080327!2d-64.2913506!3d-36.624712699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd00cab1c3a7%3A0x4edf3230000ad785!2sEstudio%20Juridico%20Mendiara!5e0!3m2!1ses!2sar!4v1760538838115!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Estudio Jurídico Mendiara"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
