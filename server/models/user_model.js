const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, lowercase: true },
    email: { type: String, trim: true, unique: true, lowercase: true },
    phone: [
        {
            type: { type: String, trim: true, lowercase: true },
            number: { type: Number, trim: true }
        }
    ],
    address: [{
        street: { type: String, trim: true, lowercase: true },
        city: { type: String, trim: true, lowercase: true },
        code: { type: Number, trim: true }
    }],
    hash: { type: String, trim: true },
}, { timestamps: true, trim: true })
const User = mongoose.model('User', UserSchema)
module.exports = User