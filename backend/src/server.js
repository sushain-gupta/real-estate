const express = require("express");
const mongoose = require("mongoose");
const dotEnv=require('dotenv');
dotEnv.config();

const app = express();
const PORT = 4000;
const URI = process.env.secrete_uri;

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

connectDB();

// Middleware
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});