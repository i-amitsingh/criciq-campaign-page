import React from "react";

interface FormSelectProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  optgroups?: { label: string; items: string[] }[];
  required?: boolean;
  fullWidth?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  optgroups,
  required = false,
  fullWidth = false,
}) => {
  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
        {label}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[58px] rounded-xl border border-white/10 bg-[#0b1016] px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
      >
        <option value="">{placeholder}</option>
        {optgroups
          ? optgroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            ))
          : options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
      </select>
    </div>
  );
};

export default FormSelect;
