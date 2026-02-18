
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative">
            {/* Styled Image Frame like the bottom of reference */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000" 
                alt="Barber Shop Interior" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gold border accent from reference image */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-[#C5A059]"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1 bg-[#F1D39A]/20 text-[#C5A059] rounded-md text-xs font-bold uppercase tracking-widest mb-6">
              Sobre Nosaltres
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
              Dominant l'Art <br /> de la <span className="text-[#C5A059]">Barberia</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              A Hair Club Salou, no només tallem cabells; creem confiança. El nostre espai combina l'essència de la barberia tradicional amb un entorn de luxe modern on cada detall compta.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <span className="text-[#C5A059] font-bold">01.</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Entorn Confortable i Relaxant</h4>
                  <p className="text-gray-500">Dissenyat per a la teva màxima comoditat mentre gaudeixes d'un servei prèmium.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <span className="text-[#C5A059] font-bold">02.</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Mestratge Tècnic</h4>
                  <p className="text-gray-500">Barbers amb anys d'experiència internacional en talls i tractaments de barba.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
