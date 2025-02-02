import mongoose from "mongoose";

const ActorSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  lastname : {
    type: String,
    required: true
  },
  birthdate : {
    type: Date,
    required: true
  },
  biography : {
    type: String,
    required: true
  },
  pictures : [{
    type: String,
    required: true
  }]
});