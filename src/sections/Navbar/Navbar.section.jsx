import React, { useEffect, useRef, useState } from "react";
import { SiOpencv } from "react-icons/si";
import ProfileInfoCard from "../../components/Cards/ProfileInfoCard.component";

const Navbar = ({ user, onClick }) => {
  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "Templates", path: "#template" },
    { name: "Features", path: "#features" },
    { name: "About", path: "#about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
            }`}
          >
            <SiOpencv
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-[#4070F4]"
              }`}
            />
          </div>
          <p
            className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Resume Pro
          </p>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <ProfileInfoCard isScrolled={isScrolled} />
          ) : (
            <button
              className="bg-black text-xs sm:text-sm font-semibold text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
              onClick={onClick}
            >
              Login / SignUp
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {user ? (
            <div className="flex flex-col items-center gap-3 mt-4 mb-6">
              <img
                src={user.user.profileImageUrl}
                alt="Profile"
                className="w-20 h-20 rounded-full bg-gray-300"
              />
              <p className="text-gray-800 font-semibold text-base">
                {user.user.name}
              </p>
            </div>
          ) : (
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 text-sm rounded-md transition cursor-pointer"
              onClick={onClick}
            >
              Login / SignUp
            </button>
          )}

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          {user && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 text-sm rounded-md transition cursor-pointer"
              onClick={() => {
                clearUser();
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
