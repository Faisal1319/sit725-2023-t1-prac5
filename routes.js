const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/', sampleController.getAllSamples);
router.post('/', sampleController.createSample);

module.exports = router;
