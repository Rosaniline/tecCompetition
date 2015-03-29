var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.files);
    res.end("File uploaded.");
});

module.exports = router;
