import React from "react";

interface StickyBottomCTAProps {
  isVisible: boolean;
}

const StickyBottomCTA: React.FC<StickyBottomCTAProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-5 pt-3 bg-gradient-to-t from-black via-black/90 to-transparent">
      <div className="max-w-[680px] mx-auto">
        <button
          type="submit"
          form="beta-form"
          className="w-full h-[64px] rounded-xl bg-[#1E9BE9] text-white font-bold uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#1E9BE9]/30 hover:shadow-white/30"
        >
          Get Beta Access{" "}
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>{" "}
          it's free
        </button>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
