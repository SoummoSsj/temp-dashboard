// backend/app.js
require('dotenv').config(); 
const express = require('express');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const logger = require('./logger');
const authMiddleware = require('./middleware/auth');
const temperatureRouter = require('./routes/temperature');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// HTTP request logging (to console/file as needed)
app.use(morgan('combined', {
  stream: { write: msg => logger.info(msg.trim()) }
}));

// Rate limiting: max 100 req per 1 second per IP
const limiter = rateLimit({
  windowMs: 1000,          // 1 second window
  max: 100,                // limit each IP to 100 requests per windowMs
  handler: (req, res) => {
    res.status(429).json({ message: 'Too many requests, please try again later.' });
  }
});
app.use(limiter);

// JWT auth (optional): verifies token if present
app.use(authMiddleware);

// API route
app.use('/temperature', temperatureRouter);

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack || err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
