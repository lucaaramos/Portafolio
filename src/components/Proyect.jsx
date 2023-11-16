import React from 'react';
import '../styles/Proyects.css';

export default function Project({ project }) {
  const { title, description, imageUrl, detailsLink, technologies, githubLink } = project;

  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project__image" />
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <p className="project__description">Tecnologías utilizadas: {technologies.join(', ')}</p>
      <a href={detailsLink} className="project__link" target="_blank" rel="noopener noreferrer">
        Deploy
      </a>
      <a href={githubLink} className="project__link" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  );
}

