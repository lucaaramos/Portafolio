import React from 'react';
import '../styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Home() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className="home" >
      <section id="quien-soy">
        <div className="contenido-quien-soy">
          <h1 data-aos="zoom-in-right">Desarrollador FullStack</h1>
          <p data-aos="zoom-in-left">Descripción sobre ti y tus habilidades.</p>
          <button onClick={() => scrollToSection('proyects')} className='proyectos-button'>
                Projects
              </button>
        </div>
      </section>
    </div>
  );
}

