import { Scale, GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">Trayectoria profesional</p>
            <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl">Sobre mí</h2>
          </div>

          <div className="prose prose-lg mb-14 max-w-none text-muted-foreground prose-strong:text-primary">
            <p className="leading-relaxed mb-6">
              Soy <strong>Karina Lucía Alvarez Mendiara</strong>, abogada con más de 10 años de experiencia en el ejercicio
              profesional. Continúo con orgullo el legado familiar de <strong>más de 30 años de trayectoria jurídica</strong>,
              ofreciendo un servicio cercano, ético y comprometido con cada persona y empresa que confía en mí.
            </p>
            <p className="leading-relaxed mb-6">
              Me gradué en la <strong>Universidad Nacional de Córdoba, Facultad de Ciencias Jurídicas y Sociales</strong>, y
              realicé una <strong>Maestría en Derecho Tributario</strong> en la <strong>Universidad Austral</strong>. Además,
              participo constantemente en cursos y programas de actualización para brindar un asesoramiento sólido y actual.
            </p>
            <p className="leading-relaxed mb-6">
              A lo largo de mi carrera, me especialicé en{' '}
              <strong>Derecho de Familia, Derecho Civil, Derecho Laboral y Derecho Tributario</strong>. Creo firmemente en el
              valor de la escucha y en construir estrategias legales personalizadas que se adapten a las necesidades de cada caso.
            </p>
            <p className="leading-relaxed">
              Mi compromiso es acompañarte en cada paso del proceso legal, con transparencia, empatía y profesionalismo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col items-center border border-border bg-secondary p-7 text-center">
              <Scale className="mb-5 h-9 w-9 text-primary" />
              <h3 className="mb-2 font-serif text-2xl font-medium text-primary">+10 años de experiencia</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Trayectoria profesional y legado familiar en el ámbito jurídico.</p>
            </div>
            <div className="flex flex-col items-center border border-border bg-secondary p-7 text-center">
              <GraduationCap className="mb-5 h-9 w-9 text-primary" />
              <h3 className="mb-2 font-serif text-2xl font-medium text-primary">Formación de excelencia</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Abogada por la UNC y Magíster en Derecho Tributario (Universidad Austral).</p>
            </div>
            <div className="flex flex-col items-center border border-border bg-secondary p-7 text-center">
              <Award className="mb-5 h-9 w-9 text-primary" />
              <h3 className="mb-2 font-serif text-2xl font-medium text-primary">Atención personalizada</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Compromiso, cercanía y soluciones adaptadas a cada cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
