import React from "react";

const FormHeading: React.FC = () => {
  return (
    <div className="text-center mb-6">
      <h2 className="font-anton uppercase text-[32px] sm:text-[clamp(50px,12vw,110px)] leading-[0.85] text-white">
        Join us{" "}
        <span
          className="text-[#1E9BE9] italic inline-block"
          style={{ transform: "skewX(-8deg)" }}
        >
          now<span className="text-[#ff0000]">.</span>
        </span>
      </h2>
    </div>
  );
};

export default FormHeading;
