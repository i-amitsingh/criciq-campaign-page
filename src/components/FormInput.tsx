import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  fullWidth?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  fullWidth = false,
}) => {
  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[58px] rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
      />
    </div>
  );
};

export default FormInput;
