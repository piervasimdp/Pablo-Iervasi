import React, { useState, useRef } from 'react';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#quienes-somos', text: 'Quiénes somos' },
    { href: '#test-vocacional', text: 'Test Vocacional' },
    { href: '#carreras', text: 'Carreras' },
    { href: '#recursos', text: 'Recursos' },
    { href: '#contacto', text: 'Contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // The header is sticky, so we need to account for its height to prevent content from being hidden underneath it.
        const headerHeight = headerRef.current?.offsetHeight || 70; // Use a fallback height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // Close the mobile menu after a link is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header ref={headerRef} className="bg-002f4b text-f4f9fb shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 cursor-pointer">
          <Logo className="h-10 w-10" />
          <span className="hidden sm:block text-lg font-bold font-['Montserrat',_sans-serif]">
            Observatorio de Orientación Vocacional
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-f4f9fb hover:text-66c7d9 transition-colors duration-300 font-medium cursor-pointer"
            >
              {link.text}
            </a>
          ))}
        </nav>
        <a 
          href="#test-vocacional" 
          onClick={(e) => handleNavClick(e, '#test-vocacional')}
          className="hidden md:block bg-00a0b0 hover:bg-66c7d9 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          Descubrí tu vocación
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-002f4b">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-f4f9fb hover:text-66c7d9 transition-colors duration-300 w-full text-center"
              >
                {link.text}
              </a>
            ))}
             <a 
                href="#test-vocacional" 
                onClick={(e) => handleNavClick(e, '#test-vocacional')}
                className="w-full text-center bg-00a0b0 hover:bg-66c7d9 text-white font-bold mt-2 py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105"
             >
                Descubrí tu vocación
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;