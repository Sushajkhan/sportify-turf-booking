const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).send({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ email, role: "user" }, process.env.SECRET, {
      expiresIn: "1d",
    });

    return res.status(201).send({
      message: "User created",
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error creating account",
      success: false,
      error,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }

    // Compare password
    const matchPassword = bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(403).send({
        message: "Incorrect email or password",
        success: false,
      });
    }

    // Create token and login
    const token = jwt.sign({ email, role: "user" }, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      message: "Logged in",
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
      error,
    });
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been logged out");
};

module.exports = { userLogin, userSignup };
