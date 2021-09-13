const hoadonDb = require('../models/hoadon');
const khoDB = require('../models/kho');
const sanphamDb = require('../models/sanpham');
const { oneDb } = require('../../util/mongoose')

class sendController {
    //[POST] /send/create/hoa-don
    create(req, res, next) {
        const hoadon = new hoadonDb(req.body)
        hoadon.save()
            .then(() => {
                sanphamDb.findOne({ sanpham: req.body.sanpham, model: req.body.model })
                    .then(sanpham => {
                        sanphamDb.updateOne({ sanpham: req.body.sanpham, model: req.body.model }, { soluong: Number(sanpham.soluong) - 1 })
                            .then(() => res.render('send/hoadonsubmit', {
                                dulieu: req.body
                            }))
                            .catch(next)
                    })
                    .catch(next)
            })
            .catch(error => {
                
            })
    }

    //[GET] /send/:id/edit
    edit(req, res, next) {
        hoadonDb.findById( req.params.id)
            .then(hoadon => res.render('send/edit', {
                hoadon: oneDb(hoadon)
            }))
            .catch(next)
    }

    //[PUT] /send/:id/update
    update(req, res, next) {
        hoadonDb.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/hoa-don'))
            .catch(next)
    }

    //[DELETE] /send/:id/delete
    delete(req, res, next) {
        hoadonDb.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    //[PATCH] /send/:id/khoi-phuc
    khoiphuc(req, res, next) {
        hoadonDb.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /send/:id/delete-forever
    deleteForever(req, res, next) {
        hoadonDb.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[POST] /send/handle-form-action
    handleFormAction(req, res, next) {
        switch(req.body.option) {
            case 'delete':
                hoadonDb.delete({ _id: { $in: req.body.hoadonIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
        }
    }

    //[POST] /send/create/kho
    createKho(req, res, next) {
        const kho = new khoDB(req.body)
        kho.save()
            .then(
                sanphamDb.findOne({ sanpham: req.body.sanpham, model: req.body.model })
                    .then(tensanpham => {
                        if (tensanpham != null) {
                            sanphamDb.updateOne({ sanpham: req.body.sanpham }, { soluong: Number(tensanpham.soluong) + Number(req.body.soluong) })
                                .then(() => res.redirect('/me/kho'))
                                .catch(next)
                        }else {
                            const sanpham = new sanphamDb({
                                sanpham: req.body.sanpham,
                                model: req.body.model,
                                soluong: req.body.soluong,
                                giahientai: '',
                            })
                            sanpham.save()
                                .then(() => res.redirect('/me/kho'))
                                .catch(next)
                        }
                    })
                    .catch(error => {

                    })
            )

            .catch(error => {
                
            })
    }

    //[PATCH] /send/san-pham/:id/:giacaNEW/update-gia
    updateGiaNEW(req, res, next) {
        sanphamDb.updateOne({ _id: req.params.id }, { giahientai: req.params.giacaNEW })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /send/san-pham/:id/delete
    deleteSanPham(req, res, next) {
        sanphamDb.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new sendController;