import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";

export default function AdminDashboard() {
  const [notices, setNotices] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
    } else {
      fetchNotices();
      fetchAdmissions();
    }
  }, [navigate]);

  const fetchNotices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notices");
      const data = await res.json();
      if (data.success) {
        setNotices(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAdmissions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admission");
      const data = await res.json();
      if (data.success) {
        setAdmissions(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddNotice = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (data.success) {
        setTitle("");
        setContent("");
        fetchNotices();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNotice = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notices/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        fetchNotices();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="pt-[150px] pb-20 min-h-screen bg-gray-50">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A5A63]">Admin Dashboard</h1>
          <button onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Add Notice Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Add New Notice</h2>
            <form onSubmit={handleAddNotice} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:border-[#14B8A6]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:border-[#14B8A6] h-32"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-[#14B8A6] text-white rounded-xl font-bold hover:bg-[#0A5A63]">
                Add Notice
              </button>
            </form>
          </div>

          {/* Manage Notices */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Manage Notices</h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {notices.map((notice) => (
                <div key={notice._id} className="p-4 border border-gray-200 rounded-xl flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{notice.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{notice.content}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{new Date(notice.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button onClick={() => handleDeleteNotice(notice._id)} className="text-red-500 hover:text-red-700 p-2">
                    Delete
                  </button>
                </div>
              ))}
              {notices.length === 0 && <p className="text-gray-500">No notices found.</p>}
            </div>
          </div>
        </div>

        {/* Admission Enquiries */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-[#0A5A63]">Admission Applications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-700">Student Name</th>
                  <th className="p-4 font-semibold text-gray-700">Parent Name</th>
                  <th className="p-4 font-semibold text-gray-700">Phone</th>
                  <th className="p-4 font-semibold text-gray-700">Email</th>
                  <th className="p-4 font-semibold text-gray-700">Grade</th>
                  <th className="p-4 font-semibold text-gray-700">Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {admissions.map((adm) => (
                  <tr key={adm._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4">{adm.studentName}</td>
                    <td className="p-4">{adm.parentName}</td>
                    <td className="p-4">{adm.parentPhone}</td>
                    <td className="p-4">{adm.parentEmail}</td>
                    <td className="p-4 capitalize">{adm.grade}</td>
                    <td className="p-4 text-sm text-gray-500">{new Date(adm.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
                {admissions.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500">No admission applications found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>

  );
}
