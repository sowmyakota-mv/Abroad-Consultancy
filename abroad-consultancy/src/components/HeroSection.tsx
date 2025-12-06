import React from "react";
import StatsSection from "./StatsSection";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#EBF1FA] text-black py-24 md:py-2 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-2 items-center">
        
        {/* LEFT CONTENT - 70% (7 columns out of 10) */}
        <div className="md:col-span-7 mt-28">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Future <span className="">With Confidence</span>
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Your dream career starts with the right guidance. Let us support you 
            with trusted consultation, expert mentorship, and proven results.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            
            {/* Filled Button */}
            <button className="px-6 py-3 bg-[#FF6603] text-white font-semibold rounded-3xl shadow hover:bg-[#FB8234] transition">
              Get Started
            </button>

            {/* Border Button */}
            <button className="px-6 py-3 border border-[#FF6603] text-[#FF6603] font-semibold rounded-3xl hover:bg-[#FB8234] hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE - 30% (3 columns out of 10) */}
        <div className="md:col-span-3 flex justify-center mt-12 md:mt-30 relative">
          <div className="relative">
            <img
              src="/right-hero.png"
              alt="Students"
              className="w-full h-[300px] max-w-sm relative z-10"
            />
          </div>
        </div>
        
      </div>

      <div className="mt-4">
        <StatsSection/>
      </div>
    </section>
  );
};

export default HeroSection;
