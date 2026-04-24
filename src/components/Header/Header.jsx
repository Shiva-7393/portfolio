import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // offset for nav
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => handleScrollTo(e, 'home')}>
          Shiva<span>.</span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={(e) => handleScrollTo(e, link)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
