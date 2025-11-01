
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VocationalTest from './components/VocationalTest';
import Careers from './components/Careers';
import Resources from './components/Resources';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem('vocationalUser');
    if (user) {
      setIsRegistered(true);
    }
  }, []);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <div className="bg-f4f9fb text-0a1c26 font-['Poppins',_sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <VocationalTest onRegister={handleRegistration} />
        <Careers />
        <Resources />
        {isRegistered && <Merchandise />}
        <Contact />
      </main>
      <Footer />
      {/* 
        How to publish this site for free:
        1. GitHub Pages:
           - Create a new repository on GitHub.
           - Push your project's code (HTML, CSS, JS files after building the React app) to the repository.
           - In the repository settings, go to the "Pages" section.
           - Select the branch to deploy from (usually 'main' or 'gh-pages') and the folder (usually '/root' or '/docs').
           - GitHub will publish your site and provide a URL.
        2. Vercel or Netlify:
           - Sign up for a free account on Vercel or Netlify.
           - Connect your GitHub account and select the repository for this project.
           - Follow the setup instructions. They will automatically build and deploy your React app.
           - This is often easier for React projects than GitHub Pages.

        Future expansions:
        - Integrate a real backend and database (like Firebase or a Node.js/Express server with PostgreSQL) for user authentication and storing test results.
        - Create a blog section with a Content Management System (CMS) to easily add new articles.
        - Develop a more in-depth vocational test with more nuanced results and career suggestions powered by the Gemini API.
      */}
    </div>
  );
};

export default App;
