import React from 'react';
import { motion } from 'framer-motion';
import { IoSend } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  // Framer Motion variants for container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Responsive Grid: 1 col on mobile, up to 5 cols on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1: Branding & Subscription */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h2 className="font-bold text-2xl">Codivora</h2>
            <a href="" className="font-bold text-lg mt-2">Subscribe</a>
            <p className="mt-2">Get 10% off your first order</p>
            <div className="relative w-full max-w-xs mt-4">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full h-12 pl-3 pr-10 py-1 border border-gray-300 bg-black text-gray-400 outline-none"
              />
              <button
                aria-label="Send"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-700 focus:outline-none"
              >
                <IoSend size={20} />
              </button>
            </div>
          </motion.div>
          {/* Column 2: Support */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h3 className="text-xl">Support</h3>
            <p className="text-sm mt-2">
              24, Towolawi Coker <br /> Surulere Lagos.
            </p>
            <p className="mt-2">Codivora1@gmail.com</p>
            <p className="mt-2">+2349059456585</p>
          </motion.div>
          {/* Column 3: Account */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h3 className="text-xl">Account</h3>
            <a href="" className="text-sm mt-2">My Account</a>
            <a href="" className="text-sm mt-2">Login / Register</a>
            <a href="" className="text-sm mt-2">Cart</a>
            <a href="" className="text-sm mt-2">Wishlist</a>
            <a href="" className="text-sm mt-2">Shop</a>
          </motion.div>
          {/* Column 4: Quick Link */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h3 className="text-xl">Quick Link</h3>
            <a href="" className="text-sm mt-2">Privacy Policy</a>
            <a href="" className="text-sm mt-2">Terms Of Use</a>
            <a href="" className="text-sm mt-2">FAQ</a>
            <a href="" className="text-sm mt-2">Contact</a>
          </motion.div>
          {/* Column 5: Social Media */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <h3 className="text-xl">Social Media</h3>
            <div className="flex gap-4 mt-2 text-xl">
              <a href=""><IoLogoFacebook /></a>
              <a href=""><FaInstagram /></a>
              <a href=""><FaLinkedin /></a>
              <a href=""><FaSquareXTwitter /></a>
            </div>
          </motion.div>
        </div>
        {/* Footer Bottom */}
        <motion.div variants={itemVariants} className="mt-8 text-center text-gray-200 text-sm">
          <h3>© Copyright codivora 2025. All rights reserved</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
