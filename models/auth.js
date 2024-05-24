const mongoose = require("mongoose");
const authschema = new mongoose.Schema({
  //name , email, phone,city
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
  confirmpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Authenticate", authschema);
