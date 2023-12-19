const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()); // Middleware for parsing JSON bodies

// Temporary in-memory storage for quotes
let quotes = [
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  // Add more default quotes here if you like
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});