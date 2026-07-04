import React from 'react';
import './Ticker.css';

const domains = [
  "Sales", "Support", "Voice Agents", "Automation", "Lead Generation", "Analytics"
];

const Ticker: React.FC = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {[...Array(4)].map((_, i) => (
          <div className="ticker-content" key={i}>
            {domains.map((domain, index) => (
              <span key={`${i}-${index}`} className="ticker-item">
                {domain}
                <span className="ticker-separator">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
