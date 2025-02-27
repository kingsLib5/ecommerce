import React from 'react'

function About1() {
  return (
    <div className="h-[700px] grid grid-rows-[20%_80%]">
      <div className="grid items-center ml-[50px] text-1xl">
         <h4> <a href="/"><span className=' text-gray-400'>Home</span></a>  <span className=' text-gray-200'>/</span> About</h4>
      </div>
      <div className="grid grid-cols-2 gap-8 p-8 ">
      <div className="flex flex-col justify-center p-4">
      <h2 className="text-5xl font-bold mb-9 ">Our Story</h2>
      <p className=" font-semibold mb-8 text-[18px]">
        Launched in 2015, <span className="font-semibold">Codivora</span> is South Asia’s premier online shopping marketplace with a strong presence in Bangladesh. 
        Backed by comprehensive marketing, data, and service solutions, we empower over 10,500 sellers and 300 brands, serving more than 3 million customers across the region.
      </p>
      <p className="font-semibold text-[18px]">
        Our platform features over 1 million products, rapidly expanding across diverse categories. At Exclusive, we are committed to delivering a seamless shopping experience to our valued customers.
      </p>
    </div>
    <div className=" bg-[url(./assets/rat.png)] bg-center bg-cover rounded-lg shadow-lg"></div>
      </div>
  </div>
  
  
  )
}

export default About1