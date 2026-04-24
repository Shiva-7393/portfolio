import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ettsajk', 'template_cz3jw4h', form.current, 'TGDMahbMv-5axkx5f')
      .then(() => {
        setSuccess(true);
        setError(false);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, () => {
        setError(true);
        setSuccess(false);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-socials">
          <a href="https://github.com/Shiva-7393" target="_blank" rel="noreferrer" className="social-link">
             <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="social-link">
             <FaLinkedin />
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <label><User size={18} /> Name</label>
            <input type="text" name="user_name" placeholder="John Doe" required />
          </div>
          
          <div className="input-group">
            <label><Mail size={18} /> Email</label>
            <input type="email" name="user_email" placeholder="john@example.com" required />
          </div>
          
          <div className="input-group">
            <label><MessageSquare size={18} /> Message</label>
            <textarea name="message" rows="5" placeholder="Your message here..." required />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="btn submit-btn" 
            disabled={loading}
          >
            {loading ? 'Sending...' : <>Send Message <Send size={20} /></>}
          </motion.button>

          {success && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="status-msg success">Message sent successfully!</motion.div>}
          {error && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="status-msg error">Failed to send message. Please try again later.</motion.div>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
