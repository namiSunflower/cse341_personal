const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    _id: {
        type: Number,
        required:true
    },
    reg_time: {
        type:Date, 
        default: new Date()
    },
    name: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true
    },
    petType: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    feedingPattern: {
        type: String,
        required: true
    },
    medicationPattern: {
        type: String,
        default: ""
    },
    boardingDuration: {
        type: Number,
        required: true
    },
},{versionKey:false});

module.exports = mongoose.model('Pet', petSchema);