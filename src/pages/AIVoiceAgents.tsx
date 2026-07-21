import React from 'react';
import VoiceHero from '../components/AIVoice/VoiceHero';
import ComparisonTable from '../components/AIVoice/ComparisonTable';
import ROICalculator from '../components/AIVoice/ROICalculator';
import ContactSection from '../components/ContactSection';
import './AIVoiceAgents.css';

const AIVoiceAgents: React.FC = () => {
  return (
    <div className="ai-voice-page">
      <VoiceHero />
      <ComparisonTable />
      <ROICalculator />
      
      <div className="voice-contact-wrapper">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to deploy your <span className="gradient-text">Voice Agent?</span></h2>
        <ContactSection />
      </div>
    </div>
  );
};

export default AIVoiceAgents;
