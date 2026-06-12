import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 md:w-40 md:h-40"
      >
        <img 
          src={logo} 
          alt="CEA Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
