import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ui/scroll-reveal';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 bg-black text-white">
            <ScrollReveal>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Left Column - Fidelity Card Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="/fidelity-card.jpg"
                                    alt="Tarjeta de fidelidad Hair Club"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div>
                            <h3 className="text-[#E5AE14] font-medium uppercase tracking-wider mb-4">
                                Programa de fidelidad
                            </h3>

                            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                                Ahorra mientras cuidas tu estilo
                            </h2>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Porque tu lealtad merece ser recompensada. Hemos diseñado un plan simple:
                                cuantas más veces vienes, menos pagas. Sin letra pequeña.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 text-[#E5AE14]">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-200">Descuentos directos en tu 3ª y 6ª visita.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 text-[#E5AE14]">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-200">Un 50% de descuento en tu 10º corte.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 text-[#E5AE14]">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-200">Empieza a sumar puntos desde hoy mismo.</span>
                                </li>
                            </ul>

                            <p className="text-gray-400 text-sm mt-8">
                                * Pídela gratis en recepción en tu próxima visita.
                            </p>
                        </div>

                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default WhyChooseUs;
