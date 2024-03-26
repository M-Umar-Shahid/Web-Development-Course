//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("<h2>Hello World!</h2>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at m.umarshahidd@gmail.com");
});
app.get("/about", function (req, res) {
  res.send("This website is owned by Umar Shahid");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
