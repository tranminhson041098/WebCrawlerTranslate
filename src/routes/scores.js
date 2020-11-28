const express = require('express');
const router = express.Router();
const scoresController = require('../app/controllers/scoresController');

router.get('/',scoresController.index)
router.post('/:slug',scoresController.processScore);

module.exports = router;
