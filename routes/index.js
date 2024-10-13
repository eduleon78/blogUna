var express = require('express');
var router = express.Router();
var pagesController = require('../controllers/pagesController');


router.get('/', pagesController.index);
router.get('/about', pagesController.about);
router.get('/contact', pagesController.contact);
router.get('/hardware', pagesController.hardware);
router.get('/computadora', pagesController.computadora);
router.get('/cpu', pagesController.cpu);
router.get('/ergonomia', pagesController.ergonomia);
router.get('/ofimatica', pagesController.ofimatica);
router.get('/terminologia', pagesController.terminologia);
router.get('/sistema', pagesController.sistemas);

module.exports = router;
