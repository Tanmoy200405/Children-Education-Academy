import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function NoticeTicker() {
  const notices = [
    "Admission open for Session 2026-2027. Apply now!",
    "Annual Sports Day scheduled for January 18, 2026.",
    "Science Exhibition will be held on February 07, 2026.",
    "Parent-Teacher meeting for all classes on the coming Saturday.",
  ];

  return (
    <div className="bg-[#14B8A6]/10 border-b border-[#14B8A6]/20 py-2">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center">
        {/* Notice Badge */}
        <div className="bg-[#14B8A6] text-white px-4 py-1.5 rounded-md font-bold text-sm flex items-center gap-2 shrink-0 z-10 shadow-sm">
          <Bell size={16} className="animate-pulse" />
          NOTICE
        </div>

        {/* Scrolling Ticker */}
        <div className="overflow-hidden relative ml-4 flex-1">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...notices, ...notices, ...notices].map((notice, idx) => (
              <span key={idx} className="text-[#0A5A63] font-medium text-[15px] flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] inline-block"></span>
                <Link to="/news" className="hover:text-[#14B8A6] transition-colors">{notice}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
