const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Abhishek");
});

app.listen(5000, () => {
  console.log("The server is up and running");
});

module.exports = app;
