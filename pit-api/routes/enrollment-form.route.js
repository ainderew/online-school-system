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

  const {name,idNumber,yearLevel,email,messengerName,guardianName,internetConnection,phoneNumber,guardianPhoneNumber} = req.body;
  const studentProspectus = await prospectusSchema.findOne({courseName: yearLevel})
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
      
      const subject = await subjectSchema.findOne({subjectName: el.subjectName})
     
      const {schedule} = subject
      if (el.subjectName === "English (Oral Communication)"){
        console.log(`English (Oral Communication): ${schedule[0].Monday.forEach(el => console.log(el))}`)
        
      }
     
      
      // for (let i = 0; i < 7; i++){
      //   if (i === 0){
      //     schedule.Monday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Monday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 1){
      //     schedule.Tuesday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Tuesday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 2){
      //     schedule.Wednesday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Wednesday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 3){
      //     schedule.Thursday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Thursday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 4){
      //     schedule.Friday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Friday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 5){
      //     schedule.Saturday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Saturday.splice(index,1,el)
      //       }
      //     })
      //   }else if (i === 6){
      //     schedule.Sunday.forEach(( el, index) =>{
      //       if (el.state === true){
      //         combinedSchedule.Sunday.splice(index,1,el)
      //       }
      //     })
      //   }
      // }
      
      
    })
    // console.log(combinedSchedule)
    
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