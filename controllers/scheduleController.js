const asyncHandler = require("express-async-handler");
const Schedule = require("../models/userScheduleModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getSchedules = asyncHandler(async (req, res) => {
  const Schedules = await Schedule.find();
  res.status(200).json(Schedules);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createSchedule = asyncHandler(async (req, res) => {
    const { name, email, saturday, sunday, monday, tuesday, wednesday, thursday, friday } = req.body;
    const schedule = await Schedule.create({
        name,
        email,
        saturday,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
      });
    
      res.status(201).json(schedule);  
});

const updateSchedule = asyncHandler(async(req,res) =>{
  const { email, fieldName, newValue } = req.body;

  try {
    const updateQuery = { $set: {} };
    updateQuery.$set[fieldName] = newValue;

    const updatedStore = await Schedule.findOneAndUpdate(
      { email: email },
      updateQuery,
      { new: true }
    );

    if (updatedStore) {
      res.json(updatedStore);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
})



module.exports = {
    getSchedules,
    createSchedule,
    updateSchedule
 
};
