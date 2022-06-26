const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence')(mongoose);
const uniqueValidator = require('mongoose-unique-validator');

const ownerSchema = new Schema({
    ownerKey: {
        type: Number,
        unique: true
    },
    reg_time: {
        type:Date, 
        default: new Date().toLocaleDateString()
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
        default: "",
        unique: true
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

ownerSchema.plugin(AutoIncrementFactory, {inc_field:'ownerKey'});
ownerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Owner', ownerSchema);