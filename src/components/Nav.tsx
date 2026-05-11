import React from "react";
import logo from "../assets/Criciq_Logo.png";

const Nav: React.FC = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById("s3");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-screen flex justify-between items-center z-[100] mix-blend-difference px-[5vw] py-3 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-start group cursor-pointer">
        <img
          src={logo}
          alt="CricIQ"
          className="h-7 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-widest text-white/80 mt-1 group-hover:text-white transition-colors duration-300">
          Your ai cricket buddy
        </span>
      </div>

      <button
        onClick={handleScrollToForm}
        className="group cursor-pointer sm:block relative border px-3 sm:px-6 py-1 sm:py-3 sm:font-semibold rounded-full transition-colors duration-300 hover:bg-[#1E9BE9]/30"
      >
        <p className="text-[11px] md:text-sm font-medium uppercase tracking-tighter text-white">
          Exclusive Beta Access
        </p>
      </button>
    </nav>
  );
};

export default Nav;
