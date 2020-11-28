const express = require('express');
const router = express.Router();
const multiplechoiceController = require('../app/controllers/multiplechoiceController')

router.get('/',multiplechoiceController.index);

module.exports = router;