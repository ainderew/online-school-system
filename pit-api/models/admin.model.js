const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema ({
    name: String,
    password: String,
    idNumber: String,
})
const AdminSchema  = mongoose.model("Admins",Admin);
module.exports = AdminSchema;