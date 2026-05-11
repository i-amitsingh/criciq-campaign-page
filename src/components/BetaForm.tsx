import React from "react";
import FormSuccess from "./FormSuccess";

interface CountryCode {
  code: string;
  country: string;
}

interface BetaFormProps {
  name: string;
  age: string;
  state: string;
  countryCode: string;
  phone: string;
  submitted: boolean;
  onNameChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  indianStatesAndUTs: string[];
  countryCodes: CountryCode[];
}

const BetaForm: React.FC<BetaFormProps> = ({
  name,
  age,
  state,
  countryCode,
  phone,
  submitted,
  onNameChange,
  onAgeChange,
  onStateChange,
  onCountryCodeChange,
  onPhoneChange,
  onSubmit,
  indianStatesAndUTs,
  countryCodes,
}) => {
  return (
    <form
      id="beta-form"
      onSubmit={onSubmit}
      className="relative rounded-[32px] border border-white/10 bg-[#0b1016]/40 backdrop-blur-2xl p-6 md:p-10 shadow-2xl"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E9BE9]/50 to-transparent" />

      {submitted ? (
        /* ── Form Submitted ── */
        <FormSuccess isVisible={submitted} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Player Name */}
          <div className="md:col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
              Player Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className="w-full h-[58px] rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
            />
          </div>

          {/* Age Group */}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
              Age Group
            </label>
            <select
              required
              value={age}
              onChange={(e) => onAgeChange(e.target.value)}
              className="w-full h-[58px] rounded-xl border border-white/10 bg-[#0b1016] px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
            >
              <option value="">Age</option>
              <option>Under 10</option>
              <option>10–20</option>
              <option>21–30</option>
              <option>31–40</option>
              <option>40+</option>
            </select>
          </div>

          {/* Current State */}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
              Current State / UT
            </label>
            <select
              required
              value={state}
              onChange={(e) => onStateChange(e.target.value)}
              className="w-full h-[58px] rounded-xl border border-white/10 bg-[#0b1016] px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
            >
              <option value="">Select State / UT</option>
              <optgroup label="States">
                {indianStatesAndUTs.slice(0, 28).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Union Territories">
                {indianStatesAndUTs.slice(28).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Phone Number with Country Code */}
          <div className="md:col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-widest text-[#1E9BE9] mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => onCountryCodeChange(e.target.value)}
                className="h-[58px] rounded-xl border border-white/10 bg-[#0b1016] px-3 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20 w-[110px] flex-shrink-0"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.country} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="98765 43210"
                required
                value={phone}
                onChange={(e) =>
                  onPhoneChange(e.target.value.replace(/\D/g, ""))
                }
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                className="flex-1 h-[58px] rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-[#1E9BE9] transition-all duration-300 hover:border-white/20"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default BetaForm;
