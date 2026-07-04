import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content glass-panel">
        <div className="about-text">
          <h2>About <span className="gradient-text">Sentiq Labs</span></h2>
          <p>
            We don't just build software; we engineer outcomes. Sentiq Labs was founded on the principle that AI should seamlessly integrate into your operations to drive measurable growth. We move beyond deliverables, focusing entirely on systems that outperform your expectations and scale your business without scaling your headcount.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number gradient-text">50+</span>
            <span className="stat-label">Systems Deployed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number gradient-text">3x</span>
            <span className="stat-label">Avg. Conversion Lift</span>
          </div>
          <div className="stat-item">
            <span className="stat-number gradient-text">24/7</span>
            <span className="stat-label">Agent Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
