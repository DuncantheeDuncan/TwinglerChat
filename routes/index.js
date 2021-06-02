
// Export express
const express = require('express');


// Declare router funnction
const router = express.Router();



router.get('/', function (req, res) {

  res.render('index', { title: 'Twingler Chat', message: 'Connected via pug engine!!' })
  // res.send("it worekd!! connected to pug file");
});


module.exports = router;
