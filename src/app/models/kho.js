const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const kho = new Schema({
    sanpham: String,
    model: String,
    soluong: String,
    tongtien: String,
}, {
    timestamps: true,
});

kho.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
})

module.exports = mongoose.model('warehouse', kho)