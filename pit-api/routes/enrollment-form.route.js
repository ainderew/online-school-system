const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const studentSchema = require("../models/student.model");
const subjectSchema = require("../models/subject.model");
const GradeSchema = require("../models/grade.model");
const prospectusSchema = require("../models/prospectus.model")
const getDate = new Date()
const year = getDate.getFullYear()

router.get("/test", (req, res) => {
    res.json("CONNECTION SUCCESSFUL")
  });

//TESTS ENROLLMENT CODE
router.post("/", async (req, res) => {
  try {
    const systemCode = "112233qq"; //ENROLLMENT CODE
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


//HANDLES SUBMISSION OF ENROLLMENT FORM AND CREATES STUDENT ACCOUNT
router.post("/submitEnrollmentForm", async (req,res) => {
  console.log("submitted form")

  const gradeObj = {
    year: year,
    semester: "First Semester",
    subjectGrades: []
  }
  
  const combinedSchedule = {
    Monday: new Array(27),
    Tuesday: new Array(27),
    Wednesday: new Array(27),
    Thursday: new Array(27),
    Friday: new Array(27),
    Saturday: new Array(27),
    Sunday: new Array(27)
  }
  fillSchedule(combinedSchedule)
  // console.log(combinedSchedule)

  const {name,idNumber,yearLevel,email,messengerName,guardianName,internetConnection,phoneNumber,guardianPhoneNumber,gender} = req.body;
  
  const studentProspectus = await prospectusSchema.findOne({courseName: yearLevel, gender: gender})  //FINDS PROSPECTUS ACCORDING TO YEAR LEVEL AND GENDER
  const {subjects} = studentProspectus 
  
  try{
    //CREATES A GRADE SCHEMA FOR EVERY SUBJECT ON THE FIRST SEMESTER
    //it creates an object with 
    subjects.firstSemester.forEach(async el =>{
      const uniqueId = mongoose.Types.ObjectId()
      const Subject = {
        subjectName: el.subjectName,
        idNumber: idNumber,
        _id: uniqueId
      }
      const student = {
        name: name,
        idNumber: idNumber,
        grade: uniqueId
      }
      
      const Grade = new GradeSchema({
        _id: uniqueId,
        subjectName: el.subjectName,
        semester: "First Semester",
        year: year.toString(),
        grade: [{}],
        idNumber: idNumber,
        name: name
      })
      Grade.save()
      
      gradeObj.subjectGrades.push(Subject)
      
      //PUSH STUDENT TO THE SUBJECT'S STUDENT LIST WITH THE UNIQUE GRADE ID
      await subjectSchema.updateOne({subjectName: el.subjectName}, {$push: {students: student}})

    })
 
     // await userModel.updateOne({ userId: id.toString()}, {$push: {messages:{name: name, message:sentMessage}}})
    
    
    
    const Student = new studentSchema({
      name: name,
      password: await bcrypt.hash(idNumber, 10),
      idNumber: idNumber,
      yearLevel: yearLevel,
      email: email,
      messengerName: messengerName,
      guardianName: guardianName,
      internetConnection: internetConnection,
      phoneNumber: phoneNumber,
      guardianPhoneNumber: guardianPhoneNumber,
      grades: [gradeObj],
      gender: gender
    })
    Student.save();
    
    
    
    
   
    
    res.json("Successful")
    
  }catch(err){
    console.log(err)
    res.json(err)
  }
})


// INITIALIZES THE ARRAYS IN THE combinedSchedule OBJECT WITH {state: false}--------------------------------------------------------------------------------------
function fillSchedule(object){
  for (const key in object){
    object[key].fill({state: false})
  }
  
}

module.exports = router;