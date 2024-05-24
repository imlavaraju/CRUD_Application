const express = require("express");
const dotEnv = require("dotenv");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const employeeRoutes = require("./routes/employeeRoutes");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = process.env.port || 5000;
dotEnv.config();

// mongoose to connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`momgoose`);
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/employees", employeeRoutes);

/* mongoclient to connect
MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongo success");
  })
  .catch((err) => {
    console.log("Error", err);
  }); */

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
