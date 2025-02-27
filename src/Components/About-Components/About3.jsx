import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import man1 from "../../assets/man1.png";
import woman1 from "../../assets/woman1.png";
import man2 from "../../assets/man2.png";
import woman3 from "../../assets/woman3.jpg";
import man4 from "../../assets/man4.jpg";
import woman4 from "../../assets/woman4.jpg";

const teamMembers = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: man1 },
  { name: "Emma Watson", role: "Managing Director", image: woman1 },
  { name: "Will Smith", role: "Product Designer", image: man2 },
  { name: "Lisa Greg", role: "Product Marketer", image: woman3 },
  { name: "Obi Daniel", role: "Marketing Editor", image: man4 },
  { name: "Blessing Opara", role: "Brand Manager", image: woman4 },
];

function About3() {
  return (
    <div className="min-h-[60vh] p-10  flex flex-col items-center justify-center mx-[50px] my-[60px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15} // Adjusted spacing for better image proximity
        slidesPerView={3}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet custom-bullet",
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex-shrink-0">
            <div className="h-[500px] w-[80%] flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image Section */}
              <div
                className="h-[70%] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Text Section */}
              <div className="h-[30%] flex flex-col justify-center items-start p-4">
                <h2 className="text-lg font-bold">{member.name}</h2>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex gap-3 mt-2 text-gray-600">
                  <FaSquareXTwitter className="cursor-pointer hover:text-black" />
                  <FaInstagram className="cursor-pointer hover:text-pink-600" />
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination mt-5 flex justify-center space-x-3"></div>

      {/* Custom CSS for Pagination Bullets */}
      <style jsx>{`
        .custom-bullet {
          margin: 0 5px;
          width: 10px;
          height: 10px;
          background-color: gray;
          opacity: 0.5;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background-color: red;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default About3;
