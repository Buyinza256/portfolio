// Example Contact Form
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Comment:</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
};
