
"use client";

import { motion } from "framer-motion";
import { FaBrain, FaMicrochip, FaCode, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-5xl text-blue-400 drop-shadow-glow" />,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
  },
  {
    icon: <FaMicrochip className="text-5xl text-purple-400 drop-shadow-glow" />,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
  },
  {
    icon: <FaCode className="text-5xl text-cyan-400 drop-shadow-glow" />,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
  },
  {
    icon: <FaGlobe className="text-5xl text-green-400 drop-shadow-glow" />,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
  },
];

export default function AISection() {
  return (
    <div className="py-20 bg-black text-white relative">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold text-blue-500 tracking-widest neon-text"
      >
        Powered by Advanced AI
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center text-gray-300 mt-2 text-lg"
      >
        Built on cutting-edge neural architectures
      </motion.p>


      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{
              scale: 1.1,
              rotateX: 15,
              rotateY: 15,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
            }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-500 
                       text-center transform transition-transform backdrop-blur-lg 
                       bg-opacity-20 glass-effect relative overflow-hidden"
          >

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300 mt-3">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
