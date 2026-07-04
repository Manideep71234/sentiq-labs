import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const quotes = [
  {
    pre: "Your business is ",
    highlight: "revenue.",
    post: " We multiply it."
  },
  {
    pre: "Stop buying software. Start building ",
    highlight: "systems.",
    post: ""
  },
  {
    pre: "AI isn't the future. It's your ",
    highlight: "advantage",
    post: " right now."
  },
  {
    pre: "We don't do deliverables. We build ",
    highlight: "outcomes.",
    post: ""
  },
  {
    pre: "Scale your operations without scaling your ",
    highlight: "headcount.",
    post: ""
  },
  {
    pre: "Automate the mundane. Unleash the ",
    highlight: "exceptional.",
    post: ""
  },
  {
    pre: "Your most tireless employee is a ",
    highlight: "system.",
    post: " We build them."
  }
];

const HeroSection: React.FC = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Select a random quote on mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="pill-badge">
            <span className="pill-dot"></span>
            DESIGNED TO DOMINATE
          </div>

          <h1 className="hero-headline">
            {quote.pre}
            <span className="gradient-text">{quote.highlight}</span>
            {quote.post}
          </h1>

          <p className="hero-subheadline">
            We engineer bespoke AI automations, voice agents, and web solutions designed for one thing: accelerating your business outcomes.
          </p>

          <div className="hero-cta-group">
            <NavLink to="/contact" className="btn btn-primary">
              Book a Free Audit
            </NavLink>
            <NavLink to="/solutions" className="btn btn-secondary">
              See Our Systems <ArrowRight size={18} className="btn-icon-right" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
