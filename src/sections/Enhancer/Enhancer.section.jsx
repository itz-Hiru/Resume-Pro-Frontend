import React from "react";
import ENHANCER_IMAGE from "../../assets/enhancer.png";
import ENHANCER_IMAGE_MOBILE  from "../../assets/enhancer-mobile.png"

const Enhancer = ({ onClick }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between relative w-full max-w-7xl mx-auto px-4 py-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
        <h2 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl mb-6">
          Say goodbye to writer's block
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-[15px] mb-8">
          Finish your resume faster with{" "}
          <span className="font-semibold">
            thousands of pre-written examples
          </span>{" "}
          for hundreds of jobs you can insert directly into your resume.
        </p>
        <button
          type="button"
          className="bg-[#2BD67B] px-6 py-3 text-sm sm:text-base rounded-lg text-white hover:bg-[#4070F4] transition-colors duration-500 cursor-pointer"
          onClick={onClick}
        >
          Get started now
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        {/* Image for desktop */}
        <img
          src={ENHANCER_IMAGE}
          alt="Enhancer desktop"
          className="hidden md:block w-full max-w-[400px] h-auto object-contain"
        />
        {/* Image for mobile */}
        <img
          src={ENHANCER_IMAGE_MOBILE}
          alt="Enhancer mobile"
          className="block md:hidden w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Enhancer;
