
// "use client";
// import { Search, PlayCircle, Bot } from "lucide-react";
// import { HiSparkles } from "react-icons/hi";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react"; 
// import AISection from "./card/page";
// import Pricing from "./price/page";
// import ContactForm from "./pricing/page";
// import NeuralCapabilities from "./neural/page";
// import Navbar from "./components/navbar/page";
// import Footer from "./components/footer/page";


// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false); 

//   const fallingIcons = Array.from({ length: 12 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     delay: Math.random() * 5,
//     size: Math.random() * 1.5 + 0.5,
//   }));

//   return (
//     <div className="min-h-screen bg-black">
//       <nav className="fixed w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 backdrop-blur-lg z-50 border-b border-white/20 shadow-md">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
         
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-2"
//           >
//             <span className="text-3xl font-bold text-indigo-400 tracking-wider">Agentia</span>
//             <span className="text-2xl font-light text-gray-200">World</span>
//           </motion.div>

        
//           <div className="hidden md:flex items-center space-x-8">
//             {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
//               <motion.a
//                 key={item}
//                 href="#"
//                 className="text-white hover:text-yellow-300 transition-all font-medium text-lg"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//             <button className="ml-4 px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-50 rounded-full text-black font-semibold transition-all transform hover:scale-105">
//               Launch Console
//             </button>
//           </div>

//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>

   
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 shadow-lg rounded-b-lg overflow-hidden z-40"
//             >
//               <div className="flex flex-col items-center py-4 space-y-4">
//                 {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//                 <button className="px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-full text-black font-semibold transition-all transform hover:scale-105">
//                   Launch Console
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </nav>
//       <Navbar />
//       <div className="relative min-h-screen flex items-center bg-grid-white/[0.05] overflow-hidden">
//         {fallingIcons.map((icon) => (
//           <motion.div
//             key={icon.id}
//             initial={{ y: "-100vh", opacity: 0.2 }}
//             animate={{ y: "100vh", opacity: [0.2, 1, 0.3] }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               delay: icon.delay,
//               ease: "linear",
//             }}
//             className="absolute"
//             style={{
//               left: `${icon.x}%`,
//               transform: `scale(${icon.size})`,
//             }}
//           >
//             <HiSparkles className="w-6 h-6 text-gray-500 opacity-60 drop-shadow-lg" />
//           </motion.div>
//         ))}

//         <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="max-w-7xl mx-auto text-center space-y-8"
//           >



//             <h1 className="text-4xl sm:text-5xl md:text-6xl md:pt-12 pt-16 font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-[1.15]">
//               Transform Your Business with
//               <span className="block mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Autonomous AI Systems
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Empower your enterprise with self-learning neural networks that optimize workflows, enhance decision-making, and drive innovation at scale.
//             </p>


//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="group relative max-w-2xl mx-auto mt-12"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
//               <div className="relative flex items-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl px-6 py-4 shadow-xl">
//                 <Search className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Ask me to analyze workflows, optimize processes, or generate insights..."
//                   className="w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-lg"
//                 />
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ repeat: Infinity, duration: 4 }}
//                   className="ml-4"
//                 >
//                   <Bot className="w-8 h-8 text-purple-400" />
//                 </motion.div>
//               </div>
//             </motion.div>


//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <span>Start Free Trial</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-3 px-8 py-4 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-semibold rounded-xl transition-all duration-300"
//               >
//                 <PlayCircle className="w-6 h-6" />
//                 <span>Watch Overview</span>
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <AISection />
//       <NeuralCapabilities />
//       <Pricing />
//       <section id="contact">
//       <ContactForm />
//       </section>
 
//       <Footer/>

//     </div>
//   );
// }



// "use client";
// import { Search, PlayCircle, Bot } from "lucide-react";
// import { HiSparkles } from "react-icons/hi";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react"; 
// import AISection from "./card/page";
// import Pricing from "./price/page";
// import ContactForm from "./pricing/page";
// import NeuralCapabilities from "./neural/page";
// import Navbar from "./components/navbar/page";
// import Footer from "./components/footer/page";

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-black scroll-smooth">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 backdrop-blur-lg z-50 border-b border-white/20 shadow-md">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center space-x-2"
//           >
//             <span className="text-3xl font-bold text-indigo-400 tracking-wider">Agentia</span>
//             <span className="text-2xl font-light text-gray-200">World</span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {[
//               { name: "Features", href: "#features" },
//               { name: "Technology", href: "#technology" },
//               { name: "Agents", href: "#agents" },
//               { name: "Pricing", href: "#pricing" },
//               { name: "Contact", href: "#contact" }, // Contact section ka link
//             ].map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href} // Yeh section ke id se match karega
//                 className="text-white hover:text-yellow-300 transition-all font-medium text-lg"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 {item.name}
//               </motion.a>
//             ))}
//             <button className="ml-4 px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-50 rounded-full text-black font-semibold transition-all transform hover:scale-105">
//               Launch Console
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 shadow-lg rounded-b-lg overflow-hidden z-40"
//             >
//               <div className="flex flex-col items-center py-4 space-y-4">
//                 {[
//                   { name: "Features", href: "#features" },
//                   { name: "Technology", href: "#technology" },
//                   { name: "Agents", href: "#agents" },
//                   { name: "Pricing", href: "#pricing" },
//                   { name: "Contact", href: "#contact" },
//                 ].map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//                 <button className="px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-full text-black font-semibold transition-all transform hover:scale-105">
//                   Launch Console
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </nav>

//       {/* Page Content */}
//       <Navbar />

//       {/* Sections with IDs */}
//       <div id="features" className="py-20">
//         <AISection />
//       </div>

//       <div id="technology" className="py-20">
//         <NeuralCapabilities />
//       </div>

//       <div id="pricing" className="py-20">
//         <Pricing />
//       </div>

//       <div id="contact" className="py-20">
//         <ContactForm />
//       </div>

//       <Footer />
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Menu, PlayCircle, Search, X } from "lucide-react";
import AISection from "./card/page";
import Pricing from "./price/page";
import ContactForm from "./pricing/page";
import NeuralCapabilities from "./neural/page";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import { HiSparkles } from "react-icons/hi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const fallingIcons = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 1.5 + 0.5,
      }));

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 backdrop-blur-lg z-50 border-b border-white/20 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-3xl font-bold text-indigo-400 tracking-wider">Agentia</span>
            <span className="text-2xl font-light text-gray-200">World</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-yellow-300 transition-all font-medium text-lg">
              Features
            </a>
            <a href="#technology" className="text-white hover:text-yellow-300 transition-all font-medium text-lg">
              Technology
            </a>
            <a href="#agents" className="text-white hover:text-yellow-300 transition-all font-medium text-lg">
              Agents
            </a>
            <a href="#pricing" className="text-white hover:text-yellow-300 transition-all font-medium text-lg">
              Pricing
            </a>
            <a href="#contact" className="text-white hover:text-yellow-300 transition-all font-medium text-lg">
              Contact
            </a>
            <button className="ml-4 px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-50 rounded-full text-black font-semibold transition-all transform hover:scale-105">
              Launch Console
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-900/80 shadow-lg rounded-b-lg overflow-hidden z-40"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                <a
                  href="#features"
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#technology"
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Technology
                </a>
                <a
                  href="#agents"
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </a>
                <a
                  href="#pricing"
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <button className="px-6 py-2 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-full text-black font-semibold transition-all transform hover:scale-105">
                  Launch Console
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      
      <Navbar />


      <div className="relative min-h-screen flex items-center bg-grid-white/[0.05] overflow-hidden">
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

        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

  



        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto text-center space-y-8"
          >



            <h1 className="text-4xl sm:text-5xl md:text-6xl md:pt-12 pt-16 font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-[1.15]">
              Transform Your Business with
              <span className="block mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autonomous AI Systems
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empower your enterprise with self-learning neural networks that optimize workflows, enhance decision-making, and drive innovation at scale.
            </p>


            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative max-w-2xl mx-auto mt-12"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative flex items-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl px-6 py-4 shadow-xl">
                <Search className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Ask me to analyze workflows, optimize processes, or generate insights..."
                  className="w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-lg"
             />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="ml-4"
                >
                  <Bot className="w-8 h-8 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Start Free Trial</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
//               </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-semibold rounded-xl transition-all duration-300"
              >
                <PlayCircle className="w-6 h-6" />
                <span>Watch Overview</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sections with IDs */}
      <div id="features" className="py-20">
        <AISection />
      </div>

      <div id="technology" className="py-20">
        <NeuralCapabilities />
      </div>

      <div id="pricing" className="py-20">
        <Pricing />
      </div>

      <div id="contact" className="py-20">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
