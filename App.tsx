import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VocationalTest from './components/VocationalTest';
import Careers from './components/Careers';
import Resources from './components/Resources';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <VocationalTest />
        <Careers />
        <Resources />
        <Merchandise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
