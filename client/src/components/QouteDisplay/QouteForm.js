import React, { useState } from 'react';

const QuoteForm = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST request to the server with the new quote
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
      // Reset the form fields
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
