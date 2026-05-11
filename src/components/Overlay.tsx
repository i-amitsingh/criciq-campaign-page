import React from "react";

interface OverlayProps {
  isHero?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isHero = true }) => {
  if (isHero) {
    return (
      <div className="overlay-hero">
        <div className="overlay-hero-gradient" />
        <div className="overlay-hero-pattern" />
        <div className="absolute top-0 right-[10%] h-full w-[1px] bg-[#1E9BE9]/20" />
        <div className="tactical-line right-[14%]" />
      </div>
    );
  }

  return (
    <div className="overlay-base">
      <div className="overlay-gradient" />
      <div className="overlay-pattern" />
      <div className="overlay-blur" />
    </div>
  );
};

export default Overlay;
