import React from 'react';
import Logo from './icons/Logo';

const Header: React.FC = () => {
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
    <header id="inicio" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" aria-label="Volver al inicio">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
