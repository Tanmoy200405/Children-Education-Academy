import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Home, Info, BookOpen, Image as ImageIcon, GraduationCap, Phone, Mail, Globe, ArrowRight, ChevronDown } from "lucide-react";
import NavbarCTA from "../common/NavbarCTA";
import logo from "../../assets/logo.jpg";

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About Us", path: "/about", icon: <Info size={20} /> },
    { name: "Academics", path: "/academics", icon: <BookOpen size={20} /> },
    { name: "Gallery", path: "/gallery", icon: <ImageIcon size={20} /> },
    { name: "Admissions", path: "/admissions", icon: <GraduationCap size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> }
  ];

  const aboutLinks = [
    { name: "School Profile", path: "/about#school-profile" },
    { name: "Mission & Vision", path: "/about#mission-vision" },
    { name: "Founders", path: "/about#founders" },
    { name: "Chair Person", path: "/about#chair-person" },
    { name: "Vice Chair Person", path: "/about#vice-chair-person" },
    { name: "Principal's Message", path: "/about#principal-message" },
    { name: "Vice Principal's Message", path: "/about#vice-principal-message" },
    { name: "Managing Committee", path: "/about#managing-committee" },
    { name: "Faculty", path: "/about#faculty" },
    { name: "PTA", path: "/about#pta" },
    { name: "Internal Committee", path: "/about#internal-committee" },
  ];

  const academicLinks = [
    { name: "Academic Overview", path: "/academics#overview" },
    { name: "Curriculum", path: "/academics#curriculum" },
    { name: "Nursery, LKG & UKG", path: "/academics#junior-section" },
    { name: "Primary School", path: "/academics#primary-school" },
    { name: "Middle School", path: "/academics#middle-school" },
    { name: "Secondary School", path: "/academics#secondary-school" },
    { name: "Senior Secondary", path: "/academics#senior-secondary" },
    { name: "Science Stream", path: "/academics#science-stream" },
    { name: "Commerce Stream", path: "/academics#commerce-stream" },
    { name: "Humanities Stream", path: "/academics#humanities-stream" },
    { name: "Co-curricular Activities", path: "/academics#co-curricular" },
    { name: "Exams & Assessment", path: "/academics#assessment" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40 lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[320px] bg-white rounded-l-[24px] z-50 shadow-2xl flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-[40px] rounded-full object-contain" />
                <span className="font-bold text-[#003D43] text-[13px] font-['Outfit'] leading-tight">Children Education<br/>Academy</span>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-[#1FC7D4] transition-colors rounded-full hover:bg-gray-50">
                <X size={24} />
              </button>
            </div>
            
            {/* Links */}
            <div className="flex flex-col p-6 gap-2 overflow-y-auto flex-1">
              {links.map((link, i) => {
                const isActive = location.pathname === link.path;
                const isAboutLink = link.name === "About Us";
                const isAcademicsLink = link.name === "Academics";

                if (isAboutLink) {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className={`flex h-[56px] w-full items-center justify-between rounded-xl px-4 transition-all duration-300 group ${
                          location.pathname === "/about"
                            ? 'bg-[#1FC7D4]/10 text-[#006D77] font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#1FC7D4] font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`${location.pathname === "/about" ? 'text-[#1FC7D4]' : 'text-gray-400 group-hover:text-[#1FC7D4]'}`}>
                            {link.icon}
                          </span>
                          <span className="font-['Outfit'] text-[16px]">About</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-[#1FC7D4]' : 'text-gray-300'}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-10 pr-2"
                          >
                            {aboutLinks.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={onClose}
                                className="block border-b border-gray-100 px-4 py-2.5 text-[14px] font-medium text-gray-600 last:border-b-0 hover:bg-[#1FC7D4]/10 hover:text-[#006D77]"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                if (isAcademicsLink) {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                        className={`flex h-[56px] w-full items-center justify-between rounded-xl px-4 transition-all duration-300 group ${
                          location.pathname === "/academics"
                            ? 'bg-[#1FC7D4]/10 text-[#006D77] font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#1FC7D4] font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`${location.pathname === "/academics" ? 'text-[#1FC7D4]' : 'text-gray-400 group-hover:text-[#1FC7D4]'}`}>
                            {link.icon}
                          </span>
                          <span className="font-['Outfit'] text-[16px]">Academics</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180 text-[#1FC7D4]' : 'text-gray-300'}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isAcademicsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-10 pr-2"
                          >
                            {academicLinks.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={onClose}
                                className="block border-b border-gray-100 px-4 py-2.5 text-[14px] font-medium text-gray-600 last:border-b-0 hover:bg-[#1FC7D4]/10 hover:text-[#006D77]"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link 
                      to={link.path}
                      onClick={onClose}
                      className={`flex items-center justify-between h-[56px] px-4 rounded-xl transition-all duration-300 group ${isActive ? 'bg-[#1FC7D4]/10 text-[#006D77] font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1FC7D4] font-medium'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`transition-colors ${isActive ? 'text-[#1FC7D4]' : 'text-gray-400 group-hover:text-[#1FC7D4]'}`}>
                          {link.icon}
                        </span>
                        <span className="font-['Outfit'] text-[16px]">{link.name}</span>
                      </div>
                      <ArrowRight size={18} className={`transition-all duration-300 ${isActive ? 'text-[#1FC7D4]' : 'text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 rounded-bl-[24px]">
              <div className="flex flex-col gap-4 mb-6">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1FC7D4] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1FC7D4]">
                    <Phone size={14} />
                  </div>
                  +91 9876543210
                </a>
                <a href="mailto:info@childreneducationacademy.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1FC7D4] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1FC7D4]">
                    <Mail size={14} />
                  </div>
                  Email Us
                </a>
              </div>
              
              <NavbarCTA fullWidth onClick={onClose} className="mb-6 mt-6">Admission Enquiry</NavbarCTA>
              
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#1FC7D4] hover:-translate-y-1 transition-all"><Globe size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#1FC7D4] hover:-translate-y-1 transition-all"><Globe size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#1FC7D4] hover:-translate-y-1 transition-all"><Globe size={18} /></a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
