const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/authController');


router.get('/login', loginController.login);
// router.get('/dangky', loginController.dangky);
router.post('/logout', loginController.logout);
router.post('/api/dangky', loginController.dangkySubmit);
router.post('/api/login', loginController.loginSubmit);

module.exports = router;
