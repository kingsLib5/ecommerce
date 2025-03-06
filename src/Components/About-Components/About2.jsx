import React, { useRef, useState, useEffect } from 'react';
import { animate, useInView } from 'framer-motion';

// AnimatedNumber: counts down from (finalValue + offset) to finalValue
function AnimatedNumber({ finalValue, suffix, offset = 5, duration = 1.5, trigger }) {
  const [displayValue, setDisplayValue] = useState(finalValue + offset);

  useEffect(() => {
    if (trigger) {
      const controls = animate(finalValue + offset, finalValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest)
      });
      return () => controls.stop();
    }
  }, [trigger, finalValue, offset, duration]);

  // Format the value: if it's an integer, remove decimals; otherwise, show one decimal
  const formattedValue =
    finalValue % 1 === 0 ? Math.floor(displayValue) : displayValue.toFixed(1);

  return <span>{formattedValue}{suffix}</span>;
}

function About2() {
  // Create refs for each card for viewport detection
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // Trigger the animation when the element is at least 50% visible (adjust threshold as needed)
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  const inView2 = useInView(ref2, { once: true, amount: 0.5 });
  const inView3 = useInView(ref3, { once: true, amount: 0.5 });
  const inView4 = useInView(ref4, { once: true, amount: 0.5 });

  return (
    <div className="min-h-[40vh] grid grid-cols-12 mx-[70px] my-[70px] gap-[15px]">
      {/* Card 1 */}
      <div ref={ref1} className="col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg hover:bg-[#DB4444] hover:text-white ">
        <div className="flex flex-row">
          <div className="w-[30%] flex"></div>
          <div className="bg-[url(./assets/top.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className="w-[30%] flex"></div>
        </div>
        <div className="grid justify-center">
          <div className="space-y-3 text-center">
            <h2 className="font-bold text-4xl">
              <AnimatedNumber
                finalValue={10.5}
                suffix="k"
                offset={5}
                duration={1.5}
                trigger={inView1}
              />
            </h2>
            <p className="text-[23px]">Sellers active on our site</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div ref={ref2} className="col-span-3  border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg bg-[#DB4444] hover:text-white">
        <div className="flex flex-row">
          <div className="w-[30%] flex"></div>
          <div className="bg-[url(./assets/top2.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className="w-[30%] flex"></div>
        </div>
        <div className="grid justify-center">
          <div className="space-y-3 text-center">
            <h2 className="font-bold text-4xl">
              <AnimatedNumber
                finalValue={33}
                suffix="k"
                offset={5}
                duration={1.5}
                trigger={inView2}
              />
            </h2>
            <p className="text-[21px]">Monthly Product Sales</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div ref={ref3} className="col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg hover:bg-[#DB4444] hover:text-white">
        <div className="flex flex-row">
          <div className="w-[30%] flex"></div>
          <div className="bg-[url(./assets/top3.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className="w-[30%] flex"></div>
        </div>
        <div className="grid justify-center">
          <div className="space-y-3 text-center">
            <h2 className="font-bold text-4xl">
              <AnimatedNumber
                finalValue={45.5}
                suffix="k"
                offset={5}
                duration={1.5}
                trigger={inView3}
              />
            </h2>
            <p className="text-[21px]">Customer's active on our site</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div ref={ref4} className="col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg hover:bg-[#DB4444] hover:text-white">
        <div className="flex flex-row">
          <div className="w-[30%] flex"></div>
          <div className="bg-[url(./assets/top4.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className="w-[30%] flex"></div>
        </div>
        <div className="grid justify-center">
          <div className="space-y-3 text-center">
            <h2 className="font-bold text-4xl">
              <AnimatedNumber
                finalValue={25}
                suffix="k"
                offset={5}
                duration={1.5}
                trigger={inView4}
              />
            </h2>
            <p className="text-[21px]">Annual gross sale in our site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
