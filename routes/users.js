var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

var gradeSchema = new Schema({name: String}, {collection: 'grades'});

mongoose.model('grades', gradeSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('grades').find((err, student) => {
        res.status(200).send(student);
    });
});

module.exports = router;
