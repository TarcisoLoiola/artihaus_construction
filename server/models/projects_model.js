const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({

    name: { type: String, trim: true, lowercase: true, lowercase: true },
    street: { type: String, trim: true, lowercase: true },
    city: { type: String, trim: true, lowercase: true },
    code: { type: String, trim: true, lowercase: true },
    client: { type: String, trim: true, lowercase: true },
    status: { type: Number, trim: true, min: 0, max: 3 },
    //0 = not started, 1 = completed, 2 = in progress, 3 = parcial completed
    started: { type: Date },
    finished: { type: Date },
    address: [{
        street: { type: String, trim: true, lowercase: true },
        city: { type: String, trim: true, lowercase: true },
        code: { type: Number, trim: true }
    }],

    expenses: [
        {
            merchant: { type: String, trim: true, lowercase: true },
            category: { type: String, trim: true, lowercase: true },
            amount: { type: Number, trim: true },
            created: { type: Date },
            status: { type: Boolean },
        }],

    details: [
        {
            category: { type: String, trim: true, lowercase: true },
            description: { type: String, trim: true, lowercase: true },
            type: { type: String, trim: true, lowercase: true },
            size: { type: Number, trim: true },
            paid_amount: { type: Number, trim: true },
            status: { type: Number },
        }
    ],

    images: [
        {
            relation: {
                array: { type: String, trim: true, lowercase: true },
                array_id: { type: mongoose.SchemaTypes.ObjectId, trim: true }
            },
            category: { type: String, trim: true, lowercase: true },
            URL: { type: String, trim: true, lowercase: true },
        }
    ],
}, { timestamps: true, trim: true })

const Projects = mongoose.model('Projects', ProjectSchema)

module.exports = Projects