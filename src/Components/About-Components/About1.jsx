import React from 'react'

function About1() {
  return (
    <>
      {/* Desktop Version – remains unchanged */}
      <div className="hidden md:grid bg-white my-[80px] h-[100vh] grid-rows-12">
        {/* Section One */}
        <div className="row-span-2 pl-[80px] items-center flex">
          <h6 className="flex gap-[10px]">
            <span className="text-gray-500">
              <a href="/">Home</a>
            </span>
            <span className="text-gray-500">/</span>
            About
          </h6>
        </div>
        {/* Section Two */}
        <div className="row-span-10 grid">
          <div className="grid grid-cols-2 ml-[70px] gap-[20px]">
            <div className="flex flex-col justify-center pl-[90px] gap-4">
              <h2 className="font-semibold text-[45px]">Our Story</h2>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
                marketplace with an active presense in Bangladesh. Supported <br /> 
                by wide range of tailored marketing, data and service solutions, <br /> 
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a <br />
                very fast. Exclusive offers a diverse assotment in categories <br />
                ranging from consumer.
              </p>
            </div>
            <div className="bg-[url(./assets/rat.jpg)] bg-center bg-cover rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Mobile Version – image on top, text below */}
      <div className="md:hidden bg-white pt-[11vh] flex flex-col items-center px-4">
        {/* Image at the top */}
        <div className="w-full">
          <img 
            src="../src/assets/rat.jpg" 
            alt="Our Story" 
            className="w-full object-cover rounded-2xl" 
            style={{ height: '200px' }} 
          />
        </div>
        {/* Centered, shortened text */}
        <div className="mt-6 text-center">
          <h2 className="font-semibold text-2xl">Our Story</h2>
          <p className="text-sm mt-2">
            Launced in 2015, Exclusive is South Asia’s premier online shopping marketplace in Bangladesh. With tailored marketing and service solutions, Exclusive serves millions of customers.
          </p>
        </div>
      </div>
    </>
  )
}

export default About1
