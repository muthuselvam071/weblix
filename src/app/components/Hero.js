"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0 });
  const hasAnimated = useRef(false);

  const stats = [
    { key: "projects", value: 100, suffix: "+", label: "Projects Delivered" },
    { key: "satisfaction", value: 98, suffix: "%", label: "Client Satisfaction" },
    { key: "support", value: 24, suffix: "/7", label: "Support Available" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Animate projects count
            let projectsStart = 0;
            const projectsInterval = setInterval(() => {
              projectsStart += 2;
              if (projectsStart >= 100) {
                setCounts(prev => ({ ...prev, projects: 100 }));
                clearInterval(projectsInterval);
              } else {
                setCounts(prev => ({ ...prev, projects: projectsStart }));
              }
            }, 20);
            
            // Animate satisfaction count
            let satStart = 0;
            const satInterval = setInterval(() => {
              satStart += 2;
              if (satStart >= 98) {
                setCounts(prev => ({ ...prev, satisfaction: 98 }));
                clearInterval(satInterval);
              } else {
                setCounts(prev => ({ ...prev, satisfaction: satStart }));
              }
            }, 20);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-laptop-and-smartphone-42145-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/70 via-dark/50 to-transparent"></div>
      </div>

      {/* Animated Background Fallback */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glassmorphism-dark text-white text-sm mb-6 backdrop-blur-sm">
            ✨ Premium Digital Agency
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            BUILD DIGITAL <br />
            <span className="gradient-text">EXPERIENCES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Weblix crafts premium websites, digital platforms, and experiences
            that help businesses attract customers, increase credibility, and grow faster online.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} className="btn-primary text-lg">
              Start Your Project →
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30">
              Explore Our Work
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism-dark p-6 rounded-2xl backdrop-blur-md"
          >
            <div className="text-4xl md:text-5xl font-bold text-white">
              {counts.projects}+
            </div>
            <p className="text-gray-300 mt-2">Projects Delivered</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glassmorphism-dark p-6 rounded-2xl backdrop-blur-md"
          >
            <div className="text-4xl md:text-5xl font-bold text-white">
              {counts.satisfaction}%
            </div>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glassmorphism-dark p-6 rounded-2xl backdrop-blur-md"
          >
            <div className="text-4xl md:text-5xl font-bold text-white">
              24/7
            </div>
            <p className="text-gray-300 mt-2">Support Available</p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;