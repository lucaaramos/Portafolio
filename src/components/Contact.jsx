import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Asegúrate de importar tu archivo CSS de estilos.
import cv from '../assets/CV Luca-R.pdf';
import github from '../assets/4202098_github_code_developer_logo_icon (1).png'
import linkedin from '../assets/317750_linkedin_icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../styles/ej.css'
AOS.init();
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0izpife', 'template_ifrhopy', form.current, '57Rrz8rKoeO0xekMN')
      .then(
        (result) => {
          alert('Mensaje enviado exitosamente');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
    <div className='icons-contact'>
    <a href="https://github.com/lucaaramos" target="_blank" rel="noopener noreferrer">
    <img src={github} className='img-icons' alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/luca-ramos-881038215/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} className='img-icons' alt="LinkedIn" />
  </a>
  

    </div>
      <form id="contact" ref={form} onSubmit={sendEmail} className="contact-form" data-aos="zoom-in-right">
        <a href={cv} download="LucaRamos-CV.pdf" className="download-link">
          Download CV
        </a>
        <h1 className='h1'>Contact me</h1>
        <div>
            <label htmlFor="name">Name</label>
          <div className="form-group">
            <input type="text" name="user_name" className="input-field" />
          </div>
            <label htmlFor="email">Email</label>
          <div className="form-group">
            <input type="text" name="user_email" className="input-field" />
          </div>
            <label htmlFor="message">Message</label>
          <div className="form-group">
            <textarea name="user_message" className="message-field" />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}


