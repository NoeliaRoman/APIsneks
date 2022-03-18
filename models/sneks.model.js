const mongoose = require('mongoose');
const {Schema} = mongoose;

const SneksSchema = new Schema({
    species: {type: String, required : true},
    morph: {type: String, required : true},
    year: {type: Number, required : true},
    type: {type: Number, required : true}
});

module.exports = mongoose.model('snek',SneksSchema );