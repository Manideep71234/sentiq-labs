import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './Solutions.css';

const solutionsData = [
  { category: "AI & Automation", title: "WhatsApp Business Automation", desc: "Automated conversations that qualify and convert leads on WhatsApp." },
  { category: "AI & Automation", title: "AI Lead Qualification", desc: "Automatically score and filter incoming leads before your team touches them." },
  { category: "AI & Automation", title: "Appointment Booking Automation", desc: "Zero-touch scheduling with automatic reminders." },
  { category: "AI & Automation", title: "Follow-up Sequence Automation", desc: "Multi-channel automated follow-ups so no lead goes cold." },
  { category: "AI & Automation", title: "Cart Abandonment Recovery", desc: "Automatically re-engage customers who didn't complete checkout." },
  { category: "AI & Automation", title: "Invoice & Payment Reminder Automation", desc: "Automated payment nudges without manual chasing." },
  { category: "AI & Automation", title: "Custom Automation", desc: "A bespoke workflow build for your specific process." },

  { category: "AI Voice", title: "Inbound AI Voice Agent", desc: "Answers every call, 24/7, without a human on the line." },
  { category: "AI Voice", title: "Outbound AI Voice Agent", desc: "Proactively calls leads at scale the moment they come in." },
  { category: "AI Voice", title: "Custom Voice Agent", desc: "Complex call logic with deep integrations, built to spec." },

  { category: "Web", title: "Business Website", desc: "A conversion-focused site built from scratch." },
  { category: "Web", title: "Landing Page", desc: "A campaign-specific page built to convert one traffic source." },
  { category: "Web", title: "Website Redesign", desc: "Rebuilding an underperforming site." },
  { category: "Web", title: "Website + Lead Pipeline", desc: "A site wired directly into your CRM and automations." },
  { category: "Web", title: "E-commerce Store", desc: "A store with cart-recovery automation built in." },

  { category: "Audit & Strategy", title: "Business Automation Audit", desc: "We map every manual process worth automating." },
  { category: "Audit & Strategy", title: "Conversion & Website Audit", desc: "We find exactly where your site is losing visitors." }
];

const categories = ["All", "AI & Automation", "AI Voice", "Web", "Audit & Strategy"];

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSolutions = activeTab === "All" 
    ? solutionsData 
    : solutionsData.filter(item => item.category === activeTab);

  return (
    <div className="solutions-page">
      <div className="solutions-page-header">
        <h1 className="gradient-text">Standalone Solutions</h1>
        <p className="solutions-intro">Not ready for a full system? Start with one fix.</p>
      </div>

      <div className="filter-tabs">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="solutions-grid-container">
        <div className="solutions-cards-grid">
          {filteredSolutions.map((solution, index) => (
            <Tilt 
              key={`${solution.title}-${index}`}
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={250}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="var(--accent-purple-light)"
              glarePosition="all"
              className="solution-catalog-card glass-panel"
              glareBorderRadius="1rem"
            >
              <div className="card-category-tag">{solution.category}</div>
              <h3>{solution.title}</h3>
              <p>{solution.desc}</p>
              
              <NavLink to="/contact" className="learn-more-link">
                Learn More <ArrowRight size={16} />
              </NavLink>
            </Tilt>
          ))}
        </div>
      </div>

      <section className="bottom-cta-band">
        <div className="bottom-cta-content glass-panel">
          <h2>Want all three systems bundled instead?</h2>
          <NavLink to="/services" className="btn btn-primary cta-band-btn">
            See our Services
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
