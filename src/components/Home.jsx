import React from 'react';
import '../styles/Home.css'

export default function Home() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li><a href="#quien-soy">Quién soy</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
          </ul>
        </nav>
      </header>
      <section id="quien-soy">
        <div className="contenido-quien-soy">
          <h1>Quién soy</h1>
          <p>Descripción sobre ti y tus habilidades.</p>
          <button onClick={() => scrollToSection('proyects')} className='proyectos-button'>
                Projects
              </button>
        </div>
      </section>
    </div>
  );
}


