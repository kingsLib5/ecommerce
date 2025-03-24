import React, { useRef, useState, useEffect } from 'react';
import { animate, useInView, motion } from 'framer-motion';

// AnimatedNumber: counts down from (finalValue + offset) to finalValue
function AnimatedNumber({ finalValue, suffix, offset = 5, duration = 1.5, trigger }) {
  const [displayValue, setDisplayValue] = useState(finalValue + offset);

  useEffect(() => {
    if (trigger) {
      const controls = animate(finalValue + offset, finalValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest)
      });
      return () => controls.stop();
    }
  }, [trigger, finalValue, offset, duration]);

  const formattedValue =
    finalValue % 1 === 0 ? Math.floor(displayValue) : displayValue.toFixed(1);

  return <span>{formattedValue}{suffix}</span>;
}

function About2() {
  // Create separate refs for desktop and mobile cards
  const desktopRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const mobileRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Auto-slide slider ref and current index state for mobile layout
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // UseInView for desktop cards
  const inViewDesktop = desktopRefs.map(ref => useInView(ref, { once: true, amount: 0.5 }));
  // UseInView for mobile cards
  const inViewMobile = mobileRefs.map(ref => useInView(ref, { once: true, amount: 0.5 }));

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Auto-slide effect for mobile slider
  useEffect(() => {
    const handleAutoSlide = () => {
      if (sliderRef.current && window.innerWidth < 768) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % 4; // we have 4 cards
          sliderRef.current.scrollTo({
            left: sliderRef.current.clientWidth * nextIndex,
            behavior: "smooth"
          });
          return nextIndex;
        });
      }
    };

    const intervalId = setInterval(handleAutoSlide, 3000); // slide every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  // Card data array for reusability
  const cards = [
    {
      image: './assets/top.png',
      finalValue: 10.5,
      suffix: 'k',
      label: 'Sellers active on our site',
      bgColor: ''
    },
    {
      image: './assets/top2.png',
      finalValue: 33,
      suffix: 'k',
      label: 'Monthly Product Sales',
      bgColor: 'bg-red-500'
    },
    {
      image: './assets/top3.png',
      finalValue: 45.5,
      suffix: 'k',
      label: 'Customers active on our site',
      bgColor: ''
    },
    {
      image: './assets/top4.png',
      finalValue: 25,
      suffix: 'k',
      label: 'Annual gross sale on our site',
      bgColor: ''
    }
  ];

  return (
    <>
      {/* Desktop Layout: Four cards side by side */}
      <div className="hidden md:grid grid-cols-4 mx-4 my-4 gap-4 min-h-[40vh]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            ref={desktopRefs[index]}
            variants={cardVariant}
            initial="hidden"
            animate={inViewDesktop[index] ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`border border-gray-300 grid grid-rows-2 gap-4 rounded-lg hover:bg-red-500 hover:text-white p-4 ${card.bgColor}`}
          >
            <div className="flex items-center justify-center">
              <div
                className={`bg-[url(${card.image})] bg-cover bg-center w-20 h-20 md:w-24 md:h-24`}
              ></div>
            </div>
            <div className="grid justify-center">
              <div className="space-y-2 text-center">
                <h2 className="font-bold text-2xl md:text-4xl">
                  <AnimatedNumber
                    finalValue={card.finalValue}
                    suffix={card.suffix}
                    offset={5}
                    duration={1.5}
                    trigger={inViewDesktop[index]}
                  />
                </h2>
                <p className="text-sm md:text-[21px]">{card.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout: Horizontal slider showing one card at a time, auto-sliding */}
      <div
        ref={sliderRef}
        className="md:hidden pt-[10vh] flex overflow-x-auto snap-x snap-mandatory gap-4 mx-4 my-4 scroll-smooth"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            ref={mobileRefs[index]}
            variants={cardVariant}
            initial="hidden"
            animate={inViewMobile[index] ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="snap-center flex-none w-full border border-gray-300 grid grid-rows-2 gap-4 rounded-lg hover:bg-red-500 hover:text-white p-4"
          >
            <div className="flex items-center justify-center">
              <div
                className={`bg-[url(${card.image})] bg-cover bg-center w-20 h-20`}
              ></div>
            </div>
            <div className="grid justify-center">
              <div className="space-y-2 text-center">
                <h2 className="font-bold text-2xl">
                  <AnimatedNumber
                    finalValue={card.finalValue}
                    suffix={card.suffix}
                    offset={5}
                    duration={1.5}
                    trigger={inViewMobile[index]}
                  />
                </h2>
                <p className="text-sm">{card.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About2;
