const express = require('express');
const router = express.Router();
const listpassagesController = require('../app/controllers/listpassagesController')

router.get('/',listpassagesController.index);

module.exports = router;