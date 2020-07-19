const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema ({
    name: String,
    idNumber: String,
    gradeLevel: String,
    email: String,
    messengerName: String,
    guardianName: String,
    internetConnection: String
})