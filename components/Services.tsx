
import React from 'react';

const ServiceItem: React.FC<{ title: string; price: string; description: string }> = ({ title, price, description }) => (
  <div className="group p-10 bg-[#111] border border-white/5 hover:border-[#C5A059]/30 transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-[#C5A059] transition-colors">{title}</h3>
      <div className="w-10 h-10 border border-[#C5A059]/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
    </div>
    <p className="text-gray-500 mb-8 font-light leading-relaxed">{description}</p>
    <div className="text-3xl font-black gold-text">{price}</div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold uppercase tracking-[0.3em] text-sm block mb-4">La nostra carta</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Serveis Prèmium</h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            Utilitzem exclusivament productes d'alta gamma per garantir la salut del teu cabell i pell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          <ServiceItem 
            title="Tall Signature" 
            price="30€" 
            description="Tall personalitzat, assessorament d'imatge, rentat amb massatge cranial i acabat professional."
          />
          <ServiceItem 
            title="Arranjament de Barba" 
            price="22€" 
            description="Perfilat precís, tractament d'olis essencials i hidratació profunda de la pell."
          />
          <ServiceItem 
            title="L'Experiència Total" 
            price="55€" 
            description="El nostre servei estrella: Tall de cabell, cura de barba completa i tractament facial relaxant."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
