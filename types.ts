// FIX: Add missing import for React to resolve type errors.
import React from 'react';

export enum ProfileType {
  Creative = 'Perfil Creativo',
  Social = 'Perfil Social',
  Technical = 'Perfil Técnico',
  Analytical = 'Perfil Analítico',
}

export interface Answer {
  text: string;
  profile: ProfileType;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Career {
    name: string;
    institutions: { name: string; url: string; }[];
}

export interface CareerArea {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    careers: Career[];
}