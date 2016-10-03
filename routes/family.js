/**
 * Created by Brandon Roy on 02/10/2016.
 */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('family');
});

module.exports = router;

