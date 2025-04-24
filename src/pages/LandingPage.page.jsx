import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../sections/Hero/Hero.section";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  return (
    <div className="w-full min-h-full bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold pointer-events-none">Resume Pro</div>
          <button className="bg-red-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer" onClick={() => setOpenAuthModal(true)}>
            Login / SignUp
          </button>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
