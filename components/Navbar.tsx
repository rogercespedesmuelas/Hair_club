import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-12 flex justify-between items-center text-white">
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">Hair</span> <span className="text-[#E5AE14]">Club</span> <span className="text-white">Salou</span>
      </div>

      <a
        href="tel:+34642328218"
        className="hidden md:block border border-white/30 px-6 py-2 rounded text-sm hover:bg-white hover:text-black transition-all"
      >
        Reserva tu cita
      </a>
    </nav>
  );
};

export default Navbar;
