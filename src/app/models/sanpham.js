const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const sanpham = new Schema({
    sanpham: String,
    model: String,
    soluong: String,
    giahientai: String,
}, {
    timestamps: true,
});

sanpham.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
})

module.exports = mongoose.model('product', sanpham)