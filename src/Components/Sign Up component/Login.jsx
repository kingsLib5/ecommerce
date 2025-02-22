import React from 'react';


const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-black"></div>

      <div className="w-1/2 flex items-center justify-center p-10">
        <div className=" p-8 rounded-2xl  w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 ">Log in to Codivora</h2>
          <p className=" text-gray-600 mb-6">Enter your details below</p>

          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Email or Phone number" 
              className="w-full border-b border-black focus:outline-none py-2"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border-b border-black focus:outline-none py-2"
            />
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded">
              Log in
            </button>
            <a href="#" className="text-red-600 hover:underline">
              Forgotten password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
