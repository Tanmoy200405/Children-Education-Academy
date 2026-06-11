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

// Connect to database
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/children_education_academy")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// Routes
const authRoutes = require("./routes/auth");
const admissionRoutes = require("./routes/admission");
const noticeRoutes = require("./routes/notice");

app.use("/api/auth", authRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/notices", noticeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
