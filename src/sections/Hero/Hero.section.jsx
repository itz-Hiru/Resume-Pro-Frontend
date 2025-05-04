import React from "react";
import { FaStar } from "react-icons/fa6";
import HERO_IMAGE from "../../assets/hero-image.png";
import EmotionalCard from "../../components/Cards/EmotionalCard.component";
import RatingCard from "../../components/Cards/RatingCard.component";

const Hero = ({ onClick }) => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between relative"
      id="hero"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 md:h-auto flex flex-col justify-center items-start md:items-start px-4 mt-14 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold mb-6 leading-tight">
          BUILD YOUR RESUME <br />
          <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#4070F4_0%,_#2BD67B_100%)] bg-[length:200%_200%] animate-text-shine">
            THE SMART WAY.
          </span>
        </h1>
        <p className="max-w-md text-sm sm:text-base text-[#262B37] mb-6 font-light">
          Easily create an <span className="font-bold">out of this world</span>{" "}
          resume with expert content that can be customized just for you!
        </p>
        <button
          className="bg-[#4070F4] text-sm font-medium text-white px-8 py-3 rounded-lg border-2 border-transparent hover:border-blue-100 transition-colors cursor-pointer"
          onClick={onClick}
        >
          Get Started
        </button>
        <div className="flex flex-row mt-10 items-center justify-center">
          <p className="text-[12px] text-gray-500">Excellent</p>
          <div className="w-[12px] h-[12px] bg-[#2BD67B] flex items-center justify-center ml-2">
            <FaStar className="text-white text-[8px]" />
          </div>
          <div className="w-[12px] h-[12px] bg-[#2BD67B] flex items-center justify-center ml-0.5">
            <FaStar className="text-white text-[8px]" />
          </div>
          <div className="w-[12px] h-[12px] bg-[#2BD67B] flex items-center justify-center ml-0.5">
            <FaStar className="text-white text-[8px]" />
          </div>
          <div className="w-[12px] h-[12px] bg-[#2BD67B] flex items-center justify-center ml-0.5">
            <FaStar className="text-white text-[8px]" />
          </div>
          <div className="w-[12px] h-[12px] bg-linear-to-r from-[#2BD67B] to-gray-100 flex items-center justify-center ml-0.5">
            <FaStar className="text-white text-[8px]" />
          </div>
          <div className="flex flex-row ml-5 gap-1 items-center justify-center">
            <FaStar className="text-[12px] text-[#2BD67B]" />
            <p className="text-[12px] font-medium text-gray-600">Trustpilot</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center mt-4 md:mt-4 cursor-default">
        <img
          src={HERO_IMAGE}
          alt="hero image"
          className="w-full max-w-[400px] h-auto rounded-xl"
        />
        <div className="absolute top-8 -right-1 hidden sm:block">
          <EmotionalCard />
        </div>
        <div className="absolute bottom-4 left-20 transform -translate-x-1/2 hidden sm:block">
          <RatingCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
