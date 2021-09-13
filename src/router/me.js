const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/meController')
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/hoa-don/tim-kiem', verifyToken, meController.findHoadon);
router.get('/hoa-don/tim-kiem/time', verifyToken, meController.findTimeHoadon);
router.get('/hoa-don', verifyToken, meController.showHoadon);
router.get('/hoa-don/thung-rac', verifyToken, meController.showThungrac);
router.get('/create/hoa-don', verifyToken, meController.createHoadon);

//Kho
router.get('/create/kho', verifyToken, meController.createKho);
router.get('/kho', verifyToken, meController.showKho);




module.exports = router;