const mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema({
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
  role: {
    type: String,
    enum: ["prof", "emp", "hospital"],
    default: "emp",
  },
});
module.exports = mongoose.model("Employee", employeeSchema);