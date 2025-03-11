import React, { useState } from 'react';

function MyAccoutone() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [selectedAccountOption, setSelectedAccountOption] = useState("");
  const [selectedOrderOption, setSelectedOrderOption] = useState("");

  return (
    <>
      <div className="h-[700px] grid grid-rows-[20%_80%] my-[50px]">
        <div className="grid grid-cols-2 text-1xl items-center ml-[50px]">
          <div>
            <a href="/"><span className=" text-gray-400">Home</span></a> 
            <span className=" text-gray-200">/</span> My Account
          </div>
          <div className="grid justify-end mr-[50px]">
            <h4 className="text-[18px]">
              Welcome! <span className="text-[red]">Loretta</span>
            </h4>
          </div>
        </div>
        <div className="min-h-[70vh] grid grid-cols-[30%_65%] gap-[30px]">
          <div>
            <div className="ml-[50px]">
              <div className="mb-[20px]">
                <h4
                  className="font-bold"
                  onClick={() => setAccountOpen(!accountOpen)}
                >
                  Manage My Account
                </h4>
                {accountOpen && (
                  <div className="p-6">
                    <p
                      onClick={() => setSelectedAccountOption("profile")}
                      className={`cursor-pointer ${selectedAccountOption === "profile" ? "text-[red]" : "text-[#3b3939ec]"}`}
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => setSelectedAccountOption("address")}
                      className={`cursor-pointer ${selectedAccountOption === "address" ? "text-[red]" : "text-[#3b3939ec]"}`}
                    >
                      Address
                    </p>
                    <p
                      onClick={() => setSelectedAccountOption("payment")}
                      className={`cursor-pointer ${selectedAccountOption === "payment" ? "text-[red]" : "text-[#3b3939ec]"}`}
                    >
                      My Payment Options
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-[20px]">
                <h4
                  className="font-bold"
                  onClick={() => setOrdersOpen(!ordersOpen)}
                >
                  My Orders
                </h4>
                {ordersOpen && (
                  <div className="p-6">
                    <p
                      onClick={() => setSelectedOrderOption("return")}
                      className={`cursor-pointer ${selectedOrderOption === "return" ? "text-[red]" : ""}`}
                    >
                      My Return
                    </p>
                    <p
                      onClick={() => setSelectedOrderOption("cancel")}
                      className={`cursor-pointer ${selectedOrderOption === "cancel" ? "text-[red]" : ""}`}
                    >
                      My Cancellations
                    </p>
                  </div>
                )}
                
              </div>
              <div className="mb-[20px]">
                <h4
                  className="font-bold"
                  onClick={() => setWishlistOpen(!wishlistOpen)}
                >
                  My  Wishlist
                </h4>
  
                {/* {wishlistOpen && (
                  <div className="p-5">
                    <p
                      onClick={() => setSelectedWishlistOption("wishlist")}
                      className={`cursor-pointer ${selectedWishlistOption === "return" ? "text-[red]" : ""}`}
                    >
                      <a href="/WishList">Wishlist</a>
                    </p>
                    <p
                      onClick={() => setSelectedWishlistOption("product")}
                      className={`cursor-pointer ${selectedWishlistOption === "return" ? "text-[red]" : ""}`}
                    >
                      <a href="">Product</a>
                    </p>
                    <p
                      onClick={() => setSelectedWishlistOption("checkout")}
                      className={`cursor-pointer ${selectedWishlistOption === "cancel" ? "text-[red]" : ""}`}
                    >
                      <a href="">Checkouts</a>
                    </p>
                  </div>
                )} */}
              </div>
            </div>
          </div>
          <div className="shadow-amber-50 grid grid-rows-2 p-11">
            <div className=" grid grid-rows-[20%_80%]">
              <div className="grid items-center"><p className='capitalize text-[red] text-[18px]'>Edit your profile</p></div>
              <div className=" grid grid-cols-2 gap-[30px]">
              <div className=" space-y-4 font-semibold">
                <div className="grid space-y-2">
                     <p>First Name</p>
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg focus:outline-none p-4 ' />
                 </div>
                 <div className="grid space-y-2">
                     <p>Last Name</p>
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg focus:outline-none p-4' />
                 </div>
                </div>
                <div className=" space-y-4 font-semibold">
                <div className="grid space-y-2">
                     <p>Email</p>
                      <input type="email" className='h-[40px]  bg-gray-300 rounded-lg focus:outline-none p-4 ' />
                 </div>
                 <div className="grid space-y-2">
                     <p>Address</p>
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg focus:outline-none p-4 ' />
                 </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-{80%_20%]">
                  <div className="space-y-3">
                  <div className="grid space-y-2">
                     <p>Password changes</p>
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg p-4 focus:outline-none '
                      placeholder='Current Password' />
                 </div>

                 <div className="grid space-y-2">
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg p-4 focus:outline-none  '
                      placeholder='New Password' />
                 </div>
                 <div className="grid space-y-2">
                      <input type="text" className='h-[40px]  bg-gray-300 rounded-lg p-4 focus:outline-none '
                      placeholder='Confirm New Password' />
                 </div>
                  </div>
                  <div className="grid grid-cols-[10%_20%] justify-end ">
                     <div className="  items-center justify-center flex rounded-lg"><p>Cancel</p></div>
                     <div className="bg-[red] items-center justify-center flex rounded-lg text-white  hover:bg-red-600">
                      <button>Save changes</button>
                     </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccoutone;
