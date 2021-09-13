const express = require('express');
const router = express.Router();
const sendController = require('../app/controllers/sendController');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/create/hoa-don', verifyToken, sendController.create)
router.post('/handle-form-action', verifyToken, sendController.handleFormAction)
router.get('/:id/edit', verifyToken, sendController.edit)
router.put('/:id/update', verifyToken, sendController.update)
router.delete('/:id/delete', verifyToken, sendController.delete)
router.patch('/:id/khoi-phuc', verifyToken, sendController.khoiphuc)
router.delete('/:id/delete-forever', verifyToken, sendController.deleteForever)

//---------Kho-------------
router.post('/create/kho', verifyToken, sendController.createKho)
router.patch('/san-pham/:id/:giacaNEW/update-gia', verifyToken, sendController.updateGiaNEW)
router.delete('/san-pham/:id/delete', verifyToken, sendController.deleteSanPham)



module.exports = router;