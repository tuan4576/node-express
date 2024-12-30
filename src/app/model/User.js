const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: { 
        type: String, 
        require: true,
        trim: true,
        minlength: 3, 
        maxlength: 50},
    email: { 
        type: String, 
        require: true,
        unique: true, 
        match: [/^\S+@\S+\.\S+$/, 'Email không hợp lệ']
    },
    password: { 
        type: String, 
        require: true,
        select: false },
    phone: { 
        type: String, 
        match: [/^\d{10,15}$/, 'Số điện thoại không hợp lệ'] 
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', User);
