import React from "react";
import { FaStar } from "react-icons/fa";

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

// Product1 Component
const Product1 = () => {
  return (
    <div className="grid grid-cols-[15%_44%_35%] gap-[20px] p-6 h-[90vh] w-full">
      {/* Left Side Thumbnails */}
      <div className="grid grid-rows-4 gap-[20px]">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`bg-[#F5F5F5] bg-[url(game./assets/game${num}.png)] bg-center bg-contain bg-no-repeat`}
          ></div>
        ))}
      </div>

      {/* Main Product Image */}
      <div className="bg-[#F5F5F5] bg-[url(./assets/game5.png)] bg-center bg-contain bg-no-repeat"></div>

      {/* Product Details */}
      <div className="bg-amber-500 p-4">
        <h2 className="text-xl font-semibold">Havic HV G-92 Gamepad</h2>
        {/* Star Rating Component */}
        <StarRating ratedStars={4} />
      </div>
    </div>
  );
};

export default Product1;
