"use client";

import { motion } from "framer-motion";
import { FaBrain, FaMicrochip, FaCode, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-5xl text-purple-400 drop-shadow-glow" />,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: <FaMicrochip className="text-5xl text-blue-400 drop-shadow-glow" />,
    title: "Multi-Modal Intelligence",
    description:
      "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: <FaCode className="text-5xl text-cyan-400 drop-shadow-glow" />,
    title: "Cognitive Integration",
    description:
      "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-pink-400 drop-shadow-glow" />,
    title: "Ethical AI Framework",
    description:
      "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
];

export default function NeuralCapabilities() {
  return (
    <div className="py-20 bg-black text-white relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold text-purple-400 tracking-widest"
      >
        Neural Capabilities
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center text-gray-300 mt-2 text-lg"
      >
        Powered by next-generation artificial intelligence
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
              rotateX: 10,
              rotateY: 10,
              boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.5)",
            }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-purple-500 text-center transform transition-transform backdrop-blur-lg bg-opacity-20 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-10"
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
