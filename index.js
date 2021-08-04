const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Abhishek");
});

app.get("/abhishek", (req, res) => {
  res.send("Abhishek");
});

app.get("/shubham", (req, res) => {
  res.send("Shubham");
})

app.listen(5000, () => {
  console.log("The server is up and running");
});

module.exports = app;
