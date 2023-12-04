import React from 'react';
// import '../styles/Proyects.css'
import astrogamer from '../assets/astrogamer.jpg'
import foodapp from '../assets/foodapp.png'
import boyero from '../assets/boyerodeberna.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../styles/ej.css'
AOS.init();
const projectsData = [
  {
    id: 1,
    title: 'Astro Gamer',
    description: 'Descripción breve del proyecto 1.',
    imageUrl: astrogamer,
    detailsLink: 'https://p-grupal.vercel.app/',
    githubLink: "https://github.com/miguelbel00/p-grupal",
    technologies: ['React', 'Node.js', 'Sequilize', "Boostrap"],
  },
  {
    id: 2,
    title: 'Food App',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: foodapp,
    detailsLink: '/proyecto-2',
    githubLink: "https://github.com/lucaaramos/PI-Foods",
    technologies: ['React',"NodeJS",'Express','Postgres', "CSS"],
  },
  {
    id: 3,
    title: 'Club Argentino Boyero de Berna',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: boyero,
    detailsLink: '/proyecto-2',
    githubLink: "https://github.com/AlejoAvendanio/berna", // Enlaza a la página de detalles del proyecto
    technologies: ['React',"NodeJS",'Express', 'MySQL', "CSS"],
  },
  
  
];

export default function Projects() {
  return (
    <section className='projects' id='proyects'>
    <div className='position'>
      <div className='information'>
        <h2 className='h2'>My Projects</h2>
        <p className='info'>I have had the opportunity to work on different projects throughout my training as a programmer, both as a back-end and front-end. Here I leave information about some of my projects.</p>
      </div>
    </div>
    <ul className="accordion">
      {projectsData.map((project) => (
        <li key={project.id}>
          <img src={project.imageUrl} alt={project.title} />
          <div className="content">
          <span>
            <h3>{project.title}</h3>
            <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">Deploy</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          </span>
          </div>
        </li>
      ))}
    </ul>
  </section>
  );
}

/**
import React from 'react';
import Project from './Proyect'; // Asegúrate de importar tu componente de proyecto
import '../styles/Proyects.css'
import astrogamer from '../assets/astrogamer.jpg'
import foodapp from '../assets/foodapp.png'
import boyero from '../assets/boyerodeberna.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const projectsData = [
  {
    id: 1,
    title: 'Astro Gamer',
    description: 'Descripción breve del proyecto 1.',
    imageUrl: astrogamer,
    detailsLink: 'https://p-grupal.vercel.app/',
    githubLink: "https://github.com/miguelbel00/p-grupal",
    technologies: ['React', 'Node.js', 'Sequilize', "Boostrap"],
  },
  {
    id: 2,
    title: 'Food App',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: foodapp,
    detailsLink: '/proyecto-2',
    githubLink: "https://github.com/lucaaramos/PI-Foods",
    technologies: ['React',"NodeJS",'Express','Postgres', "CSS"],
  },
  {
    id: 3,
    title: 'Club Argentino Boyero de Berna',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: boyero,
    detailsLink: '/proyecto-2',
    githubLink: "https://github.com/AlejoAvendanio/berna", // Enlaza a la página de detalles del proyecto
    technologies: ['React',"NodeJS",'Express', 'MySQL', "CSS"],
  },
  
  
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className='slick-prev'>----</button>,
    nextArrow: <button className='slick-next'>----</button>

  };

  return (
    <section className='projects' id='proyects'>
    <div className='position'>
      <div className='information' data-aos="zoom-in-right">

        <h2 className='h2'>My Projects</h2>
        <p className='info'>I have had the opportunity to work on different projects throughout my training as a programmer, both as a back-end and front-end. Here I leave information about some of my projects.</p>
      </div>
        <Slider className='slider' {...settings} >
          {projectsData.map((project) => (
            <div data-aos="zoom-in-left" key={project.id}>
              <Project project={project} />
            </div>
          ))}
        </Slider>
    </div>
    </section>
  );
} 

 */
