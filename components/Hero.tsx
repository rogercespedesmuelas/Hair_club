
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image - Styled like reference (Dark, subtle texture/photo) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000')`,
          filter: 'grayscale(100%) brightness(50%)'
        }}
      ></div>

      {/* Blue Glow Detail (from user's interior request, but subtle like reference style) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30 blur-sm shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading - Huge and bold as per reference */}
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 text-balance">
          La Millor <br /> 
          <span className="text-white">Barberia</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Benvingut a Hair Club Salou, on la tradició es troba amb l'estil contemporani. El nostre equip d'experts es dedica a oferir serveis de cura personal de primer nivell adaptats a les teves necessitats.
        </p>
        
        {/* Buttons and Trustpilot */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-10 py-4 btn-pill font-bold text-lg hover:bg-[#C5A059] hover:text-white transition-all">
              Contacta'ns Ara
            </button>
            <div className="flex items-center gap-3 px-6">
              <div className="flex items-center">
                 <span className="text-blue-400 text-2xl font-bold">★</span>
                 <span className="ml-2 font-bold text-white">Trustpilot</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="w-5 h-5 bg-[#C5A059] flex items-center justify-center text-[10px] text-black">★</span>
                ))}
              </div>
              <span className="text-white/40 text-sm ml-2">4.9 de 5 basat en 800 ressenyes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Strip / Brands - Exact replica of reference bottom bar */}
      <div className="absolute bottom-0 w-full bg-black/50 border-t border-white/5 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black italic tracking-tighter">KANBA</div>
            <div className="text-2xl font-black italic tracking-tighter">GREENISH</div>
            <div className="text-2xl font-black italic tracking-tighter underline">FACEBOOK</div>
            <div className="text-2xl font-black italic tracking-tighter">ZOOTV</div>
            <div className="text-2xl font-black italic tracking-tighter">WAVELESS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
