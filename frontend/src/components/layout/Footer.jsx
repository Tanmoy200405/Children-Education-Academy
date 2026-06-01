import { Link } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/logo.jpg";
import { MapPin, Phone, Mail, Clock, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A5A63] text-white pt-24 border-t border-[#14B8A6]/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-[80px] mb-20 items-start">
          
          {/* Column 1: School Info */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-[60px] bg-white rounded-md p-1" />
              <div className="flex flex-col">
                <span className="font-bold text-[18px] leading-tight text-white font-['Outfit']">CHILDREN</span>
                <span className="font-semibold text-[12px] leading-tight text-white/90 font-['Outfit'] tracking-wider uppercase mt-0.5">Education Academy</span>
              </div>
            </Link>
            
            <p className="text-white/75 mb-6 leading-relaxed text-[15px]">
              Nurturing young minds with values, knowledge and skills to shape a better future.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 mb-8 bg-white/5 border border-white/10 rounded-xl p-3 w-fit">
              <ShieldCheck size={20} className="text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/90">25+ Years of Educational Excellence</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="group w-[44px] h-[44px] rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:-translate-y-2 hover:bg-[#14B8A6] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                <Globe size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-[44px] h-[44px] rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:-translate-y-2 hover:bg-[#14B8A6] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                <Globe size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-[44px] h-[44px] rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:-translate-y-2 hover:bg-[#14B8A6] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                <Globe size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-[44px] h-[44px] rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:-translate-y-2 hover:bg-[#14B8A6] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                <Globe size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mt-1">
            <h4 className="text-[18px] font-semibold text-white mb-8 relative inline-block group">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">About Us</span></Link></li>
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Academics</span></Link></li>
              <li><Link to="/admissions" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Admissions</span></Link></li>
              <li><Link to="/gallery" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Gallery</span></Link></li>
              <li><Link to="/contact" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="mt-1">
            <h4 className="text-[18px] font-semibold text-white mb-8 relative inline-block group">
              Programs
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Primary School</span></Link></li>
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Middle School</span></Link></li>
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">High School</span></Link></li>
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Senior Secondary</span></Link></li>
              <li><Link to="/academics" className="text-[15px] font-medium text-white/80 transition-all duration-300 flex items-center gap-2 group hover:text-cyan-300"><ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] text-[#14B8A6]" /><span className="transition-transform duration-300 group-hover:translate-x-[3px]">Co-curricular Activities</span></Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-1 mt-1">
            <h4 className="text-[18px] font-semibold text-white mb-8 relative inline-block group">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#14B8A6] shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-white/80 leading-relaxed">123 Education Avenue,<br/>Kolkata, West Bengal - 700001</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <Phone size={20} className="text-[#14B8A6] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="text-[15px] font-medium text-white/80 group-hover:text-cyan-300 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <Mail size={20} className="text-[#14B8A6] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@cea.edu.in" className="text-[15px] font-medium text-white/80 group-hover:text-cyan-300 transition-colors break-all">info@cea.edu.in</a>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={20} className="text-[#14B8A6] shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-white/80">Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter Card */}
          <div className="lg:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl w-full">
            <h4 className="text-[18px] font-semibold text-white mb-3">Newsletter</h4>
            <p className="text-[14px] font-medium text-white/75 mb-6 leading-relaxed">
              Subscribe to receive school updates and news.
            </p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="h-[56px] w-full rounded-[14px] bg-black/20 border border-white/15 px-5 text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#14B8A6] transition-colors"
              />
              <button className="group h-[56px] w-full rounded-[14px] bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white font-semibold text-[15px] flex items-center justify-center gap-2 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(20,184,166,0.3)] transition-all duration-300">
                Subscribe
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#084A52] border-t border-white/10">
        <Container>
          <div className="min-h-[70px] py-4 flex flex-col md:flex-row justify-between items-center text-white/70 text-[14px]">
            <p className="text-center md:text-left font-medium">© 2026 Children Education Academy. All Rights Reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <span className="text-white/15 hidden md:inline">|</span>
              <a href="#" className="hover:text-cyan-300 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
