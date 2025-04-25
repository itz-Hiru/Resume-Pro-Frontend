import React from "react";

const Feature = () => {
  return (
    <section className="mt-5">
      <h2 className="text-2xl font-bold text-center mb-12">
        Features That Make You Shine
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-grab">
          <h3 className="text-lg font-semibold mb-3">
            Seamless Editing Experience
          </h3>
          <p className="text-gray-600">
            Effortlessly tweak every detail of your resume with real-time
            previews and smart formatting that adapts to your style.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-grab">
          <h3 className="text-lg font-semibold mb-3">
            Stunning, Professional Templates
          </h3>
          <p className="text-gray-600">
            Pick from a curated collection of sleek, modern designs that
            highlight your strengths and are fully customizable.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-grab">
          <h3 className="text-lg font-semibold mb-3">
            Instant, High-Quality PDF Export
          </h3>
          <p className="text-gray-600">
            Create a polished, print-ready resume in seconds with a single
            click—no hassle, just perfection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
