const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  registrationLink: {
    type: String,
  },

  registrationDate: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
