import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io'; // Added import

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="bg-white grid grid-cols-12 h-[11vh] border-b border-gray-300 fixed top-0 left-0 w-full z-50 md:relative">
        {/* Logo */}
        <div className="col-span-3 flex justify-center items-center text-[20px] font-bold pt-[20px] md:justify-center">
          <h1>Codivora</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="col-span-5 pt-[20px] hidden md:block">
          <ul className="flex justify-items-start items-center gap-[40px] pt-[20px] pl-[90px]">
            {['Home', 'Contact', 'About', 'SignUp'].map((item) => (
              <li
                key={item}
                className="group relative transition-all duration-300 hover:text-blue-600"
              >
                <a href={`/${item === 'Home' ? '' : item}`} className="hover:opacity-80">
                  {item}
                </a>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Icons: Cart, Search Toggle, and Menu Button */}
        <div className="md:hidden absolute right-4 pt-[20px] top-1/2 -translate-y-1/2 flex items-center gap-4">
            <a href="/Cart">
              <CiShoppingCart size={25} className="text-gray-600" />
            </a> 
          {isSearchOpen ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-[120px] h-[25px] pl-2 pr-8 border border-gray-300 bg-gray-200 outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <FiSearch size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600"
            >
              <FiSearch size={20} />
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>

        {/* Desktop Icons and Search (unchanged) */}
        <div className="col-span-4 hidden md:flex justify-center items-center gap-5 pr-[80px] pt-[25px]">
          <div className="relative w-full max-w-[270px]">
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-full h-[30px] pl-3 pr-10 py-1 border border-gray-300 bg-gray-200 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
              <FiSearch size={16} />
            </button>
          </div>

          <div className="flex gap-4">
            <a href="">
              <IoIosHeartEmpty size={25} className="hover:scale-110 transition-transform" />
            </a>
            <a href="/Cart">
              <CiShoppingCart size={25} className="hover:scale-110 transition-transform " /> 
            </a>
            <a href="/MyAccount">
              <IoPersonOutline size={25} className="hover:scale-110 transition-transform focus:bg-[red] focus:text-[red]" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 w-full bg-white z-40 overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'top-[11vh] max-h-[500px]' : 'top-[11vh] max-h-0'
          }`}
        >
          {/* Mobile Navigation Links with Person Icon */}
          <div className="border-b border-gray-300 px-4 py-2 relative">
                <ul className="flex flex-col space-y-4">
                  {['Home', 'Contact', 'About', 'SignUp'].map((item) => (
                    <li
                      key={item}
                      className="group relative transition-all duration-300 hover:text-blue-600"
                    >
                      <a href={`/${item === 'Home' ? '' : item}`} className="block hover:opacity-80">
                        {item}
                      </a>
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
                    </li>
                  ))}
                </ul>
                <a href="" className="absolute top-2 right-4">
                  <IoPersonOutline size={25} className="text-gray-600 focus:bg-[red]" />
                </a>
             </div>

          {/* Category Menu from Home.jsx */}
          <ul className="p-4 space-y-4 border-b border-gray-300">
            <li className="menu-item flex gap-[40px] justify-between items-center">
              <a href="">Woman’s Fashion</a>
              <IoIosArrowForward size={14} className="animate-arrow" />
            </li>
            <li className="menu-item flex gap-[40px] justify-between items-center">
              <a href="">Men’s Fashion</a>
              <IoIosArrowForward size={14} className="animate-arrow" />
            </li>
            <li className="menu-item"><a href="">Electronics</a></li>
            <li className="menu-item"><a href="">Home & Lifestyle</a></li>
            <li className="menu-item"><a href="">Medicine</a></li>
            <li className="menu-item"><a href="">Baby’s & Toys</a></li>
            <li className="menu-item"><a href="">Groceries & Pets</a></li>
            <li className="menu-item"><a href="">Health & Beauty</a></li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
          .col-span-3 {
            justify-content: flex-start;
            padding-left: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
