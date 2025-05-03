import React from "react";
import TEMPLATE_ONE_IMAGE from "../../assets/Template-01.png";
import TEMPLATE_TWO_IMAGE from "../../assets/Template-02.png";
import TEMPLATE_THREE_IMAGE from "../../assets/Template-03.png";

const Template = () => {
  return (
    <div className="w-full h-[80vh] py-10">
      <div className="flex flex-col gap-2 text-center justify-center items-center mb-10">
        <h4 className="text-gray-400 text-[12px] font-semibold">TEMPLATES</h4>
        <h2 className="text-2xl text-black font-semibold">Choose your favourite template</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <img src={TEMPLATE_ONE_IMAGE} alt="template image 01" className="w-[300px] border-2 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-[#2BD67B] hover:translate-1 transition-transform cursor-grab" />
        <img src={TEMPLATE_TWO_IMAGE} alt="template image 02" className="w-[300px] border-2 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-[#2BD67B] hover:translate-1 transition-transform cursor-grab" />
        <img src={TEMPLATE_THREE_IMAGE} alt="template image 03" className="w-[300px] border-2 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-[#2BD67B] hover:translate-1 transition-transform cursor-grab" />
      </div>
    </div>
  );
};

export default Template;
