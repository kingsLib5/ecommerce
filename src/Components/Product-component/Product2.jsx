import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt, FaHeart, FaEye } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

function Product2() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [swiperInstance, setSwiperInstance] = useState(null);

//   useEffect(() => {
//     const target = new Date();
//     target.setDate(target.getDate() + 3); // Set 3 days from now

//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = target - now;

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

  const products = [
    {
      id: 1,
      image: '../src/assets/pad.jpg',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 25,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 2,
      image: '../src/assets/KEYBOARD.png',
      title: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 17,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 3,
      image: '../src/assets/JACKET.png',
      title: 'Gucci Jacket',
      price: 960,
      originalPrice: 1160,
      discount: 17,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 4,
      image: '../src/assets/Laptop.jpg',
      title: 'Hp Elite',
      price: 960,
      originalPrice: 1160,
      discount: 17,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 5,
      image: '../src/assets/watch.jpg',
      title: 'Michael Krog',
      price: 1120,
      originalPrice: 2160,
      discount: 25,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 6,
      image: '../src/assets/iphoneSet.jpg',
      title: 'Iphone Set',
      price: 120,
      originalPrice: 160,
      discount: 25,
      rating: 4.5,
      reviews: 88
    },
    {
      id: 7,
      image: '../src/assets/BAG.png',
      title: 'Gucci Bag',
      price: 120,
      originalPrice: 160,
      discount: 25,
      rating: 4.5,
      reviews: 88
    }
  ];

  return (
    <div className="bg-white min-h-[70vh] px-4 md:px-[60px] py-[30px]">
      {/* Section One - Timer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-500 w-1 h-6 rounded-sm" />
          <h5 className="text-red-500 text-sm font-bold">Related item</h5>
        </div>
        {/* <h2 className="text-2xl font-semibold">Flash Sales</h2> */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* <div className="flex gap-2">
            <div className="text-center">
              <h6 className="text-xs">Days</h6>
              <h3 className="text-2xl font-semibold">{String(timeLeft.days).padStart(2, '0')}</h3>
            </div>
            <span className="text-xl md:mt-4">:</span>
            <div className="text-center">
              <h6 className="text-xs">Hours</h6>
              <h3 className="text-2xl font-semibold">{String(timeLeft.hours).padStart(2, '0')}</h3>
            </div>
            <span className="text-xl md:mt-4">:</span>
            <div className="text-center">
              <h6 className="text-xs">Minutes</h6>
              <h3 className="text-2xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</h3>
            </div>
            <span className="text-xl md:mt-4">:</span>
            <div className="text-center">
              <h6 className="text-xs">Seconds</h6>
              <h3 className="text-2xl font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</h3>
            </div>
          </div> */}

          {/* Custom Arrow Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => swiperInstance && swiperInstance.slidePrev()}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={() => swiperInstance && swiperInstance.slideNext()}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Section Two - Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden">
              {/* Wrap the product image in a Link */}
              <Link 
                to={`/product/${product.id}`}
                className="block relative h-48 md:h-64 bg-gray-100"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition">
                      <FaHeart />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition">
                      <FaEye />
                    </button>
                  </div>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart <CiShoppingCart className="inline ml-2" />
              </button>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-medium mb-1">{product.title}</h3>
                <div className="flex gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.price}</span>
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(product.rating) ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : i === Math.floor(product.rating) && product.rating % 1 !== 0 ? (
                      <FaStarHalfAlt key={i} className="text-yellow-400" />
                    ) : (
                      <FaStar key={i} className="text-gray-300" />
                    )
                  ))}
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Product2;
