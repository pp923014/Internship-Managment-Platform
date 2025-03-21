// Middleware to handle 404 errors (route not found)
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  };
  
  module.exports = notFoundMiddleware;