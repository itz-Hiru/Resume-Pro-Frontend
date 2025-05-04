import React from "react";
import { SiOpencv } from "react-icons/si";
import { Link } from "react-router-dom";
import ProfileInfoCard from "../Cards/ProfileInfoCard.component";

const Navbar = () => {
  return (
    <div className="bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard" className="flex flex-row gap-3 items-center">
          <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 bg-black">
            <SiOpencv className="text-xl transition-colors duration-300 text-white" />
          </div>
          <p className="text-xl font-semibold transition-colors duration-300 text-black">
            Resume Pro
          </p>
        </Link>
        <ProfileInfoCard isScrolled={true} />
      </div>
    </div>
  );
};

export default Navbar;
