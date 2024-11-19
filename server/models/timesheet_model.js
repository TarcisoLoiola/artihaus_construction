const mongoose = require('mongoose')
const TimeSheetSchema = new mongoose.Schema({
    associate_id: { type: mongoose.SchemaTypes.ObjectId },
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
}, { timestamps: true, lowercase: true, trim: true })
const TimeSheet = mongoose.model('TimeSheet', TimeSheetSchema)
module.exports = TimeSheet