const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB database connection established");
});
app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/users");

app.use("users", usersRouter);

console.log(`Server is running on port: ${port}`);
