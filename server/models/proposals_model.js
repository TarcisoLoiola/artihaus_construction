const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({

    Job_Name: { type: String, trim: true, lowercase: true },
    Client_Name: { type: String, trim: true, lowercase: true },
    Street: { type: String, trim: true, lowercase: true },
    City: { type: String, trim: true, lowercase: true },
    Code: { type: String, trim: true, lowercase: true },
    Contact_Infomation: [
        {
            phone: { type: String, trim: true, lowercase: true },
            number: { type: Number, trim: true }
        }
    ],
    Status: { type: Number },
    Start_Date: { type: Date },
    // finish: { type: Date },
    Notes: { type: String, trim: true, lowercase: true },
    Installation: [
        {
            Application: { type: String, trim: true, lowercase: true },
            Name: { type: String, trim: true, lowercase: true },
            Color: { type: String, trim: true, lowercase: true },
            Polymeric_Sand: { type: Number, trim: true, lowercase: true },
            PolySand_Color: { type: String, trim: true, lowercase: true },
            Pattern: { type: String, trim: true, lowercase: true },
            Number_of_Pallets: { type: Number, trim: true, lowercase: true },
            Square_Footage: { type: Number, trim: true, lowercase: true },
            SF_Demo: { type: Number, trim: true, lowercase: true },
            LF_Curbing: { type: Number, trim: true, lowercase: true },
            LF_Sleeve: { type: Number, trim: true, lowercase: true },
            SF_Fabric: { type: Number, trim: true, lowercase: true },
            Waste_Container: { type: Number, trim: true, lowercase: true },
            Crusher_Run: { type: Number, trim: true, lowercase: true },
            M10: { type: Number, trim: true, lowercase: true },
            LF_Steps: { type: Number, trim: true, lowercase: true },
            Number_04: { type: Number, trim: true, lowercase: true },
            Number_57: { type: Number, trim: true, lowercase: true },
            Number_89: { type: Number, trim: true, lowercase: true },
            Thin_Set: { type: Number, trim: true, lowercase: true },
            LF_Sock_Pie: { type: Number, trim: true, lowercase: true },
            LF_Drain_Pipe: { type: Number, trim: true, lowercase: true },
            LF_Geotextile_Fabric: { type: Number, trim: true, lowercase: true },
            Labor_Hours: { type: Number, trim: true, lowercase: true },
            Other: { type: String, trim: true, lowercase: true },
        }
    ],

}, { timestamps: true, trim: true })

const Projects = mongoose.model('Projects', ProjectSchema)

module.exports = Projects