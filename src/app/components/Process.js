"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: <Compass size={32} />,
      description: "We dive deep into your business goals, target audience, and market landscape.",
      details: [
        "Requirements gathering & analysis",
        "Market research & competitor analysis",
        "User persona development",
        "Project roadmap creation",
        "Technology stack recommendation"
      ],
      color: "from-blue-500 to-cyan-500",
      duration: "1-2 weeks",
      deliverable: "Strategy Document + Roadmap"
    },
    {
      number: "02",
      title: "Design",
      icon: <Palette size={32} />,
      description: "We create beautiful, intuitive designs that captivate your audience and drive engagement.",
      details: [
        "Wireframing & information architecture",
        "High-fidelity UI/UX design",
        "Interactive prototypes",
        "Design system creation",
        "Client feedback & iterations"
      ],
      color: "from-purple-500 to-pink-500",
      duration: "2-3 weeks",
      deliverable: "Complete UI Kit + Prototype"
    },
    {
      number: "03",
      title: "Develop",
      icon: <Code2 size={32} />,
      description: "We build scalable, high-performance websites using cutting-edge technologies.",
      details: [
        "Agile development methodology",
        "Responsive & cross-browser coding",
        "Database architecture & integration",
        "API development & third-party integration",
        "Comprehensive testing & QA"
      ],
      color: "from-green-500 to-emerald-500",
      duration: "3-6 weeks",
      deliverable: "Fully Functional Website"
    },
    {
      number: "04",
      title: "Launch",
      icon: <Rocket size={32} />,
      description: "We deploy your website with precision and ensure a smooth go-live transition.",
      details: [
        "Server setup & optimization",
        "SSL & security configuration",
        "Performance optimization",
        "SEO implementation",
        "Launch day monitoring & support"
      ],
      color: "from-orange-500 to-red-500",
      duration: "1 week",
      deliverable: "Live Website Launch"
    },
    {
      number: "05",
      title: "Grow",
      icon: <TrendingUp size={32} />,
      description: "We provide ongoing support, optimization, and growth strategies for your business.",
      details: [
        "24/7 technical support",
        "Performance monitoring & analytics",
        "Regular security updates",
        "Content updates & feature additions",
        "Growth & marketing strategies"
      ],
      color: "from-indigo-500 to-purple-500",
      duration: "Continuous",
      deliverable: "Growth & Support Plan"
    }
  ];

  // Auto-rotate through steps for visual engagement
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} id="process" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A <span className="gradient-text">Proven Methodology</span> For Success
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We follow a structured, transparent process to deliver exceptional results every time
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-0"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="lg:w-1/2 lg:px-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glassmorphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      activeStep === index ? "border-2 border-primary/30 shadow-primary/10" : ""
                    }`}
                  >
                    {/* Step Number and Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-0.5`}>
                          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                            <div className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="text-4xl font-black gradient-text opacity-50">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-800 mt-1">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      {activeStep === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-primary/10 rounded-full p-2"
                        >
                          <CheckCircle2 size={24} className="text-primary" />
                        </motion.div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2 mb-4">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                      <div className="flex-1">
                        <span className="text-xs text-gray-400 block">TIMELINE</span>
                        <span className="text-sm font-semibold text-gray-700">{step.duration}</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-gray-400 block">DELIVERABLE</span>
                        <span className="text-sm font-semibold gradient-text">{step.deliverable}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: activeStep === index ? 1.2 : 1,
                      boxShadow: activeStep === index ? "0 0 20px rgba(37, 99, 235, 0.5)" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} border-4 border-white shadow-lg`}
                  />
                </div>

                {/* Empty spacer for alignment */}
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                What Makes Our Process <span className="gradient-text">Different?</span>
              </h3>
              <p className="text-gray-600">We combine methodology with flexibility to deliver exceptional results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparent Communication",
                  desc: "Weekly updates, dedicated project manager, and 24/7 access to progress dashboard",
                },
                {
                  title: "Agile Methodology",
                  desc: "Iterative development with regular feedback loops and quick adaptations",
                },
                {
                  title: "Quality Assurance",
                  desc: "Rigorous testing at every stage ensuring bug-free, high-performance delivery",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={24} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
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
          <button className="btn-primary group inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Process;