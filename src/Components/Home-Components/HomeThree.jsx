import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

function HomeThree() {
  const categories = [
    { icon: <IoIosPhonePortrait />, name: "Phones" },
    { icon: <HiMiniComputerDesktop />, name: "Computers" },
    { icon: <BsSmartwatch />, name: "Smart Watch" },
    { icon: <CiHeadphones />, name: "Head-Phones" },
    { icon: <CiCamera />, name: "Camera" },
    { icon: <LuGamepad />, name: "Games" }
  ];

  return (
    <>
      <div className='h-auto md:h-[60vh] py-8 px-4 md:px-0'>
        <div className='container mx-auto'>
          {/* Header Section */}
          <div className='flex flex-col md:flex-row justify-between items-center mb-8 animate-slide-down'>
            <div className='flex items-center mb-4 md:mb-0'>
              <div className="bg-red-500 w-1 h-6 rounded-sm mr-3"></div>
              <h5 className="text-red-500 text-sm font-bold">Categories</h5>
            </div>
            
            <div className='flex items-center justify-between w-full md:w-auto'>
              <h2 className='text-xl md:text-2xl font-semibold mr-4'>Browse By Category</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300">
                  <FaArrowLeft />
                </button>
                <button className="p-2 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 animate-fade-in'>
            {categories.map((category, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 flex flex-col items-center justify-center 
                  hover:border-red-500 hover:text-red-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-black group-hover:text-red-500 transition-colors duration-300 mb-2">
                  {React.cloneElement(category.icon, { size: 40 })}
                </div>
                <h5 className="text-center text-black-700 group-hover:text-red-500 transition-colors duration-300">
                  {category.name}
                </h5>
              </div>
            ))}
          </div>
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
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          
          button {
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default HomeThree