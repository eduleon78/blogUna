var express = require('express');
var router = express.Router();
var pagesController = require('../controllers/pagesController');


router.get('/', pagesController.index);
router.get('/about', pagesController.about);
router.get('/contact', pagesController.contact);
router.get('/hardware', pagesController.hardware);
router.get('/computadora', pagesController.computadora);



/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/hardware', function(req, res, next) {
  res.render('hardware');
}); */

module.exports = router;
