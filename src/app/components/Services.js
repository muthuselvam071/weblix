"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Database, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: <Layout size={40} />,
    title: "Frontend Website",
    desc: "Modern responsive websites built for showcasing brands and businesses.",
    features: ["Responsive Design", "Fast Loading", "Premium UI", "Mobile Friendly"],
  },
  {
    icon: <Database size={40} />,
    title: "Full Stack Development",
    desc: "Advanced web applications with powerful backend functionality.",
    features: ["Authentication", "Database", "Admin Dashboard", "Payment Integration"],
  },
  {
    icon: <Palette size={40} />,
    title: "UI/UX Design",
    desc: "Beautiful user experiences designed for engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: <Zap size={40} />,
    title: "Performance Optimization",
    desc: "Lightning-fast websites optimized for SEO and user experience.",
    features: ["Core Web Vitals", "SEO Optimization", "Caching", "CDN Setup"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Premium Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We deliver world-class digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glassmorphism p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;