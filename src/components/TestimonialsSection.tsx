import React from 'react';
import './TestimonialsSection.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sentiq Labs didn't just build us a bot; they completely overhauled our lead qualification process. Our sales team is closing 40% more deals.",
    name: "Sarah Jenkins",
    company: "TechNova Solutions"
  },
  {
    quote: "The AI voice agent handles our after-hours calls perfectly. It's like having our best customer service rep working 24/7.",
    name: "Marcus Chen",
    company: "Apex Healthcare"
  },
  {
    quote: "The web solution and automation backend they delivered is a masterpiece of efficiency. It paid for itself in the first month.",
    name: "Elena Rodriguez",
    company: "Velocity E-commerce"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="results" className="testimonials-section">
      <div className="section-header">
        <h2>Client <span className="gradient-text">Results</span></h2>
        <p>Don't just take our word for it. See what our partners say.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-panel testimonial-card">
            <Quote className="quote-icon" size={40} />
            <p className="testimonial-text">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <span className="company">{testimonial.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
