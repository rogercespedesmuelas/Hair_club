import React from 'react';
import { Instagram } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1512690459411-b9245aed8ad5?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1534030347209-7147fd69a398?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1596728325608-f1f3e742132d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400"
];

const InstagramFeed: React.FC = () => {
    return (
        <section className="relative group">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden bg-black">
                        <img
                            src={img}
                            alt="Instagram"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 hover:opacity-100"
                        />
                        {/* Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity">
                            <Instagram className="text-white" size={32} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <a
                    href="https://www.instagram.com/hairclubsalou?igsh=eDFwbDM3amdyOTYx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto bg-white text-black px-8 py-3 rounded-full font-bold shadow-xl hover:bg-[#E5AE14] hover:text-white transition-colors flex items-center gap-2"
                >
                    <Instagram size={18} /> @hairclubsalou
                </a>
            </div>
        </section>
    );
};

export default InstagramFeed;
