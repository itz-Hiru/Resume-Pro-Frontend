import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modals/Modal.component";
import { UserContext } from "../context/userContext";
import Enhancer from "../sections/Enhancer/Enhancer.section";
import Feature from "../sections/Features/Feature.section";
import Footer from "../sections/Footer/Footer.section";
import Hero from "../sections/Hero/Hero.section";
import Navbar from "../sections/navbar/Navbar.section";
import Template from "../sections/Templates/Template.section";
import Login from "./Authentication/Login.page";
import SignUp from "./Authentication/SignUp.page";

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
      <Navbar user={user} onClick={() => setOpenAuthModal(true)} />

      {/* Hero Section */}
      <div className="pt-[80px] min-h-screen w-full bg-gradient-to-b from-[#EBECF1] to-[#FFFFFF]">
        <div className="container mx-auto px-4 py-6">
          <Hero onClick={handleCTA} />
        </div>
      </div>

      {/* Templates Section */}
      <section className="w-full px-4" id="template">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Template />
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full px-4 py-6" id="features">
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
      <section className="w-full">
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
