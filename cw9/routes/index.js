const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const AppController = require('../controllers/AppController');

router.get('/form', PagesController.form);

router.get('/hello', PagesController.hello);

router.post('/formdata', AppController.store);

module.exports = router;