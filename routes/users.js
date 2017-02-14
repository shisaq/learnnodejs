var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('grades').find((err, student) => {
        res.status(200).send(student);
    });
});

module.exports = router;
