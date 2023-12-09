const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  facility: {
    type: String,
    enum: ["Computer science", "Education", "Nursing", "ُEngineering"],
    default: "Computer science",
  },
  requests: [{ type: Schema.Types.ObjectId, ref:"Request"}],
});
module.exports = mongoose.model("Student", studentSchema);