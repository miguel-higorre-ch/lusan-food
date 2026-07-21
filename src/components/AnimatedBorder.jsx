import { motion } from "framer-motion";

export default function AnimatedBorder({ children, size = 300, duration = 3, delay = 0, rounded = "rounded-lg" }) {
  return (
    <div className={`absolute inset-0 ${rounded} overflow-hidden pointer-events-none`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
      >
        <motion.div
          className={`absolute inset-0 ${rounded}`}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,120,0,0.3), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
        />
        <motion.div
          className={`absolute inset-0 ${rounded}`}
          style={{
            background: "linear-gradient(0deg, transparent, rgba(255,120,0,0.3), transparent)",
          }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: duration * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: delay + 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}
