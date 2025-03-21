const jwt = require("jsonwebtoken");

// Middleware to authenticate users
const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};


// Middleware to check if the user is an admin
const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== true) {
    return res.status(403).json({ message: "Not authorized, admin access required" });
  }
  next();
};


module.exports = { authMiddleware, adminMiddleware };