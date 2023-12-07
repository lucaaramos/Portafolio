import React from 'react';
import '../styles/ProfileCard.css'
import pic from '../assets/foto .jpg'
export default function ProfileCard() {
  return (
    <div className="container">
      <div className="profile-wrapper">
          <div className="profile-image">
            <img src={pic} alt="Profile" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#instagram" title="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
          </ul>
          <div className="profile-name">
            <h2>Luca Ramos</h2>
            <div className="profile-bio">
              I'm a JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>.
            </div>
          </div>
        </div>
      </div>
    
  );
}
