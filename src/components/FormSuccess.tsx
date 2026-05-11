import React from "react";

interface FormSuccessProps {
  isVisible: boolean;
}

const FormSuccess: React.FC<FormSuccessProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
      <div className="text-5xl">🎉</div>
      <h3 className="font-anton text-white text-2xl uppercase tracking-wide">
        You're in!
      </h3>
      <p className="text-white/60 text-sm">
        Redirecting you to download the app…
      </p>
    </div>
  );
};

export default FormSuccess;
