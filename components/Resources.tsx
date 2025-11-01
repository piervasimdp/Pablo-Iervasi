import React from 'react';

interface ResourceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-002f4b mb-3 font-['Montserrat',_sans-serif] group-hover:text-00a0b0 transition-colors duration-300">{title}</h3>
      <p className="text-0a1c26 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="py-20 bg-00a0b0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-f4f9fb mb-4 font-['Montserrat',_sans-serif]">Recursos y Guías</h2>
        <p className="text-center text-lg text-f4f9fb max-w-3xl mx-auto mb-12">Artículos y consejos prácticos para acompañarte en tu proceso de autoconocimiento y toma de decisiones sobre tu futuro profesional.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ResourceCard
            imageSrc="https://picsum.photos/400/300?random=10"
            title="Cómo elegir tu carrera sin estrés"
            description="Aprendé a manejar la presión y la ansiedad en una de las decisiones más importantes de tu vida. Te damos claves para un proceso tranquilo y consciente."
          />
          <ResourceCard
            imageSrc="https://picsum.photos/400/300?random=11"
            title="Descubrí tus fortalezas ocultas"
            description="A veces, nuestros mayores talentos no son tan evidentes. Explorá técnicas de autoevaluación para identificar esas habilidades que te hacen único."
          />
          <ResourceCard
            imageSrc="https://picsum.photos/400/300?random=12"
            title="Historias que inspiran: encontrá tu vocación"
            description="Leé los testimonios de estudiantes de Mar del Plata que, como vos, enfrentaron dudas y encontraron su camino. Sus experiencias pueden iluminar el tuyo."
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;