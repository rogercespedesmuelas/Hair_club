import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-16 max-w-4xl mx-auto">

          {/* Column 1: Schedule & Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Horario y Contacto</h3>
            <div className="text-gray-900 leading-relaxed">
              <p className="font-bold text-lg mb-4">Abierto TODOS LOS DÍAS: 10:00 - 22:00h</p>
              <p className="text-lg">
                Contacto: <a href="tel:+34642328218" className="font-bold hover:text-[#E5AE14] transition-colors underline decoration-[#E5AE14]/30 underline-offset-4">+34 642 32 82 18</a>
              </p>
            </div>
          </div>

          {/* Column 2: Location & Map CTA */}
          <div>
            <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Ubicación</h3>
            <div className="text-gray-900 mb-8">
              <p className="mb-6 text-lg leading-relaxed">
                Carrer de Barcelona, 45, <br />
                43840 Salou, Tarragona
              </p>
              <a
                href="https://maps.google.com/?q=Carrer+de+Barcelona,+45,+43840+Salou,+Tarragona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-10 py-3 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Cómo llegar
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} HAIR CLUB SALOU. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
