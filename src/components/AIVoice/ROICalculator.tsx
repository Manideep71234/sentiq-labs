import React, { useState } from 'react';
import './ROICalculator.css';

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(100);
  const [dealValue, setDealValue] = useState(1000);
  const [missedRate, setMissedRate] = useState(30);
  
  const missedLeads = Math.floor(leads * (missedRate / 100));
  const lostRevenue = missedLeads * dealValue;

  return (
    <section className="roi-calculator">
      <h2>Calculate Your <span className="gradient-text">Lost Revenue</span></h2>
      <p className="subtitle">See how much revenue you're losing from missed calls or slow response times.</p>
      
      <div className="calculator-container glass-panel">
        <div className="calc-inputs">
          <div className="calc-group">
            <label>Monthly Inbound Leads/Calls</label>
            <input type="range" min="10" max="1000" step="10" value={leads} onChange={(e) => setLeads(Number(e.target.value))} />
            <span className="value-display">{leads} leads</span>
          </div>
          
          <div className="calc-group">
            <label>Average Deal Value ($)</label>
            <input type="range" min="100" max="10000" step="100" value={dealValue} onChange={(e) => setDealValue(Number(e.target.value))} />
            <span className="value-display">${dealValue.toLocaleString()}</span>
          </div>
          
          <div className="calc-group">
            <label>Missed Call/Lead Rate (%)</label>
            <input type="range" min="5" max="80" step="5" value={missedRate} onChange={(e) => setMissedRate(Number(e.target.value))} />
            <span className="value-display">{missedRate}%</span>
          </div>
        </div>
        
        <div className="calc-results">
          <h3>Monthly Revenue Lost</h3>
          <div className="huge-number">${lostRevenue.toLocaleString()}</div>
          <p>Our AI Voice Agents answer instantly, recovering this lost revenue for a fraction of the cost.</p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
