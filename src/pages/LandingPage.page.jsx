import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../assets/hero-image.png";
import Feature from "../sections/Features/Feature.section";
import Login from "./Authentication/Login.page";
import SignUp from "./Authentication/SignUp.page";
import Modal from "../components/Modals/Modal.component";
import { UserContext } from "../context/userContext";
import RatingCard from "../components/Cards/RatingCard.component";
import EmotionalCard from "../components/Cards/EmotionalCard.component";
import { FaStar } from "react-icons/fa6";
import Template from "../sections/Templates/Template.section";
import Enhancer from "../sections/Enhancer/Enhancer.section";
import Navbar from "../sections/navbar/Navbar.section";
import Footer from "../sections/Footer/Footer.section";
import Hero from "../sections/Hero/Hero.section";

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
      <Navbar user={user} />

      {/* Hero Section */}
      <div className="pt-[80px] min-h-screen w-full bg-gradient-to-b from-[#EBECF1] to-[#FFFFFF]">
        <div className="container mx-auto px-4 py-6">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between relative" id="hero">
            <Hero onClick={handleCTA} />
          </section>
        </div>
      </div>

      {/* Templates Section */}
      <section className="w-full bg-white px-4" id="template">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Template />
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-white px-4 py-6" id="features">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Feature />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200/50" id="about">
        <div className="container mx-auto px-4 py-6">
          <div className="mt-10">
            <Enhancer onClick={handleCTA} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full bg-white">
        <Footer />
      </section>

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
