
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode] = useState(true); 

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Technology", id: "technology" },
    { name: "Agents", id: "agents" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-indigo-400">Agentia</span>
          <span className="text-2xl font-light text-white">World</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="ml-4 px-6 py-2 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-medium transition-all transform hover:scale-105">
            Launch Console
          </button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div
          className={`fixed inset-y-0 right-0 w-64 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg ${
            isOpen
              ? isDarkMode
                ? "bg-slate-950 backdrop-blur-md bg-opacity-90"
                : "bg-white backdrop-blur-md bg-opacity-70"
              : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>
          <div className="flex flex-col items-center mt-20 space-y-6">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-300 hover:text-indigo-400 transition-colors font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-medium transition-all transform hover:scale-105">
              Launch Console
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
