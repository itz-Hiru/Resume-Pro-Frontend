import React from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../../assets/hero-image.png";

const Hero = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard")
    }
  }
  return (
    <>
      <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Create Your{" "}
          <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF0000_0%,_#FF9900_100%)] bg-[length:200%_200%] animate-text-shine">
            Dream Resume
          </span> {" "}
          in No Time
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-medium">
          Design a professional, eye-catching resume effortlessly powered by
          smart tools that do the heavy lifting for you.
        </p>
        <button
          className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          onClick={handleCTA}
        >
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={HERO_IMAGE} alt="hero image" className="w-full rounded-lg" />
      </div>
    </>
  );
};

export default Hero;
