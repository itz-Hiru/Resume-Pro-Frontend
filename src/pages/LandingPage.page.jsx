import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../assets/hero-image.png";
import Feature from "../sections/Features/Feature.section";
import Login from "./Authentication/Login.page";
import SignUp from "./Authentication/SignUp.page";
import Modal from "../components/Modals/Modal.component";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard.component";

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
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold pointer-events-none">
            Resume Pro
          </div>
          {user ? (
            <ProfileInfoCard />
          ) : (
            <button
              className="bg-red-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / SignUp
            </button>
          )}
        </header>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Create Your{" "}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF0000_0%,_#FF9900_100%)] bg-[length:200%_200%] animate-text-shine">
                Dream Resume
              </span>{" "}
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
            <img
              src={HERO_IMAGE}
              alt="hero image"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Feature Section */}
        <div className="">
          <Feature />
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
