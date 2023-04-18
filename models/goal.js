const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  practices: Array,
  progress: Number,
  media: Array,
});

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
