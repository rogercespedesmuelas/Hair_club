
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="sobre-nosaltres">
          <About />
        </section>
        <section id="serveis" className="bg-[#0a0a0a]">
          <Services />
        </section>
        <section id="galeria">
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
