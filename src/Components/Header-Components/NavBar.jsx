import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-white grid grid-cols-12 h-[11vh] border-b-[1px] relative'>
        {/* Logo */}
        <div className='col-span-3 flex justify-center items-center text-[20px] font-bold pt-[20px] animate-fade-in'>
          <h1>Codivora</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='col-span-5 pt-[20px] hidden md:block'>
          <ul className='flex justify-items-start items-center gap-[40px] pt-[20px] pl-[90px]'>
            {['Home', 'Contact', 'About', 'SignUp'].map((item, index) => (
              <li 
                key={item}
                className="group relative transition-all duration-300 hover:text-blue-600"
                style={{ animation: `slide-down 0.5s ease-out ${index * 0.1}s forwards` }}
              >
                <a href={`/${item === 'Home' ? '' : item}`} className="hover:opacity-80">
                  {item}
                </a>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden absolute right-4 top-6 z-50'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-600"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search and Icons */}
        <div className='col-span-4 flex justify-center items-center gap-5 pr-[80px] pt-[25px]'>
          <div className="relative w-full max-w-[270px] hidden md:block animate-slide-in">
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-full h-[30px] pl-3 pr-10 py-1 border-1 border-gray-300 bg-gray-200 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
              <FiSearch size={16} />
            </button>
          </div>
          
          <div className="flex gap-4">
            {[IoIosHeartEmpty, CiShoppingCart, IoPersonOutline].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="hover:scale-110 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <Icon size={25} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-[11vh] left-0 w-full bg-white z-40 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
          <ul className='p-4 space-y-4'>
            {['Home', 'Contact', 'About', 'SignUp'].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item === 'Home' ? '' : item}`}
                  className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-[40px] pl-3 pr-10 py-1 border-1 border-gray-300 bg-gray-200 outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <FiSearch size={16} />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .col-span-3 {
            justify-content: flex-start;
            padding-left: 1rem;
          }

          .col-span-4 {
            justify-content: flex-end;
            padding-right: 1rem;
            gap: 1rem;
          }

          input {
            max-width: 180px;
          }
        }
      `}</style>
    </>
  )
}

export default NavBar;