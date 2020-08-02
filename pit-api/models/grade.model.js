const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Grade = new Schema ({
    subjectName: String,
    semester: String,
    year: String,
    grade: [Object],
    idNumber: String,
    name: String,
    
})
const GradeSchema  = mongoose.model("Grade",Grade);
module.exports = GradeSchema;