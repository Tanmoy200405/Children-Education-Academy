const Admission = require("../models/Admission");

// @desc    Submit admission application
// @route   POST /api/admission
// @access  Public
const submitAdmission = async (req, res) => {
  try {
    const {
      studentName,
      dateOfBirth,
      gender,
      grade,
      parentName,
      parentEmail,
      parentPhone,
      address,
      previousSchool,
      medicalConditions,
      additionalInfo,
    } = req.body;

    if (!studentName || !dateOfBirth || !gender || !grade || !parentName || !parentEmail || !parentPhone) {
      return res.status(400).json({ success: false, message: "Please fill all required fields" });
    }

    const documents = req.files
      ? req.files.map((file) => ({
          filename: file.originalname,
          path: file.path,
        }))
      : [];

    const admission = await Admission.create({
      studentName,
      dateOfBirth,
      gender,
      grade,
      parentName,
      parentEmail,
      parentPhone,
      address: address ? JSON.parse(address) : {},
      previousSchool,
      medicalConditions,
      additionalInfo,
      documents,
    });

    res.status(201).json({
      success: true,
      message: "Admission application submitted successfully! We will contact you within 3-5 business days.",
      data: admission,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all admission applications
// @route   GET /api/admission
// @access  Private/Admin
const getAllAdmissions = async (req, res) => {
  try {
    const { status, grade, page = 1, limit = 10 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (grade) query.grade = grade;

    const admissions = await Admission.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Admission.countDocuments(query);

    res.json({
      success: true,
      count: admissions.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
      data: admissions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single admission
// @route   GET /api/admission/:id
// @access  Private/Admin
const getAdmission = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id);
    if (!admission) {
      return res.status(404).json({ success: false, message: "Admission not found" });
    }
    res.json({ success: true, data: admission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update admission status
// @route   PUT /api/admission/:id
// @access  Private/Admin
const updateAdmissionStatus = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!admission) {
      return res.status(404).json({ success: false, message: "Admission not found" });
    }
    res.json({ success: true, data: admission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { submitAdmission, getAllAdmissions, getAdmission, updateAdmissionStatus };
