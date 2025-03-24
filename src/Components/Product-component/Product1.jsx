import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";

// StarRating Component
const StarRating = ({ ratedStars = 4, totalStars = 5 }) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={index < ratedStars ? "text-yellow-400" : "text-gray-300"}
          size={20}
        />
      ))}
    </div>
  );
};

// Import images from src/assets
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.png";
import game3 from "../../assets/game3.png";
import game4 from "../../assets/game4.png";
import game5 from "../../assets/game5.png";

// Map the imported images to an array for thumbnails
const thumbnailImages = [game1, game2, game3, game4];

// Product1 Component
const Product1 = () => {
  return (
    <div className="grid grid-cols-[15%_44%_35%] gap-5 p-6 h-[90vh] w-full">
      {/* Left Side Thumbnails */}
      <div className="grid grid-rows-4 gap-5">
        {thumbnailImages.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className="bg-[#F5F5F5] bg-center bg-contain bg-no-repeat h-20"
          ></div>
        ))}
      </div>

      {/* Main Product Image */}
      <div
        style={{ backgroundImage: `url(${game5})` }}
        className="bg-[#F5F5F5] bg-center bg-contain bg-no-repeat h-full"
      ></div>

      {/* Product Details */}
      <div className="bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Havic HV G-92 Gamepad</h2>
        <StarRating ratedStars={4} />
        <h2 className="text-2xl font-bold my-4">$190.00</h2>
        <p className="mb-4 border-b-2 border-gray-300 pb-4">
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install &amp; mess free removal. Pressure sensitive.
        </p>
        <div className="mb-4">
          <div className="mb-2 font-semibold">Colours :</div>
          <div className="flex gap-3">
            <div className="bg-red-500 h-4 w-4 rounded-full"></div>
            <div className="bg-blue-500 h-4 w-4 rounded-full"></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2 font-semibold">Size :</div>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className="h-6 w-6 flex items-center justify-center text-xs border border-gray-300 rounded"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="flex items-center justify-center bg-yellow-300 h-8 rounded">
            <button className="px-2">-</button>
            <span>2</span>
            <button className="px-2">+</button>
          </div>
          <div className="flex items-center justify-center bg-gray-300 h-8 rounded">
            <h2 className="text-sm font-semibold">Buy Now</h2>
          </div>
          <div className="flex items-center justify-center bg-red-500 h-8 rounded">
            {/* Placeholder for additional content */}
          </div>
        </div>
        {/* Delivery Information */}
        <div className="w-full">
          {/* Free Delivery */}
          <div className="grid grid-cols-[15%_85%] items-center bg-blue-50 p-4">
            <div className="text-3xl flex items-center justify-center">
              <FaCarSide />
            </div>
            <div className="text-sm">
              <span className="font-semibold">Free Delivery:</span>
              <br />
              Enter your postal code for Delivery Availability.
            </div>
          </div>
          {/* Return Delivery */}
          <div className="grid grid-cols-[15%_85%] items-center bg-blue-50 p-4 border-t border-gray-300">
            <div className="text-3xl flex items-center justify-center">
              <BsArrowRepeat />
            </div>
            <div className="text-sm">
              <span className="font-semibold">Return Delivery:</span>
              <br />
              Free 30 Days Delivery Returns. Details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
