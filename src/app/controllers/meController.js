const hoadonDB = require('../models/hoadon');
const khoDB = require('../models/kho');
const sanphamDB = require('../models/sanpham');
const { listDb } = require('../../util/mongoose');
const sanpham = require('../models/sanpham');

class meController {
    //[GET] /me/hoa-don
    showHoadon(req, res, next) {
        Promise.all([hoadonDB.find({}).sort({createdAt: -1}), hoadonDB.count()])
            .then(([hoadon, countHoaDon]) => res.render('me/hoadon', {
                hoadon: listDb(hoadon),
                countHoaDon,
            }))
            .catch(next)
    }

    //[GET] /me/hoa-don/thung-rac
    showThungrac(req, res, next) {
        hoadonDB.findDeleted({})       
            .then(hoadon => res.render('me/thungrac', {
                hoadon: listDb(hoadon),
            }))
            .catch(next);
    }

    //[GET] /me/create/hoa-don
    createHoadon(req, res, next) {
        sanphamDB.find({})
            .then(sanpham => res.render('me/create', {
                sanpham: listDb(sanpham)
            }))
    }

    // [GET] /me/hoa-don/:tim-kiem
    findHoadon(req, res, next) {
        Promise.all(
            [hoadonDB.find({ [req.query.find]: {$regex: req.query.q.toUpperCase()} }).sort({createdAt: -1}),
            hoadonDB.count({ [req.query.find]: {$regex: req.query.q.toUpperCase()} })]
        )
            .then(([hoadon, countHoaDon]) => res.render('me/hoadon', {
                hoadon: listDb(hoadon),
                countHoaDon,
            }))
            .catch(next)
    }

    // [GET] /me/hoa-don/time/:bt-:kt
    findTimeHoadon(req, res, next) {
        const timeBD = new Date(req.query.bd)
        const timeKT = new Date(`${req.query.kt}T23:59:59.000Z`)
        Promise.all(
            [hoadonDB.find({ createdAt: {$gte: timeBD, $lt: timeKT} }).sort({createdAt: -1}),
            hoadonDB.count({ createdAt: {$gte: timeBD, $lt: timeKT} })]
        )
            .then(([hoadon, countHoaDon]) => res.render('me/hoadon', {
                hoadon: listDb(hoadon),
                countHoaDon,
            }))
            .catch(next)
    }

    // [GET] /me/kho
    showKho(req, res, next) {
        Promise.all([ khoDB.find({}).sort({createdAt: -1}), sanphamDB.find({}).sort({createdAt: -1}) ])
            .then(([kho, sanpham]) => res.render('me/kho', {
                kho: listDb(kho),
                sanpham: listDb(sanpham)
            }))
            .catch(error => {
                
            })
    }
    
    // [GET] /me/create/kho
    createKho(req, res, next) {
        res.render('me/createKho')
    }
}

module.exports = new meController;