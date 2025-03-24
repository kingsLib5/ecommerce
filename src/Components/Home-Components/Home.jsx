import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  return (
    <>
      <div className='bg-white min-h-[50vh] grid grid-cols-12'>
        {/* Section one – Category Sidebar (visible on md and above) */}
        <div className='col-span-3 hidden md:flex border-r-1 justify-center pt-[40px] pr-[40px] overflow-hidden'>
          <ul className='gap-[15px] flex flex-col'> 
            <li className='menu-item flex gap-[40px] justify-center items-center'>
              <a href="">Woman’s Fashion</a>
              <IoIosArrowForward size={14} className='animate-arrow' />
            </li>
            <li className='menu-item flex gap-[60px] justify-center items-center'>
              <a href="">Men’s Fashion</a>
              <IoIosArrowForward size={14} className='animate-arrow' />
            </li>
            <li className='menu-item'><a href="">Electronics</a></li>
            <li className='menu-item'><a href="">Home & Lifestyle</a></li>
            <li className='menu-item'><a href="">Medicine</a></li>
            <li className='menu-item'><a href="">Baby’s & Toys</a></li>
            <li className='menu-item'><a href="">Groceries & Pets</a></li>
            <li className='menu-item'><a href="">Health & Beauty</a></li>
          </ul>
        </div>

        {/* Section two – Swiper */}
        <div className='col-span-9'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            className="h-full"
          >
            <SwiperSlide>
            <div
                    className="bg-black grid grid-cols-2 ml-[60px] mr-[110px] mt-[30px] transition-all duration-500 hover:scale-[0.98]"
                    data-mobile-bg="iphone14"
                  >
                <div className='pr-[170px] mb-[60px] text-white pt-[55px]'>
                  <ul className='animate-fade-in'>
                    <li className='flex justify-center items-center text-[13px] gap-[18px]'>
                      <FaApple className='text-white' size={35} /> 
                      Iphone 14 Series
                    </li>
                    <li className='pl-[60px] pt-[10px] font-bold text-[30px] animate-slide-right'>
                      Up to 10% <br />off Voucher
                    </li>
                    <li className='flex justify-center items-center gap-[10px] pt-[10px] pr-[35px] animate-fade-in'>
                      <a href="" className='underline'>Shop Now</a>
                      <FaLongArrowAltRight />
                    </li>
                  </ul>
                </div>
                <div className='bg-[url(./assets/iphone.jpg)] bg-cover bg-center mb-[30px] transform transition-transform duration-500 hover:scale-105'></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div
  className="bg-black grid grid-cols-2 ml-[60px] mr-[110px] mt-[30px] transition-all duration-500 hover:scale-[0.98]"
  data-mobile-bg="iphone15"
>
                <div className='pr-[170px] mb-[60px] text-white pt-[55px]'>
                  <ul className='animate-fade-in'>
                    <li className='flex justify-center items-center text-[13px] gap-[18px]'>
                      <FaApple className='text-white' size={35} /> 
                      Iphone 15 Series
                    </li>
                    <li className='pl-[60px] pt-[10px] font-bold text-[30px] animate-slide-right'>
                      Up to 10% <br />off Voucher
                    </li>
                    <li className='flex justify-center items-center gap-[10px] pt-[10px] pr-[35px] animate-fade-in'>
                      <a href="" className='underline'>Shop Now</a>
                      <FaLongArrowAltRight />
                    </li>
                  </ul>
                </div>
                <div className='bg-[url(./assets/iphone15.jpg)] bg-cover bg-center mb-[30px] transform transition-transform duration-500 hover:scale-105'></div>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Custom animations */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-right {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }

        /* Swiper navigation customization */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          padding: 0 20px;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .bg-black {
            margin-left: 15px !important;
            margin-right: 15px !important;
          }

          .grid-cols-2 {
            grid-template-columns: 1fr !important;
          }

          .pr-[170px] {
            padding-right: 2rem !important;
            padding-bottom: 2rem;
          }

          .pl-[60px] {
            padding-left: 2rem !important;
          }

          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          
          /* Adjust the container height for smaller screens */
          .h-\[50vh\] {
            height: auto !important;
          }
        }

        /* New menu animations */
        .menu-item {
          opacity: 0;
          transform: translateX(-20px);
          animation: menu-slide 0.6s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes menu-slide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Staggered animation delays */
        .menu-item:nth-child(1) { animation-delay: 0.2s; }
        .menu-item:nth-child(2) { animation-delay: 0.3s; }
        .menu-item:nth-child(3) { animation-delay: 0.4s; }
        .menu-item:nth-child(4) { animation-delay: 0.5s; }
        .menu-item:nth-child(5) { animation-delay: 0.6s; }
        .menu-item:nth-child(6) { animation-delay: 0.7s; }
        .menu-item:nth-child(7) { animation-delay: 0.8s; }
        .menu-item:nth-child(8) { animation-delay: 0.9s; }

        /* Hover effects */
        .menu-item {
          transition: all 0.3s ease;
          position: relative;
        }

        .menu-item:hover {
          transform: translateX(8px) !important;
        }

        .menu-item:hover .animate-arrow {
          transform: translateX(3px);
          transition: transform 0.3s ease;
        }

        .menu-item a {
          position: relative;
        }

        .menu-item a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .menu-item:hover a::after {
          width: 100%;
        }

        /* Responsive adjustments for menu items */
        @media (max-width: 768px) {
          .menu-item {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          
          .menu-item:hover {
            transform: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Home;