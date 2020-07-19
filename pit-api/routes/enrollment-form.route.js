const express = require("express");
const router = express.Router();

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


module.exports = router;