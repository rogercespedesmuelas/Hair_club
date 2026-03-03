import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { WordPullUp } from './ui/word-pull-up';
import { Typewriter } from './ui/typewriter';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/baixa.jpeg')] bg-cover bg-center bg-scroll lg:bg-fixed"
        style={{ zIndex: -10 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 pt-20">
        <div className="flex flex-col items-center justify-center text-center w-full mx-auto max-w-4xl">

          {/* Brand & CTA */}
          <div className="flex flex-col items-center">

            {/* Animated heading */}
            <WordPullUp
              words="HAIR CLUB"
              className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight uppercase"
            />

            <div className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 min-h-[80px] leading-relaxed">
              <Typewriter
                segments={[
                  { text: "Cuidamos tu estilo. Cuidado masculino con barberos expertos en el centro de Salou. " },
                  { text: "Abierto todos los días del año", bold: true },
                  { text: ", de 10:00 a 22:00 h" }
                ]}
                speed={30}
                loop={false}
                cursorChar="_"
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:+34642328218"
                className="inline-flex items-center justify-center px-10 py-3 border border-white/40 text-white rounded-full font-medium text-lg tracking-wide transition-all duration-300 hover:bg-white/10"
              >
                Reserva tu cita
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
