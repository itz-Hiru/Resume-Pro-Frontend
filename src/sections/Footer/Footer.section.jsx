import React from "react";
import { SiOpencv } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 rounded-r-lg rounded-l-lg">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 bg-gray-800">
              <SiOpencv className="text-xl transition-colors duration-300 text-white" />
            </div>
            <p className="text-xl font-semibold transition-colors duration-300 text-gray-800">
              Resume Pro
            </p>
          </div>
          <p className="mt-6 text-sm">
            Build your professional resume online with Resume Pro. Easy-to-use
            CV builder with expert templates to boost your job search. Start now
            – it’s fast, simple, and free!
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#hero"
                  className="group inline-flex flex-col items-start gap-0.5 w-fit"
                >
                  Home
                  <div className="bg-gray-700 h-[1px] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#template"
                  className="group inline-flex flex-col items-start gap-0.5 w-fit"
                >
                  Templates
                  <div className="bg-gray-700 h-[1px] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="group inline-flex flex-col items-start gap-0.5 w-fit"
                >
                  Features
                  <div className="bg-gray-700 h-[1px] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex flex-col items-start gap-0.5 w-fit"
                >
                  Privacy policy
                  <div className="bg-gray-700 h-[1px] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+94(76) 223 1207</p>
              <p>hirumithakuladewanew@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © Resume Pro. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
