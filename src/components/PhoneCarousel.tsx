import React from "react";

interface PhoneCarouselProps {
  screens: string[];
  activeScreen: number;
  isMobile?: boolean;
}

const PhoneCarousel: React.FC<PhoneCarouselProps> = ({
  screens,
  activeScreen,
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <div className="md:hidden relative pointer-events-none select-none z-[20] flex items-center justify-center w-full h-[28vh] mt-4">
        <div className="absolute w-[200px] h-[200px] bg-[#1E9BE9]/20 blur-[100px] rounded-full" />
        <div className="relative w-full h-full flex items-center justify-center">
          {screens.map((screen, index) => {
            const pos =
              (index - activeScreen + screens.length) % screens.length;
            const isCenter = pos === 0;
            const isRight = pos === 1;
            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${isCenter ? "0px" : isRight ? "90px" : "-90px"}) scale(${isCenter ? 1 : 0.75})`,
                  opacity: isCenter ? 1 : 0.4,
                  zIndex: isCenter ? 30 : 10,
                }}
              >
                <img
                  src={screen}
                  alt="app"
                  className="h-[25vh] w-auto drop-shadow-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex relative z-10 pointer-events-none select-none items-center justify-center flex-shrink-0 h-screen w-[40%]">
      <div className="absolute w-[300px] h-[300px] bg-[#1E9BE9]/20 blur-[120px] rounded-full" />
      {screens.map((screen, index) => {
        const pos = (index - activeScreen + screens.length) % screens.length;
        const isCenter = pos === 0;
        return (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(${isCenter ? "0px" : pos === 1 ? "140px" : "-140px"}) scale(${isCenter ? 1 : 0.8})`,
              opacity: isCenter ? 1 : 0.2,
              zIndex: isCenter ? 30 : 10,
              filter: isCenter ? "none" : "blur(2px)",
            }}
          >
            <img
              src={screen}
              alt="screen"
              className="h-[75vh] lg:h-[72vh] w-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PhoneCarousel;
