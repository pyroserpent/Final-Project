const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON bodies

// Temporary in-memory storage for quotes
let quotes = [
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  // Add more default quotes here if you like
];

// Get Quote of the Day
app.get('/quote', (req, res) => {
  const quoteOfTheDay = quotes[0]; // For simplicity, always return the first quote
  res.json(quoteOfTheDay);
});

// Submit a New Quote
app.post('/quote', (req, res) => {
  const newQuote = req.body;
  quotes.unshift(newQuote); // Add new quote to the beginning of the array

  // Send a JSON response
  res.status(201).json({ message: 'Quote added successfully', newQuote });
});
// Get All Submitted Quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
