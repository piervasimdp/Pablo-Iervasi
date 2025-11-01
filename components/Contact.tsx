import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API.
    // For this demo, we'll just simulate it.
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="contacto" className="py-20 bg-f4f9fb">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto lg:flex justify-between items-center bg-white p-10 rounded-2xl shadow-lg">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-4xl font-bold text-002f4b mb-4 font-['Montserrat',_sans-serif]">Ponete en Contacto</h2>
            <p className="text-lg text-0a1c26 mb-6">
              ¿Tenés dudas, sugerencias o querés colaborar? Escribinos. Estamos para ayudarte a encontrar tu camino.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-00a0b0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:contacto@observatoriovocacional2025.ar" className="text-0a1c26 hover:text-00a0b0 transition-colors">
                        contacto@observatoriovocacional2025.ar
                    </a>
                </div>
                 <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-00a0b0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p>Redes Sociales: @ObservatorioVocacional</p>
                 </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {submitted ? (
                <div className="text-center bg-green-100 text-green-800 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                    <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-0a1c26 mb-1">Nombre</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-00a0b0" />
                    </div>
                     <div>
                        {/* FIX: Corrected typo in the closing tag from </lebel> to </label>. */}
                        <label htmlFor="email" className="block text-sm font-medium text-0a1c26 mb-1">Correo electrónico</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-00a0b0" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-0a1c26 mb-1">Mensaje</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-00a0b0"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-00a0b0 hover:bg-66c7d9 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                        Enviar Mensaje
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;