import React from 'react';
import { motion } from 'framer-motion';

function HomeSeven() {
  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for product sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-white h-[80vh] grid grid-rows-12">
      {/* Header Section */}
      <motion.div
        className="flex gap-[50px] ml-[50px] mb-[30px] pt-[30px] row-span-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="flex w-[30%] items-center mb-4 md:mb-0"
          variants={headerVariants}
        >
          <div className="bg-red-500 w-1 h-6 rounded-sm mr-3"></div>
          <h5 className="text-red-500 text-sm font-bold">Featured</h5>
        </motion.div>
        <motion.div className="w-[70%] pl-[130px]" variants={headerVariants}>
          <h3 className="text-2xl font-semibold">New Arrival</h3>
        </motion.div>
      </motion.div>

      {/* Main Product Section */}
      <div className="row-span-10 mx-[50px] grid grid-cols-2">
        {/* PlayStation 5 Section */}
        <motion.div
          className="bg-[url(./assets/ps5.jpg)] bg-center bg-cover flex flex-col pl-[40px] pt-[300px] text-white gap-[10px] mr-[40px]"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.div variants={textVariants}>
            <h3 className="text-[20px] font-semibold">PlayStation 5</h3>
          </motion.div>
          <motion.div variants={textVariants}>
            <h6>
              Black and White version of the PS5 <br /> coming out on sale.
            </h6>
          </motion.div>
          <motion.div variants={textVariants}>
            <a href="">
              <h5 className="underline">Shop Now</h5>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="gap-[20px] grid grid-rows-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Women’s Collections Section */}
          <motion.div className="flex" variants={sectionVariants}>
            <div className="w-[100%] bg-[url(./assets/wowo.jpg)] bg-center bg-cover text-white pt-[100px] pl-[40px] gap-[8px] flex flex-col">
              <motion.div variants={textVariants}>
                <h3 className="text-[15px] font-semibold">Women’s Collections</h3>
              </motion.div>
              <motion.div variants={textVariants}>
                <h5 className="text-[12px]">
                  Featured woman collections that <br /> give you another vibe.
                </h5>
              </motion.div>
              <motion.div variants={textVariants}>
                <a href="">
                  <h5 className="text-[13px] underline">Shop Now</h5>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Row: Speakers and Perfume */}
          <motion.div
            className="grid grid-cols-2 gap-[20px]"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Speakers Section */}
            <motion.div
              className="bg-[url(./assets/speaker.jpg)] bg-cover bg-center text-white pt-[120px] pl-[40px] gap-[8px] flex flex-col"
              variants={sectionVariants}
            >
              <motion.div variants={textVariants}>
                <h3 className="text-[15px] font-semibold">Speakers</h3>
              </motion.div>
              <motion.div variants={textVariants}>
                <h5 className="text-[12px]">Amazon wireless speakers</h5>
              </motion.div>
              <motion.div variants={textVariants}>
                <a href="">
                  <h5 className="text-[13px] underline">Shop Now</h5>
                </a>
              </motion.div>
            </motion.div>

            {/* Perfume Section */}
            <motion.div
              className="bg-[url(./assets/gucci.jpg)] bg-cover bg-center text-white pt-[120px] pl-[40px] gap-[8px] flex flex-col"
              variants={sectionVariants}
            >
              <motion.div variants={textVariants}>
                <h3 className="text-[15px] font-semibold">Perfume</h3>
              </motion.div>
              <motion.div variants={textVariants}>
                <h5 className="text-[12px]">GUCCI INTENSE OUD EDP</h5>
              </motion.div>
              <motion.div variants={textVariants}>
                <a href="">
                  <h5 className="text-[13px] underline">Shop Now</h5>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSeven;