import React, { useState } from 'react';
import './ContactSection.css';
import { Mail, Globe, MessageSquare } from 'lucide-react';

import { supabase } from '../supabase';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            company: formData.company, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      alert('Thank you! We will be in touch shortly.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      alert('Sorry, there was an error submitting your message. Please make sure you have connected your Supabase project keys.');
    } finally {
      if (status !== 'error') setStatus('idle'); // Reset only if not error to keep error visible if needed
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
