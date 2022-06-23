const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    _id: {
        type: Number,
        required:true,
    },
    reg_time: {
        type:Date, 
        default: Date.now().toISOString()
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
        type: String,
        default: ""
    },
    address: {
        type: String,
        required:true
    },
    city: {
        type: String,
        default: ""
    },
    zip: {
        type: String,
        default: ""
    }
},{versionKey:false});

module.exports = mongoose.model('Owner', ownerSchema);