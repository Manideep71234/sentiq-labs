import React from 'react';
import './ProcessSection.css';
import Tilt from 'react-parallax-tilt';

const steps = [
  {
    number: '01',
    title: 'System Audit',
    description: 'We map your current workflow & leakages to identify opportunities for AI leverage.'
  },
  {
    number: '02',
    title: 'Architecture & Build',
    description: 'We design and deploy custom agents and automations specifically tailored to your operations.'
  },
  {
    number: '03',
    title: 'Optimization & Scale',
    description: 'We continuously monitor and refine the systems for maximum ROI as your business grows.'
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="section-header">
        <h2>How It <span className="gradient-text">Works</span></h2>
        <p>A systematic approach to transforming your business.</p>
      </div>

      <div className="process-timeline">
        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.05}
              transitionSpeed={300}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="var(--accent-purple)"
              glarePosition="all"
              className="glass-panel timeline-card"
              glareBorderRadius="1rem"
              style={{ width: '100%' }}
            >
              <span className="step-number gradient-text">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
