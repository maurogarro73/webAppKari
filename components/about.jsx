import { Scale, GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-8 text-center">Sobre mi</h2>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="leading-relaxed mb-6">
              Soy <strong>Kariana Lucía Alvarez Mendiara</strong>, abogada con más de 10 años de experiencia en el ejercicio
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#f5f7fa] rounded-lg">
              <Scale className="h-12 w-12 text-[#003366] mb-4" />
              <h3 className="font-bold text-[#003366] mb-2">+10 años de experiencia</h3>
              <p className="text-gray-600 text-sm">Trayectoria profesional y legado familiar en el ámbito jurídico.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#f5f7fa] rounded-lg">
              <GraduationCap className="h-12 w-12 text-[#003366] mb-4" />
              <h3 className="font-bold text-[#003366] mb-2">Formación de excelencia</h3>
              <p className="text-gray-600 text-sm">Abogada por la UNC y Magíster en Derecho Tributario (Universidad Austral).</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#f5f7fa] rounded-lg">
              <Award className="h-12 w-12 text-[#003366] mb-4" />
              <h3 className="font-bold text-[#003366] mb-2">Atención personalizada</h3>
              <p className="text-gray-600 text-sm">Compromiso, cercanía y soluciones adaptadas a cada cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
