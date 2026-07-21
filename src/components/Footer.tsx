import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, MessageSquare } from 'lucide-react';
import ContactModal from './ContactModal';
import './Footer.css';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-gradient-line"></div>
        <div className="footer-content">
          <div className="footer-brand brand-col">
            <NavLink to="/" className="logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Sentiq Labs</span>
              <span className="logo-bracket">/&gt;</span>
            </NavLink>
            <p className="footer-tagline">Systems that are Designed to Dominate.</p>
            <div className="social-links">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Contact"><MessageSquare size={20} /></a>
            </div>
          </div>

          <div className="footer-links nav-col">
            <h4>Navigation</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ai-voice" onClick={() => window.scrollTo(0, 0)}>AI Voice Agents</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="footer-socials cta-col">
            <h4>Get Started</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Ready to transform your operations with AI?
            </p>
            <button className="btn btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }} onClick={() => setIsModalOpen(true)}>
              Book Free Audit
            </button>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} Sentiq Labs. All rights reserved.</p>
          <p className="footer-category" style={{ color: 'var(--text-muted)' }}>AI Automation Agency &middot; {new Date().getFullYear()}</p>
        </div>
      </footer>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
