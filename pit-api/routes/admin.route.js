const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const AdminSchema = require("../models/admin.model");
const SubjectSchema = require("../models/subject.model");
const ProspectusSchema = require("../models/prospectus.model");

router.post("/createAdmin", async (req, res) => {
  const { idNumber, name, password } = req.body;

  try {
    const admin = new AdminSchema({
      idNumber: idNumber,
      name: name,
      password: await bcrypt.hash(password, 10),
    });
    admin.save();
    res.json("success");
  } catch (err) {
    res.json(err);
  }
});

router.post("/createSubject", (req, res) => {
    console.log("createSubject hit")
  const {
    subjectName,
    subjectCode,
    numberOfHours,
    instructor,
    semester,
    year,
    schedule,
  } = req.body;

  

  try {
    const subject = new SubjectSchema({
      subjectName: subjectName,
      subjectCode: subjectCode,
      instructor: instructor,
      numberOfHours: numberOfHours,
      semester: semester,
      year: year,
      schedule: schedule,
    });
    subject.save();
    res.json("success")
  }catch (err) {
      res.json(err)
  }
});

// CREATE PROSPECTUS ROUTE-----------------------------------------------------------------------------------
router.post("/createProspectus", (req, res) => {
  console.log("createprospectus hit")
  const{
    courseName,
    subjects
  } = req.body;
  
  console.log(req.body)
  
  try{
    const prospectus = new ProspectusSchema({
      courseName: courseName,
      subjects: subjects,
      totalUnits: ""
    })
    prospectus.save();
    res.json("success")
  }catch(err){
    res.json(err)
  }
})

module.exports = router;
