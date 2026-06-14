import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NoticeTicker() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("https://children-education-academy-s9zd.vercel.app/api/notices")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setNotices(data.data);
        }
      })
      .catch((err) => console.log("Failed to fetch notices", err));
  }, []);

  if (notices.length === 0) {
    return null; // Don't show the ticker if there are no notices
  }

  return (
    <Link to="/news" className="block bg-gradient-to-r from-[#14B8A6]/10 to-[#1FC7D4]/10 border-b border-[#14B8A6]/20 py-2.5 hover:from-[#14B8A6]/20 hover:to-[#1FC7D4]/20 transition-all cursor-pointer shadow-sm relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
        {/* Notice Badge */}
        <div className="bg-[#14B8A6] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shrink-0 shadow-md border border-[#14B8A6]/50">
          <Bell size={14} className="animate-pulse" />
          <span className="hidden sm:inline">LATEST NOTICES</span>
          <span className="sm:hidden">NOTICES</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="overflow-hidden relative ml-3 sm:ml-4 flex-1">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-12">
            {notices.map((notice, idx) => (
              <span key={idx} className="text-[#0A5A63] font-bold text-[13px] sm:text-[15px] flex items-center gap-3 sm:gap-4">
                <span className="w-2 h-2 rounded-full bg-[#1FC7D4] inline-block shadow-[0_0_5px_rgba(31,199,212,0.8)]"></span>
                <span className="hover:text-[#14B8A6] transition-colors">{notice.title}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
