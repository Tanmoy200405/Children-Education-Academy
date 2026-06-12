import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6] backdrop-blur-md"
    >
      <div className="relative flex flex-col items-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -inset-4 rounded-full border-[3px] border-transparent border-t-[#14B8A6] border-b-[#0EA5E9] opacity-70"
        />
        
        {/* Inner rotating ring (opposite direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -inset-2 rounded-full border-[3px] border-transparent border-l-[#14B8A6] border-r-[#0EA5E9] opacity-40"
        />

        {/* Logo container */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-[0_0_30px_rgba(20,184,166,0.3)] border-4 border-white bg-white flex items-center justify-center p-1"
        >
          <img src={logo} alt="CEA Logo" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col items-center"
        >
          <h2 className="text-[#0A292D] font-black text-xl sm:text-2xl tracking-[0.15em] uppercase font-['Outfit']">
            Loading
          </h2>
          <div className="flex gap-1.5 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-[#14B8A6]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
