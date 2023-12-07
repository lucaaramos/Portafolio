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
      <section className='section' id="home">
        <div className="contenido-quien-soy">
          <h1  className='name' data-aos="zoom-in-right">Luca Ramos</h1>
          <h3 className='h3' data-aos="zoom-in-left">Full Stack Developer</h3>
          <button onClick={() => scrollToSection('projects')} className='proyectos-button'>
                Projects
              </button>
        </div>
        <div className='boton-about-container'>
          <button className='slide-button' onClick={() => scrollToSection('about')}>
            <img className='img'src='https://sweatingassets.bh/image/Logo/Arrow.png' alt='' style={{width: 100}}></img>
          </button>
        </div>
      </section>
    </div>
  );
}

