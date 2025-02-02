import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  genre : {
    type: String,
    required: true
  },
  year : {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;