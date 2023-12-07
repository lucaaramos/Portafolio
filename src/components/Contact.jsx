import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Asegúrate de importar tu archivo CSS de estilos.
import cv from '../assets/Luca Ramos CV.pdf';
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


