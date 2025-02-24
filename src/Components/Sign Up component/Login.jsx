import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center my-0 md:my-[80px]">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-none md:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="min-h-[200px] md:min-h-[80vh] bg-[url(./assets/cart4.jpg)] bg-cover bg-center 
            animate-fadeIn transition-all duration-500 ease-in-out">
          </div>

          {/* Form Section */}
          <div className="flex items-center justify-center p-4 md:p-10 animate-slideInRight transition-all duration-500 ease-in-out">
            <div className="w-full max-w-md p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-fadeIn">
                Log in to Codivora
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base animate-fadeIn">
                Enter your details below
              </p>

              <div className="space-y-4 md:space-y-6">
                {['Email or Phone number', 'Password'].map((placeholder, index) => (
                  <div 
                    key={index}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <input
                      type={placeholder === 'Password' ? 'password' : 'text'}
                      placeholder={placeholder}
                      className="w-full border-b-2 border-gray-300 py-2 px-1
                        focus:outline-none focus:border-red-500 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-4
                animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <button className="w-full md:w-auto bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-md
                  transition-all duration-300 transform hover:scale-105">
                  Log in
                </button>
                <a href="" className="text-red-500 hover:underline text-sm md:text-base
                  transition-colors duration-300">
                  Forgotten password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;