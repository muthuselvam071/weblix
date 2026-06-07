"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a domain name and do I need one?",
      answer: "A domain name is your website's address on the internet (like yourbusiness.com). Yes, you need one to establish your online presence. We can help you register the perfect domain for your brand and even provide recommendations based on your business name and industry.",
    },
    {
      question: "What is web hosting and which do you recommend?",
      answer: "Web hosting is where your website files live on the internet. We recommend premium cloud hosting solutions like Vercel, AWS, or DigitalOcean for optimal performance. We offer managed hosting packages with 99.9% uptime guarantee, daily backups, and 24/7 monitoring.",
    },
    {
      question: "How long does website development typically take?",
      answer: "Project timelines vary based on complexity. A standard frontend website takes 2-3 weeks, while full-stack applications take 4-8 weeks. We provide a detailed timeline during our discovery call and keep you updated throughout the development process.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer flexible support packages including monthly maintenance, security updates, content updates, performance optimization, and 24/7 emergency support. All our projects come with 30 days of free post-launch support.",
    },
    {
      question: "Can I upgrade my website package later?",
      answer: "Yes! All our websites are built on scalable architectures. You can easily upgrade from frontend to full-stack, add new features, integrate e-commerce, or scale up your hosting as your business grows. We make sure your website grows with you.",
    },
    {
      question: "Will my website be mobile-friendly and SEO optimized?",
      answer: "Every website we build is 100% responsive (works perfectly on all devices) and follows Google's Core Web Vitals. We implement on-page SEO best practices, fast loading speeds, clean code structure, and schema markup to help you rank better in search results.",
    },
    {
      question: "What is your design and development process?",
      answer: "Our process includes: 1) Discovery & Strategy, 2) UI/UX Design with mockups, 3) Development & Testing, 4) Launch & Deployment, 5) Post-launch Support & Growth. We keep you involved in every step and provide weekly progress updates.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We work with clients worldwide. Our team operates remotely across different time zones, and we've successfully delivered projects for businesses in the US, UK, Australia, UAE, Singapore, and more. All communication is handled via email, video calls, or project management tools.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={18} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Knowledge Base</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with WEBLIX. Can't find what you're looking for? Feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white/50 hover:bg-white/80 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 text-sm">
                Contact Support →
              </button>
              <button className="btn-outline px-8 py-3 text-sm">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;