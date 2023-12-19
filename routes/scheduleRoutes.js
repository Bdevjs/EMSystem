const express = require("express");
const {
    createSchedule,
    getSchedules,
    updateSchedule,
} = require("../controllers/scheduleController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/createschedule", createSchedule);
router.get("/schedules",getSchedules);
router.put("/updateschedule",updateSchedule)

module.exports = router;