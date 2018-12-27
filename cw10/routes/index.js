const express = require('express');
const router = express.Router();

const AppController = require('../controllers/AppController');

router.get('/', AppController.home);

router.post('/', AppController.calculate);

module.exports = router;