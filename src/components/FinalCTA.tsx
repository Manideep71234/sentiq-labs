import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="final-cta-section">
        <div className="final-cta-container glass-panel">
          <div className="final-cta-content">
            <h2>Ready to eliminate manual work?</h2>
            <p>Get a custom system designed specifically for your business operations.</p>
            
            <div className="final-cta-group">
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                Book Free Audit
              </button>
              <NavLink to="/solutions" className="btn btn-secondary">
                Explore Solutions <ArrowRight size={18} className="btn-icon-right" />
              </NavLink>
            </div>
            
            <p className="reassurance-text">
              No obligation. No pitch. Just clarity.
            </p>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FinalCTA;
