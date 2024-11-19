const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    
    project_id: { type: mongoose.SchemaTypes.ObjectId },
    relational_id: { type: mongoose.SchemaTypes.ObjectId },
    category: { type: String, trim: true, lowercase: true },
    URL: { type: String, trim: true, lowercase: true },

}, { timestamps: true, lowercase: true, trim: true })

const Images = mongoose.model('Images', ImageSchema)

module.exports = Projects