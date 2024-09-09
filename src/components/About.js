import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="images/image.png" alt="Real Estate" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a leading real estate company committed to helping our clients find the perfect home.
            With years of experience and a team of dedicated professionals, we ensure the best property deals
            and customer satisfaction. Whether you're buying, selling, or renting, we provide comprehensive real estate solutions.
          </p>
          <ul className="about-highlights">
            <li>Over 20 years of experience in real estate.</li>
            <li>Award-winning services across the country.</li>
            <li>Personalized solutions for every client.</li>
            <li>Trusted by thousands of happy clients.</li>
          </ul>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
