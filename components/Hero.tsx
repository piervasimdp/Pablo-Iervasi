import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Descubrí tu vocación.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Encontrá la carrera que te apasione con nuestro test de orientación vocacional gratuito.
        </p>
        <a
          href="#test-vocacional"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all text-lg"
        >
          Comenzar Test
        </a>
      </div>
    </section>
  );
};

export default Hero;
