import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './WhyUsSection.css';

const WhyUsSection: React.FC = () => {
  return (
    <section className="why-us-section">
      <div className="section-header">
        <h2>Why partner with <span className="gradient-text">Sentiq Labs?</span></h2>
        <p>We don't sell hours. We sell operational leverage.</p>
      </div>

      <div className="comparison-container">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.01} transitionSpeed={250} className="comparison-card them-card glass-panel">
          <h3>Traditional Agencies</h3>
          <ul className="comparison-list">
            <li><XCircle size={20} className="icon-them" /> High monthly retainers</li>
            <li><XCircle size={20} className="icon-them" /> Manual setups and fragmented tools</li>
            <li><XCircle size={20} className="icon-them" /> Cookie-cutter templates</li>
            <li><XCircle size={20} className="icon-them" /> Hourly billing and slow delivery</li>
          </ul>
        </Tilt>

        <div className="vs-badge gradient-text">VS</div>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.01} transitionSpeed={250} glareEnable={true} glareMaxOpacity={0.15} glareColor="var(--accent-purple-light)" glarePosition="all" glareBorderRadius="1.5rem" className="comparison-card us-card glass-panel">
          <h3>Sentiq Labs</h3>
          <ul className="comparison-list">
            <li><CheckCircle2 size={20} className="icon-us" /> Value-driven pricing models</li>
            <li><CheckCircle2 size={20} className="icon-us" /> Custom AI engineering</li>
            <li><CheckCircle2 size={20} className="icon-us" /> Performance-focused architecture</li>
            <li><CheckCircle2 size={20} className="icon-us" /> Proprietary automated workflows</li>
          </ul>
        </Tilt>
      </div>
    </section>
  );
};

export default WhyUsSection;
