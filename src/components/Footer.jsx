import React from 'react';
import '../styles/Footer.css'; // Asegúrate de importar tu archivo CSS de estilos.
import githubIcon from '../assets/4202098_github_code_developer_logo_icon (1).png';
import linkedinIcon from '../assets/317750_linkedin_icon.png';
import emailIcon from '../assets/4202011_email_gmail_mail_logo_social_icon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; 2023 Luca Ramos</p>
          <p>Contact: lucaramos99@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/lucaaramos" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/luca-ramos-881038215/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="lucaramos99@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
