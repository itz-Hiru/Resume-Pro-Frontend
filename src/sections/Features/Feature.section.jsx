import React from "react";
import { FiFeather, FiZap } from "react-icons/fi";
import { GiProcessor } from "react-icons/gi"

const Feature = () => {
  return (
    <div className="w-full h-[80vh] py-10">
      <div className="flex flex-col gap-2 text-center justify-center items-center mb-10">
        <h4 className="text-gray-400 text-[12px] font-semibold">
          HOW IT WORKS
        </h4>
        <h2 className="text-2xl text-black font-semibold">
          Create your resume in minutes
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center cursor-default">
        <div className="flex flex-col max-w-[300px] justify-center items-center rounded-2xl border border-gray-200/80 p-5 shadow-xl">
          <div className="flex items-center justify-center text-center mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20">
              <FiFeather className="text-blue-600 text-5xl" />
            </div>
          </div>
          <h3 className="text-[15px] font-semibold mb-5">Effortless</h3>
          <p className="text-gray-500 text-[15px] font-light text-center">
            Easy to use with a step-by-step wizard that guides you through
            choosing the best in each section.
          </p>
        </div>
        <div className="flex flex-col max-w-[300px] justify-center items-center rounded-2xl border border-gray-200/80 p-5 shadow-xl">
          <div className="flex items-center justify-center text-center mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20">
              <GiProcessor className="text-blue-600 text-5xl" />
            </div>
          </div>
          <h3 className="text-[15px] font-semibold mb-5">Cutting-edge</h3>
          <p className="text-gray-500 text-[15px] font-light text-center">
            One-state-of-the-art technology helps you complete a standout resume
            easily and quickly.
          </p>
        </div>
        <div className="flex flex-col max-w-[300px] justify-center items-center rounded-2xl border border-gray-200/80 p-5 shadow-xl">
          <div className="flex items-center justify-center text-center mb-8">
            <div className="w-8 h-8 rounded-full bg-blue-600/20">
              <FiZap className="text-blue-600 text-5xl" />
            </div>
          </div>
          <h3 className="text-[15px] font-semibold mb-5">Powerful</h3>
          <p className="text-gray-500 text-[15px] font-light text-center">
            Your resume will showcase your greatest strengths, talents, and
            accomplishments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
