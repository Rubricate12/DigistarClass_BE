const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; //bearer <token>
  if (!token) {
    return res
      .status(401)
      .json({ error: "Unauthorized", message: "Token is required" });
  }
  jwt.verify(token, "default_secret_key", (err, decoded) => {
    if (err) {
      // Check if the error is because the token has expired
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ error: "Unauthorized", message: "Token is Expired" });
      }
      return res.status(403).json({
        error: "Unauthorized",
        message: "Failed to authenticate token",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
