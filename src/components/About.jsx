import React from 'react'
import '../styles/About.css'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import mysql from '../assets/mysql.png'
import mongo from '../assets/mongodb.png'
import github from '../assets/4202098_github_code_developer_logo_icon (1).png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import redux from '../assets/9118217_redux_fill_icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
export default function About() {
  return (
    <section id='about' className='about-container'>
    <div className='about-content' data-aos='flip-left'>
        <h2 className='h2'>About Me</h2>
        <p>Here you will find more information about me, what i do, and my current skills mostly in terms of programming and technology</p>
    </div>
    <br></br>
    <div className='skills'>
    <div className='div1' data-aos='fade-right'>
    <p>Hello!!
    I am Luca, a web programmer and I use technologies such as React, NodeJS, Express, MySQL, MongoDB, Golang, among others. I trained as FullStack.
    I am passionate about software development, I am constantly learning new technologies, improving my programming practices and logic. I consider myself a responsible and efficient person, who has the perseverance to achieve any goal I set.
    As for my studies, I did the Henry bootcamp, which gave me the tools to be today's programmer. I also took a technical degree in web development at the University of San Martin.
    Regarding my work experience, I work as a freelancer, I create web pages, login implementations, API creation, etc. I have also done several web development jobs as a team with other programmers with more experience than mine, from which I learned a lot and was able to verify my excellent teamwork.
    Thank you for reading me, you can contact me for any job proposal.</p>
    </div>
    <div className='div2' data-aos='fade-left'>
  <h2>My Skills</h2>
  <div className='skills-icons' >
  <div className='row'
    >
    <img src={javascript} alt="Lenguaje 1" />
    <img src={react} alt="Lenguaje 1" />
    <img src={nodejs} alt="Lenguaje 1" />
    <img src={css} alt="Lenguaje 1" />

  </div>
  <div className='row'>
    <img src={mongo} alt="Lenguaje 1" /> 
    <img src={mysql} alt="Lenguaje 1" /> 
    <img src={redux} alt="Lenguaje 1" /> 
    <img src={html} alt="Lenguaje 1" /> 
  </div>
  </div>
</div>

    </div>
    </section>
  )
}
