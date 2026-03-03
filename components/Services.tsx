import React from 'react';
import { Scissors, Zap, Award, User } from 'lucide-react';
import { ScrollReveal } from './ui/scroll-reveal';

const services = [
  // ... (omitting for brevity in the tool call but ensuring correct logic)
  {
    icon: <Scissors />,
    title: "Corte de pelo",
    desc: "Cortes de precisión adaptados a la forma de tu rostro y preferencias de estilo."
  },
  {
    icon: <Zap />,
    title: "Arreglo de barba",
    desc: "Perfilado y mantenimiento experto para todos los estilos de barba."
  },
  {
    icon: <Award />,
    title: "Coloración",
    desc: "Servicios de coloración premium utilizando productos de primer nivel."
  },
  {
    icon: <User />,
    title: "Estilismo",
    desc: "Peinados profesionales para ocasiones especiales o para tu día a día."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white text-black relative">
      <ScrollReveal>
        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mt-2 text-black">Qué ofrecemos</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Service List */}
            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100">
                  <div className="text-accent-orange mb-4 w-10 h-10">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Large Image */}
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800"
                alt="Muestrario de servicios"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Services;
