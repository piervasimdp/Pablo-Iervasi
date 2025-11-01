import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// =================================================================
// TYPES
// =================================================================
enum ProfileType {
  Creative = 'Perfil Creativo',
  Social = 'Perfil Social',
  Technical = 'Perfil Técnico',
  Analytical = 'Perfil Analítico',
}

interface Answer {
  text: string;
  profile: ProfileType;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface Career {
    name: string;
    institutions: { name: string; url: string; }[];
}

interface CareerArea {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    careers: Career[];
}


// =================================================================
// CONSTANTS
// =================================================================
const VOCATIONAL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'En tu tiempo libre, ¿qué actividad disfrutás más?',
    answers: [
      { text: 'Dibujar, escribir o tocar un instrumento.', profile: ProfileType.Creative },
      { text: 'Organizar eventos o participar en voluntariado.', profile: ProfileType.Social },
      { text: 'Armar y desarmar aparatos, o programar.', profile: ProfileType.Technical },
      { text: 'Resolver acertijos, leer sobre ciencia o investigar.', profile: ProfileType.Analytical },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de problema te motiva a encontrar una solución?',
    answers: [
      { text: 'Cómo comunicar una idea de forma original.', profile: ProfileType.Creative },
      { text: 'Cómo mejorar la vida de una comunidad.', profile: ProfileType.Social },
      { text: 'Cómo hacer que un sistema funcione más eficientemente.', profile: ProfileType.Technical },
      { text: 'Cómo descifrar un patrón complejo en datos.', profile: ProfileType.Analytical },
    ],
  },
  {
    id: 3,
    text: 'A la hora de trabajar en un proyecto, ¿qué rol preferís?',
    answers: [
      { text: 'Generar las ideas y el concepto visual.', profile: ProfileType.Creative },
      { text: 'Coordinar al equipo y asegurar que todos colaboren.', profile: ProfileType.Social },
      { text: 'Construir el prototipo y encargarme de la parte técnica.', profile: ProfileType.Technical },
      { text: 'Analizar la información y planificar la estrategia.', profile: ProfileType.Analytical },
    ],
  },
  {
    id: 4,
    text: '¿Qué materia o área del secundario te resultaba más interesante?',
    answers: [
      { text: 'Arte, Literatura o Música.', profile: ProfileType.Creative },
      { text: 'Psicología, Historia o Sociología.', profile: ProfileType.Social },
      { text: 'Tecnología, Informática o Taller.', profile: ProfileType.Technical },
      { text: 'Matemáticas, Física o Química.', profile: ProfileType.Analytical },
    ],
  },
  {
    id: 5,
    text: 'Imaginá tu ambiente de trabajo ideal. ¿Cómo sería?',
    answers: [
      { text: 'Un estudio o agencia con libertad para crear.', profile: ProfileType.Creative },
      { text: 'Una oficina colaborativa, una escuela o un hospital.', profile: ProfileType.Social },
      { text: 'Un laboratorio, un taller o una empresa de tecnología.', profile: ProfileType.Technical },
      { text: 'Una biblioteca, un centro de investigación o una consultora.', profile: ProfileType.Analytical },
    ],
  },
  {
    id: 6,
    text: '¿Qué habilidad te gustaría desarrollar más en el futuro?',
    answers: [
      { text: 'Mi capacidad de expresión artística.', profile: ProfileType.Creative },
      { text: 'Mi empatía y mis habilidades de comunicación.', profile: ProfileType.Social },
      { text: 'Mis conocimientos sobre herramientas y software.', profile: ProfileType.Technical },
      { text: 'Mi pensamiento lógico y mi capacidad de análisis.', profile: ProfileType.Analytical },
    ],
  },
];


// =================================================================
// ICONS
// =================================================================
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="assets/logo.jpg"
    alt="Logo del Observatorio de Orientación Vocacional"
    className={className}
    aria-label="Logo del Observatorio de Orientación Vocacional"
  />
);

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


// =================================================================
// COMPONENTS
// =================================================================

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Test Vocacional', href: '#test-vocacional' },
    { name: 'Carreras', href: '#carreras' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header id="inicio" className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#inicio" aria-label="Volver al inicio" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                <Logo className="h-16 w-16" />
              </a>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-24 pb-8 px-4">
           <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-xl font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

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

const VocationalTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ProfileType[]>([]);
  const [result, setResult] = useState<ProfileType | null>(null);

  const handleAnswer = (profile: ProfileType) => {
    const newAnswers = [...answers, profile];
    setAnswers(newAnswers);

    if (currentQuestionIndex < VOCATIONAL_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };
  
  const calculateResult = (finalAnswers: ProfileType[]) => {
    const counts = finalAnswers.reduce((acc, profile) => {
      acc[profile] = (acc[profile] || 0) + 1;
      return acc;
    }, {} as Record<ProfileType, number>);

    const dominantProfile = Object.keys(counts).reduce((a, b) => 
      counts[a as ProfileType] > counts[b as ProfileType] ? a : b
    ) as ProfileType;

    setResult(dominantProfile);
  };
  
  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  }

  const renderResult = () => {
    if (!result) return null;

    let description = '';
    switch(result) {
        case ProfileType.Creative:
            description = 'Tenés una mente innovadora y te apasiona crear. Carreras en diseño, arte, música, escritura y comunicación podrían ser ideales para vos.';
            break;
        case ProfileType.Social:
            description = 'Disfrutás ayudando y conectando con otros. Carreras en psicología, educación, trabajo social y recursos humanos podrían interesarte.';
            break;
        case ProfileType.Technical:
            description = 'Te encanta entender cómo funcionan las cosas y construir soluciones. La ingeniería, programación, y carreras técnicas son un buen camino.';
            break;
        case ProfileType.Analytical:
            description = 'Sos una persona curiosa, que se basa en datos y la lógica. Carreras en ciencias, finanzas, investigación y análisis de datos serían perfectas.';
            break;
    }

    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Tu perfil dominante es:</h3>
        <h4 className="text-3xl font-bold text-blue-600 mb-6">{result}</h4>
        <p className="text-lg mb-8 max-w-lg mx-auto">{description}</p>
        <button
          onClick={restartTest}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-all"
        >
          Hacer el test de nuevo
        </button>
      </div>
    );
  };
  
  const renderQuestion = () => {
    const question = VOCATIONAL_QUESTIONS[currentQuestionIndex];
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Pregunta {currentQuestionIndex + 1} de {VOCATIONAL_QUESTIONS.length}
        </p>
        <h3 className="text-2xl font-bold mb-6">{question.text}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.profile)}
              className="w-full text-left bg-gray-100 p-4 rounded-lg hover:bg-blue-100 hover:ring-2 hover:ring-blue-500 transition-all"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="test-vocacional" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Test Vocacional</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Respondé unas preguntas para descubrir tu perfil vocacional.
          </p>
        </div>
        <div className="flex justify-center">
            {result ? renderResult() : renderQuestion()}
        </div>
      </div>
    </section>
  );
};

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

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            ¿Tenés dudas o sugerencias? ¡Nos encantaría escucharte!
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-all"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Observatorio de Orientación Vocacional. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

// =================================================================
// APP ROOT
// =================================================================
function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <VocationalTest />
        <Careers />
        <Resources />
        <Merchandise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// =================================================================
// RENDERER
// =================================================================
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
