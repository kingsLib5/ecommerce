import React from "react";
import { motion } from "framer-motion";
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
    image: BAG,
  },
  {
    id: 2,
    name: "RGB Liquid CPU Cooler",
    price: "$1860",
    image: CPU,
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
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-lg font-semibold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Wishlist ({products.length})
      </motion.h2>
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
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="border rounded-lg p-2 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-sm font-medium mt-2">{product.name}</h3>
            <p className="text-red-500 font-semibold">{product.price}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="mt-4 border p-2 px-4 rounded-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        Move All To Bag
      </motion.button>

      <motion.h2
        className="text-lg font-semibold mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        Just For You
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {suggestions.map((item, index) => (
          <motion.div
            key={item.id}
            className="border rounded-lg p-2 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-sm font-medium mt-2">{item.name}</h3>
            <p className="text-red-500 font-semibold">{item.price}</p>
            <motion.button
              className="mt-2 bg-black text-white py-1 px-3 rounded-md w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WishList;
