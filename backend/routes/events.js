const express = require("express");
const { getEvents, createEvent, getEvent } = require("../controllers/eventsController");

// Krijimi i nje instance of the router, ne menyre qe me i handle routes
const router = express.Router();

router.get('/', getEvents)

router.get('/:id', getEvent)

router.post('/', createEvent)

module.exports = router;
