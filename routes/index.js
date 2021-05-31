
// Export express
const express = require('express');

// Declare router funnction
const router = express.Router();

router.get('/', function (req, res) {

  res.render('index', { title: 'Twingler Chat', message: 'Hello there!' })
});

module.exports = router;