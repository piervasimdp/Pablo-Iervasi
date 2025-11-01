import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="assets/logo.jpg"
    alt="Logo del Observatorio de Orientación Vocacional"
    className={className}
    aria-label="Logo del Observatorio de Orientación Vocacional"
  />
);

export default Logo;
