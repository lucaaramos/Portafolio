import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Importa tu archivo CSS de estilos
import cv from '../assets/CV Luca-R.pdf'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0izpife', 'template_ifrhopy', form.current, '57Rrz8rKoeO0xekMN')
      .then((result) => {
        alert("Mensaje enviado exitosamente");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
  <div className='contact-container'>
    <form id="contact" ref={form} onSubmit={sendEmail} className="contact-form">
    <a href={cv} download="LucaRamos-CV.pdf">Download CV</a>
    <h1>Contact me</h1>
    <div>
      <label>Name</label>
    <input type="text" name="user_name" className="input-field"/>
      <label>Email</label>
      <input type="text" name="user_email" className="input-field" />
      <label>Message</label>
      <textarea name="user_message" className="message-field" />
    </div>
      <input type="submit" value="Send" className="submit-button" />
    </form>
  </div>
  );
}
