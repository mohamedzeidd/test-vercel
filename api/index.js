const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("EXPRESS IS WORKING 🚀");
});

module.exports = app;
