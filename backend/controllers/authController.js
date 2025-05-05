const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: false, //  Ensure this field exists
    });

    // Save the user before generating the token
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, role: newUser.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set token in cookie
    res.cookie("token", token, { httpOnly: true }).status(201).json({
      message: "User registered successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.isAdmin },
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: Boolean(user.isAdmin) }, // Ensure role is handled correctly
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set token in cookie with secure options
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Set to `true` if using HTTPS
      sameSite: "Strict", // Protect against CSRF attacks
    });

    // Send response
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.isAdmin },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Logout user
const logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logout successful" });
};

// check auth
 const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login, logout,checkAuth };