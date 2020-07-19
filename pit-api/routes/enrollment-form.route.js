const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const studentSchema = require("../models/student.model")

router.get("/test", (req, res) => {
    res.json("CONNECTION SUCCESSFUL")
  });

router.post("/", async (req, res) => {
  try {
    const systemCode = "112233qq";
    const userCode = req.body.enrollmentCode;
    console.log(userCode)
    if (systemCode == userCode) {
        res.json("Verified");
    } else{
        res.json("Failed")
    }

  } catch (err) {
    res.json(err);
  }
});

router.post("/submitEnrollmentForm", async (req,res) => {
  
  const {name,idNumber,gradeLevel,email,messengerName,guardianName,internetConnection} = req.body;
  console.log("endpoint hiht")
  console.log(name)
  try{
    const Student = new studentSchema({
      name: name,
      password: await bcrypt.hash(idNumber, 10),
      idNumber: idNumber,
      gradeLevel: gradeLevel,
      email: email,
      messengerName: messengerName,
      guardianName: guardianName,
      internetConnection: internetConnection
    })
    Student.save();
    res.json("Successful")
    
  }catch(err){
    res.json("error")
  }
})


module.exports = router;