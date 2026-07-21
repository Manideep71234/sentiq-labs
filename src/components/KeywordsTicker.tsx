import React from 'react';
import './KeywordsTicker.css';

const KeywordsTicker: React.FC = () => {
  const keywords = ["Leads", "Follow-up", "Bookings", "24/7 Calls", "WhatsApp", "Conversions", "Automation"];
  
  return (
    <div className="keywords-ticker-container">
      <div className="keywords-track">
        {/* Render twice for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="keywords-group">
            {keywords.map((keyword, index) => (
              <span key={index} className="keyword-item">
                <span className="keyword-dot"></span>
                {keyword}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordsTicker;
