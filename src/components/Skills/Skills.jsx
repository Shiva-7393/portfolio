import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiPython } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={itemVariants}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
