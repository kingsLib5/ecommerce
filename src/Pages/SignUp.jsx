import React from 'react';
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  return (
    <div className="bg-white min-h-screen md:min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto my-0 md:my-[60px] bg-white shadow-none md:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image Section */}
          <div className="md:col-span-7 min-h-[200px] md:min-h-[80vh] bg-[url(./assets/cart4.jpg)] bg-cover bg-center 
            animate-fadeIn transition-all duration-500 ease-in-out">
          </div>

          {/* Form Section */}
          <div className="md:col-span-5 px-4 md:px-0 animate-slideInRight transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center justify-center py-8 md:py-0 md:pl-[40px] md:pt-[70px]">
              <ul className="w-full max-w-[280px] flex flex-col gap-4">
                <li>
                  <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left animate-fadeIn">
                    Create an account
                  </h1>
                </li>
                <li className="text-xs md:text-sm text-center md:text-left text-gray-600 animate-fadeIn">
                  Enter Your Details Below
                </li>

                {['Name', 'Email or Phone number', 'Password'].map((placeholder, index) => (
                  <li key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <input
                      type={placeholder === 'Password' ? 'password' : 'text'}
                      placeholder={placeholder}
                      className="w-full border-b-2 border-gray-300 outline-none py-2 px-1
                        focus:border-red-500 transition-all duration-300"
                    />
                  </li>
                ))}

                <li className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <button className="w-full md:w-[80%] h-[40px] bg-red-500 text-white rounded-md
                    hover:bg-red-600 transition-all duration-300 transform hover:scale-105
                    mx-auto block">
                    Create Account
                  </button>
                </li>

                <li className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <button className="w-full md:w-[80%] h-[40px] border border-gray-300 rounded-md
                    flex items-center justify-center gap-2 text-sm mx-auto
                    hover:bg-gray-50 transition-all duration-300">
                    <FcGoogle size={16} />
                    Sign Up with Google
                  </button>
                </li>

                <li className="text-xs md:text-sm text-center animate-fadeIn">
                  Already have an Account?{' '}
                  <a className="underline text-red-500 hover:text-red-600 transition-colors" href="/Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;