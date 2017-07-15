var express = require('express');
var router = express.Router();
var db = require('../models/db');
/* GET home page. */
router.get("/:id", function(req, res, next) {
  var options = {
    req: req,
    topic: {},
    comments: []
  }
  db.table('topic').join('user on topic.user_id = user.id where topic.user_id = ' + req.params.id).select()
  .then(function (data) {
    options.topic = data[0];
    return db.table('comment').join('topic on comment.topic_id = topic.id where comment.topic_id = ' + data[0].id).select()
  }).then(function (data) {
    options.comments = data;
    console.log(data);
    return res.render('topic', options);
  }).catch(function (error) {
    return res.send(JSON.stringify({'message':'fail'}))
  });
});

module.exports = router;
