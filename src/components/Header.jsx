import React from 'react';
// Importa los estilos CSS
import '../styles/Header.css'
import logo from '../assets/foto carnet.jpg'

export default function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={logo}
              alt=""
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Luca Ramos</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className='header__link-wrapper'>
              <button onClick={() => scrollToSection('quien-soy')} className='header__link'>
                Home
              </button>
            </li>
            <li className="header__link-wrapper">
              {/* <a href="#about" className="header__link">About</a> */}
              <button onClick={() => scrollToSection('about')} className='header__link'>
                About
              </button>
            </li>
            <li className="header__link-wrapper">
            <button onClick={() => scrollToSection('proyects')} className='header__link'>
                Projects
              </button>
            </li>
            <li className="header__link-wrapper">
            <button onClick={() => scrollToSection('contact')} className='header__link'>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}



