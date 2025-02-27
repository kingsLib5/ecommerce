import React from 'react';
import { motion } from 'framer-motion';
import { IoSend } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Column 1: Branding & Subscription */}
          <motion.div variants={itemVariants} className="col-span-1 xs:col-span-2 md:col-span-1">
            <div className="flex flex-col items-start space-y-3">
              <h2 className="font-bold text-xl sm:text-2xl">Codivora</h2>
              <a href="#" className="font-semibold text-base sm:text-lg">Subscribe</a>
              <p className="text-sm sm:text-base">Get 10% off your first order</p>
              <div className="relative w-full mt-2">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full h-10 sm:h-12 pl-3 pr-10 py-1 border border-gray-300 bg-black text-gray-400 outline-none text-sm sm:text-base"
                />
                <button
                  aria-label="Send"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-700 focus:outline-none"
                >
                  <IoSend size={18} className="sm:w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Other Columns */}
          {[Support, Account, QuickLink, Social].map((Section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Section />
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div variants={itemVariants} className="mt-6 sm:mt-8 text-center text-gray-200 text-xs sm:text-sm">
          <h3>© Copyright codivora 2025. All rights reserved</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Extracted components for better readability
const Support = () => (
  <div className="flex flex-col items-start space-y-2 mt-4 xs:mt-0">
    <h3 className="text-lg sm:text-xl">Support</h3>
    <p className="text-xs sm:text-sm">
      24, Towolawi Coker <br /> Surulere Lagos.
    </p>
    <p className="text-xs sm:text-sm">Codivora1@gmail.com</p>
    <p className="text-xs sm:text-sm">+2349059456585</p>
  </div>
);

const Account = () => (
  <div className="flex flex-col items-start space-y-2 mt-4 xs:mt-0">
    <h3 className="text-lg sm:text-xl">Account</h3>
    {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((link, i) => (
      <a key={i} href="#" className="text-xs sm:text-sm hover:text-gray-300">{link}</a>
    ))}
  </div>
);

const QuickLink = () => (
  <div className="flex flex-col items-start space-y-2 mt-4 xs:mt-0">
    <h3 className="text-lg sm:text-xl">Quick Link</h3>
    {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((link, i) => (
      <a key={i} href="#" className="text-xs sm:text-sm hover:text-gray-300">{link}</a>
    ))}
  </div>
);

const Social = () => (
  <div className="flex flex-col items-start space-y-3 mt-4 xs:mt-0">
    <h3 className="text-lg sm:text-xl">Social Media</h3>
    <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
      {[IoLogoFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter].map((Icon, i) => (
        <a key={i} href="#" className="hover:text-blue-500 transition-colors">
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

export default Footer;