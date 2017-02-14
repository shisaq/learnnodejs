var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('foo').find((err, content) => {
        res.status(200).send(content);
    });
});

module.exports = router;
