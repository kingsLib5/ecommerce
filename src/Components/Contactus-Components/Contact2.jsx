import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact2() {
  return (
    <div className='h-[500px] grid grid-cols-[40%_50%] gap-8 p-5'>
    <div className='grid p-[50px]'>
      <div className='grid grid-rows-2 rounded-lg shadow-lg '>
        <div className='p-4 rounded-t-lg border-b border-gray-300 space-y-2 shadow-sm'>
          <div className='flex items-center gap-5 mb-4'>
            <div className='grid items-center justify-center h-10 w-10 rounded-full bg-red-700'>
              <IoCallOutline className='text-white' />
            </div>
            <div>
              <p className='font-semibold text-lg'>Call To Us</p>
            </div>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className='p-4 space-y-2 shadow-sm'>
          <div className='flex items-center gap-5 mb-4'>
            <div className='grid items-center justify-center h-10 w-10 rounded-full bg-red-700'>
              <MdOutlineEmail className='text-white' />
            </div>
            <div>
              <p className='font-semibold text-lg'>Write To Us</p>
            </div>
          </div>
          <p className='text-[15px]'>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@codivora.com</p>
          <p>Emails: support@codivora.com</p>
        </div>
      </div>
    </div>
    <div className="h-[400px] grid grid-rows-[20%_60%_20%] gap-4">
  <div className="p-4 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4">
    <input 
      type="text" 
      placeholder="Your Name*" 
      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-600"
    />
    <input 
      type="email" 
      placeholder="Your Email*" 
      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-600"
    />
    <input 
      type="number" 
      placeholder="Phone Number*" 
      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-600"
    />
  </div>
  <div className="p-4 rounded-xl shadow-lg">
    <textarea 
      placeholder="Your Message*" 
      className="w-full h-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-600 resize-none"
    ></textarea>
  </div>
  <div className="p-4 rounded-xl shadow-lg flex justify-end">
    <button 
      className="h-[50px] w-[150px] md:w-auto bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md
      transition-all duration-300 transform hover:scale-105"
    >
      Send Message
    </button>
  </div>
</div>


  </div>
  
  )
}

export default Contact2