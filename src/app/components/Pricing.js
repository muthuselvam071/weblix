"use client";

import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            June First Week <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glassmorphism p-8 rounded-3xl border-2 border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-bl-2xl text-sm font-bold">
              50% OFF
            </div>
            <h3 className="text-2xl font-bold mb-2">Frontend Website</h3>
            <div className="mt-6 mb-4">
              <span className="text-5xl font-bold">₹99</span>
              <span className="text-gray-500 line-through ml-3">₹199</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["Responsive Design", "Modern UI", "Mobile Friendly", "Fast Performance"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <span className="text-primary">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full">Claim Offer →</button>
          </motion.div>

          {/* Full Stack Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glassmorphism p-8 rounded-3xl border-2 border-secondary/20"
          >
            <h3 className="text-2xl font-bold mb-2">Full Stack Website</h3>
            <div className="mt-6 mb-4">
              <span className="text-3xl font-bold">Custom Pricing</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["Backend Development", "Database", "Authentication", "Admin Dashboard", "Payment Integration"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <span className="text-secondary">✓</span> {item}
                </li>
              ))}
            </ul>
            <button className="btn-outline w-full">Get Proposal →</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;