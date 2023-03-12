const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Krijimi i skemes
const eventsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    desc:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// Krijimi i modelit bazuar ne skemen
module.exports = mongoose.model("Event", eventsSchema);

// Bazuar ne emrin e modelit automatikisht krijohet nje collection, por qe e kthen ne shumes emrin e modelit
