import React, { useState } from 'react';
import { VOCATIONAL_QUESTIONS } from '../constants';
import { ProfileType } from '../types';

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

export default VocationalTest;
