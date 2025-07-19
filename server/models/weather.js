import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    city: {
        type: string,
        required: true
    },
    temp: {
        type: Number,
        required:true
    },
     tempmin: {
    type: Number,
    required: true
  },
  tempmax: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  feelslike: {
    type: Number,
    required: true
  },
  weather: {
    type: String,
    required: true
  },
  savedAt: {
    type: Date,
    default: Date.now
  }
});

const weather = mongoose.model("weather", weatherSchema);
export default weather;