const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    _id: {
        type: Number,
        required:true
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    email: {
        type: Number
    },
    address: {
        type: String,
        required:true
    },
    city: {
        type: String
    },
    zip: {
        type: Number
    }
});

module.exports = mongoose.model('Owner', ownerSchema);