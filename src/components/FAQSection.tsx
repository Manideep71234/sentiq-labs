import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    question: "Do I need to change my current software?",
    answer: "No. Our AI systems integrate directly with your existing tech stack (CRM, Slack, Email, etc.) via APIs and webhooks. We enhance your current tools rather than replacing them."
  },
  {
    question: "How long does a custom AI agent take to build?",
    answer: "Most custom systems are engineered, tested, and deployed within 2 to 4 weeks, depending on complexity and the number of integrations required."
  },
  {
    question: "What if the AI makes a mistake on a call?",
    answer: "Our voice agents are heavily constrained by strict system prompts and knowledge bases. They are designed to gracefully hand over complex or edge-case queries to a human representative."
  },
  {
    question: "Do you charge hourly for development?",
    answer: "No. We operate on value-driven, flat-fee project pricing or performance-based retainers. You pay for the outcome and the system, not the hours it takes us to build it."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="section-header">
        <h2>Common <span className="gradient-text">Questions</span></h2>
        <p>Everything you need to know about our systems and process.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item glass-panel ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
            </div>
            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
