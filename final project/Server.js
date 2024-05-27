const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/api/authorization");
const Perfume = require("./models/Perfume");
const cookieParser = require("cookie-parser");
const authenticateToken = require("./middleware/authenticateToken");
let server = express();
server.use(cookieParser());
// server.use(express.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.use(express.static("public"));
//mongoose accepts a connection string to your db and attempts a connections here
mongoose.connect("mongodb://127.0.0.1:27017/").then((data) => {
  console.log("DB Connected");
});

server.use("/", require("./routes/api/perfumes"));
server.use("/api", authenticateToken, require("./routes/api/perfumesapi"));
server.use("/auth", require("./routes/api/authorization"));

// server.use("/", require("./routes/site/games"));

// server.get("/contact-us.html", (req, res) => {
//   res.render("contact-us");
// });
// server.get("/", (req, res) => {
//   res.render("Homepage");
// });
server.listen(3000, () => {
  console.log("Server started at localhost:3000");
});
