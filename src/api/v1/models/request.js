const mongoose = require("mongoose");

const { Schema } = mongoose;

const requestSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  code:{
    type: String,
    required: true,
  },
  requestURL: {
    type: String,
    required: true,
  },
  resetUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["reject", "pending", "accept", "go to hospital"],
    default: "pending",
  },
  student: { type: Schema.Types.ObjectId, required: true },
});
module.exports = mongoose.model("Request", requestSchema);
