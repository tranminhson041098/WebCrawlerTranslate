const express = require('express');
const router = express.Router();
const searchController = require('../app/controllers/searchController');

router.get('/:slug',searchController.index)


module.exports = router;