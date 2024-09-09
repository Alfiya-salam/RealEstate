import React, { useState } from 'react';
import './Query.css';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    query: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, query } = formData;

    if (!name || !email || !subject || !query) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Thank you for your query. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      query: ''
    });
  };

  return (
    <section id="query" className="query-section">
      <div className="query-content">
        <h2>Get in Touch with Us!</h2>
        <p>If you have any questions or need further information, please fill out the form below and we will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit} className="query-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="query">Your Query</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Write your query here..."
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Query;
