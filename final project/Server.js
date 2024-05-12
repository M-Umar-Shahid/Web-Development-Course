const express = require("express");
const mongoose = require("mongoose");
const Perfume = require("./models/Perfume");
let server = express();
server.use(express.json());
server.use(express.urlencoded());
server.set("view engine", "ejs");
server.use(express.static("public"));
//mongoose accepts a connection string to your db and attempts a connections here
mongoose.connect("mongodb://127.0.0.1:27017/").then((data) => {
  console.log("DB Connected");
});
// var expressLayouts = require("express-ejs-layouts");
// server.use(expressLayouts);

// let mobileApiRouter = require("./routes/api/mobiles");
// server.use("/", mobileApiRouter);
server.use("/", require("./routes/api/perfumes"));
// server.use("/", require("./routes/site/games"));

// server.get("/contact-us.html", (req, res) => {
//   res.render("contact-us");
// });
server.get("/", (req, res) => {
  res.render("Homepage");
});

server.listen(3000, () => {
  console.log("Server started at localhost:3000");
});
