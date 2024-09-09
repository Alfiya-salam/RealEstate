import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="main-content">
        <section className="contact-top-section">
          <div className="company-logo">
            <img src="images/logo.png" alt="NPNG Tech Logo" className="logo" />
            <h2>CBRE Innovation</h2>
          </div>
          <div className="company-details">
            <p>
                    Looking for your dream home or the perfect investment property? Contact us to explore exceptional real estate opportunities and get expert guidance.
            </p>
            <button className="get-quote-btn">Request a Consultation</button>
          </div>
        </section>

        <section className="contact-bottom-section">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: hello@cbre.in</p>
            <p>Phone: +91 7200168369</p>
            <p>Address: No 18, 2nd St, , Kochi, Ernakulam, kerala, 600088</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 CBRE Estates. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
