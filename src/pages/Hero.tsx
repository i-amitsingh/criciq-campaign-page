import React, { useEffect, useState } from "react";
import onboarding1 from "../assets/speed.png";
import onboarding2 from "../assets/pitchmap.png";
import onboarding3 from "../assets/trajectory.png";
import Overlay from "../components/Overlay";
import HeroContent from "../components/HeroContent";
import PhoneCarousel from "../components/PhoneCarousel";
import FormHeading from "../components/FormHeading";
import BetaForm from "../components/BetaForm";
import StickyBottomCTA from "../components/StickyBottomCTA";

const screens = [onboarding1, onboarding2, onboarding3];

const indianStatesAndUTs = [
  // States
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const countryCodes = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "AE" },
  { code: "+65", country: "SG" },
  { code: "+60", country: "MY" },
  { code: "+64", country: "NZ" },
  { code: "+27", country: "ZA" },
  { code: "+92", country: "PK" },
  { code: "+94", country: "LK" },
  { code: "+880", country: "BD" },
  { code: "+977", country: "NP" },
];

function detectPlatform(): "ios" | "android" | "unknown" {
  const ua =
    navigator.userAgent ||
    navigator.vendor ||
    (window as unknown as { opera: string }).opera ||
    "";
  if (
    /iPad|iPhone|iPod/.test(ua) &&
    !(window as unknown as { MSStream: unknown }).MSStream
  )
    return "ios";
  if (/android/i.test(ua)) return "android";
  return "unknown";
}

// Store URLs for Redirection
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sportzengage.criciq";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/criciq-your-ai-cricket-buddy/id6759147049";

const HeroSlide: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Country code ko Google Form ke expected format ("IN +91", "SG +65") me convert kar rahe hain
    const selectedCountryObj = countryCodes.find((c) => c.code === countryCode);
    const formattedCountryCode = selectedCountryObj
      ? `${selectedCountryObj.country} ${selectedCountryObj.code}`
      : "IN +91";

    console.log("Submitting Verified Data:", {
      name,
      age,
      state,
      formattedCountryCode,
      phone,
    });

    const formData = new FormData();
    formData.append("entry.802289510", name);
    formData.append("entry.397412993", age); // BetaForm se valid hyphen wala age group milega
    formData.append("entry.241358872", state);
    formData.append("entry.865962799", formattedCountryCode);
    formData.append("entry.251313540", phone);

    try {
      // Aapka actual google form submission URL
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe3iqKwmxmFVDPlx13V0xHS_LkfKYziQ6j5V5rJWTC6QUYeOQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      // Form successfully sent to Google sheets
      setSubmitted(true);

      // ── Dynamic Store Redirection Logic ──
      const platform = detectPlatform();
      let targetUrl = PLAY_STORE_URL; // Default fallback for Android & Desktop

      if (platform === "ios") {
        targetUrl = APP_STORE_URL;
      }

      console.log(`Redirecting to ${platform} store:`, targetUrl);

      // 1.5 seconds ka buffer delay taaki user green/success animation dekh sake
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1500);

    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <div className="pb-24">
      <Overlay isHero />

      {/* ── Hero Section (1st Scroll)── */}
      <section
        className="hero-gradient min-h-[60vh] md:min-h-screen w-full relative overflow-hidden snap-start bg-black pl-[5vw] pr-[5vw] md:pr-[12vw] flex flex-col justify-start items-center md:flex-row md:justify-between md:items-center"
        id="s1"
      >
        <HeroContent screens={screens} activeScreen={activeScreen} />

        {/* Desktop phone carousel */}
        <PhoneCarousel screens={screens} activeScreen={activeScreen} />
      </section>

      {/* ── Form Section (2nd Scroll) ── */}
      <section
        className="relative w-full overflow-hidden px-4 pb-3 flex items-center justify-center snap-start"
        id="s3"
      >
        <div className="overlay-watermark">
          <span className="watermark-text">IQ</span>
        </div>

        <div className="relative z-10 w-full max-w-[680px]">
          <FormHeading />
          <BetaForm
            name={name}
            age={age}
            state={state}
            countryCode={countryCode}
            phone={phone}
            submitted={submitted}
            onNameChange={setName}
            onAgeChange={setAge}
            onStateChange={setState}
            onCountryCodeChange={setCountryCode}
            onPhoneChange={setPhone}
            onSubmit={handleSubmit}
            indianStatesAndUTs={indianStatesAndUTs}
            countryCodes={countryCodes}
          />
        </div>
      </section>

      {/* ── Sticky Bottom CTA ── */}
      <StickyBottomCTA isVisible={!submitted} />
    </div>
  );
};

export default HeroSlide;