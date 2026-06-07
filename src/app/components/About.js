"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Weblix</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              The Future Of <span className="gradient-text">Business</span> Starts Online.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In today's digital world, your website is your first impression, your salesperson,
              and your growth engine. At Weblix, we create premium digital experiences that help
              businesses stand out and succeed online.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
              <p className="text-sm text-gray-500 mb-2">FOUNDER</p>
              <h3 className="text-3xl font-bold text-gray-800">Mathan Raj</h3>
              <p className="text-gray-600 mt-2">Visionary behind Weblix's premium digital solutions</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-2 rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Premium Dashboard"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;