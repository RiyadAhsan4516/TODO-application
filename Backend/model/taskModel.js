const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  Description: {
    type: String,
    trim: true,
    required: [true, "A task must have a description"],
    maxlength: [180, "A description cannot have more than 180 characters"],
  },
  Date: {
    type: Date,
    required: [true, "A task must have a deadline"],
  },
  DocNumber: Number,
});

const TaskModel = mongoose.model("Tasks", TaskSchema);
module.exports = TaskModel;
