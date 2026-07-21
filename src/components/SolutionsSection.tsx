import React from 'react';
import './SolutionsSection.css';
import { Mic, Workflow, LayoutTemplate } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const solutions = [
  {
    icon: <Mic size={32} />,
    title: 'Autonomous Voice Agents',
    description: 'Inbound & outbound calling, lead qualification, and automatic appointment booking handled by human-like AI 24/7.'
  },
  {
    icon: <Workflow size={32} />,
    title: 'Intelligent Automations',
    description: 'Seamless CRM sync, instant lead routing, and custom integrations to eliminate manual data entry.'
  },
  {
    icon: <LayoutTemplate size={32} />,
    title: 'High-Converting Web Systems',
    description: 'Lightning-fast, beautifully designed websites and landing pages engineered specifically to capture and convert leads.'
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="section-header">
        <h2>The Systems We <span className="gradient-text">Build</span></h2>
        <p>Three core pillars to fully automate and scale your business operations.</p>
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
            className="glass-panel solution-card"
            glareBorderRadius="1rem"
          >
            <div className="solution-icon">
              {solution.icon}
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
