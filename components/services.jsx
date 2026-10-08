import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Briefcase, Home, Scale, Shield } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Derecho de Familia',
    description:
      'Sucesiones, divorcios, separaciones, régimen de cuidado de hijos, alimentos y mediación familiar, con un enfoque humano y profesional.',
  },
  {
    icon: FileText,
    title: 'Derecho Civil',
    description: 'Conflictos contractuales, cuestiones de propiedad y representación en litigios civiles.',
  },
  {
    icon: Briefcase,
    title: 'Derecho Laboral',
    description: 'Asesoramiento en conflictos laborales, despidos y defensa de los derechos en el ámbito del trabajo.',
  },
  {
    icon: Home,
    title: 'Derecho Inmobiliario',
    description: 'Asesoramiento en compraventa de inmuebles, contratos de locación y resolución de conflictos inmobiliarios.',
  },
  {
    icon: Scale,
    title: 'Litigios',
    description: 'Representación integral en procesos judiciales civiles, comerciales y laborales.',
  },
  {
    icon: Shield,
    title: 'Asesoramiento Legal',
    description: 'Orientación jurídica preventiva y estratégica para personas y empresas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">Áreas de práctica</p>
          <h2 className="mb-4 font-serif text-4xl font-medium text-primary md:text-5xl">Servicios legales</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          Soluciones jurídicas integrales adaptadas a tus necesidades específicas.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center bg-primary">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl font-medium text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
