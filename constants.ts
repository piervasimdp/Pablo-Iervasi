
import { Question, ProfileType } from './types';

export const VOCATIONAL_QUESTIONS: Question[] = [
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
