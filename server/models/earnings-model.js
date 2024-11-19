const mongoose = require('mongoose')

const EarningsSchema = new mongoose.Schema({

    project_id: { type: mongoose.SchemaTypes.ObjectId },
    relational_id: { type: mongoose.SchemaTypes.ObjectId },
    date: { type: Date, trim: true },
    category: { type: String, trim: true },
    // measure: {
    //     type: { type: String, trim: true, lowercase: true },
    //     size: { type: Number, trim: true },
        amount: { type: Number, trim: true },
    // },
    description: { type: String, trim: true },
    status: { type: Boolean },
}, { timestamps: true, lowercase: true })

const Earnings = mongoose.model('Earnings', EarningsSchema)

module.exports = Earnings