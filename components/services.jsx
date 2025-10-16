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
    <section id="services" className="py-16 md:py-24 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 text-center">Servicios legales</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Soluciones jurídicas integrales adaptadas a tus necesidades específicas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className="h-12 w-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-[#003366]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
