
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with specific icon style */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white uppercase">HairClub</span>
        </div>
        
        {/* Navigation centered */}
        <div className="hidden lg:flex items-center space-x-10">
          {['Inici', 'Sobre Nosaltres', 'Serveis', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[15px] font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action button right */}
        <div className="hidden md:block">
          <a 
            href="#contacte"
            className="bg-[#C5A059] text-black px-7 py-3 btn-pill text-sm font-bold hover:scale-105 transition-transform inline-block"
          >
            Reservar Cita
          </a>
        </div>

        {/* Mobile menu icon */}
        <button className="lg:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
