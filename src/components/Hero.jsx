import React from "react";
import InputTask from "./InputTask";
import Navbar from "./Navbar";
import SignInModal from "./SignInModal";


const Hero = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="w-80 text-gray-600 tracking-[.5rem] font-extrabold text-2xl md:underline decoration-4 decoration-purple-300 md:text-3xl font-serif md:w-screen text-center md:font-extrabold ">
            List your daily task on
            <span className="tracking-[0.1rem] text-purple-800">NOTESify</span>
          </h2>
        <InputTask />
        </div>
      </div>
    </>
  );
};

export default Hero;
