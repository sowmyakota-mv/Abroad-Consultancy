import React, { useEffect, useRef, useState } from "react";

const CountriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }   // ✅ FIX: Animation will trigger on mobile also
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const countries = [
    { name: "Study in UK", image: "/uk-img.jpg" },
    { name: "Study in USA", image: "/usa-img.jpg" },
    { name: "Study in Canada", image: "/canada-img.jpg" },
    { name: "Study in Australia", image: "/australia-img.png" },
    { name: "Study in Germany", image: "/germany-img.png" },
    { name: "Study in New Zealand", image: "/newzealand-img.png" }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Global Education Pathways
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover world-class education opportunities in top study
            destinations that offer excellent academic programs, vibrant campus
            life, and promising career prospects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div key={index}>

              {/* 60% WIDTH WRAPPER */}
              <div className="w-[60%] md:w-full mx-auto">   {/* ✅ FIX: Image cards now use 60% width */}
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="h-48 relative">

                    {/* Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Overlay Animation */}
                    <div
                      className={`absolute inset-0 bg-black/50 transition-all duration-700 rounded-xl ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    ></div>

                    {/* Title Animation */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-6 scale-75"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm">
            Over 10,000+ students successfully placed in these destinations
          </p>
        </div>

      </div>
    </section>
  );
};

export default CountriesSection;
