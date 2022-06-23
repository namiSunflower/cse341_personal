const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    _id: {
        type: Number,
        required:true
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
    },
    boardingDuration: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Pet', petSchema);