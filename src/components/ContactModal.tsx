import React, { useState } from 'react';
import { X } from 'lucide-react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [actionType, setActionType] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAction = async (type: string) => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email, and Phone Number.");
      return;
    }
    setActionType(type);
    setIsSubmitting(true);

    const fullPhone = `${formData.countryCode} ${formData.phone}`;

    if (type === 'email' || type === 'call') {
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
            message: formData.message || 'Audit Request',
            actionRequested: type // 'email' or 'call' - allows n8n to branch logic!
          })
        });
      } catch (err) {
        console.error("Webhook error:", err);
      }
    }
    
    if (type === 'call') {
      alert(`Triggering our AI Voice Agent to call ${fullPhone} immediately...`);
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: '', email: '', countryCode: '+1', phone: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="gradient-text">Book Free Audit</h2>
          <p>No obligation. No pitch. Just clarity on how AI can scale your operations.</p>
        </div>

        {isSuccess ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>{actionType === 'call' ? 'AI Agent Dialing...' : 'Audit Requested'}</h3>
            <p>{actionType === 'call' ? `Our AI is calling ${formData.phone} right now.` : "We'll be in touch within 24 hours to schedule your audit call."}</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="modal-name">Full Name *</label>
              <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="modal-email">Work Email *</label>
              <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="modal-phone">Mobile Number *</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={{ width: '120px', flexShrink: 0, padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="555-000-0000" style={{ flex: 1 }} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modal-company">Business Name</label>
              <input type="text" id="modal-company" name="company" value={formData.company} onChange={handleChange} />
            </div>

            <div className="modal-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => handleAction('email')} disabled={isSubmitting} style={{ flex: 1, padding: '0.8rem' }}>
                {isSubmitting && actionType === 'email' ? 'Sending...' : 'Send Details'}
              </button>
              <button type="button" className="btn btn-primary" onClick={() => handleAction('call')} disabled={isSubmitting} style={{ flex: 1, padding: '0.8rem' }}>
                {isSubmitting && actionType === 'call' ? 'Connecting...' : 'Have AI Call Me Now'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
