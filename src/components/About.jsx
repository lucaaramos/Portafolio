// import React from 'react'
// import '../styles/About.css'
// import javascript from '../assets/javascript.png'
// import react from '../assets/react.png'
// import nodejs from '../assets/nodejs.png'
// import mysql from '../assets/mysql.png'
// import mongo from '../assets/mongodb.png'
// import html from '../assets/html.png'
// import css from '../assets/css.png'
// import redux from '../assets/9118217_redux_fill_icon.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import ProfileCard from './ProfileCard'
// AOS.init();
// export default function About() {
//   return (
//     <section id='about' className='about-container'>
//     <br></br>
//     <div className='skills'>
//     <div className='div1' data-aos='fade-right'>
//     <div className='profile'>
//         <ProfileCard></ProfileCard>
//     </div>
//     <div>
//     <p>Hello!!
//     I am Luca, a web programmer and I use technologies such as React, NodeJS, Express, MySQL, MongoDB, Golang, among others. I trained as FullStack.
//     I am passionate about software development, I am constantly learning new technologies, improving my programming practices and logic. I consider myself a responsible and efficient person, who has the perseverance to achieve any goal I set.
//     As for my studies, I did the Henry bootcamp, which gave me the tools to be today's programmer. I also took a technical degree in web development at the University of San Martin.
//     Regarding my work experience, I work as a freelancer, I create web pages, login implementations, API creation, etc. I have also done several web development jobs as a team with other programmers with more experience than mine, from which I learned a lot and was able to verify my excellent teamwork.
//     Thank you for reading me, you can contact me for any job proposal.</p>
//     <h3><strong>Where did i work?</strong></h3>
    
//     </div>
//     </div>
    
//     <div className='div2' data-aos='fade-left'>
//   <h2>My Skills</h2>
//   <div className='skills-icons' >
//   <div className='row'
//     >
//     <img src={javascript} alt="Lenguaje 1" />
//     <img src={react} alt="Lenguaje 1" />
//     <img src={nodejs} alt="Lenguaje 1" />
//     <img src={css} alt="Lenguaje 1" />
//   </div>
//   <div className='row'>
//     <img src={mongo} alt="Lenguaje 1" /> 
//     <img src={mysql} alt="Lenguaje 1" /> 
//     <img src={redux} alt="Lenguaje 1" /> 
//     <img src={html} alt="Lenguaje 1" /> 
//   </div>
//   </div>
// </div>
//     </div>
//     </section>
//   )
// }
import React from 'react';
// import CurveBottom from './curves/curveBottom';
import CurvesTop from './curves/curvesTop';
import '../styles/About.css'; // Archivo CSS para estilos

export default function About() {
    return (
        <>
            <CurvesTop className="topCurves" />
            <div id='about' className="aboutContent">
                <h3 className="aboutTitle">
                    About me
                </h3>
                <p className="aboutParagraph">
                As an experienced Full-Stack software developer and
                    freelancer, my career spans 2 years on the web
                    development. Driven by curiosity, I enjoy exploring and
                    Master emerging technologies.
                </p>
                <p className="aboutParagraph">
                    My dedication to delivering innovative solutions fuels my
                    passion for building extraordinary software. Always seeking
                    new challenges and knowledge to stay ahead in this fast
                    growing industry.
                </p>
        </div>
                <div className='skills'>
                <div className='div1'>
      <h4 className='aboutTitle'>Back-end Developer <br></br>
          Sicvg Ministerio de Genero 
      </h4>
          <p>January - Dicember 2023</p>
      <p className="aboutParagraph">
      My contribution to the team was specifically in Back-end, using languages ​​like Golang
and relational databases such as MySQL. <br></br>
<span>
    ● Server and database management <br></br>
    ● Development of APIs and Endpoints <br></br>
    ● Troubleshooting and debugging <br></br>
    ● Collaboration on team projects<br></br>
    ● System maintenance and updating<br></br>
</span>
      </p>
                </div>
    <div className='div1'>
    <h4 className='aboutTitle'>Freelancer<br></br>
    </h4>
    <p>August 2022 - Present</p>
    
<span className="aboutParagraph">
    ● Create and maintaining DB<br></br>
    ● Building interactive and attractive user interfaces<br></br>
    ● Implementation funcionalitis and solving technical problems<br></br>
    ● System maintenance and updating<br></br>
</span>
    </div>
            
    </div>
            {/* <CurveBottom className="bottomCurve" /> */}
          
        </>
    );
};
