const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subject = new Schema({
    subjectName: String,
    subjectCode: String,
    instructor: String,
    numberOfHours: String,
    semester: String,
    year: String,
    schedule: [Object],
    students: [Object]
})

const SubjectSchema = mongoose.model("Subject", subject)
module.exports = SubjectSchema;