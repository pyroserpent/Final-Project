import React, { useState, useEffect } from 'react';
import './QuoteDisplay.css';

const QuoteDisplay = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  useEffect(() => {
    // Fetch the quote from the server
    fetch('http://localhost:3001/quote')
      .then(response => response.json())
      .then(data => {
        setQuoteData(data);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        // Handle error or set default message
        setQuoteData({ quote: 'Error loading quote.', author: '' });
      });
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-text">{quoteData.quote}</div>
      <div className="quote-author">- {quoteData.author}</div>
    </div>
  );
};

export default QuoteDisplay;
