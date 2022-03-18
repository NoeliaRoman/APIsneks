const express = require('express');
const router = express.Router();
const sneksController = require('../controllers/sneks.controller');

router.get('/', sneksController.getSneks);

module.exports = router;