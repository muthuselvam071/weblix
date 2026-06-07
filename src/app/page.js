"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  // Your WhatsApp number
  const WHATSAPP_NUMBER = "6369733630";
  
  // Your Instagram profile URL
  const INSTAGRAM_PROFILE = "https://www.instagram.com/weblix_world_2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  
  // Direct DM link for weblix_world_2026
  const INSTAGRAM_DM = "https://www.instagram.com/direct/t/weblix_world_2026";

  // Function to handle WhatsApp message with form data
  const sendToWhatsApp = (formData) => {
    const message = `*NEW PROJECT INQUIRY FROM WEBLIX WEBSITE*%0A%0A
*📋 PROJECT DETAILS*%0A
━━━━━━━━━━━━━━━━━━━━%0A
*👤 Name:* ${formData.name || "Not provided"}%0A
*🏢 Business Name:* ${formData.businessName || "Not provided"}%0A
*📞 Phone:* ${formData.phone || "Not provided"}%0A
*📧 Email:* ${formData.email || "Not provided"}%0A
*🎯 Service:* ${formData.service || "Not selected"}%0A
%0A
*💬 Message:*%0A${formData.message || "No message provided"}%0A
%0A
*⏰ Submitted:* ${new Date().toLocaleString()}%0A
━━━━━━━━━━━━━━━━━━━━%0A
*🌐 Source:* WEBLIX Portfolio Website`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle form submission for Start Project
  const handleStartProjectWithForm = (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('contactName')?.value || '',
      businessName: document.getElementById('businessName')?.value || '',
      phone: document.getElementById('contactPhone')?.value || '',
      email: document.getElementById('contactEmail')?.value || '',
      service: document.getElementById('serviceSelect')?.value || '',
      message: document.getElementById('contactMessage')?.value || ''
    };
    
    sendToWhatsApp(formData);
  };

  // Quick WhatsApp without form
  const handleQuickWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20WEBLIX!%20I%27m%20interested%20in%20your%20web%20development%20services.%20Please%20share%20more%20details.`;
    window.open(whatsappUrl, '_blank');
  };

  // Function for consultation - opens Instagram profile
  const handleExploreWork = () => {
    window.open(INSTAGRAM_PROFILE, '_blank');
  };

  // Function to open Instagram profile
  const openInstagramProfile = () => {
    window.open(INSTAGRAM_PROFILE, '_blank');
  };

  // Industries data with icons, colors, and descriptions
  const industries = [
    { icon: "🍽️", name: "Catering", color: "#E67E22", description: "Online ordering, event booking" },
    { icon: "🍕", name: "Restaurant", color: "#E74C3C", description: "Digital menus, table booking" },
    { icon: "📸", name: "Photography", color: "#8E44AD", description: "Portfolio galleries, booking" },
    { icon: "✂️", name: "Salon & Spa", color: "#E91E63", description: "Appointment booking, loyalty" },
    { icon: "🔧", name: "Car Mechanic", color: "#F39C12", description: "Service scheduling, tracking" },
    { icon: "🚀", name: "Startup", color: "#1ABC9C", description: "MVP development, scaling" },
    { icon: "🏢", name: "Corporate", color: "#34495E", description: "Enterprise portals, B2B" },
    { icon: "🛍️", name: "E-commerce", color: "#27AE60", description: "Online stores, payments" }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="WEBLIX Logo" className="h-8 w-8 object-contain rounded-lg border border-white/10" />
            <span className="text-2xl font-extrabold gradient-text tracking-wide">WEBLIX</span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition font-medium text-sm">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition font-medium text-sm">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition font-medium text-sm">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition font-medium text-sm">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition font-medium text-sm">Contact</a>
          </div>
          
          {/* Start Project Desktop Button */}
          <button onClick={handleQuickWhatsApp} className="hidden lg:flex btn-primary !py-2.5 !px-6 text-sm font-semibold">
            Start Project →
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden text-gray-300 hover:text-white transition p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#030712]/95 backdrop-blur-xl z-[9999] flex flex-col p-8 border-t border-white/5 overflow-y-auto">
          <div className="flex flex-col gap-5 text-lg font-semibold pt-4">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition border-b border-white/5 pb-3">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition border-b border-white/5 pb-3">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition border-b border-white/5 pb-3">Services</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition border-b border-white/5 pb-3">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white transition pb-1">Contact</a>
          </div>
          
          <button onClick={() => { handleQuickWhatsApp(); setIsMobileMenuOpen(false); }} className="btn-primary w-full py-4 text-base font-semibold mt-8 shadow-lg shadow-blue-500/20">
            Start Project →
          </button>
        </div>
      )}

      {/* Hero Section with Beautiful Dark Theme & Outer Space Effect */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#030712] via-[#080B10] to-[#0D111A]">
        {/* Outer Space Stars Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(white 1px, transparent 1px),
            radial-gradient(white 1.5px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px',
          backgroundPosition: '0 0, 20px 20px',
        }}></div>
        
        {/* Glowing Background Radial Effects (Tech Glow) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/0 blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-gradient-to-tr from-purple-600/10 to-pink-600/0 blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-gradient-to-r from-cyan-600/5 to-blue-600/5 blur-[100px] pointer-events-none"></div>
        
        {/* Light Sweep Lines */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-20" style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          backgroundSize: '200% 100%',
          animation: 'lightSweep 8s ease-in-out infinite',
        }}></div>
        
        {/* Twinkling Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> ✨ Premium Digital Agency
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
            BUILD DIGITAL <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">EXPERIENCES</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
            Weblix crafts premium websites, digital platforms, and experiences that help businesses attract customers, increase credibility, and grow faster online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto px-4">
            <button onClick={handleQuickWhatsApp} className="btn-whatsapp px-8 py-4 rounded-full text-white font-bold text-base shadow-lg shadow-green-500/10">
              💬 Start Your Project →
            </button>
            <button onClick={handleExploreWork} className="btn-outline px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-base transition">
              📷 Explore Our Work →
            </button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 max-w-2xl mx-auto gap-4 sm:gap-6 mt-16 md:mt-24 px-4">
            <div className="glassmorphism p-5 sm:p-6 rounded-2xl text-center border border-white/5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">98%</div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 font-medium">Client Satisfaction</p>
            </div>
            <div className="glassmorphism p-5 sm:p-6 rounded-2xl text-center border border-white/5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">24/7</div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#080B10] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">ABOUT WEBLIX</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-6 leading-tight text-white">
                The Future Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Business</span> Starts Online.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                In today's digital world, your website is your first impression, your salesperson, and your growth engine. 
                At Weblix, we create premium digital experiences that help businesses stand out and succeed online.
              </p>
              <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 p-6 sm:p-8 rounded-2xl border border-white/5">
                <p className="text-xs text-blue-400 mb-1 tracking-widest font-semibold uppercase">FOUNDER</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mathan Raj</h3>
                <p className="text-gray-400 text-sm sm:text-base">Visionary behind Weblix's premium digital solutions</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 glassmorphism p-2 rounded-3xl border border-white/5 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" alt="Dashboard" className="rounded-[1.4rem] w-full object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#0D111A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">OUR EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Services</span></h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium">We deliver world-class digital solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "💻", title: "Frontend Website", desc: "Modern responsive websites built for showcasing brands and businesses.", features: ["Responsive Design", "Fast Loading", "Premium UI", "Mobile Friendly"], color: "#3B82F6" },
              { icon: "🗄️", title: "Full Stack Development", desc: "Advanced web applications with powerful backend functionality.", features: ["Authentication", "Database", "Admin Dashboard", "Payment Integration"], color: "#8B5CF6" },
              { icon: "🎨", title: "UI/UX Design", desc: "Beautiful user experiences designed for engagement and conversions.", features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"], color: "#06B6D4" },
              { icon: "⚡", title: "Performance Optimization", desc: "Lightning-fast websites optimized for SEO and user experience.", features: ["Core Web Vitals", "SEO Optimization", "Caching", "CDN Setup"], color: "#EC4899" }
            ].map((service, i) => (
              <div key={i} className="glassmorphism p-6 sm:p-8 rounded-3xl hover-lift border border-white/5 flex flex-col justify-between"
                style={{ borderTop: `4px solid ${service.color}` }}>
                <div>
                  <div className="text-4xl sm:text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: service.color }}>{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">{service.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{ fontSize: '11px', background: `${service.color}15`, color: service.color, border: `1px solid ${service.color}20` }} className="px-2.5 py-1 rounded-full font-medium">✓ {feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#080B10] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">OUR PROCESS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Proven Methodology</span> For Success</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {[
              { number: "01", title: "Discover", desc: "Understand business goals and requirements.", duration: "1-2 weeks", icon: "🔍" },
              { number: "02", title: "Design", desc: "Create beautiful user experiences.", duration: "2-3 weeks", icon: "🎨" },
              { number: "03", title: "Develop", desc: "Build fast scalable websites.", duration: "3-6 weeks", icon: "💻" },
              { number: "04", title: "Launch", desc: "Deploy and optimize.", duration: "1 week", icon: "🚀" },
              { number: "05", title: "Grow", desc: "Continuous support and improvements.", duration: "Ongoing", icon: "📈" }
            ].map((step, i) => (
              <div key={i} className="glassmorphism p-6 sm:p-8 rounded-3xl hover-lift border border-white/5 text-center flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-extrabold text-blue-500/20 mb-2">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">{step.desc}</p>
                </div>
                <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/15 py-1.5 px-4 rounded-full mt-2 inline-block mx-auto">⏱ {step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#0D111A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">OUR PORTFOLIO</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Delivered Projects</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <div className="glassmorphism rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-blue-500/30 transition duration-300">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800" alt="Siva Catering" className="w-full h-56 sm:h-64 object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Siva Catering</h3>
                  <p className="text-blue-400 mb-4 font-semibold text-sm sm:text-base">Professional catering business website</p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">Online ordering, menu management, and event booking system for a premium catering service.</p>
                </div>
                <div>
                  <a href="https://siva-catering.vercel.app/" target="_blank" className="btn-primary inline-block text-center text-sm px-6 py-3 shadow-lg shadow-blue-500/10" style={{ textDecoration: 'none' }}>Visit Website →</a>
                </div>
              </div>
            </div>
            <div className="glassmorphism rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-indigo-500/30 transition duration-300">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800" alt="Classic Car Care" className="w-full h-56 sm:h-64 object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Classic Car Care</h3>
                  <p className="text-indigo-400 mb-4 font-semibold text-sm sm:text-base">Premium mechanic and automotive service</p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">Appointment scheduling, service tracking, and maintenance reminders for auto shops.</p>
                </div>
                <div>
                  <a href="https://classic-car-care.vercel.app/" target="_blank" className="btn-primary inline-block text-center text-sm px-6 py-3 shadow-lg shadow-indigo-500/10" style={{ textDecoration: 'none' }}>Visit Website →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#080B10] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Every Industry</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Tailored digital solutions for businesses across all sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="glassmorphism p-5 sm:p-7 rounded-2xl text-center transition hover-lift border border-white/5 flex flex-col items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.65), ${industry.color}05)`,
                  borderBottom: `3px solid ${industry.color}`
                }}
              >
                <div className="text-3xl sm:text-4xl mb-4">{industry.icon}</div>
                <div className="font-bold text-base sm:text-lg mb-2" style={{ color: industry.color }}>
                  {industry.name}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 font-medium">{industry.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#0D111A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">WHY CHOOSE US</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Choose WEBLIX</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "⚡", title: "Fast Performance", desc: "0.5s load time" },
              { icon: "📱", title: "Mobile Friendly", desc: "100% responsive" },
              { icon: "🛡️", title: "Secure & Reliable", desc: "256-bit SSL" },
              { icon: "📈", title: "SEO Optimized", desc: "95+ score" },
              { icon: "🎨", title: "Premium UI/UX", desc: "Awwwards ready" },
              { icon: "🎧", title: "24/7 Support", desc: "Dedicated team" },
              { icon: "☁️", title: "Cloud Hosting", desc: "99.9% uptime" },
              { icon: "🚀", title: "Growth Focused", desc: "300% avg growth" }
            ].map((item, i) => (
              <div key={i} className="glassmorphism p-5 sm:p-6 rounded-2xl text-center border border-white/5 hover-lift">
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#080B10] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-500 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-blue-500/10 px-3 py-1.5 rounded-full">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-white">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span></h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "What is a domain and do I need one?", a: "A domain is your website's address (like yourbusiness.com). Yes, you need one to establish your online presence. We can help you register the perfect domain for your brand." },
              { q: "How long does website development take?", a: "Project timelines vary based on complexity. A standard frontend website takes 2-3 weeks, while full-stack applications take 4-8 weeks." },
              { q: "Do you provide ongoing support?", a: "Absolutely! We offer 24/7 support, monthly maintenance, security updates, and 30 days of free post-launch support." },
              { q: "Can I upgrade my package later?", a: "Yes! All our websites are built on scalable architectures. You can easily upgrade from frontend to full-stack as your business grows." }
            ].map((faq, i) => (
              <div key={i} className="glassmorphism p-6 rounded-2xl border border-white/5 transition hover:border-blue-500/20">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-blue-400 flex items-start gap-2">
                  <span className="text-lg">❓</span> {faq.q}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#080B10] via-[#0E1119] to-[#030712] border-t border-white/5 relative overflow-hidden">
        {/* Deep Tech background radial blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider mb-6">
              💬 GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Extraordinary</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Fill out the form and we'll connect with you on WhatsApp instantly!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Info Cards Side (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-white/5">
                <div onClick={openInstagramProfile} className="flex items-center gap-4 mb-6 cursor-pointer hover:opacity-90 transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 p-2.5">
                    <img src="/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-semibold">Instagram</p>
                    <p className="text-sm sm:text-base font-bold text-white">@weblix_world_2026</p>
                  </div>
                </div>

                <div onClick={handleQuickWhatsApp} className="flex items-center gap-4 mb-6 cursor-pointer hover:opacity-90 transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/10 p-2.5">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-semibold">WhatsApp</p>
                    <p className="text-sm sm:text-base font-bold text-white">Click to Chat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/10 p-2.5">
                    <img src="/email-logo-png-1110.png" alt="Email" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-semibold">Email</p>
                    <p className="text-sm sm:text-base font-bold text-white">hello@weblix.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card (High Contrast Dark Theme) */}
              <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden bg-gradient-to-br from-[#0e1724]/90 to-[#070e17]/90 shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 text-green-400">WhatsApp Business</h3>
                <p className="text-xs text-gray-300 mb-4 font-semibold">Fastest way to get a response</p>
                <div className="mb-6">
                  <p className="font-extrabold text-green-400 text-lg sm:text-2xl tracking-wide">+91 63697 33630</p>
                </div>
                <button onClick={handleQuickWhatsApp} className="btn-whatsapp w-full py-4 text-sm sm:text-base font-bold shadow-lg shadow-green-500/20">
                  💬 Chat Now on WhatsApp
                </button>
                <div className="mt-4 py-2.5 px-4 bg-green-500/5 border border-green-500/10 rounded-xl">
                  <p className="text-xs text-green-300 font-semibold">✅ Response Time: Within 5 minutes</p>
                </div>
              </div>
            </div>

            {/* Form Side (7 cols) */}
            <div className="lg:col-span-7 glassmorphism p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white text-center md:text-left">Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Message</span></h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-8 text-center md:text-left font-medium">We'll respond on WhatsApp within minutes!</p>

              <form id="contactForm" onSubmit={handleStartProjectWithForm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input id="contactName" type="text" placeholder="Your Full Name *" required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300" />
                  <input id="businessName" type="text" placeholder="Business Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input id="contactPhone" type="tel" placeholder="Phone Number *" required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300" />
                  <input id="contactEmail" type="email" placeholder="Email Address *" required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300" />
                </div>

                <div className="relative">
                  <select id="serviceSelect" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-gray-300 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300 cursor-pointer appearance-none">
                    <option value="" className="bg-[#0b0f19] text-gray-400">Select Service Interested In</option>
                    <option value="Frontend Website" className="bg-[#0b0f19] text-white">Frontend Website</option>
                    <option value="Full Stack Development" className="bg-[#0b0f19] text-white">Full Stack Development</option>
                    <option value="UI/UX Design" className="bg-[#0b0f19] text-white">UI/UX Design</option>
                    <option value="Performance Optimization" className="bg-[#0b0f19] text-white">Performance Optimization</option>
                    <option value="Consultation Only" className="bg-[#0b0f19] text-white">Consultation Only</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>

                <textarea id="contactMessage" placeholder="Tell us about your project... *" rows="4" required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300 resize-none"></textarea>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button type="submit" className="btn-whatsapp flex-1 py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/10">
                    💬 Send to WhatsApp
                  </button>
                  <button type="button" onClick={openInstagramProfile} className="btn-outline flex-1 py-4 text-sm sm:text-base font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    📷 View Instagram
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center py-3 px-4 bg-white/5 border border-white/5 rounded-xl">
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  🔒 Your information is safe with us. We'll respond on WhatsApp within 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030712] border-t border-white/5 text-white py-16 px-4 sm:px-6 md:px-8 text-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <img src="/logo.png" alt="WEBLIX Logo" className="h-8 w-8 object-contain rounded-lg border border-white/10" />
            <span className="text-3xl font-extrabold gradient-text tracking-wide">WEBLIX</span>
          </div>
          <p className="text-gray-400 mb-8 text-sm sm:text-base font-medium">We Build Websites That Build Businesses.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm font-semibold">
            <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-sm text-gray-400 font-semibold">
            <div onClick={openInstagramProfile} className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <span>📷</span>
              <span>@weblix_world_2026</span>
            </div>
            <div onClick={handleQuickWhatsApp} className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <span>💬</span>
              <span>WhatsApp: +91 63697 33630</span>
            </div>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm border-t border-white/5 pt-8 w-full font-medium">
            © 2026 WEBLIX. All rights reserved. | Premium Digital Agency
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes lightSweep {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}