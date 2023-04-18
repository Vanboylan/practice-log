const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PracticeSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  content: String,
  progress: Number,
  tags: Array,
});

const Practice = mongoose.model("Practice", PracticeSchema);

module.exports = Practice;
