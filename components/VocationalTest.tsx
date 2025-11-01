
import React, { useState } from 'react';
import { VOCATIONAL_QUESTIONS } from '../constants';
import { ProfileType, Answer } from '../types';

interface VocationalTestProps {
  onRegister: () => void;
}

const VocationalTest: React.FC<VocationalTestProps> = ({ onRegister }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ProfileType[]>([]);
  const [result, setResult] = useState<ProfileType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleAnswerClick = (answer: Answer) => {
    const newAnswers = [...answers, answer.profile];
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

    const finalResult = Object.keys(counts).reduce((a, b) =>
      counts[a as ProfileType] > counts[b as ProfileType] ? a : b
    ) as ProfileType;

    setResult(finalResult);
    setShowForm(true);
  };
  
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
        localStorage.setItem('vocationalUser', JSON.stringify({ name, email }));
        setIsRegistered(true);
        onRegister();
    }
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setShowForm(false);
    setName('');
    setEmail('');
    setIsRegistered(false);
  }

  const progress = (currentQuestionIndex / VOCATIONAL_QUESTIONS.length) * 100;
  
  return (
    <section id="test-vocacional" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-002f4b mb-4 font-['Montserrat',_sans-serif]">Test Vocacional Interactivo</h2>
        <p className="text-center text-lg text-0a1c26 max-w-2xl mx-auto mb-12">Respondé las siguientes preguntas para descubrir qué perfil se alinea más con tus intereses y habilidades.</p>
        
        <div className="max-w-4xl mx-auto bg-f4f9fb p-8 rounded-2xl shadow-lg border border-gray-200">
          {!result ? (
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                <div className="bg-00a0b0 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
              </div>
              <h3 className="text-2xl font-semibold text-002f4b mb-6 text-center">
                {VOCATIONAL_QUESTIONS[currentQuestionIndex].text}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VOCATIONAL_QUESTIONS[currentQuestionIndex].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    className="w-full bg-white text-left p-4 rounded-lg border-2 border-66c7d9 text-0a1c26 hover:bg-66c7d9 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-002f4b mb-4 font-['Montserrat',_sans-serif]">¡Resultado Obtenido!</h3>
              <div className="bg-00a0b0 text-white p-6 rounded-lg mb-6 inline-block">
                <p className="text-lg">Tu perfil orientativo es:</p>
                <p className="text-4xl font-bold">{result}</p>
              </div>

              {isRegistered ? (
                 <div>
                    <h4 className="text-2xl font-semibold text-002f4b mt-8 mb-4">¡Gracias por registrarte, {name}!</h4>
                    <p className="text-lg mb-6">Tus resultados han sido guardados. ¡Ya podés acceder a nuestro merchandising exclusivo!</p>
                    <a href="#merchandising" className="bg-002f4b hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                      Ver Merchandising
                    </a>
                    <button onClick={resetTest} className="ml-4 text-00a0b0 font-semibold">
                      Realizar el test de nuevo
                    </button>
                 </div>
              ) : (
                <div className="mt-8 max-w-md mx-auto">
                    <h4 className="text-xl font-semibold text-002f4b mb-4">Registrate para guardar tus resultados y acceder a beneficios exclusivos.</h4>
                    <form onSubmit={handleRegistration} className="flex flex-col gap-4">
                        <input 
                            type="text"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-00a0b0"
                        />
                         <input 
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-00a0b0"
                        />
                        <button type="submit" className="bg-002f4b hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                           Guardar y ver merchandising
                        </button>
                    </form>
                    <button onClick={resetTest} className="mt-6 text-sm text-gray-600 hover:text-002f4b">
                        Omitir y realizar el test de nuevo
                    </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VocationalTest;
