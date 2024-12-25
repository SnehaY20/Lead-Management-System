const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");

dotenv.config({ path: "./.env" });
connectDb();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json("Hello Sneha here!");
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
