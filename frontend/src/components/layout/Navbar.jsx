import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, User } from "lucide-react";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
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

  const aboutLinks = [
    { name: "School Profile", path: "/about/school-profile" },
    { name: "Mission & Vision", path: "/about/mission-vision" },
    { name: "Principal's Message", path: "/about/principal-message" },
    { name: "Features", path: "/about/features" },
  ];



  return (
    <header className="fixed w-full top-0 z-[100] transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#0A5A63] text-white/95 text-[13px] font-medium py-2">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:+91${import.meta.env.VITE_CONTACT_PHONE1}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 {import.meta.env.VITE_CONTACT_PHONE1}
            </a>
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> {import.meta.env.VITE_CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
            </a>
            <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
            <Link to="/admin-login" className="flex items-center gap-1.5 hover:text-white transition-colors font-bold text-[#1FC7D4]">
              <User size={14} /> Admin Login
            </Link>
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
                const isAboutLink = link.name === "About Us";
                const isAboutActive = location.pathname === "/about";

                if (isAboutLink) {
                  return (
                    <div key={link.name} className="relative group py-4">
                      <Link
                        to={link.path}
                        className={`relative flex items-center gap-1.5 rounded-md px-4 py-3 font-semibold text-[14px] tracking-wide transition-all duration-300 ${
                          isAboutActive
                            ? 'bg-[#14B8A6]/10 text-[#14B8A6]'
                            : 'text-[#0A5A63] hover:bg-[#14B8A6]/10 hover:text-[#14B8A6]'
                        }`}
                      >
                        About
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </Link>

                      <div className="pointer-events-none absolute left-0 top-full z-[120] w-[286px] translate-y-3 rounded-[14px] border border-slate-100 bg-white py-4 opacity-0 shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                        {aboutLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-6 py-3 text-[16px] font-medium text-slate-600 transition-colors duration-200 hover:bg-[#14B8A6]/10 hover:text-[#0A5A63]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative rounded-md px-4 py-3 font-semibold text-[14px] tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'bg-[#14B8A6]/10 text-[#14B8A6]'
                        : 'text-[#0A5A63] hover:bg-[#14B8A6]/10 hover:text-[#14B8A6]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right CTA - Connected & Premium Style */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link to="/admissions" className="flex items-center gap-2 px-2 py-2 border-2 text-[#14B8A6] border-[#14B8A6] rounded-full font-semibold text-[15px] hover:bg-[#14B8A6] hover:text-white transition-colors group">
              Admission Enquiry
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
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
                link.name === "About Us" ? (
                  <div key={link.name} className="border-b border-gray-50">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between py-2 text-left text-[15px] font-semibold ${
                        location.pathname === "/about" ? 'text-[#14B8A6]' : 'text-[#0A5A63]'
                      }`}
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    >
                      About
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pb-2"
                        >
                          {aboutLinks.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block border-b border-slate-100 px-4 py-2.5 text-[14px] font-medium text-slate-600 last:border-b-0 hover:bg-[#14B8A6]/10 hover:text-[#0A5A63]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
              ))}
              <div className="pt-2 pb-4 flex flex-col gap-4">
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)} className="w-full cursor-pointer py-3 rounded-full border-2 border-[#14B8A6] text-[#14B8A6] font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#14B8A6] hover:text-white transition-colors group">
                  Admission Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link to="/admin-login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A5A63] text-white font-semibold text-[15px] hover:bg-[#1FC7D4] transition-colors">
                  <User size={18} /> Admin Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
