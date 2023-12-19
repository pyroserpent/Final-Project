import React from 'react';
import './QuoteDisplay.css';

const QuoteDisplay = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <div className="quote-text">{quote}</div>
      <div className="quote-author">- {author}</div>
    </div>
  );
};

export default QuoteDisplay;
