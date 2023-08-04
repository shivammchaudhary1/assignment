const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");

require("dotenv").config();

//routes

//middleware

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("This is home page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
    console.log("Something went wrong, Didn't Connect");
  }

  console.log(`Server is running at port ${process.env.PORT}`);
});
