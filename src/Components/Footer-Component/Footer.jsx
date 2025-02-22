import React from 'react'
import { IoSend } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";





function Footer() {
  return (
    <>
        <div className='bg-black grid grid-rows-12 h-[60vh]'>
            <div className=' row-span-11 flex '>
                <div className=' w-[25%] flex justify-center items-center '>
                    <ul className=' flex flex-col gap-[18px] text-[white] '>
                        <li className=' font-bold text-[20px]'>Codivora</li>
                        <li className=' font-bold text-[15px]'><a href="">Subscribe</a></li>
                        <li>Get 10% off your first order</li>
                        <li>
                            <div className="relative w-full max-w-[190px]">
                               <input
                                 type="text"
                                    placeholder="Enter your Email"
                                     className="w-full h-[50px] pl-3 pr-10 py-1 border-1 border-gray-300 bg-black text-gray-400  outline-none"
                                     />
                                <button
                                    aria-label="Search"
                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-blue-700 focus:outline-none"
                                    >
                                    <IoSend className=' text-[white]' size={20} />
                                </button>
                             </div>
                        </li>
                    </ul>
                </div>
                <div className=' w-[25%] flex justify-center items-center '>
                    <ul className=' flex flex-col gap-[18px] text-[white] '>
                        <li className=' text-[18px]'>Support</li>
                        <li className=' text-[15px]'>24, Towolawi Coker <br />  Surulere Lagos.</li>
                        <li>Codivora1@gmail.com</li>
                        <li>+2349059456585</li>
                    </ul>
                </div>
                <div className='  w-[12.5%] justify-center items-center flex'>
                    <ul className=' flex flex-col gap-[10px] text-[white] pt-[20px] '>
                        <li className=' text-[18px]'>Account</li>
                        <li className=' text-[15px]'><a href="">My Account</a></li>
                        <li><a href="">Login / Register</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </div>
                <div className='  w-[12.5%] justify-center items-center flex'>
                    <ul className=' flex flex-col gap-[10px] text-[white] pb-[10px] '>
                        <li className=' text-[18px]'>Quick Link</li>
                        <li className=' text-[15px]'><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms Of Use</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className=' w-[25%] flex justify-center items-center '>
                    <ul className=' flex flex-col gap-[18px] text-[white] pb-[100px] '>
                        <li className=' text-[18px]'>Social Media</li>
                        <li className=' flex gap-[10px] text-[18px]'>
                            <a href=""><IoLogoFacebook /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaLinkedin /></a>
                            <a href=""><FaSquareXTwitter /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' row-span-1 grid justify-center items-center text-gray-200 text-[13px]'>
                <h3>©Copyright codivora 2025. All right reserved</h3>
            </div>
        </div>
    </>
  )
}

export default Footer
