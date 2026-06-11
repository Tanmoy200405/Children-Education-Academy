import Container from "../components/common/Container";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    parentEmail: "",
    parentPhone: "",
    grade: "",
    dateOfBirth: "",
    gender: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting..." });
    try {
      const res = await fetch("https://children-education-academy-s9zd.vercel.app/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          parentName: "",
          studentName: "",
          parentEmail: "",
          parentPhone: "",
          grade: "",
          dateOfBirth: "",
          gender: "",
        });
      } else {
        setStatus({ type: "error", message: data.message || "Failed to submit" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <div className="pt-[100px] pb-20">
      <section className="bg-[#0A5A63] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132')] bg-cover bg-center" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Join the CEA family. We welcome students from diverse backgrounds to become a part of our enriching educational journey.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <div className="max-w-3xl mx-auto">
          {/* Enquiry Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#0A5A63] mb-2">Admission Enquiry Form</h3>
              <p className="text-gray-500">Please fill out the form below and our admission counselor will contact you.</p>
            </div>
            
            {status.message && (
              <div className={`p-4 mb-6 rounded-xl text-center ${status.type === 'success' ? 'bg-green-100 text-green-700' : status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Name *</label>
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student's Name *</label>
                  <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grade Applying For *</label>
                <select name="grade" value={formData.grade} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required>
                  <option value="">Select Grade</option>
                  <option value="primary">Primary School</option>
                  <option value="middle">Middle School</option>
                  <option value="high">High School</option>
                  <option value="senior">Senior Secondary</option>
                </select>
              </div>
              <button disabled={status.type === 'loading'} type="submit" className="w-full py-4 bg-[#14B8A6] text-white rounded-xl font-bold text-lg hover:bg-[#0A5A63] transition-colors shadow-lg shadow-[#14B8A6]/30 disabled:opacity-50">
                {status.type === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
