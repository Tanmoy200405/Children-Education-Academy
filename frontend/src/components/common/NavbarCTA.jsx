import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NavbarCTA({ children, onClick, className = "", fullWidth = false }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={"group relative overflow-hidden h-[56px] px-8 rounded-full border-2 border-[#14B8A6] bg-transparent text-[#003F46] font-semibold tracking-[0.3px] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#06B6D4] hover:to-[#14B8A6] hover:text-white hover:border-transparent hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(20,184,166,0.35)] animate-pulse-border  "}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-[6px]" />
      </span>
      {/* Shimmer Effect inside button */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-full">
        <div className="absolute top-0 -left-10 w-[40%] h-full animate-shimmer" />
      </div>
    </motion.button>
  );
}
