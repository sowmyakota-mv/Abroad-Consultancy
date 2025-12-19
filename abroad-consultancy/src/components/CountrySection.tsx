import React, { useEffect, useRef, useState, TouchEvent } from "react";

const CountriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed to 1024 to include tablet
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto scroll to current card
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[currentIndex] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, isMobile]);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isMobile) {
      // Clear any existing interval
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      // Set up new interval
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % countries.length);
      }, 3000);
      
      // Cleanup on unmount or when isMobile changes
      return () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
      };
    }
  }, [isMobile]);

  // Pause auto-scroll on user interaction
  const pauseAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
      
      // Resume auto-scroll after 5 seconds of inactivity
      setTimeout(() => {
        if (isMobile && !autoScrollIntervalRef.current) {
          autoScrollIntervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % countries.length);
          }, 3000);
        }
      }, 5000);
    }
  };

  const countries = [
    { name: "Study in UK", image: "/uk-img.jpg" },
    { name: "Study in USA", image: "/usa-img.jpg" },
    { name: "Study in Canada", image: "/canada-img.jpg" },
    { name: "Study in Australia", image: "/australia-img2.png" },
    { name: "Study in Germany", image: "/germany-img2.png" },
    { name: "Study in New Zealand", image: "/newzealand-img2.png" },
    { name: "Study in Europe", image: "/europe-img1.png" },
    { name: "Study in Ireland", image: "/ireland-img.png" }
  ];

  // Touch handlers for swipe
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoScroll();
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    }
    
    if (isRightSwipe) {
      prevCard();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextCard = () => {
    pauseAutoScroll();
    if (currentIndex < countries.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevCard = () => {
    pauseAutoScroll();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(countries.length - 1); // Loop to end
    }
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    pauseAutoScroll();
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Your Global Ambitions
          </h2>
          <p className="sm:text-med md:text-lg text-center text-gray-600 max-w-4xl mx-auto">
            Secure your place at a top-ranked international university. We provide the expert admissions and visa guidance you need to turn your study abroad goals into a global career.
          </p>
        </div>

        {/* Mobile & Tablet View: Carousel with arrows */}
        <div className="sm:hidden lg:hidden relative">
          {/* Navigation Arrows - Mobile & Tablet Only */}
          <button
            onClick={prevCard}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-100 z-20"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-100 z-20"
            aria-label="Next card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container - Mobile & Tablet */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] mx-2 snap-center"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="h-48 relative">
                    {/* Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover object-top"
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
            ))}
          </div>

          {/* Dots Indicator - Mobile & Tablet Only */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {countries.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* Desktop View: Original Grid (unchanged) - Only on lg screens and above */}
        <div className="hidden sm:grid lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index}>
              {/* 60% WIDTH WRAPPER */}
              <div className="w-[80%] sm:w-[90%] md:w-full mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="h-48 relative">
                    {/* Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover object-top"
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