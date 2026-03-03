import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import { TestimonialsMarquee } from './components/ui/testimonials-marquee';
import InstagramFeed from './components/Instagram';
import Footer from './components/Footer';
import './src/index.css';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-black bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <TestimonialsMarquee />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default App;
