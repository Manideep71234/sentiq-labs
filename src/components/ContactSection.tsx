import React, { useState } from 'react';
import './ContactSection.css';
import { Mail, Globe, MessageSquare } from 'lucide-react';

import { supabase } from '../supabase';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    company: '',
    message: ''
  });
  const [actionType, setActionType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAction = async (type: string) => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in your Name, Email, Phone Number, and Message.");
      return;
    }
    
    setActionType(type);
    setStatus('loading');
    
    try {
      // 1. Always log the lead to Supabase database (if keys exist)
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone,
            company: formData.company, 
            message: formData.message 
          }
        ]);

      if (error) console.error('Supabase error:', error); // Log but don't hard throw if just testing without keys
      
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      
      // 2. Send to n8n webhook for both email and call
      try {
        await fetch('https://maddy2627.app.n8n.cloud/webhook-test/new-lead', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: fullPhone,
            company: formData.company,
            message: formData.message,
            actionRequested: type // 'email' or 'call'
          })
        });
        
        if (type === 'email') {
          alert('Thank you! Your details have been sent successfully. We will reply shortly.');
        } else if (type === 'call') {
          alert(`Connecting... Our AI Voice Agent is now dialing ${fullPhone}. Please pick up!`);
        }
      } catch (err) {
        console.error("Webhook error:", err);
        alert('We encountered an issue submitting your request. Please try again later.');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+1', phone: '', company: '', message: '' });
    } catch (error) {
      console.error('Error handling action:', error);
      setStatus('error');
      alert('Sorry, there was an error submitting your request.');
    } finally {
      if (status !== 'error') setStatus('idle');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass-panel">
        <div className="contact-info">
          <h2>Let's build your <span className="gradient-text">system</span></h2>
          <p>Ready to multiply your revenue with bespoke AI solutions? Reach out to schedule your free technical audit.</p>
          
          <div className="contact-links">
            <a href="mailto:hello@sentiqlabs.com" className="contact-link">
              <Mail size={20} /> hello@sentiqlabs.com
            </a>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><MessageSquare size={20} /></a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Work Email *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number *</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select 
                  name="countryCode" 
                  value={formData.countryCode} 
                  onChange={handleChange}
                  style={{ width: '120px', flexShrink: 0, padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="555-000-0000" style={{ flex: 1 }} />
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}></textarea>
          </div>
          
          <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="btn btn-secondary" onClick={() => handleAction('email')} disabled={status === 'loading'} style={{ flex: 1, padding: '1rem' }}>
              {status === 'loading' && actionType === 'email' ? 'Sending...' : 'Send as Email'}
            </button>
            <button type="button" className="btn btn-primary submit-btn" onClick={() => handleAction('call')} disabled={status === 'loading'} style={{ flex: 1, margin: 0 }}>
              {status === 'loading' && actionType === 'call' ? 'Connecting...' : 'Have AI Call Me Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
