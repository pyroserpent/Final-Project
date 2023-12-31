import React, { useState } from 'react';
import './QuoteForm.css';

const QuoteForm = ({ onNewQuote }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quote, author }),
    })
    .then(response => response.json())
    .then(data => {
      alert('Quote submitted successfully!');
      console.log("Submitting quote:", { quote, author });
      onNewQuote({ quote, author });
      setQuote('');
      setAuthor('');
    })
    .catch(error => {
      console.error('Error submitting quote:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="quote">Quote</label>
        <textarea 
          id="quote" 
          value={quote} 
          onChange={(e) => setQuote(e.target.value)} 
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input 
          type="text" 
          id="author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Submit Quote</button>
    </form>
  );
};

export default QuoteForm;
