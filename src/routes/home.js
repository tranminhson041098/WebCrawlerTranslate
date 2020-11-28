const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeController');
const loginController = require('../app/controllers/loginController');

router.get('/',loginController.check,homeController.index);
router.post('/',loginController.check,homeController.index);

module.exports = router;