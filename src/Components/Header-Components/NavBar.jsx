import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";


function NavBar() {
  return (
    <>
        <div className='bg-white grid grid-cols-12 h-[11vh] border-b-[1px]'>
          <div className=' col-span-3 flex justify-center items-center text-[20px] font-bold pt-[20px] '>
            <h1>Codivora</h1>
          </div>
          <div className=' col-span-5 pt-[20px]'>
            <ul className=' flex justify-items-start items-center gap-[40px] pt-[20px] pl-[90px]'>
              <li className=' underline'><a href="/">Home</a></li>
              <li><a href="/Contact">Contact</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/login">Sign Up</a></li>
            </ul>
          </div>
          
         {/* improved search section with reduced width */}
            <div className=' col-span-4 flex justify-center items-center gap-5 pr-[80px] pt-[25px]'>
              <div className="relative w-full max-w-[270px]">
                <input
                  type="text"
                  placeholder="What are you looking for"
                  className="w-full h-[30px] pl-3 pr-10 py-1 border-1 border-gray-300 bg-gray-200  outline-none"
                />
                <button
                  aria-label="Search"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-blue-700 focus:outline-none"
                >
                  <FiSearch size={16} />
                </button>
              </div>
              <div className="text-black">
                <a href=""><IoIosHeartEmpty size={25} /></a>
              </div>
              <div className="text-black">
               <a href=""><CiShoppingCart size={30} /></a>
              </div>
            </div>

        </div>   
    </>
  )
}

export default NavBar