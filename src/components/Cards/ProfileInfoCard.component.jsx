import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = ({ isScrolled }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center">
        <img
          src={user.user.profileImageUrl}
          alt=""
          className={`w-11 h-11 bg-gray-300 rounded-full mr-3 ${
            isScrolled ? "border border-gray-400" : ""
          }`}
        />
        <div>
          <div
            className={`text-[15px] font-bold leading-3 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {user.user.name || ""}
          </div>
          <button
            className={`text-sm font-medium cursor-pointer hover:underline ${
              isScrolled ? "text-red-600" : "text-red-300"
            }`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
