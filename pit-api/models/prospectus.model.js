const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Prospectus = new Schema({
    courseName: String,
    subjects: Object,
    totalUnits: String,
    gender: String
})

const ProspectusSchema = mongoose.model("Prospectus", Prospectus)
module.exports = ProspectusSchema;