import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import Tilt from 'react-parallax-tilt';
import './Services.css';

const servicesList = [
  {
    id: "01",
    title: "Autonomous Voice Agents",
    description: "The 24/7 SDR that never sleeps, takes breaks, or drops a lead.",
    explanation: "We engineer human-like AI agents capable of handling complex inbound customer service queries and executing high-volume outbound sales calls. They qualify leads in real-time, book appointments directly onto your calendar, and integrate instantly with your CRM to log every conversation and outcome.",
    deliverables: [
      "AI Voice Calling Agent (24/7 inbound/outbound)",
      "WhatsApp Automation Bot",
      "CRM/lead sync",
      "Automated follow-up sequences",
      "Analytics dashboard access"
    ],
    price: "Starting at ₹35,000",
    bestFor: "Real Estate, Clinics, Agencies, High-Ticket Coaching"
  },
  {
    id: "02",
    title: "Intelligent Automations",
    description: "Connect your disjointed software into a single, automated nervous system.",
    explanation: "Stop paying humans to do robotic data entry. We build custom workflows that instantly route leads from your ads, enrich their data, trigger immediate WhatsApp/Email follow-ups, and update your CRM without a single click from your team. This eliminates human error and guarantees a sub-5-minute response time.",
    deliverables: [
      "Cross-platform API integrations (Make/Zapier)",
      "Custom Lead Routing & Enrichment",
      "Automated multi-channel sequences",
      "No-code CRM dashboard setup",
      "Workflow documentation & training"
    ],
    price: "Starting at ₹20,000",
    bestFor: "E-commerce, B2B SaaS, Local Service Businesses"
  },
  {
    id: "03",
    title: "High-Converting Web Systems",
    description: "Digital real estate engineered specifically for speed and lead capture.",
    explanation: "Your website shouldn't just look pretty; it needs to function as your hardest-working sales rep. We build lightning-fast, conversion-optimized landing pages and full websites equipped with advanced tracking, AI chat widgets, and direct CRM pipelines to turn traffic into qualified appointments.",
    deliverables: [
      "Custom responsive design architecture",
      "Technical SEO & Speed Optimization",
      "Integrated lead capture forms",
      "AI Web Chatbot installation",
      "Analytics & Conversion Pixel setup"
    ],
    price: "Starting at ₹45,000",
    bestFor: "D2C Brands, Consultants, Tech Startups, Clinics"
  }
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="gradient-text">Three systems.</h1>
        <p className="services-intro">Each one fixes a specific revenue leak.</p>
      </div>

      <div className="services-container">
        {servicesList.map((service, index) => (
          <Tilt 
            key={index}
            tiltMaxAngleX={2} 
            tiltMaxAngleY={2}
            perspective={1500}
            scale={1.01}
            transitionSpeed={400}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="var(--accent-purple-light)"
            glarePosition="all"
            className="service-block glass-panel"
            glareBorderRadius="1.5rem"
          >
            <div className="service-block-header">
              <span className="system-number gradient-text">System {service.id}</span>
              <h2>{service.title}</h2>
              <p className="service-desc">{service.description}</p>
            </div>
            
            <div className="service-block-body">
              <div className="service-explanation">
                <p>{service.explanation}</p>
                <div className="service-tags">
                  <span className="tag-label">Best for:</span>
                  <span className="tag-value">{service.bestFor}</span>
                </div>
                <div className="service-price">
                  {service.price}
                </div>
                <NavLink to="/contact" className="btn btn-primary mt-4">
                  Book a Call
                </NavLink>
              </div>
              
              <div className="service-deliverables">
                <h3>What's Included:</h3>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={20} className="check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="services-footnote">
        <p>* Third-party platform costs (WhatsApp Business API, telephony, hosting) are billed separately at cost. Full estimate provided before any work begins.</p>
      </div>

      <FinalCTA />
    </div>
  );
};

export default Services;
