const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema ({
    name: String,
    password: String,
    idNumber: String,
    yearLevel: String,
    email: String,
    messengerName: String,
    guardianName: String,
    internetConnection: String,
    phoneNumber: String,
    guardianPhoneNumber: String,
    grades: [Object],
    schedule: Object
})
const StudentSchema  = mongoose.model("Student",Student);
module.exports = StudentSchema;