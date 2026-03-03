import React from 'react';
import { ScrollReveal } from './ui/scroll-reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <ScrollReveal>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image Side with Orange Frame */}
            <div className="relative order-2 md:order-1">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
                  alt="Barbero trabajando"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Orange Frame Element */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-accent-orange rounded-lg z-0"></div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2">
              <span className="text-accent-orange font-medium tracking-wider uppercase text-sm">Sobre nosotros</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6 leading-tight">
                Somos los referentes en Salou
              </h2>
              <p className="text-black mb-6 leading-relaxed">
                Con más de 10 años de experiencia, nos enorgullece ofrecer cortes de precisión y un estilo inigualable. Nuestro equipo de barberos expertos está dedicado a ayudarte a lucir tu mejor versión cada día.
              </p>
              <p className="text-black mb-8 leading-relaxed">
                Definimos nuestro estilo por la calidad de nuestro servicio y la atención al detalle. Cada visita a Hair Club es una experiencia de lujo y relajación pensada exclusivamente para ti.
              </p>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
