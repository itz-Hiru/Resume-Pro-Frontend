import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../assets/hero-image.png";
import Feature from "../sections/Features/Feature.section";
import Login from "./Authentication/Login.page";
import SignUp from "./Authentication/SignUp.page";
import Modal from "../components/Modals/Modal.component";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard.component";
import RatingCard from "../components/Cards/RatingCard.component";
import EmotionalCard from "../components/Cards/EmotionalCard.component";
import { FaStar } from "react-icons/fa6";
import Template from "../sections/Templates/Template.section";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold pointer-events-none">
            Resume Pro
          </div>
          {user ? (
            <ProfileInfoCard />
          ) : (
            <button
              className="bg-red-100 text-xs sm:text-sm font-semibold text-black px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / SignUp
            </button>
          )}
        </div>
      </header>

      <div className="pt-[80px] min-h-screen w-full bg-gradient-to-b from-[#EBECF1] to-[#FFFFFF]">
        <div className="container mx-auto px-4 py-6">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between relative">
            {/* Left Section */}
            <div className="w-full md:w-1/2 md:h-auto flex flex-col justify-center items-start md:items-start px-4 mt-14 md:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold mb-6 leading-tight">
                BUILD YOUR RESUME <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#4070F4_0%,_#2BD67B_100%)] bg-[length:200%_200%] animate-text-shine">
                  THE SMART WAY.
                </span>
              </h1>
              <p className="max-w-md text-sm sm:text-base text-[#262B37] mb-6 font-light">
                Easily create an{" "}
                <span className="font-bold">out of this world</span> resume with
                expert content that can be customized just for you!
              </p>
              <button
                className="bg-[#4070F4] text-sm font-medium text-white px-8 py-3 rounded-lg border-2 border-transparent hover:border-blue-100 transition-colors cursor-pointer"
                onClick={handleCTA}
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
            <div className="w-full md:w-1/2 relative flex justify-center items-center mt-4 md:mt-0 cursor-default">
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="mt-10">
          <Template />
        </div>
      </div>

      <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
        Made with <span className="text-red-500">❤</span> Enjoy your Day
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
