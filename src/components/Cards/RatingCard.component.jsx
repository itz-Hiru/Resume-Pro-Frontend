import React from "react";
import USER_IMAGE from "../../assets/rating-user.png";
import { FaStar } from "react-icons/fa6";

const RatingCard = () => {
  return (
    <div className="w-[180px] h-[240px] flex flex-col gap-6 bg-white p-5 rounded-xl shadow-2xl shadow-black/40 border border-gray-200/50 z-40">
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div>
          <img src={USER_IMAGE} alt="" className="w-full rounded-full" />
        </div>
      </div>
      <div className="mt-3">
        <p className="font-semibold text-[14px]">"ResumePro has got everything I need."</p>
        <div className="flex flex-row gap-1 items-center mt-5">
          <FaStar className="text-amber-400 text-[14px]" />
          <FaStar className="text-amber-400 text-[14px]" />
          <FaStar className="text-amber-400 text-[14px]" />
          <FaStar className="text-amber-400 text-[14px]" />
          <FaStar className="text-amber-400 text-[14px]" />
          <p className="ml-2 text-[14px] font-medium">5.0</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
