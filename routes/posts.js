var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

var fooSchema = new Schema({content: String}, {collection: 'foo'});

mongoose.model('foo', fooSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('foo').find((err, content) => {
        res.status(200).send(content);
    });
});

module.exports = router;
