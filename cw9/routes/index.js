const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const AppController = require('../controllers/AppController');

router.get('/', PagesController.home);

router.get('/form', PagesController.form);

router.get('/hello', PagesController.hello);

router.post('/formdata', AppController.store);

router.post('/jsondata', AppController.jsondata);

module.exports = router;