import React from 'react';
import { Bot, Zap, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './ProblemSection.css';

const ProblemSection: React.FC = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-header">
          <h2>You're doing everything right.<br /><span className="gradient-text">But you're still hitting a ceiling.</span></h2>
        </div>

        <div className="problem-grid">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={250} glareEnable={true} glareMaxOpacity={0.15} glareColor="var(--accent-purple-light)" glarePosition="all" glareBorderRadius="1rem" className="problem-card glass-panel">
            <div className="problem-icon-wrapper">
              <Bot size={32} className="problem-icon" />
            </div>
            <h3>Leads are slipping through the cracks</h3>
            <p>You generate demand, but lack the bandwidth to follow up instantly 24/7.</p>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={250} glareEnable={true} glareMaxOpacity={0.15} glareColor="var(--accent-purple-light)" glarePosition="all" glareBorderRadius="1rem" className="problem-card glass-panel">
            <div className="problem-icon-wrapper">
              <Zap size={32} className="problem-icon" />
            </div>
            <h3>Operations feel like chaos</h3>
            <p>Your team is drowning in manual data entry, repetitive tasks, and disjointed software.</p>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={250} glareEnable={true} glareMaxOpacity={0.15} glareColor="var(--accent-purple-light)" glarePosition="all" glareBorderRadius="1rem" className="problem-card glass-panel">
            <div className="problem-icon-wrapper">
              <Globe size={32} className="problem-icon" />
            </div>
            <h3>Your digital presence is stagnant</h3>
            <p>Your website is a static brochure instead of a dynamic machine that qualifies and converts.</p>
          </Tilt>
        </div>

        <div className="problem-footer">
          <p className="problem-statement">
            More manpower isn't the solution. <span className="highlight-text">Smarter systems are.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
