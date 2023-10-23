import React from 'react';
import Project from './Proyect'; // Asegúrate de importar tu componente de proyecto
import '../styles/Proyects.css'
import astrogamer from '../assets/astrogamer.jpg'
import foodapp from '../assets/foodapp.png'
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
    id: 2,
    title: 'Club Argentino Boyero de Berna',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: foodapp,
    detailsLink: '/proyecto-2', // Enlaza a la página de detalles del proyecto
    technologies: ['React',"NodeJS",'Express', 'MySQL', "CSS"],
  },
  {
    id: 2,
    title: 'Club Argentino Boyero de Berna',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: foodapp,
    detailsLink: '/proyecto-2', // Enlaza a la página de detalles del proyecto
    technologies: ['React',"NodeJS",'Express', 'MySQL', "CSS"],
  },
  
];

export default function Projects() {
  return (
    <section className='projects' id="proyects">
    <div>
      <h2 className='h2'>Mis Proyectos</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
    </section>
  );
}

