
import React, { useState } from 'react';
import { CareerArea } from '../types';

const ArtIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
);
const TechIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
);
const SocialIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 00-1.13-1.897L2.25 8.25l.8-2.685a4.5 4.5 0 001.13-1.897L5.25 2.25l2.685.8a4.5 4.5 0 001.897 1.13l2.685-.8.8 2.685a4.5 4.5 0 001.13 1.897L18 8.25l-.8 2.685a4.5 4.5 0 00-1.13 1.897l-1.5 4.5-.8-2.685a4.5 4.5 0 00-1.13-1.897L8.25 8.25 7.5 5.572" /></svg>
);
const HealthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
);
const EducationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>
);


const CAREER_DATA: CareerArea[] = [
    {
        title: 'Arte y Comunicación',
        icon: ArtIcon,
        careers: [
            { name: 'Arquitectura', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
            { name: 'Diseño Gráfico', institutions: [{ name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }, {name: 'Instituto IDRA', url: 'https://www.institutoidra.edu.ar'}] },
            { name: 'Comunicación Social', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }, { name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }] },
            { name: 'Cine y Artes Audiovisuales', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
        ],
    },
    {
        title: 'Tecnología',
        icon: TechIcon,
        careers: [
            { name: 'Ingeniería en Informática', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }, { name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }] },
            { name: 'Tecnicatura en Programación', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }, {name: 'Instituto Superior Bristol', url: 'https://www.institutobristol.edu.ar'}] },
            { name: 'Ingeniería Electrónica', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
        ],
    },
    {
        title: 'Ciencias Sociales',
        icon: SocialIcon,
        careers: [
            { name: 'Abogacía', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }, { name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }, { name: 'Universidad Atlántida', url: 'https://www.atlantida.edu.ar' }] },
            { name: 'Psicología', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
            { name: 'Sociología', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
            { name: 'Turismo', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
        ],
    },
    {
        title: 'Salud',
        icon: HealthIcon,
        careers: [
            { name: 'Medicina', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }, { name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }] },
            { name: 'Enfermería', institutions: [{ name: 'UNMDP', url: 'https://www.mdp.edu.ar' }] },
            { name: 'Kinesiología y Fisiatría', institutions: [{ name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }] },
        ],
    },
    {
        title: 'Educación',
        icon: EducationIcon,
        careers: [
            { name: 'Profesorado de Educación Física', institutions: [{ name: 'ISFD Nº 19', url: 'https://isfd19-bue.infd.edu.ar' }] },
            { name: 'Profesorado de Educación Inicial', institutions: [{ name: 'ISFD Nº 19', url: 'https://isfd19-bue.infd.edu.ar' }, {name: 'Instituto IDRA', url: 'https://www.institutoidra.edu.ar'}] },
            { name: 'Ciencias de la Educación', institutions: [{ name: 'Universidad FASTA', url: 'https://www.ufasta.edu.ar' }] },
        ],
    },
];

const AccordionItem: React.FC<{ area: CareerArea; isOpen: boolean; onClick: () => void }> = ({ area, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <h2>
            <button
                type="button"
                className="flex items-center justify-between w-full p-6 font-semibold text-left text-002f4b bg-f4f9fb hover:bg-gray-100 transition-colors duration-300"
                onClick={onClick}
            >
                <div className="flex items-center gap-4">
                    <area.icon className="w-8 h-8 text-00a0b0" />
                    <span className="text-xl">{area.title}</span>
                </div>
                <svg className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-6 bg-white">
                <ul className="space-y-4">
                    {area.careers.map((career) => (
                        <li key={career.name} className="p-4 bg-gray-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <span className="font-medium text-0a1c26 mb-2 sm:mb-0">{career.name}</span>
                            <div className="flex flex-wrap gap-2">
                                {career.institutions.map((inst) => (
                                    <a key={inst.name} href={inst.url} target="_blank" rel="noopener noreferrer" className="text-sm bg-66c7d9 text-white py-1 px-3 rounded-full hover:bg-00a0b0 transition-colors duration-200">
                                        {inst.name}
                                    </a>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Careers: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <section id="carreras" className="py-20 bg-f4f9fb">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-002f4b mb-4 font-['Montserrat',_sans-serif]">Carreras y Universidades en Mar del Plata</h2>
                <p className="text-center text-lg text-0a1c26 max-w-3xl mx-auto mb-12">Explorá las opciones académicas disponibles en la ciudad, organizadas por área de interés para facilitar tu búsqueda.</p>

                <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    {CAREER_DATA.map((area, index) => (
                        <AccordionItem 
                            key={index}
                            area={area}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
