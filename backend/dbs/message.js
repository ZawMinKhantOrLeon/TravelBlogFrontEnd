const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    name:{type: String, required: true},
    phone :{type: String, required: true,},
    email :{type: String, required: true,},
    description :{type: String, required: true,},
    date:{type: Date, default: Date.now}
})

const message = mongoose.model('message',messageSchema);
module.exports = message;