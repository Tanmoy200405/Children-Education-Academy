import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-[100] transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#0A5A63] text-white/95 text-[13px] font-medium py-2">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
            <a href="mailto:info@cea.edu.in" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> info@cea.edu.in
            </a>
          </div>
          <div className="flex gap-6">
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/news" className="hover:text-white transition-colors">News & Events</Link>
            <Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link>
            <Link to="/parent-login" className="hover:text-white transition-colors">Parent Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled ? "h-[70px] shadow-lg shadow-gray-200/50" : "h-[80px] shadow-md"
        }`}
      >
        <div className=" ml-5 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* Logo Section - Compact Branding */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-[48px] h-[48px] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
              <img 
                src={logo} 
                alt="CEA Logo" 
                className="w-full h-full object-contain p-1 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold text-[#0A5A63] leading-none tracking-tight">CHILDREN</span>
              <span className="text-[12px] text-gray-500 font-semibold mt-0.5 leading-none">Education Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered & Balanced */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-semibold text-[14px] tracking-wide py-2 transition-all duration-300 hover:-translate-y-[2px] group ${isActive ? 'text-[#14B8A6]' : 'text-[#0A5A63] hover:text-[#14B8A6]'}`}
                  >
                    {link.name}
                    
                    {/* Hover Underline - Smooth Slider */}
                    <span 
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-[#14B8A6] -translate-x-1/2 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                    
                    {/* Active Dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavDot"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute -bottom-2 left-1/2 w-[5px] h-[5px] rounded-full bg-[#14B8A6] -translate-x-1/2 shadow-[0_0_8px_rgba(20,184,166,0.6)]"
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right CTA - Connected & Premium Style */}
          <div className="hidden lg:flex items-center shrink-0">
            <button className="flex items-center gap-2 px-2 py-2 border-2 text-[#14B8A6] border-[#14B8A6] rounded-full font-semibold text-[15px] hover:bg-[#14B8A6] hover:text-white transition-colors">
              Admission Enquiry
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#0A5A63] hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-semibold py-2 border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-[#14B8A6]' : 'text-[#0A5A63]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-4">
                <button className="w-full cursor-pointer py-4 rounded-full border-2 border-[#14B8A6] text-[#14B8A6] font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#14B8A6]  hover:text-white transition-colors">
                  Admission Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
