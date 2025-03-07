import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact2() {
  return (
    <>
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="h-16 flex items-center animate-fade-in">
          <nav className="text-gray-500 space-x-2 text-sm md:text-base">
            <a
              href="/"
              className="hover:text-black transition-colors duration-300"
            >
              Home
            </a>
            <span>/</span>
            <a href="#" className="text-black">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Version: Only show Call To Us & Write To Us */}
        <div className="block md:hidden space-y-8">
          {/* Mobile Call To Us Section */}
          <div className="p-4 animate-slide-in-left">
            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 space-y-2 shadow-sm">
                <div className="flex items-center gap-5 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-700 animate-icon-scale">
                    <IoCallOutline className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-lg">Call To Us</p>
                </div>
                <p className="text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-red-700 font-medium">
                  Phone: +234 7030024413
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Write To Us Section */}
          <div className="p-4 animate-slide-in-right">
            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 space-y-2 shadow-sm">
                <div className="flex items-center gap-5 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-700 animate-icon-scale">
                    <MdOutlineEmail className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-lg">Write To Us</p>
                </div>
                <p className="text-gray-600 text-[15px]">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-red-700 font-medium">
                  Emails: customer@codivora.com
                </p>
                <p className="text-red-700 font-medium">
                  Emails: support@codivora.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version: Show both Contact Info and the Contact Form */}
        <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Contact Info Section */}
          <div className="p-6 md:p-10 animate-slide-in-left">
            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Phone Card */}
              <div className="p-6 border-b border-gray-300 space-y-2 shadow-sm">
                <div className="flex items-center gap-5 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-700 animate-icon-scale">
                    <IoCallOutline className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-lg">Call To Us</p>
                </div>
                <p className="text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-red-700 font-medium">
                  Phone: +234 7030024413
                </p>
              </div>

              {/* Write To Us Card */}
              <div className="p-6 space-y-2 shadow-sm">
                <div className="flex items-center gap-5 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-700 animate-icon-scale">
                    <MdOutlineEmail className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-lg">Write To Us</p>
                </div>
                <p className="text-gray-600 text-[15px]">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-red-700 font-medium">
                  Emails: customer@codivora.com
                </p>
                <p className="text-red-700 font-medium">
                  Emails: support@codivora.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section (only on desktop) */}
          <div className="hidden md:flex flex-col gap-8 animate-slide-in-right">
            <div className="w-full p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300 hover:shadow-xl">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-red-600 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-red-600 transition-all"
              />
              <input
                type="number"
                placeholder="Phone Number*"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-red-600 transition-all"
              />
            </div>

            <div className="w-full p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <textarea
                placeholder="Your Message*"
                className="w-full h-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-red-600 resize-none transition-all"
              ></textarea>
            </div>

            <div className="w-full p-6 rounded-xl shadow-lg flex justify-end">
              <button className="h-[50px] w-full md:w-auto bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes icon-scale {
          0% { transform: scale(0); }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out 0.2s;
          animation-fill-mode: backwards;
        }
        .animate-icon-scale { animation: icon-scale 0.4s ease-out; }
        @media (max-width: 768px) {
          .grid { gap: 1.5rem; }
          .h-16 {
            height: 3.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .rounded-lg { border-radius: 0.5rem; }
          input, textarea { font-size: 14px; }
          button { padding: 1rem; }
        }
      `}</style>
    </>
  );
}

export default Contact2;
