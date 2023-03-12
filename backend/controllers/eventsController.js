const Events = require("../models/eventModel");
const mongoose = require("mongoose");

// GET events
const getEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create Event
const createEvent = async (req, res) => {
  const { name, date, time, location, desc } = req.body;
  // add document to db
  try {
    const events = await Events.create({ name, date, time, location, desc });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// get a single workout
const getEvent = async (req, res) => {
  try{

  
  // grab id params
  const { id } = req.params;

  console.log(req.params)

  // first check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event is valid" });
  }

  const event = await Events.findById(id);

  if (!event) {
    return res.status(404).json({ error: "No such event" });
  }
  res.status(200).json(event);
  }
  catch(error) {
    console.log(error)
  }
};


module.exports = {
 getEvents,
 createEvent,
 getEvent
};
