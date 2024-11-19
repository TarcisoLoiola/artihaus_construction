const mongoose = require('mongoose')

const ExpensesSchema = new mongoose.Schema({

    category: { type: String, trim: true },
    amount: { type: Number },
    description: { type: String, trim: true },
    date: { type: Date, trim: true },
    status: { type: Boolean, trim: true }

}, { timestamps: true, lowercase: true, trim: true })

const Expenses = mongoose.model('Expenses', ExpensesSchema)

module.exports = Expenses