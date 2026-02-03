const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("EXPRESS FINALLY WORKS 🚀");
});

module.exports = app;
