import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full h-[40px] bg-[#003D43] text-white items-center text-[13px] font-medium">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#1FC7D4] transition-colors">
            <Phone size={14} />
            +91 9876543210
          </a>
          <a href="mailto:info@childreneducationacademy.com" className="flex items-center gap-2 hover:text-[#1FC7D4] transition-colors">
            <Mail size={14} />
            info@childreneducationacademy.com
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#1FC7D4] transition-colors">News & Events</a>
          <a href="#" className="hover:text-[#1FC7D4] transition-colors">Careers</a>
          <a href="#" className="hover:text-[#1FC7D4] transition-colors">Alumni</a>
          <a href="#" className="hover:text-[#1FC7D4] transition-colors">Parent Login</a>
        </div>
      </div>
    </div>
  );
}
