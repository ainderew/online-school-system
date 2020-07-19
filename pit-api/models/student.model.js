const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema ({
    name: String,
    password: String,
    idNumber: String,
    gradeLevel: String,
    email: String,
    messengerName: String,
    guardianName: String,
    internetConnection: String
})
const StudentSchema  = mongoose.model("Student",Student);
module.exports = StudentSchema;