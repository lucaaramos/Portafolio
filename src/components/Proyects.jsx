import React from 'react';
// import '../styles/Proyects.css'
import astrogamer from '../assets/astrogamer.jpg'
import foodapp from '../assets/foodapp.png'
import boyero from '../assets/boyerodeberna.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../styles/ej.css';
// import '../styles/Proyects.css'
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
    <section className='projects' id='projects'>
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
            <h3 className='title'>{project.title}</h3>
            <a className='link' href={project.detailsLink} target="_blank" rel="noopener noreferrer">Deploy</a>
            <a  className='link' href={project.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </li>
      ))}
    </ul>
  </section>
  );
}
