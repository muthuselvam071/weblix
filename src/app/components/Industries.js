"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  UtensilsCrossed, 
  Pizza, 
  Camera, 
  Scissors, 
  Wrench, 
  Rocket, 
  Building2, 
  ShoppingBag,
  TrendingUp,
  Sparkles
} from "lucide-react";

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
      icon: <UtensilsCrossed size={32} />,
      name: "Catering",
      description: "Showcase your culinary excellence with stunning food galleries and online ordering systems.",
      color: "from-orange-500 to-red-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-red-50",
      stats: "+150% Order Growth",
    },
    {
      icon: <Pizza size={32} />,
      name: "Restaurant",
      description: "Digital menus, reservation systems, and delivery integration for modern dining experiences.",
      color: "from-red-500 to-rose-500",
      bgGradient: "bg-gradient-to-br from-red-50 to-rose-50",
      stats: "+200% Reservations",
    },
    {
      icon: <Camera size={32} />,
      name: "Photography Studio",
      description: "Visual portfolios that capture your artistic vision and attract premium clients.",
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      stats: "+85% Client Inquiries",
    },
    {
      icon: <Scissors size={32} />,
      name: "Salon & Spa",
      description: "Booking systems, service menus, and loyalty programs for beauty businesses.",
      color: "from-pink-500 to-rose-400",
      bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50",
      stats: "+120% Appointments",
    },
    {
      icon: <Wrench size={32} />,
      name: "Car Mechanic",
      description: "Service scheduling, vehicle tracking, and maintenance reminders for auto shops.",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "+95% Service Bookings",
    },
    {
      icon: <Rocket size={32} />,
      name: "Startup",
      description: "Scalable MVPs, investor-ready platforms, and growth-focused digital solutions.",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "bg-gradient-to-br from-indigo-50 to-purple-50",
      stats: "3x Faster Launch",
    },
    {
      icon: <Building2 size={32} />,
      name: "Corporate Business",
      description: "Enterprise websites, intranets, and B2B portals with robust security.",
      color: "from-slate-500 to-gray-600",
      bgGradient: "bg-gradient-to-br from-slate-50 to-gray-50",
      stats: "Fortune 500 Ready",
    },
    {
      icon: <ShoppingBag size={32} />,
      name: "E-commerce",
      description: "High-conversion online stores with seamless payment gateways and inventory management.",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
      stats: "+300% Sales Growth",
    },
  ];

  // Split industries into two rows for better visual layout
  const firstRow = industries.slice(0, 4);
  const secondRow = industries.slice(4, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-28 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Businesses Across{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From startups to enterprises, we deliver tailored digital solutions that drive real results
          </p>
        </motion.div>

        {/* Industries Grid - First Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {firstRow.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />
              <div className={`relative ${industry.bgGradient} p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full`}>
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${industry.color}`}>
                      {industry.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {industry.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {industry.description}
                </p>
                
                {/* Stats Badge */}
                <div className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200">
                  <TrendingUp size={12} className="text-primary" />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {industry.stats}
                  </span>
                </div>

                {/* Hover Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Grid - Second Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {secondRow.map((industry, idx) => (
            <motion.div
              key={idx + 4}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(idx + 4)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />
              <div className={`relative ${industry.bgGradient} p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full`}>
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${industry.color}`}>
                      {industry.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {industry.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {industry.description}
                </p>
                
                {/* Stats Badge */}
                <div className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200">
                  <TrendingUp size={12} className="text-primary" />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {industry.stats}
                  </span>
                </div>

                {/* Hover Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-6">
              Trusted by businesses across
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70">
              <span className="text-gray-400 font-semibold">USA</span>
              <span className="text-gray-400 font-semibold">UK</span>
              <span className="text-gray-400 font-semibold">UAE</span>
              <span className="text-gray-400 font-semibold">Australia</span>
              <span className="text-gray-400 font-semibold">Singapore</span>
              <span className="text-gray-400 font-semibold">India</span>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="btn-primary px-10 py-3 text-sm">
                View Industry Case Studies →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      </div>
    </section>
  );
};

export default Industries;