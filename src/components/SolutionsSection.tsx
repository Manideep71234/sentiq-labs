import React from 'react';
import './SolutionsSection.css';
import { Mic, Workflow, LayoutTemplate, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const solutions = [
  {
    icon: <Mic size={32} />,
    title: 'AI Voice Agents',
    description: 'Outbound and inbound calling, lead qualification, and appointment booking handled by human-like AI.'
  },
  {
    icon: <Workflow size={32} />,
    title: 'Automation Systems',
    description: 'Intelligent workflow automation connecting forms, CRM, and follow-ups to eliminate manual tasks.'
  },
  {
    icon: <LayoutTemplate size={32} />,
    title: 'Web Solutions',
    description: 'High-converting, performance-optimized websites and landing pages built for modern businesses.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Custom AI Integrations',
    description: 'Bespoke agents and tools tailored to your specific operational needs and existing tech stack.'
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="section-header">
        <h2>What We <span className="gradient-text">Build</span></h2>
        <p>Comprehensive systems designed to scale your operations effortlessly.</p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <Tilt 
            key={index}
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={250}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="var(--accent-purple-light)"
            glarePosition="all"
            className="solution-tilt-wrapper"
          >
            <div className="glass-panel solution-card">
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
