import React from "react";
import BAG from "../assets/BAG.png";
import CPU from "../assets/CPU.png";
import PAD from "../assets/PAD.png";
import JACKET from "../assets/JACKET.png";
import LAPTOP from "../assets/LAPTOP.png";
import MONITOR from "../assets/MONITOR.png";
import GAMEPAD from "../assets/GAMEPAD.png";
import KEYBOARD from "../assets/KEYBOARD.png";

const products = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1180",
    image: BAG, // ✅ Using imported image
  },
  {
    id: 2,
    name: "RGB Liquid CPU Cooler",
    price: "$1860",
    image: CPU, // ✅ Using imported image
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: "$550",
    image: PAD,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: "$750",
    image: JACKET,
  },
];

const suggestions = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    price: "$2060",
    image: LAPTOP,
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: "$1120",
    image: MONITOR,
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: "$40",
    image: GAMEPAD,
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: "$75",
    image: KEYBOARD,
  },
];

const WishList = () => {
  return (
    <div className="container mx-auto p-4 space-y-3">
   <a
  href="/MyAccount"
  className="flex items-center space-x-2 mr-[40px]"
  aria-label="Return to previous page"
>
  <svg
    className="w-5 h-5 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  <span className="font-serif text-red-500">Return to Previous Page</span>
</a>

      <h2 className="text-lg font-semibold mb-4">Wishlist ({products.length})</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-2 shadow-md">
            <img
              src={product.image} // ✅ Correctly referencing imported image
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-sm font-medium mt-2">{product.name}</h3>
            <p className="text-red-500 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 border p-2 px-4 rounded-md">Move All To Bag</button>
      
      <h2 className="text-lg font-semibold mt-6">Just For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {suggestions.map((item) => (
          <div key={item.id} className="border rounded-lg p-2 shadow-md">
            <img
              src={item.image} // ✅ Correctly referencing imported image
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-sm font-medium mt-2">{item.name}</h3>
            <p className="text-red-500 font-semibold">{item.price}</p>
            <button className="mt-2 bg-black text-white py-1 px-3 rounded-md w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
