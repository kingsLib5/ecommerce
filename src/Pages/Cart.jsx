import { useState } from "react";
import { motion } from "framer-motion";
import MONITOR from "../assets/MONITOR.png";
import GAMEPAD from "../assets/GAMEPAD.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: MONITOR },
    { id: 2, name: "Hi Gamepad", price: 550, quantity: 2, image: GAMEPAD },
  ]);
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <motion.div 
      className="container mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="text-sm mb-4 text-gray-500">
        Home / <span className="text-gray-800">Cart</span>
      </nav>

      {/* Responsive Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left min-w-[500px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <motion.tr
                key={item.id}
                className="border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="p-3 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12" />
                  {item.name}
                </td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">${item.price * item.quantity}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons Section */}
      <motion.div 
        className="flex flex-wrap justify-between mt-4 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <button className="px-4 py-2 border rounded w-full sm:w-auto">Return To Shop</button>
        <button className="px-4 py-2 border rounded w-full sm:w-auto">Update Cart</button>
      </motion.div>

      {/* Flex container for Coupon & Cart Total */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-6 gap-6">
        {/* Coupon Section */}
        <motion.div 
          className="w-full md:w-2/5 flex flex-wrap gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border p-2 rounded w-full sm:w-auto flex-1"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded sm:w-auto">
            Apply Coupon
          </button>
        </motion.div>

        {/* Cart Total Section */}
        <motion.div 
          className="border p-4 rounded w-full md:w-1/3 bg-gray-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="font-bold text-lg">Cart Total</h3>
          <p className="py-1 flex justify-between">
            <span>Subtotal:</span> <span>${getSubtotal()}</span>
          </p>
          <p className="py-1 flex justify-between">
            <span>Shipping:</span> <span>Free</span>
          </p>
          <p className="font-bold py-1 flex justify-between">
            <span>Total:</span> <span>${getSubtotal()}</span>
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-3 w-full">
            Proceed to Checkout
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cart;
