const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/detailController');

router.get('/:slug',detailController.index)


module.exports = router;