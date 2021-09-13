const express = require('express');
const router = express.Router()
const homeController = require('../app/controllers/homeController');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/', verifyToken, homeController.home);

module.exports = router