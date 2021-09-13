const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const auth = new Schema({
    user: {type: String, unique: true, trim: true, required: [true, 'Vui lòng nhập user']},
    password: {type: String, trim: true, required: [true, 'Vui lòng nhạp password']}
}, {
    timestamps: true
});

auth.pre('save', function(next) {
    let auth = this
    bcrypt.hash(auth.password, 10 , function(error, hash) {
        if (error) {
            next(error)
        }else {
            auth.password = hash
            next()
        }
    })
})


module.exports = mongoose.model('auth', auth)