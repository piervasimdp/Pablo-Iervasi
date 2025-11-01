
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-002f4b text-f4f9fb min-h-[60vh] md:min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2&random=1')" }}
      ></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat',_sans-serif] mb-4 text-shadow-lg leading-tight">
          Encontrá tu rumbo.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-66c7d9">
          Elegir tu futuro también es una aventura.
        </p>
        <p className="max-w-3xl mx-auto mb-10 text-lg">
          El Observatorio de Orientación Vocacional 2025 es una plataforma gratuita diseñada para ayudarte a explorar tus pasiones y habilidades, conectándote con las mejores oportunidades educativas en Mar del Plata.
        </p>
        <a 
          href="#test-vocacional"
          className="bg-00a0b0 hover:bg-66c7d9 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-110 inline-block"
        >
          Descubrí tu vocación
        </a>
      </div>
    </section>
  );
};

export default Hero;
