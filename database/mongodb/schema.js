const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const orderSchema = new mongoose.Schema({
  orderId: String,
  email: String,
  name: String,
  status: String,
});

module.exports = {
  userSchema,
  orderSchema,
};
