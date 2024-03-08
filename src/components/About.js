import React from 'react';
import TKH from './TKH.png';
import Javascript from './Javascript.png';
import ReactImg from './React.png';
import HTML from './HTML.png';
import CSS from './css.png';
import Vite from './vite.png';
import Databases from './databases.png';

const About = () => {
  return (
    <div className="about-section" style={{ textAlign: 'center' }}>
      <h1>About Me</h1>
      <p>Hello! I'm a developer passionate about creating impactful software solutions. With a background in web development, I have a strong foundation in React, JavaScript, and other modern web technologies. I enjoy taking on challenging projects and continuously expanding my skill set.</p>
      <p>I am currently participating in The Knowledge House Fellowship.The Innovation Fellowship is a free 12-month job training program that prepares participants for the competitive tech industry.</p>
      <a href="https://www.theknowledgehouse.org/innovation_fellowship/" target="_blank" rel="noopener noreferrer">
        <img src={TKH} alt="The Knowledge House" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      </a>
      <img src={Javascript} alt="Javascript" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={ReactImg} alt="React" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={HTML} alt="HTML" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={CSS} alt="CSS" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={Vite} alt="Vite" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={Databases} alt="Databases" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <p>To learn more about me, check out my <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </div>
  );
};

export default About;
