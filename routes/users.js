var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Testni naslov', tekst: 'Ovo je tekst za users rutu' });
});

module.exports = router;
