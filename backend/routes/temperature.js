// backend/routes/temperature.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    // Generate random temperature between 15 and 45
    const temp = (Math.random() * 30 + 15).toFixed(2);
    res.json({ temperature: parseFloat(temp) });
  } catch (err) {
    // On error, respond with 500
    req.app.get('logger').error(err.message);
    res.status(500).json({ error: 'Failed to get temperature' });
  }
});

module.exports = router;
