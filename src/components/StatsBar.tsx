import React from 'react';
import './StatsBar.css';

const StatsBar: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container glass-panel">
        <div className="stat-item">
          <div className="stat-number gradient-text">40%+</div>
          <div className="stat-label">Lead Conversion Increase</div>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-item">
          <div className="stat-number gradient-text">100%</div>
          <div className="stat-label">Custom Workflows</div>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-item">
          <div className="stat-number gradient-text">24/7</div>
          <div className="stat-label">AI Availability</div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
