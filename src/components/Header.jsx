// import React, {useEffect, useState} from 'react';
// import '../styles/Header.css'
// import logo from '../assets/foto carnet.jpg'


// export default function Header() {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

    
//   }
  
//       const [headerBackground, setHeaderBackground] = useState(false);
  
//     useEffect(() => {
//       window.addEventListener("scroll", () => {
//         if (window.scrollY > 50) {
//           setHeaderBackground(true);
//         } else {
//           setHeaderBackground(false);
//         }
//       });
//     }, []);
//   return (
//     <header className={`header ${headerBackground ? 'header--scrolled' : ''}`}>
//       <div className="header__content">
//         <div className="header__logo-container">
//           <div className="header__logo-img-cont">
//             <img
//               src={logo}
//               alt=""
//               className="header__logo-img"
//             />
//           </div>
//           <span className="header__logo-sub">Luca Ramos</span>
//         </div>
//         <div className="header__main">
//           <ul className="header__links">
//             <li className='header__link-wrapper'>
//               <button onClick={() => scrollToSection('quien-soy')} className='header__link'>
//                 Home
//               </button>
//             </li>
//             <li className="header__link-wrapper">
//               {/* <a href="#about" className="header__link">About</a> */}
//               <button onClick={() => scrollToSection('about')} className='header__link'>
//                 About
//               </button>
//             </li>
//             <li className="header__link-wrapper">
//             <button onClick={() => scrollToSection('proyects')} className='header__link'>
//                 Projects
//               </button>
//             </li>
//             <li className="header__link-wrapper">
//             <button onClick={() => scrollToSection('contact')} className='header__link'>
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }



// import React, { useEffect } from 'react'
// import '../styles/Header.css'
// import useUser from '../hook/useUser'
// import image from '../assets/foto carnet.jpg'
// export default function Header(){
//     const {isPhone} = useUser()
//       window.addEventListener('scroll', function() {
//       const navbar = document.querySelector('.navBar2');
//       const navbar2 = document.querySelector('.contain_navigate');
//       if(!isPhone){
//       if(window.scrollY > 150) {
//         navbar.classList.add('navbar-scrolled');
//         navbar2.classList.add('contain_navigate-scrolled');
//       } else {
//         navbar2.classList.remove('contain_navigate-scrolled');
//         navbar.classList.remove('navbar-scrolled');
//       }}
//     });

//   return (
//     <div id="nav" className='navBar2'>
//          <div className='contain_nb_image'>
//             <img src={image} style={{width:"60px",borderRadius: "0 0 30px 30px"}} />
//         </div>
//         <div className='contain_navigate'>
//           <ul>
//           <li className='navigate'>Inicio</li>
//           <li className='navigate'>Inicio</li>
//           <li className='navigate'>Inicio</li>
//           <li className='navigate'>Inicio</li>
//           </ul>
//         </div>
//             </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import '../styles/Header.css'

export default function Header() {
  const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
  const [headerBackground, setHeaderBackground] = useState(false);
      useEffect(() => {
            window.addEventListener("scroll", () => {
              if (window.scrollY > 50) {
                setHeaderBackground(true);
              } else {
                setHeaderBackground(false);
              }
            });
          }, []);
          
  const [isBurgerMenu, setIsBurgerMenu] = useState(true);

  const toggleMenu = () => {
    const navigation = document.querySelector('.navigation');
    const burgerMenu = document.querySelector('.menu-icon');
    // const src = burgerMenu.getAttribute('src');
    const iconName = isBurgerMenu ? 'assets/close.svg' : 'assets/burger-menu.svg';

    burgerMenu.setAttribute('src', iconName);

    if (!isBurgerMenu) {
      navigation.classList.add('navigation--mobile--fadeout');
      setTimeout(() => {
        navigation.classList.toggle('navigation--mobile');
      }, 300);
    } else {
      navigation.classList.remove('navigation--mobile--fadeout');
      navigation.classList.toggle('navigation--mobile');
    }

    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div className={`header ${headerBackground ? 'header--scrolled' : ''}`}>
      <div className="menu__wrapper">
        <div className="menu__bar">
          <img
            className="menu-icon"
            src="assets/burger-menu.svg"
            title="Burger Menu"
            alt="Burger Menu"
            onClick={toggleMenu}
          />
          <ul className="navigation">
            <li>
              <a href="#home" title="home" >
                Home
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')} href="#about" title="about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('projects')} href="#projects" title="Projects">
                Projets
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')} href="#contact-us" title="Contact Us">
                Contact
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}
