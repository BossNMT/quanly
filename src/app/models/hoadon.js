const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const hoadon = new Schema({
    fullname: String,
    phone: String,
    address: String,
    sanpham: String,
    model: String,
    money: String,
    phuongthuc: String,
}, {
    timestamps: true
});

hoadon.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
})

module.exports = mongoose.model('invoice', hoadon)