import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre el Observatorio</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Tu guía en el camino hacia la elección profesional.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
          <p>
            El <strong>Observatorio de Orientación Vocacional</strong> es una iniciativa dedicada a acompañar a estudiantes y a cualquier persona en el proceso de descubrir sus intereses, habilidades y pasiones para tomar decisiones informadas sobre su futuro académico y profesional.
          </p>
          <p>
            Creemos que una buena elección vocacional es clave para el desarrollo personal y la satisfacción. Por eso, ofrecemos herramientas, recursos y un test vocacional diseñado por expertos para ayudarte a explorar las distintas áreas del conocimiento y del mercado laboral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
