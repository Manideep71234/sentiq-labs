import React from 'react';
import { Mic, Globe2 } from 'lucide-react';
import './VoiceHero.css';

const VoiceHero: React.FC = () => {
  return (
    <section className="voice-hero">
      <div className="voice-hero-content">
        <div className="badge"><Mic size={16} /> Human-Like AI Voice Agents</div>
        <h1 className="gradient-text">Never Miss Another Call.</h1>
        <p>Deploy a 24/7 AI agent that handles inbound customer service, outbound sales calls, and books appointments directly to your calendar.</p>
        
        <div className="audio-demo glass-panel">
          <h3><Globe2 size={20} /> Listen to a Live Demo</h3>
          <div className="audio-players">
            <button className="btn btn-secondary">▶ Play English (Sales)</button>
            <button className="btn btn-secondary">▶ Play Spanish (Support)</button>
          </div>
          <p className="demo-note">*These are actual recordings of our AI agent in action.</p>
        </div>
      </div>
    </section>
  );
};

export default VoiceHero;
