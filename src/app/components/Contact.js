"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Extraordinary.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to take your business online with a premium website?
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Instagram size={28} className="text-primary" />
              <span className="text-xl font-medium">@weblix_world_2026</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={20} /> hello@weblix.com
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={20} /> +91 98765 43210
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-3xl"
          >
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
              <input type="text" placeholder="Business Name" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
              <textarea rows="4" placeholder="Tell us about your project" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none"></textarea>
              <div className="flex gap-4">
                <button className="btn-primary flex-1">Start Project</button>
                <button className="btn-outline flex-1">Free Consultation</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;