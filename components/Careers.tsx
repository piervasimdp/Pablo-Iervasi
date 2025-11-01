import React from 'react';
import { CareerArea, ProfileType } from '../types';

// Placeholder icons
const CreativeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);
const SocialIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const TechnicalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const AnalyticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CAREER_DATA: CareerArea[] = [
    {
        title: ProfileType.Creative,
        icon: CreativeIcon,
        careers: [
            { name: 'Diseño Gráfico', institutions: [{name: 'UBA', url: '#'}, {name: 'UP', url: '#'}] },
            { name: 'Cine y Dirección Audiovisual', institutions: [{name: 'FUC', url: '#'}] },
            { name: 'Música', institutions: [{name: 'UNA', url: '#'}] },
        ],
    },
    {
        title: ProfileType.Social,
        icon: SocialIcon,
        careers: [
            { name: 'Psicología', institutions: [{name: 'UBA', url: '#'}, {name: 'UCA', url: '#'}] },
            { name: 'Trabajo Social', institutions: [{name: 'UBA', url: '#'}] },
            { name: 'Ciencias de la Educación', institutions: [{name: 'UBA', url: '#'}] },
        ],
    },
    {
        title: ProfileType.Technical,
        icon: TechnicalIcon,
        careers: [
            { name: 'Ingeniería en Sistemas', institutions: [{name: 'UTN', url: '#'}, {name: 'ITBA', url: '#'}] },
            { name: 'Analista de Sistemas', institutions: [{name: 'ORT', url: '#'}] },
            { name: 'Desarrollo de Videojuegos', institutions: [{name: 'DaVinci', url: '#'}] },
        ],
    },
    {
        title: ProfileType.Analytical,
        icon: AnalyticalIcon,
        careers: [
            { name: 'Ciencia de Datos', institutions: [{name: 'UBA', url: '#'}, {name: 'ITBA', url: '#'}] },
            { name: 'Economía', institutions: [{name: 'UBA', url: '#'}] },
            { name: 'Física', institutions: [{name: 'UBA', url: '#'}] },
        ],
    },
];

const Careers: React.FC = () => {
    return (
        <section id="carreras" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Explorá Carreras por Perfil</h2>
                    <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                        Descubrí algunas de las carreras que se alinean con cada perfil vocacional.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CAREER_DATA.map((area) => (
                        <div key={area.title} className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <area.icon className="h-8 w-8 text-blue-600 mr-3" />
                                <h3 className="text-xl font-bold">{area.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {area.careers.map((career) => (
                                    <li key={career.name}>
                                        <p className="font-semibold">{career.name}</p>
                                        <div className="flex flex-wrap text-sm text-gray-600">
                                            {career.institutions.map((inst, index) => (
                                                <a href={inst.url} key={inst.name} className="mr-2 hover:underline">
                                                    {inst.name}{index < career.institutions.length -1 && ','}
                                                </a>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
