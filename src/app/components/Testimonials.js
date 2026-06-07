"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  User,
  Calendar,
  Briefcase,
  Heart
} from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      company: "Siva Catering",
      companyType: "Catering Business",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5,
      date: "March 2026",
      testimonial: "WEBLIX transformed our catering business completely! The website they built is not just beautiful but also highly functional. Our online orders have increased by 150% within 3 months. The team's professionalism and attention to detail is exceptional. They understood our requirements perfectly and delivered beyond expectations.",
      longTestimonial: "The booking system they implemented has made event management so much easier. Customers can now book our services 24/7, and the automated confirmation system saves us hours of manual work. The dashboard gives us real-time insights into our business performance. Highly recommend WEBLIX for any food business looking to go digital!",
      metrics: {
        growth: "+150%",
        satisfaction: "100%"
      },
      tags: ["Food & Beverage", "E-commerce"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Owner",
      company: "Classic Car Care",
      companyType: "Automotive Service",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
      date: "February 2026",
      testimonial: "The website WEBLIX created for Classic Car Care has been a game-changer. Our appointment bookings have doubled, and customers love the online service history feature. The team was responsive, professional, and delivered ahead of schedule.",
      longTestimonial: "What impressed me most was their post-launch support. They continue to help us optimize and add new features. The maintenance reminder system has increased our repeat customers significantly. The website looks premium and performs flawlessly on all devices. Thank you WEBLIX for helping us grow!",
      metrics: {
        growth: "+200%",
        satisfaction: "98%"
      },
      tags: ["Automotive", "Service Industry"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Managing Director",
      company: "Urban Eats Restaurant",
      companyType: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 5,
      date: "January 2026",
      testimonial: "Working with WEBLIX was the best decision we made for our digital transformation. The online ordering system is seamless, and the QR code menu has reduced our staffing needs significantly. Our customers love the experience!",
      longTestimonial: "The team at WEBLIX took time to understand our workflow and custom-built solutions that perfectly fit our needs. The real-time order tracking and kitchen display system have improved our efficiency by 40%. They also integrated with all major delivery platforms. Truly a world-class agency!",
      metrics: {
        growth: "+300%",
        satisfaction: "99%"
      },
      tags: ["Restaurant", "Food Tech"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Creative Director",
      company: "Luxe Beauty Studio",
      companyType: "Salon & Spa",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      rating: 5,
      date: "December 2025",
      testimonial: "The website WEBLIX designed for us is absolutely stunning! It perfectly captures our brand's luxury aesthetic. The booking system has made appointment management effortless, and our clients love the loyalty program.",
      longTestimonial: "Since launching the website, our online bookings have increased by 185%. The staff management feature has streamlined our operations, and the automated reminders reduced no-shows by 70%. WEBLIX didn't just build a website; they built a complete business solution. Their design sense is world-class!",
      metrics: {
        growth: "+185%",
        satisfaction: "100%"
      },
      tags: ["Beauty", "Lifestyle"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Startup Founder",
      company: "TechFlow Solutions",
      companyType: "SaaS Startup",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5,
      date: "November 2025",
      testimonial: "WEBLIX helped us launch our MVP faster than expected. Their technical expertise and strategic advice were invaluable. The platform is scalable, secure, and our investors were impressed by the quality.",
      longTestimonial: "As a startup, we needed a partner who could move fast without compromising quality. WEBLIX delivered exactly that. They helped us refine our product vision and built a robust platform that's ready for millions of users. The admin dashboard they created gives us complete control. Highly recommended for any startup!",
      metrics: {
        growth: "+250%",
        satisfaction: "97%"
      },
      tags: ["SaaS", "Startup"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToTestimonial = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
    setTimeout(() => setAutoplay(true), 10000);
  };

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
    <section ref={sectionRef} id="testimonials" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3 rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ opacity }}
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
            <Heart size={18} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Client Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped transform
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Testimonial Card */}
              <div className="order-2 lg:order-1">
                <div className={`glassmorphism p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br ${testimonials[activeIndex].color} bg-opacity-5`}>
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote size={80} strokeWidth={1} />
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                    "{testimonials[activeIndex].testimonial}"
                  </p>
                  
                  <p className="text-gray-600 italic mb-6 text-sm border-l-4 border-primary pl-4">
                    {testimonials[activeIndex].longTestimonial}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6 mb-6">
                    {Object.entries(testimonials[activeIndex].metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {testimonials[activeIndex].tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Info Card */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="glassmorphism p-8 rounded-3xl text-center"
                >
                  {/* Client Image */}
                  <div className="relative inline-block mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                      <User size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Client Details */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {testimonials[activeIndex].position}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {testimonials[activeIndex].company}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      <span>{testimonials[activeIndex].companyType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{testimonials[activeIndex].date}</span>
                    </div>
                  </div>

                  {/* Success Story Link */}
                  <button className="text-primary font-semibold text-sm hover:gap-2 transition-all inline-flex items-center gap-1 group">
                    Read Full Success Story
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToTestimonial(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => goToTestimonial(idx)}
              className="cursor-pointer"
            >
              <div className="glassmorphism p-5 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  "{testimonial.testimonial.substring(0, 100)}..."
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
            <Sparkles size={18} className="text-primary" />
            <span className="text-gray-600">Join 100+ satisfied businesses worldwide</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;