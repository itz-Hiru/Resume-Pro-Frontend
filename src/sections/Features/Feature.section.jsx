import React from "react";
import { FiFeather, FiZap } from "react-icons/fi";
import { GiProcessor } from "react-icons/gi";

const Feature = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="flex flex-col items-center text-center px-4 mb-12">
        <h4 className="text-gray-400 text-sm font-semibold tracking-wide">
          HOW IT WORKS
        </h4>
        <h2 className="text-2xl sm:text-3xl text-black font-bold mt-2">
          Create your resume in minutes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 mb-6">
            <FiFeather className="text-blue-600 text-3xl" />
          </div>
          <h3 className="text-base font-semibold mb-3">Effortless</h3>
          <p className="text-gray-500 text-sm">
            Easy to use with a step-by-step wizard that guides you through choosing the best in each section.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 mb-6">
            <GiProcessor className="text-blue-600 text-3xl" />
          </div>
          <h3 className="text-base font-semibold mb-3">Cutting-edge</h3>
          <p className="text-gray-500 text-sm">
            Our state-of-the-art technology helps you complete a standout resume easily and quickly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 mb-6">
            <FiZap className="text-blue-600 text-3xl" />
          </div>
          <h3 className="text-base font-semibold mb-3">Powerful</h3>
          <p className="text-gray-500 text-sm">
            Your resume will showcase your greatest strengths, talents, and accomplishments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
