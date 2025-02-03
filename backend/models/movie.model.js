import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  cast: [
    {
      actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",  // Referencia a la colección "Actor"
        required: true
      },
      role: {
        type: String,
        required: true
      }
    }
  ],
  images: [
    {
      type: String
    }
  ],
});

const Movie = mongoose.model("Movie", MovieSchema);
export default Movie;