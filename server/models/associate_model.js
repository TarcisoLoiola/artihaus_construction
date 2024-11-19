const mongoose = require('mongoose')

const AssociateSchema = new mongoose.Schema({
    name: { type: String, trim: true, lowercase: true },
    user_id: { type: mongoose.SchemaTypes.ObjectId },
    email: { type: String, trim: true, unique: true, lowercase: true },
    title: { type: String, trim: true },
    hash: { type: String, trim: true },
    phone: [
        {
            type: { type: String, trim: true, lowercase: true },
            number: { type: Number, trim: true }
        }
    ],
    address: [
        {
            street: { type: String, trim: true, lowercase: true },
            city: { type: String, trim: true, lowercase: true },
            code: { type: Number, trim: true }
        }
    ],
    pay: {
        type: { type: String, trim: true },
        rate: { type: Number, trim: true },
    },

    timesheet: [
        {
            project_id: { type: mongoose.SchemaTypes.ObjectId },
            date: { type: Date, trim: true },
            location: {
                type: {
                    type: String, // Don't do `{ location: { type: String } }`
                    enum: ['Point'], // 'location.type' must be 'Point'
                    //required: true
                },
                coordinates: {
                    type: [Number],
                    //required: true
                }
            },
            paidAt: { type: Date, trim: true },
        }
    ]

}, { timestamps: true, trim: true })

const Associate = mongoose.model('Associate', AssociateSchema)

module.exports = Associate