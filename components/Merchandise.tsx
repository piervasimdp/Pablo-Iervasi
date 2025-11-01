import React from 'react';

const Merchandise: React.FC = () => {
  return (
    <section id="tienda" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Tienda</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Llevá con vos la inspiración para encontrar tu camino.
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700">Próximamente... encontrarás productos diseñados para acompañarte en tu búsqueda vocacional.</p>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
