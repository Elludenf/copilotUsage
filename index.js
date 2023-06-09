const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  });
});

module.exports = router;