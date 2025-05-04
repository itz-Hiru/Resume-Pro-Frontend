import React from "react";
import TEMPLATE_ONE_IMAGE from "../../assets/Template-01.png";
import TEMPLATE_TWO_IMAGE from "../../assets/Template-02.png";
import TEMPLATE_THREE_IMAGE from "../../assets/Template-03.png";

const Template = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="flex flex-col items-center text-center px-4 mb-12">
        <h4 className="text-gray-400 text-sm font-semibold tracking-wide">
          TEMPLATES
        </h4>
        <h2 className="text-2xl sm:text-3xl text-black font-bold mt-2">
          Choose your favourite template
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto justify-items-center">
        <img
          src={TEMPLATE_ONE_IMAGE}
          alt="Template 01"
          className="w-full max-w-[300px] border-1 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-primary hover:scale-105 transition-transform duration-300 cursor-grab"
        />
        <img
          src={TEMPLATE_TWO_IMAGE}
          alt="Template 02"
          className="w-full max-w-[300px] border-1 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-primary hover:scale-105 transition-transform duration-300 cursor-grab"
        />
        <img
          src={TEMPLATE_THREE_IMAGE}
          alt="Template 03"
          className="w-full max-w-[300px] border-1 border-gray-200/50 shadow-md shadow-blue-100 rounded-lg hover:border-primary hover:scale-105 transition-transform duration-300 cursor-grab"
        />
      </div>
    </section>
  );
};

export default Template;
