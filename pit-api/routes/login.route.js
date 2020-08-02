const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const StudentSchema = require("../models/student.model")
const AdminSchema = require("../models/admin.model")

//LOGIN FOR STUDENTs
router.post("/", async (req,res) => {
    const {userId,password} = req.body
    
    const studentData = await StudentSchema.findOne({idNumber: userId})
    if (studentData === null){
        res.json({
            status: "id number failed"
        })
        return
    }
    await bcrypt.compare(password, studentData.password, (err, result) =>{
        if (err){
            console.log(err)
        }else if (result){
            res.json({
                data: studentData,
                status: "success"
            })
        }else{
            res.json({
                status: "failed"
            })
        }
    })
    
})

router.post("/admin", async (req,res) => {
    const {userId,password} = req.body
    
    const adminData = await AdminSchema.findOne({idNumber: userId})
    if (adminData === null){
        res.json({
            status: "id number failed"
        })
        return
    }
    await bcrypt.compare(password, adminData.password, (err, result) =>{
        if (err){
            console.log(err)
        }else if (result){
            res.json({
                data: adminData,
                status: "success"
            })
        }else{
            res.json({
                status: "failed"
            })
        }
    })
    
})

module.exports = router;