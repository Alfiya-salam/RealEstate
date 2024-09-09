import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-box">
          <h3>Property Buying</h3>
          <p>
            Get access to the best properties available on the market, with expert guidance to make the buying process smooth.
          </p>
        </div>
        <div className="service-box">
          <h3>Property Selling</h3>
          <p>
            Sell your property at the best possible price with our extensive market research and expert consultations.
          </p>
        </div>
        <div className="service-box">
          <h3>Rentals</h3>
          <p>
            Find rental properties that match your budget and lifestyle with ease through our comprehensive rental services.
          </p>
        </div>
        <div className="service-box">
          <h3>Real Estate Consultancy</h3>
          <p>
            Receive personalized advice on real estate investments to help grow your portfolio with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
