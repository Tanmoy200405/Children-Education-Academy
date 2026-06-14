const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection optimization for Vercel Serverless
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }
  
  if (!process.env.MONGO_URI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in environment variables.");
    process.exit(1);
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully via Vercel Env");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// Middleware to ensure DB connection before handling routes
app.use(async (req, res, next) => {
  await connectDB();
  next();
});


// Routes
const authRoutes = require("./routes/auth");
const admissionRoutes = require("./routes/admission");
const noticeRoutes = require("./routes/notice");

app.use("/api/auth", authRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/notices", noticeRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running securely on Vercel!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

