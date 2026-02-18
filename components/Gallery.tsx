
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1593702295094-ada74bc4a39d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621605815841-2dddb39274a8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Inspiració & <span className="gold-text">Entorn</span></h2>
        </div>
        <div className="hidden md:block">
          <p className="text-gray-500 uppercase tracking-widest text-xs">#HairClubSalou</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {images.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <div className="w-12 h-12 border-2 border-[#C5A059] flex items-center justify-center">
                  <span className="text-[#C5A059] text-2xl">+</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
