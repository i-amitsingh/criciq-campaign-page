import React from "react";
import PhoneCarousel from "./PhoneCarousel";

interface HeroContentProps {
  screens: string[];
  activeScreen: number;
}

const HeroContent: React.FC<HeroContentProps> = ({ screens, activeScreen }) => {
  return (
    <div className="relative z-10 w-full flex flex-col items-center text-center pt-20 pb-5 md:items-start md:text-left md:pt-0 md:max-w-[520px] lg:max-w-[620px] flex-shrink-0">
      <h1 className="font-anton uppercase text-white text-[42px] leading-[0.9] md:leading-[0.72] tracking-[-0.04em] md:text-[clamp(52px,9vw,160px)] font-[1000]">
        <span
          className="block opacity-0 animate-slideUp"
          style={{ animationDelay: "100ms" }}
        >
          Record.
        </span>
        <span
          className="block opacity-0 animate-slideUp text-[#1E9BE9] italic"
          style={{ animationDelay: "250ms", transform: "skewX(-8deg)" }}
        >
          Upload.
        </span>
        <span
          className="block opacity-0 animate-slideUp"
          style={{ animationDelay: "400ms" }}
        >
          Analyze<span className="text-[#ff0000] italic">.</span>
        </span>
      </h1>

      {/* Mobile phone carousel */}
      <PhoneCarousel screens={screens} activeScreen={activeScreen} isMobile />

      <div
        className="mt-4 md:mt-10 max-w-[600px] opacity-0 animate-slideUp px-2 md:px-0"
        style={{ animationDelay: "700ms" }}
      >
        <p className="text-[15px] md:text-lg leading-[1.6] text-white/70">
          We're building something bowlers have never had before - an AI that
          watches your action, analyses your mechanics, and helps you improve
          faster with real-time insights.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
