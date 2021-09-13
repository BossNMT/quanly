module.exports = {
    listDb: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject())
    },

    oneDb: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
}