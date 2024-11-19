const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: { type: String, trim: true, unique: true },
    contact: [
        {
            user: { type: String },
            type: { type: String },
            phone: { type: Number, sparse: true },
            email: {
                type: String,
                unique: false,
                sparse: true,
                match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
            },
        },
    ],
    address: [
        {
            street: { type: String, trim: true },
            city: { type: String, trim: true },
            code: { type: String, trim: true }
        }
    ],

}, { timestamps: true, lowercase: true, trim: true })

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client