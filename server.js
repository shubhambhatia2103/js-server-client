const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve text data
app.get('/data', (req, res) => {
  res.json({
    message: "Hello, this is text data from the server!",
    images: [
      '/images/image.png'
      
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
