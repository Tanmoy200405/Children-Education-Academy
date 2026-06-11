import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.data.token);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Invalid password");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="pt-[150px] pb-20 min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#0A5A63] mb-6">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-colors outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full py-4 bg-[#14B8A6] text-white rounded-xl font-bold hover:bg-[#0A5A63] transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
