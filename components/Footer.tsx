
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacte" className="bg-[#050505] pt-20 border-t border-[#C5A059]/20">
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Logo and About */}
          <div>
            <div className="text-2xl font-black gold-text mb-6">HAIR CLUB <span className="text-white">SALOU</span></div>
            <p className="text-gray-500 leading-relaxed mb-8">
              La destinació definitiva per a l'home modern a Salou. Compromesos amb l'excel·lència i el detall en cada servei.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Location and Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-8 border-b border-[#C5A059]/30 pb-2 inline-block">Localització</h3>
            <p className="text-gray-400 mb-2">Carrer de l'Elegància, 12</p>
            <p className="text-gray-400 mb-6">43840 Salou, Tarragona</p>
            <p className="text-white font-bold mb-1 underline decoration-[#C5A059] underline-offset-4">T. +34 977 00 00 00</p>
            <p className="text-gray-400">info@hairclubsalou.com</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-8 border-b border-[#C5A059]/30 pb-2 inline-block">Horaris</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Dilluns - Divendres</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dissabte</span>
                <span className="text-white">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Diumenge</span>
                <span className="text-gold-text italic font-bold">Tancat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Integration Placeholder */}
        <div className="w-full h-64 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10 mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11993.57863765416!2d1.1278270515136718!3d41.07720930335359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a149f11677c75b%3A0x6d1f05e94b415a78!2sSalou%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1sca!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; 2024 Hair Club Salou. Tots els drets reservats.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Avís Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacitat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
