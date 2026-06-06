import Container from "../components/common/Container";
import { CheckCircle2 } from "lucide-react";

export default function Admissions() {
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student's Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grade Applying For *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none" required>
                  <option value="">Select Grade</option>
                  <option value="primary">Primary School</option>
                  <option value="middle">Middle School</option>
                  <option value="high">High School</option>
                  <option value="senior">Senior Secondary</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-[#14B8A6] text-white rounded-xl font-bold text-lg hover:bg-[#0A5A63] transition-colors shadow-lg shadow-[#14B8A6]/30">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
