import React from 'react';
import './CommitmentSection.css';

const CommitmentSection = () => {
  return (
    <div className="commitment-section">
      <h2>Our Commitment</h2>
      <div className="commitment-cards">
        <div className="commitment-card">
          <h3>Our Story</h3>
          <p>We bring the diverse knowledge of our people, clients, and partners to realize potential in every business and every person.</p>
          <a href="/our-story">Read More</a>
        </div>
        <div className="commitment-card">
          <h3>Corporate Responsibility</h3>
          <p>We take great pride in our reputation for upholding the highest standards in the way we do business.</p>
          <a href="/corporate-responsibility">Read More</a>
        </div>
        <div className="commitment-card">
          <h3>Sustainability</h3>
          <p>Minimizing the environmental impact of the built environment is both a responsibility and an opportunity.</p>
          <a href="/sustainability">Read More</a>
        </div>
        <div className="commitment-card">
          <h3>Diversity, Equity & Inclusion</h3>
          <p>An inclusive culture is a thriving culture. We are committed to our employees feeling safe, valued, and heard.</p>
          <a href="/diversity">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
