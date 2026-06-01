import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Atom, Microscope, GraduationCap } from "lucide-react";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";

export default function AcademicPrograms() {
  const programs = [
    {
      title: "Primary School",
      tag: "Grades I - V",
      desc: "Nurturing curiosity, foundational skills, and a lifelong love of learning through play and structured instruction.",
      image: photo4,
      icon: BookOpen,
    },
    {
      title: "Middle School",
      tag: "Grades VI - VIII",
      desc: "Developing analytical thinking, emotional growth, and comprehensive academic skills for transitional success.",
      image: photo5,
      icon: Atom,
    },
    {
      title: "High School",
      tag: "Grades IX - X",
      desc: "Fostering leadership, advanced academic disciplines, and collaborative problem-solving skills.",
      image: photo6,
      icon: Microscope,
    },
    {
      title: "Senior Secondary",
      tag: "Grades XI - XII",
      desc: "Specialized instruction preparing students for elite global universities and future professional careers.",
      image: photo7,
      icon: GraduationCap,
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-[#FAF9F6] pt-[200px] lg:pt-[280px] pb-[120px] relative overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0EA5E9]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[80px]">
        
        {/* Section Header - Perfectly Center Aligned */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative z-10">
          
          {/* Small Upper Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9]"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] font-bold text-xs tracking-[0.25em] uppercase">
              Our Programs
            </span>
            <span className="w-6 h-[2px] bg-gradient-to-l from-[#14B8A6] to-[#0EA5E9]"></span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[30px] md:text-[40px] lg:text-[52px] font-black text-[#0A292D] leading-[1.1] mb-6 max-w-[700px] font-['Outfit']"
          >
            Academic Excellence For Every Learner
          </motion.h2>

          {/* Premium Accent Line */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] rounded-full mb-6 mx-auto"
          />

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#64748B] text-lg max-w-[650px] leading-relaxed font-medium"
          >
            Providing quality education from foundational learning to senior secondary excellence.
          </motion.p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group bg-white border border-slate-100/80 rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col h-full"
            >
              
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Floating Rounded Icon */}
                <div className="absolute bottom-4 left-6 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-50 transition-transform duration-500 group-hover:rotate-12">
                  <div className="w-8.5 h-8.5 rounded-full bg-[#E6F5F4] flex items-center justify-center">
                    <prog.icon size={15} className="text-[#14B8A6]" />
                  </div>
                </div>
              </div>

              {/* Body with Generous Premium Padding */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2 block">
                  {prog.tag}
                </span>
                
                <h3 className="text-[22px] font-extrabold text-[#0A292D] mb-3.5 font-['Outfit'] transition-colors duration-300 group-hover:text-[#14B8A6]">
                  {prog.title}
                </h3>
                
                <p className="text-[#64748B] text-[14.5px] leading-relaxed mb-8 flex-grow font-medium">
                  {prog.desc}
                </p>
                
                <div className="flex items-center text-[#14B8A6] font-bold text-[14.5px] group-hover:text-[#0EA5E9] transition-colors mt-auto relative w-fit">
                  Learn More 
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] transition-all duration-300 group-hover:w-full"></span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
