import React from "react";
import { FaRegStopCircle } from "react-icons/fa";

const EmotionalCard = () => {
  return (
    <div className="w-[350px] h-[100px] flex flex-col gap-6 bg-white p-5 rounded-xl shadow-2xl shadow-black/40 border border-gray-200/50 z-40">
      <div className="flex flex-row justify-between items-center">
        {/* Left: Avatar + Info */}
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <p className="text-2xl font-semibold text-white">H</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[13px] font-medium">UI/UX Designer</p>
            <p className="text-[12px] text-gray-600">Thilakawardana Textiles</p>
            <p className="text-[11px] mt-2 text-gray-400">Gampaha. Sri Lanka</p>
          </div>
        </div>

        {/* Right: Icon */}
        <div className="text-gray-400 text-xl">
          <FaRegStopCircle />
        </div>
      </div>
    </div>
  );
};

export default EmotionalCard;
