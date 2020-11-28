const express = require('express');
const homeController = require('../app/controllers/homeController');
const router = express.Router();
const loginController = require('../app/controllers/loginController');

router.get('/',loginController.index);
//router.post('/',loginController.check,homeController.index);

module.exports = router;