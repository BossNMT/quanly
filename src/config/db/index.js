const mongoose = require('mongoose')

async function connect() {
    
    try {
        await mongoose.connect('mongodb+srv://nmt-quanly:ngominhthuan@bookservice.pysu7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('Connect Thanh Cong');
    } catch (error) {
        console.log('Connect That Bai');
    }
}

module.exports = { connect }