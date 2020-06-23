const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema(
  {
    city: {
      type: String,
      required: true
    },
    startdate: { type: Date, required: true },
    enddate: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);
const Weather = mongoose.model("Weather", weatherSchema);
module.exports = Weather;
