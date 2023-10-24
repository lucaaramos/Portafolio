import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Asegúrate de importar tu archivo CSS de estilos.
import cv from '../assets/CV Luca-R.pdf';

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
      <form id="contact" ref={form} onSubmit={sendEmail} className="contact-form">
        <a href={cv} download="LucaRamos-CV.pdf" className="download-link">
          Download CV
        </a>
        <h1>Contact me</h1>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="user_email" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
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

