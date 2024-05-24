const mongoose = require("mongoose");
const employeeschema = new mongoose.Schema({
  //name , email, phone,city
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", employeeschema);
