import React from 'react';
import './About.css';
import { User, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-text">
          <p>
            Hello! I am Shiva, a B.Tech student with a strong passion for web development and solving complex problems through elegant code. I thrive on improving my frontend skills and learning new technologies to build responsive and performant web applications.
          </p>
          <p>
            My journey into frontend development started with curiosity about how the web works, which quickly evolved into a dedicated pursuit of building modern interfaces. My career goal is to become a top-tier Software Engineer, creating impactful digital experiences that people love to use everyday.
          </p>
        </div>
        <div className="about-cards">
          <motion.div className="about-card" whileHover={{ y: -8 }}>
            <User className="card-icon" />
            <h4>Student</h4>
            <p>B.Tech pursuing excellence</p>
          </motion.div>
          <motion.div className="about-card" whileHover={{ y: -8 }}>
            <Code className="card-icon" />
            <h4>Developer</h4>
            <p>Frontend enthusiast</p>
          </motion.div>
          <motion.div className="about-card" whileHover={{ y: -8 }}>
            <Lightbulb className="card-icon" />
            <h4>Learner</h4>
            <p>Always exploring new tech</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
