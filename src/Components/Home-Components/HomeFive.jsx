import React, { useState, useEffect } from 'react';

// TimerBox Component for Animated Timer Units
function TimerBox({ label, value }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div
      className={`text-center bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-md md:shadow-lg 
        transition-all duration-300 hover:scale-105 min-w-[70px] md:min-w-[90px] ${
          animate ? 'animate-timer-change' : ''
        }`}
    >
      <h6 className="text-[10px] md:text-xs uppercase text-gray-600">{label}</h6>
      <h3 className="text-xl md:text-2xl font-bold text-black">
        {String(value).padStart(2, '0')}
      </h3>
    </div>
  );
}

function HomeFive() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-[70vh] grid relative overflow-hidden">
      <div className="container mx-auto px-4 my-8 md:my-12 lg:my-16 grid grid-cols-1 lg:grid-cols-2 gap-0 animate-fade-in">
        {/* Content Section */}
        <div
          className="bg-black flex flex-col gap-4 md:gap-6 pt-8 md:pt-12 px-4 md:pl-16 lg:pl-20 pb-8 relative z-10 
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-transparent before:z-[-1]"
        >
          <div className="animate-slide-right">
            <h3 className="text-green-500 font-semibold text-base md:text-lg text-center lg:text-left">
              Categories
            </h3>
          </div>
          <div className="animate-slide-right delay-100">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center lg:text-left">
              Enhance Your <br className="hidden lg:block" /> Music Experience
            </h1>
          </div>

          {/* Timer */}
          <div className="flex justify-center lg:justify-start gap-2 md:gap-4 flex-wrap animate-fade-in delay-300">
            {Object.entries(timeLeft).map(([label, value], index) => (
              <React.Fragment key={label}>
                <TimerBox label={label} value={value} />
                {index < 3 && (
                  <span className="text-white text-lg md:text-xl hidden md:inline">:</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="animate-slide-up flex justify-center lg:justify-start">
            <button
              className="bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg 
                hover:bg-green-700 transform transition-all duration-300 
                hover:scale-105 shadow-lg text-sm md:text-base animate-pulse-slow"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="relative bg-[url(./assets/jbl.jpg)] bg-cover bg-center min-h-[300px] md:min-h-[400px] lg:min-h-auto
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-transparent order-first lg:order-last"
        ></div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-right {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes timer-change {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-timer-change {
          animation: timer-change 0.3s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        @media (max-width: 1024px) {
          .bg-gradient-to-r::before {
            background: linear-gradient(to bottom, black, transparent);
          }
        }
      `}</style>
    </div>
  );
}

export default HomeFive;