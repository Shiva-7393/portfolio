import React, { useState } from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      title: 'SGA Smart Alert Dashboard',
      description: 'Developed a web-based dashboard to streamline student management for SGAs. Monitors attendance, categorizes risk levels (Critical, At Risk, Safe), and enables quick parent notifications. Features task tracking, intervention history, and secure login access.',
      technologies: ['React', 'JavaScript', 'CSS'],
      liveDemo: 'https://static-starter--shivaudugundla7.replit.app',
      github: 'https://github.com/Shiva-7393'
    },
    {
      title: 'Prep Tracker App',
      description: 'A comprehensive interview preparation tracker build with React. Features a dashboard, topic management, study planner, and dark mode.',
      technologies: ['React', 'JavaScript', 'CSS', 'Vite'],
      liveDemo: 'https://prep-tracker-ypay.vercel.app/',
      github: 'https://github.com/Shiva-7393'
    },
    {
      title: 'Travel Tracking App',
      description: 'An interactive travel tracker to log visited destinations, plan future trips, and view memories on a beautiful digital map interface.',
      technologies: ['React', 'Tailwind CSS', 'Next.js'],
      liveDemo: '#',
      github: 'https://github.com/Shiva-7393'
    },
    {
      title: 'Calculator App',
      description: 'A modern, fully functional calculator with a sleek user interface, supporting basic arithmetic and advanced historical calculations.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemo: '#',
      github: 'https://github.com/Shiva-7393'
    }
  ];

  const categories = ['All', 'React', 'HTML5', 'Next.js', 'JavaScript'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div 
        className="filter-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
      >
        {categories.map((cat, i) => (
          <button 
            key={i} 
            className="btn-outline btn-small"
            onClick={() => setFilter(cat)}
            style={{ 
              backgroundColor: filter === cat ? 'var(--accent-color)' : 'transparent', 
              color: filter === cat ? '#fff' : 'var(--accent-color)',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.liveDemo} className="btn-outline btn-small" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="btn-outline btn-small" target="_blank" rel="noreferrer">
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
