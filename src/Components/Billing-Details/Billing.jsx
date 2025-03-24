import React, { useState } from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import MONITOR from "../../assets/MONITOR.png";
import GAMEPAD from "../../assets/GAMEPAD.png";

const Billing = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-6">
        <span className="text-gray-400">Account / My Account / Product / View Cart / </span>
        <span className="font-semibold text-black">CheckOut</span>
      </nav>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <input type="text" placeholder="First Name*" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Company Name" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Street Address*" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Town/City*" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Phone Number*" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email Address*" className="w-full p-2 sm:p-3 border border-gray-300 rounded-md" />

            {/* Save info */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-500" />
              <span className="text-gray-600 text-sm">Save this information for faster check-out next time</span>
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {/* Product List */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img src={MONITOR} alt="LCD Monitor" className="w-10 sm:w-12 h-10 sm:h-12 rounded-md" />
                <span className="text-gray-700 text-sm sm:text-base">LCD Monitor</span>
              </div>
              <span className="font-semibold text-sm sm:text-base">$650</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img src={GAMEPAD} alt="H1 Gamepad" className="w-10 sm:w-12 h-10 sm:h-12 rounded-md" />
                <span className="text-gray-700 text-sm sm:text-base">H1 Gamepad</span>
              </div>
              <span className="font-semibold text-sm sm:text-base">$1100</span>
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">$1750</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 space-y-4">
              {/* Bank Payment - Stacked on mobile */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-center cursor-pointer">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700 font-medium">Bank</span>
                </label>

                <div className="flex space-x-2 sm:space-x-3 mt-2 sm:mt-0">
                  <img src={card1} alt="Visa" className="w-8 sm:w-10" />
                  <img src={card2} alt="MasterCard" className="w-8 sm:w-10" />
                  <img src={card3} alt="PayPal" className="w-8 sm:w-10" />
                </div>
              </div>

              {/* Cash on Delivery */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="accent-red-500"
                />
                <span className="text-gray-700 font-medium">Cash on Delivery</span>
              </label>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4">
              <input type="text" placeholder="Coupon Code" className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-md" />
              <button className="bg-red-500 text-white px-4 py-2 sm:py-3 rounded-md mt-2 sm:mt-0">Apply Coupon</button>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-red-500 text-white py-3 rounded-md mt-4 text-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
