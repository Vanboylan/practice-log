const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeframe: {
    type: String,
    required: true,
  },
  practices: Array,
  steps: Array,
  media: Array,
});

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
