import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Juan Pérez",
        role: "Cliente habitual",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "El mejor corte de pelo que he tenido. La atención al detalle es increíble y el personal es muy amable."
    },
    {
        name: "Miguel Sánchez",
        role: "Empresario",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        text: "Servicio y ambiente fantásticos. Recomiendo Hair Club a cualquiera que busque una experiencia premium."
    },
    {
        name: "David Rodríguez",
        role: "Artista",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "Profesional, limpio y con estilo. Siempre salgo sintiéndome genial. La mejor barbería de la ciudad."
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-6 md:px-12 text-center">

                <span className="text-accent-orange font-medium tracking-wider uppercase text-sm">Testimonios</span>
                <h2 className="text-4xl font-bold text-white mt-2 mb-16">Lo que dicen nuestros clientes</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-accent-orange/30 transition-colors text-left">
                            <div className="flex gap-1 text-accent-orange mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" strokeWidth={0} />)}
                            </div>
                            <p className="text-gray-300 mb-8 italic leading-relaxed">"{item.text}"</p>

                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-accent-orange/50" />
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <span className="text-gray-500 text-sm">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
