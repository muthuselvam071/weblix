"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              WEBLIX
            </h3>
            <p className="text-gray-400">We Build Websites That Build Businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-400">Instagram: @weblix_world_2026</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-gray-400">© 2026 WEBLIX. All rights reserved.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          Crafted with precision by WEBLIX — Premium Digital Agency
        </div>
      </div>
    </footer>
  );
};

export default Footer;