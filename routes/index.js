var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Naslov' });
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Testni naslov', tekst: 'Evo neki tekst koji se ispisuje' });
});

router.get('/evoZahtjev', function (req, res, next) {
   console.log(req.query.ime);
   res.send({status: 200, evoTiIme: req.query.ime});
});

module.exports = router;
