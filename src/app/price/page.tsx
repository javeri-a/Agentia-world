
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    features: ['Access to Basic AI Agent', 'Limited Queries', 'Community Support'],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$29',
    features: ['Advanced AI Agent', 'Unlimited Queries', 'Priority Support', 'Custom AI Models'],
    buttonText: 'Upgrade to Pro',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated AI Agents', 'Custom Integrations', '24/7 Premium Support', 'Scalable Infrastructure'],
    buttonText: 'Contact Us',
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
      >
        Agentia World Pricing
      </motion.h1>
      <p className="text-gray-400 mt-2 text-center">
        Choose the perfect plan for your AI-powered journey.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative p-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border-4 border-gray-600 shadow-xl hover:shadow-2xl transition-all"
          >
           
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-5 -right-5 bg-gray-900 text-white p-3 rounded-full border-2 border-gray-500"
            >
              <FaRobot className="w-6 h-6 text-gray-300" />
            </motion.div>

            <h2 className="text-2xl font-semibold text-white text-center">{plan.title}</h2>
            <p className="text-5xl font-bold my-4 text-center">{plan.price}<span className="text-lg font-normal">/month</span></p>
            <ul className="space-y-3 text-gray-300 text-lg">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-green-400" /> {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:from-purple-500 hover:to-blue-500"
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
