import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',     label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact',  label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="Back to top">
          <span className="logo-monogram">AAS</span>
          <span className="logo-name">Adi Arwan Syah</span>
        </a>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* <li className="nav-mobile-resume">
            <a
              href="/Adi-Arwan-Syah-Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li> */}
        </ul>

        {/* <div className="nav-actions">
          <a
            href="/Adi-Arwan-Syah-Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
            aria-label="Open Adi Arwan Syah resume"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
            </svg>
            Resume
          </a>
        </div> */}

        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
