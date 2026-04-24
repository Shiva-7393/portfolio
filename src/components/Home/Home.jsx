import React from 'react';
import './Home.css';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="greeting">Hi, I am</h2>
        <h1 className="name">Shiva</h1>
        <h3 className="role">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1000,
              'React Enthusiast',
              1000,
              'UI/UX Designer',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>
        <p className="description">
          I build responsive and modern web applications using HTML, CSS, JavaScript, React, TypeScript, and Next.js.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn" onClick={handleScrollToProjects}>
            View Projects <ArrowRight size={20} />
          </a>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer" download="Shiva_Udugundla_Resume.pdf">
            Download Resume <Download size={20} />
          </a>
        </div>
      </motion.div>
      <motion.div 
        className="home-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="image-placeholder">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
