// Create web server
// Load the express module
const express = require('express');
const app = express();
const port = 3000;
// Load the comments module
const comments = require('./comments');

// Set up the template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Handle requests to the homepage
app.get('/', (req, res) => {
  res.render('comments', { comments: comments.getAll() });
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});