const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`connected to server using: ${PORT}`)
})
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//setup connection to db
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@pit-khfqo.mongodb.net/PIT`, { useNewUrlParser: true, useUnifiedTopology: true } ,() =>{
    console.log("connected to DB")
})



//setup express 
app.get("/" , (req,res) =>{
    res.send("SERVER IS WORKING")
})


//ROUTES
const enrollmentFormRoute = require("./routes/enrollment-form.route")
const loginRoute = require("./routes/login.route");
const adminRoute = require("./routes/admin.route");

app.use("/enrollmentForm", enrollmentFormRoute)
app.use("/login", loginRoute)
app.use("/admin", adminRoute);

