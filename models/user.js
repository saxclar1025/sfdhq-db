const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String
  },

  hourlyRate: {
    type: Number
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  isCaptain: {
    type: Boolean,
    default: false
  },

  captainRate: {
    type: Number
  },

  crewRate: {
    type: Number
  },

  isInstructor: {
    type: Boolean,
    default: false
  },

  isPayroll: {
    type: Boolean,
    default: false
  }

  // entries: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "Entry"
  // }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;