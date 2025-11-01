import React from 'react';

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recursos Adicionales</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Herramientas y guías para potenciar tu búsqueda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Guías de Carreras</h3>
            <p>Explorá en detalle las carreras que te interesan, su plan de estudios y salida laboral.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Charlas con Profesionales</h3>
            <p>Accedé a entrevistas con profesionales de distintas áreas que cuentan su experiencia.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Talleres Vocacionales</h3>
            <p>Participá de nuestros talleres online y presenciales para profundizar en tu autoconocimiento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
