"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Palette, 
  Headphones, 
  Cloud, 
  Rocket,
  Award,
  Clock,
  Users,
  Code,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Globe,
  Lock,
  Cpu
} from "lucide-react";

const WhyChoose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const features = [
    {
      icon: <Zap size={28} />,
      title: "Lightning Fast Performance",
      description: "Websites that load in under 0.5 seconds with 99.9% uptime guarantee. We optimize every aspect of your site for speed.",
      metrics: "0.5s avg load time",
      color: "from-yellow-500 to-orange-500",
      benefits: ["50% faster than industry average", "Core Web Vitals optimized", "CDN & caching enabled"]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Fully Mobile Optimized",
      description: "Flawless responsive design that works perfectly on all devices - from smartphones to ultra-wide displays.",
      metrics: "100% responsive",
      color: "from-green-500 to-emerald-500",
      benefits: ["Mobile-first approach", "Touch-friendly interfaces", "Cross-browser compatible"]
    },
    {
      icon: <Shield size={28} />,
      title: "Bank-Level Security",
      description: "Enterprise-grade security with SSL encryption, DDoS protection, and regular security audits.",
      metrics: "256-bit SSL",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Daily backups", "Malware scanning", "GDPR compliant"]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "SEO Optimized",
      description: "Built with SEO best practices to help you rank higher on Google and attract organic traffic.",
      metrics: "SEO Score 95+",
      color: "from-indigo-500 to-purple-500",
      benefits: ["Meta tags optimization", "Schema markup", "XML sitemaps"]
    },
    {
      icon: <Palette size={28} />,
      title: "Premium UI/UX Design",
      description: "Stunning, award-winning designs that captivate users and drive conversions.",
      metrics: "Awwwards ready",
      color: "from-pink-500 to-rose-500",
      benefits: ["Custom illustrations", "Micro-interactions", "Accessibility compliant"]
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock expert support to ensure your website runs smoothly at all times.",
      metrics: "24/7 availability",
      color: "from-purple-500 to-indigo-500",
      benefits: ["1-hour response time", "Emergency fixes", "Dedicated account manager"]
    },
    {
      icon: <Cloud size={28} />,
      title: "Modern Cloud Hosting",
      description: "Scalable cloud infrastructure that grows with your business. Pay only for what you use.",
      metrics: "99.9% uptime",
      color: "from-cyan-500 to-blue-500",
      benefits: ["Auto-scaling", "Global CDN", "Daily backups"]
    },
    {
      icon: <Rocket size={28} />,
      title: "Business Growth Focused",
      description: "Strategies and features designed to accelerate your business growth and ROI.",
      metrics: "300% avg growth",
      color: "from-red-500 to-orange-500",
      benefits: ["Conversion optimization", "Analytics integration", "Growth strategies"]
    }
  ];

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: <Users size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock size={24} />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      value: "150+",
      label: "Expert Team",
      icon: <Award size={24} />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} id="why-choose" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3 rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
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
            <span className="text-primary font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses <span className="gradient-text">Choose WEBLIX</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine technical excellence with business strategy to deliver exceptional results
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glassmorphism p-6 rounded-2xl text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="glassmorphism p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>

                {/* Metric Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                  <span className="text-xs font-semibold text-primary">{feature.metrics}</span>
                </div>

                {/* Benefits List (Shows on Hover) */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-gray-100"
                    >
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600 mb-1.5">
                          <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-0.5 rounded-3xl">
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                    <Award size={16} className="text-primary" />
                    <span className="text-primary text-sm font-semibold">Our Commitment</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Your Success Is <span className="gradient-text">Our Mission</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We don't just build websites — we build long-term partnerships. Every project comes with 
                    our guarantee of excellence, transparency, and measurable results.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-sm text-gray-600">100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-sm text-gray-600">No Hidden Costs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-sm text-gray-600">Lifetime Support</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Globe size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold gradient-text">Global</div>
                    <div className="text-xs text-gray-500">Worldwide Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Lock size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold gradient-text">Secure</div>
                    <div className="text-xs text-gray-500">Bank-Level Security</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Cpu size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold gradient-text">Modern</div>
                    <div className="text-xs text-gray-500">Cutting-Edge Tech</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <BarChart3 size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold gradient-text">Results</div>
                    <div className="text-xs text-gray-500">Data-Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40">
            <span className="text-gray-500 font-semibold">Startups</span>
            <span className="text-gray-500 font-semibold">Enterprises</span>
            <span className="text-gray-500 font-semibold">E-commerce</span>
            <span className="text-gray-500 font-semibold">Agencies</span>
            <span className="text-gray-500 font-semibold">Non-Profits</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Start Your Project Today
            <Rocket size={20} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChoose;