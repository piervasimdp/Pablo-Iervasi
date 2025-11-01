import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Observatorio de Orientación Vocacional. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
