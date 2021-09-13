const mongoose = require('mongoose')

async function connect() {
    
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connect Thanh Cong');
    } catch (error) {
        console.log('Connect That Bai');
    }
}

module.exports = { connect }