
"use client";

import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function ContactForm() {
  
  const fallingIcons = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // Random X position
    delay: Math.random() * 5, // Random start delay
    size: Math.random() * 1.5 + 0.5, // Random size variation
  }));

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white overflow-hidden">
      {/* Falling Dark Sparkles */}
      {fallingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{ y: "-100vh", opacity: 0.2 }}
          animate={{ y: "100vh", opacity: [0.2, 1, 0.3] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: icon.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            transform: `scale(${icon.size})`,
          }}
        >
          <HiSparkles className="w-6 h-6 text-gray-500 opacity-60 drop-shadow-lg" />
        </motion.div>
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-400 mt-2 text-center">
        We’re here to help! Send us a message, and we’ll get in touch with you shortly.
      </p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative mt-8 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-4 border-gray-700 shadow-xl w-full max-w-2xl"
      >
        {/* Animated AI Icons on Border */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -left-4 bg-gray-900 text-white p-3 rounded-full border-2 border-gray-500 shadow-md"
        >
          <HiSparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-3 rounded-full border-2 border-gray-500 shadow-md"
        >
          <HiSparkles className="w-6 h-6 text-blue-400" />
        </motion.div>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:from-purple-500 hover:to-blue-500"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
