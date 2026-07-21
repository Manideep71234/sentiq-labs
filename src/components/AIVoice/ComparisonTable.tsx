import React from 'react';
import './ComparisonTable.css';

const ComparisonTable: React.FC = () => {
  return (
    <section className="comparison-section">
      <h2>Why Sentiq <span className="gradient-text">Voice AI?</span></h2>
      
      <div className="comparison-table-wrapper glass-panel">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Human Agent</th>
              <th className="highlight-col">Sentiq AI Voice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Availability</td>
              <td>8 hours / day (Mon-Fri)</td>
              <td className="highlight-col">24/7/365</td>
            </tr>
            <tr>
              <td>Response Time</td>
              <td>Variable (often missed)</td>
              <td className="highlight-col">Instant (under 1 second)</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Limited by headcount</td>
              <td className="highlight-col">Unlimited concurrent calls</td>
            </tr>
            <tr>
              <td>Cost per lead/call</td>
              <td>High (Salary, benefits)</td>
              <td className="highlight-col">Fractions of a cent</td>
            </tr>
            <tr>
              <td>CRM Integration</td>
              <td>Manual entry required</td>
              <td className="highlight-col">100% Automated sync</td>
            </tr>
            <tr>
              <td>Emotion & Tone</td>
              <td>Variable (can have bad days)</td>
              <td className="highlight-col">Always polite & professional</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
