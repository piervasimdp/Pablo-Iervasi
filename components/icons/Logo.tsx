import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    aria-label="Logo del Observatorio de Orientación Vocacional"
    {...props}
  >
    <defs>
      <path
        id="text-path"
        d="M 100, 100 m -80, 0 a 80, 80 0 1, 1 160, 0 a 80, 80 0 1, 1 -160, 0"
        fill="none"
        stroke="none"
      />
    </defs>

    {/* Outer Ring */}
    <circle cx="100" cy="100" r="97" fill="#00a0b0" />

    {/* Inner background - Now transparent */}
    <circle cx="100" cy="100" r="87" fill="transparent" />
    
    {/* Text */}
    <text
      fill="#f4f9fb"
      fontFamily="Montserrat, sans-serif"
      fontSize="13"
      fontWeight="600"
      letterSpacing="1.5"
    >
      <textPath href="#text-path" startOffset="50%" textAnchor="middle">
        OBSERVATORIO DE ORIENTACION VOCACIONAL
      </textPath>
    </text>

    {/* - 2025 - Text */}
    <text
      x="100"
      y="170"
      textAnchor="middle"
      fill="#f4f9fb"
      fontFamily="Montserrat, sans-serif"
      fontSize="14"
      fontWeight="600"
    >
      - 2025 -
    </text>

    {/* Compass Rose */}
    <g transform="translate(100, 100)" fill="#00a0b0" strokeLinejoin="round">
      <path d="M 0 -55 L 15 0 L 0 10 L -15 0 Z" />
      <path d="M 0 -55 L 15 0 L 0 10 L -15 0 Z" transform="rotate(90)" />
      <path d="M 0 -55 L 15 0 L 0 10 L -15 0 Z" transform="rotate(180)" />
      <path d="M 0 -55 L 15 0 L 0 10 L -15 0 Z" transform="rotate(270)" />
      <g opacity="0.8" fill="#66c7d9">
          <path d="M 0 -40 L 10 0 L 0 7 L -10 0 Z" transform="rotate(45)" />
          <path d="M 0 -40 L 10 0 L 0 7 L -10 0 Z" transform="rotate(135)" />
          <path d="M 0 -40 L 10 0 L 0 7 L -10 0 Z" transform="rotate(225)" />
          <path d="M 0 -40 L 10 0 L 0 7 L -10 0 Z" transform="rotate(315)" />
      </g>
      {/* Changed fill to white to be visible on dark backgrounds */}
      <g fill="#f4f9fb">
          <path d="M 0 -55 L 7.5 0 L -7.5 0 Z" />
          <path d="M 0 -55 L 7.5 0 L -7.5 0 Z" transform="rotate(90)" />
          <path d="M 0 -55 L 7.5 0 L -7.5 0 Z" transform="rotate(180)" />
          <path d="M 0 -55 L 7.5 0 L -7.5 0 Z" transform="rotate(270)" />
      </g>
    </g>

    {/* Cardinal Letters */}
    <g
      fill="#f4f9fb"
      fontFamily="Montserrat, sans-serif"
      fontSize="18"
      fontWeight="bold"
      textAnchor="middle"
    >
      <text x="100" y="62">N</text>
      <text x="145" y="105">E</text>
      <text x="100" y="148">S</text>
      <text x="55" y="105">O</text>
    </g>
  </svg>
);

export default Logo;