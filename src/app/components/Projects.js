"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Star
} from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const projects = [
    {
      id: 1,
      title: "Siva Catering",
      category: "Catering & Food Service",
      description: "Professional catering business website with online ordering, menu management, and event booking system.",
      fullDescription: "A comprehensive digital solution for Siva Catering that transformed their traditional business into a modern online platform. The website features an interactive menu gallery, real-time availability checker, custom quote generator, and seamless booking system that increased their event bookings by 150%.",
      liveUrl: "https://siva-catering.vercel.app/",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
      mockupImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
      features: ["Online Ordering", "Event Booking", "Menu Management", "Payment Gateway"],
      metrics: {
        growth: "+150%",
        satisfaction: "98%",
        speed: "0.8s"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Classic Car Care",
      category: "Automotive Service",
      description: "Premium mechanic and automotive service website with appointment scheduling and service tracking.",
      fullDescription: "Classic Car Care needed a modern digital presence that reflects their premium service quality. We delivered a high-performance website with integrated booking system, service history tracking, vehicle health reports, and automated maintenance reminders. The result was a 200% increase in service appointments within 3 months.",
      liveUrl: "https://classic-car-care.vercel.app/",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800",
      mockupImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
      technologies: ["React", "Firebase", "Tailwind", "Framer Motion", "Calendly API"],
      features: ["Appointment Booking", "Service History", "Maintenance Alerts", "Digital Invoices"],
      metrics: {
        growth: "+200%",
        satisfaction: "96%",
        speed: "0.7s"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Luxe Beauty Studio",
      category: "Beauty & Salon",
      description: "Elegant salon website with booking system, service catalog, and loyalty program integration.",
      fullDescription: "A stunning digital experience for Luxe Beauty Studio that captures their premium brand essence. Features include online appointment scheduling, staff portfolio, product e-commerce, and a gamified loyalty program that increased repeat customers by 85%.",
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
      mockupImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
      technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind", "Twilio API"],
      features: ["Appointment System", "Loyalty Program", "Product Store", "SMS Reminders"],
      metrics: {
        growth: "+185%",
        satisfaction: "99%",
        speed: "0.9s"
      },
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 4,
      title: "Urban Eats",
      category: "Restaurant & Food",
      description: "Modern restaurant website with online ordering, table reservation, and delivery integration.",
      fullDescription: "Urban Eats required a complete digital transformation to compete in the competitive food industry. We delivered a progressive web app with real-time order tracking, QR code menu, table management system, and multi-platform delivery integration, resulting in 300% increase in online orders.",
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      mockupImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "AWS"],
      features: ["Online Ordering", "Table Booking", "QR Menus", "Delivery Tracking"],
      metrics: {
        growth: "+300%",
        satisfaction: "97%",
        speed: "0.6s"
      },
      color: "from-green-500 to-emerald-500"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section ref={containerRef} id="projects" className="py-28 px-6 lg:px-8 bg-white overflow-hidden">
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
            <span className="text-primary font-semibold text-sm">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Delivered Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences that drive real business growth
          </p>
        </motion.div>

        {/* Featured Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image with Mockup */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={projects[activeProject].mockupImage}
                    alt={projects[activeProject].title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href={projects[activeProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} className="text-primary" />
                      </a>
                      <button className="bg-white rounded-full p-3 hover:scale-110 transition-transform">
                        <Eye size={20} className="text-secondary" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Device Mockup Badges */}
                <div className="absolute -bottom-4 -right-4 flex gap-2">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <Monitor size={16} className="text-gray-600" />
                  </div>
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <Smartphone size={16} className="text-gray-600" />
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${projects[activeProject].color} text-white text-sm mb-4`}>
                  <Star size={14} />
                  <span>Featured Project</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {projects[activeProject].category}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {projects[activeProject].fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(projects[activeProject].metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                  <button className="btn-outline inline-flex items-center gap-2 text-sm">
                    Case Study
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeProject === idx ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project Grid - Additional Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="glassmorphism rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={16} className="text-primary" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-2">{project.category}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline inline-flex items-center gap-2">
            View All Projects
            <ExternalLink size={16} />
          </button>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute left-0 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
};

export default Projects;