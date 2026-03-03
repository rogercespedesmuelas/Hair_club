"use client";
import React from "react"
import { Star } from "lucide-react"
import { LiquidCard, CardContent } from "./liquid-glass-card"
import { Marquee } from "./marquee"
import { ScrollReveal } from "./scroll-reveal"

const testimonials = [
    // ... (omitting for brevity)
    {
        name: "Cliente Habitual",
        role: "Premium Member",
        content: "El mejor corte de pelo que he tenido. La atención al detalle es increíble y el personal es muy amable.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        name: "Empresario",
        role: "Cliente VIP",
        content: "Servicio y ambiente fantásticos. Recomiendo Hair Club a cualquiera que busque una experiencia premium.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        name: "Artista",
        role: "Nuevo Cliente",
        content: "Profesional, limpio y con estilo. Siempre salgo sintiéndome genial. La mejor barbería de Salou.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5,
    },
];

export function TestimonialsMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white py-24">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-black uppercase tracking-widest mb-16 px-6 text-center">
                    Testimonios
                </h2>

                <div className="w-full relative px-4">
                    <Marquee pauseOnHover speed="normal" className="py-12">
                        {testimonials.map((testimonial, index) => (
                            <LiquidCard key={index} className="mx-6 w-80 md:w-96 max-w-full">
                                <CardContent className="p-8">
                                    <div className="mb-6 flex items-center space-x-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="h-14 w-14 object-cover rounded-full shadow-md border-2 border-white"
                                        />
                                        <div>
                                            <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="mb-6 text-black text-base italic leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-[#E5AE14] text-[#E5AE14]" />
                                        ))}
                                    </div>
                                </CardContent>
                            </LiquidCard>
                        ))}
                    </Marquee>

                    {/* Faders */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </ScrollReveal>
        </div>
    );
}
