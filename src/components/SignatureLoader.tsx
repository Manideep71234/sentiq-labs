import React, { useState, useEffect } from 'react';
import './SignatureLoader.css';

const SignatureLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after the animation completes (4.8 seconds total)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="signature-loader-overlay">
      <div className="signature-container">
        <svg viewBox="0 0 800 200" className="signature-svg">
          <defs>
            <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="signature-text"
          >
            Sentiq Labs
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SignatureLoader;
