
import React from 'react';
import Logo from './icons/Logo';

interface MerchItemProps {
  imageSrc: string;
  name: string;
}

const MerchItem: React.FC<MerchItemProps> = ({ imageSrc, name }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group text-center">
        <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
            <img src={imageSrc} alt={name} className="max-w-full max-h-full object-contain p-4"/>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold text-002f4b">{name}</h3>
        </div>
    </div>
);

const Merchandise: React.FC = () => {
  return (
    <section id="merchandising" className="py-20 bg-002f4b text-f4f9fb">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-00a0b0 p-2 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
        </div>
        <h2 className="text-4xl font-bold mb-4 font-['Montserrat',_sans-serif]">Merchandising Exclusivo 🎁</h2>
        <p className="text-lg text-66c7d9 max-w-2xl mx-auto mb-12">
          ¡Felicitaciones por completar el test! Tu vocación también se viste. Aquí tenés acceso al merchandising exclusivo del Observatorio.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <MerchItem imageSrc="https://picsum.photos/id/1080/400/400" name="Remera Oficial" />
            <MerchItem imageSrc="https://picsum.photos/id/1025/400/400" name="Taza Brújula" />
            <MerchItem imageSrc="https://picsum.photos/id/24/400/400" name="Cuaderno de Ideas" />
            <MerchItem imageSrc="https://picsum.photos/id/20/400/400" name="Pack de Stickers" />
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
