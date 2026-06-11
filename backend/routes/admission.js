const express = require("express");
const router = express.Router();
const {
  submitAdmission,
  getAllAdmissions,
  getAdmission,
  updateAdmissionStatus,
} = require("../controllers/admissionController");

router.route("/").post(submitAdmission).get(getAllAdmissions);
router.route("/:id").get(getAdmission).put(updateAdmissionStatus);

module.exports = router;
