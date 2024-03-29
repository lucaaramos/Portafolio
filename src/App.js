import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Proyects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

// import Work from './components/Work.jsx';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  // const {darkMode, toggleDarkMode } = useDarkMode() 
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Calcula la sección actual en función del desplazamiento
    const section = Math.floor((scrollTop + windowHeight / 2) / windowHeight);
    setCurrentSection(section);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    

    <div>
      <Header />
      <div className='App'>
      <Home style={{ transform: `translateY(-${currentSection * 100}vh)` }} />
      <About style={{ transform: `translateY(-${currentSection * 100}vh)` }} />
      {/* <Work style={{ transform: `translateY(-${currentSection * 100}vh)` }} /> */}
      <Projects style={{ transform: `translateY(-${currentSection * 100}vh)` }} />
      <Contact style={{ transform: `translateY(-${currentSection * 100}vh)` }} />
      <Footer />
      </div>
    </div>
    

  );
}

export default App;
