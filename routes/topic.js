var express = require('express');
var router = express.Router();
var db = require('../models/db')
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render('topic', { title: 'Express' });
});

module.exports = router;