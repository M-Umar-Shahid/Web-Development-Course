const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Perfume = require("../../models/Perfume");

const router = express.Router();

router.get("/login", (req, res) => {
  console.log(req.body);
  res.render("Login");
});

router.get("/register", (req, res) => {
  res.render("SignUp");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("cart");
  return res.redirect("/auth/login");
});

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.status(400).json({ message: "User not found" });

    // const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);
    // if (!isMatch)
    // return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    // Set the token in a cookie
    res.cookie("token", token, { httpOnly: true });
    res.locals.user = user;
    // Respond with a JSON containing the redirect URL
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
