import React from 'react';
import Tilt from 'react-parallax-tilt';
import FinalCTA from '../components/FinalCTA';
import './About.css';

const industries = [
  "Real Estate", 
  "Clinics & Healthcare", 
  "Coaches & Consultants", 
  "D2C Brands", 
  "Legal", 
  "E-commerce"
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="gradient-text">About Sentiq Labs</h1>
      </div>

      <section className="founder-story">
        <div className="about-container">
          <h2>The Sentiq <span className="gradient-text">Story</span></h2>
          <div className="story-content glass-panel">
            <p>
              Sentiq Labs was built on a singular observation: businesses are drowning in software but starving for systems. The AI industry is obsessed with building impressive-sounding technology that ultimately just creates more friction for the people trying to use it.
            </p>
            <p>
              We believe automation should be judged entirely by its outcomes. If an AI agent or a workflow automation doesn't directly capture lost revenue, decrease operational overhead, or instantly scale your bandwidth, it isn't worth building. We exist to engineer the systems that actually move the needle.
            </p>
          </div>
        </div>
      </section>

      <section className="our-philosophy">
        <div className="about-container">
          <h2 className="text-center">Our <span className="gradient-text">Philosophy</span></h2>
          <div className="philosophy-grid">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} glareEnable={true} glareMaxOpacity={0.1} glareColor="var(--accent-purple-light)" className="philosophy-card glass-panel">
              <h3>Outcome-first</h3>
              <p>We build for measurable results—more booked appointments, faster response times, closed deals—not for the sake of adopting new automation trends.</p>
            </Tilt>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} glareEnable={true} glareMaxOpacity={0.1} glareColor="var(--accent-purple-light)" className="philosophy-card glass-panel">
              <h3>Audit before build</h3>
              <p>Every single project begins with an intensive audit to understand your actual bottlenecks before a single line of code or workflow is written.</p>
            </Tilt>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} glareEnable={true} glareMaxOpacity={0.1} glareColor="var(--accent-purple-light)" className="philosophy-card glass-panel">
              <h3>ROI-tracked</h3>
              <p>Every system we deploy is wired to report back the metrics that matter most to your business's bottom line.</p>
            </Tilt>
          </div>
        </div>
      </section>

      <section className="what-we-build-about">
        <div className="about-container">
          <h2 className="text-center">What We <span className="gradient-text">Build</span></h2>
          <div className="build-list glass-panel">
            <div className="build-item">
              <span className="build-label">Revenue Capture:</span>
              <p>24/7 AI Voice Agents that instantly qualify leads and book appointments automatically.</p>
            </div>
            <div className="build-item">
              <span className="build-label">Ops Efficiency:</span>
              <p>Custom intelligent automations that route leads, sync CRMs, and eliminate manual data entry.</p>
            </div>
            <div className="build-item">
              <span className="build-label">Web + Lead Pipeline:</span>
              <p>Conversion-focused websites integrated seamlessly into your backend automation systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-served">
        <div className="about-container text-center">
          <h2>Industries We <span className="gradient-text">Serve</span></h2>
          <div className="chips-container">
            {industries.map((ind, index) => (
              <span key={index} className="industry-chip">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="direct-contact">
        <div className="about-container text-center">
          <p className="contact-line">
            Want to talk directly? <a href="mailto:founder@sentiqlabs.com" className="gradient-text">founder@sentiqlabs.com</a>
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default About;
