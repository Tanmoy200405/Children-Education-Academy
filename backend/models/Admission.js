const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    grade: {
      type: String,
      required: [true, "Grade is required"],
    },
    parentName: {
      type: String,
      required: [true, "Parent/Guardian name is required"],
      trim: true,
    },
    parentEmail: {
      type: String,
      required: [true, "Parent email is required"],
      lowercase: true,
      trim: true,
    },
    parentPhone: {
      type: String,
      required: [true, "Parent phone is required"],
      trim: true,
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zip: { type: String, trim: true },
    },
    previousSchool: { type: String, trim: true },
    medicalConditions: { type: String, trim: true },
    additionalInfo: { type: String, trim: true },
    status: {
      type: String,
      enum: ["pending", "under_review", "accepted", "rejected"],
      default: "pending",
    },
    documents: [
      {
        filename: String,
        path: String,
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);
