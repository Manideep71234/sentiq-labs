import React from 'react';
import './Footer.css';
import { Mail, Globe, MessageSquare } from 'lucide-react';

import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient-line"></div>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Sentiq Labs</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p>Engineering AI systems that multiply revenue.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><Mail size={20} /></a>
            <a href="#"><Globe size={20} /></a>
            <a href="#"><MessageSquare size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sentiq Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
