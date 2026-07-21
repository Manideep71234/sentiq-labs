import React from 'react';
import './KeywordsTicker.css'; // Reuse the same CSS since layout is identical

const IndustryStrip: React.FC = () => {
  const industries = ["Real Estate", "Clinics", "Coaches", "D2C Brands", "Legal Firms", "E-commerce", "SaaS", "Agencies"];
  
  return (
    <div className="keywords-ticker-container" style={{ background: 'transparent', borderTop: 'none', borderBottom: 'none', opacity: 0.6 }}>
      <div className="keywords-track" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="keywords-group">
            {industries.map((industry, index) => (
              <span key={index} className="keyword-item" style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 400, letterSpacing: 'normal' }}>
                <span className="keyword-dot" style={{ background: 'rgba(255,255,255,0.2)', boxShadow: 'none' }}></span>
                {industry}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryStrip;
