import React from 'react';
import './ProcessSection.css';
import Tilt from 'react-parallax-tilt';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'Deep dive into your current processes to identify bottlenecks and opportunities for AI leverage.'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Custom engineering of your tailored system, integrating seamlessly with your existing tech stack.'
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Smooth rollout with comprehensive testing to ensure zero disruption to your daily operations.'
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Continuous monitoring and refinement to maximize ROI and adapt to new business challenges.'
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
                className="timeline-tilt-wrapper"
                style={{ width: '100%' }}
            >
                <div className="glass-panel timeline-card">
                  <span className="step-number gradient-text">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
