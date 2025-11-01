import React from 'react';

const InfoCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-66c7d9 text-white mb-6 mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-002f4b mb-3 text-center font-['Montserrat',_sans-serif]">{title}</h3>
    <p className="text-center text-0a1c26 leading-relaxed">{text}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-00a0b0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-f4f9fb mb-12 font-['Montserrat',_sans-serif]">Quiénes Somos</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <InfoCard
            title="Misión"
            text="Acompañar a los jóvenes de Mar del Plata en la crucial etapa de elección vocacional, brindando herramientas y recursos para una transición exitosa al mundo superior."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
          />
          <InfoCard
            title="Visión"
            text="Ser el referente principal de orientación vocacional en la región, promoviendo decisiones informadas y conscientes que impulsen el desarrollo personal y profesional de los estudiantes."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
          <InfoCard
            title="Valores"
            text="Nos guiamos por el acompañamiento, la empatía, una orientación profesional y el respeto absoluto por la libertad de elección de cada estudiante."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default About;