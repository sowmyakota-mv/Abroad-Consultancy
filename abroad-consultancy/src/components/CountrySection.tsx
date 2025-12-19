import React, { useEffect, useRef, useState } from "react";

const CountriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAutoScroll();
        } else {
          setIsVisible(false);
          stopAutoScroll();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      stopAutoScroll();
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

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

  const scrollToIndex = (index: number, instant = false) => {
    if (!scrollContainerRef.current || !cardRefs.current[index] || isAnimating) return;
    
    setIsAnimating(true);
    
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    
    if (!card) {
      setIsAnimating(false);
      return;
    }

    const containerWidth = container.clientWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardCenter = cardLeft + (cardWidth / 2);
    const scrollTo = cardCenter - (containerWidth / 2);
    
    container.scrollTo({
      left: scrollTo,
      behavior: instant ? "auto" : "smooth"
    });
    
    setActiveIndex(index);
    
    // Update button visibility and animation state after animation completes
    setTimeout(() => {
      updateButtonVisibility();
      setIsAnimating(false);
    }, instant ? 0 : 500);
  };

  const scroll = (direction: "left" | "right") => {
    if (isAnimating) return;
    
    stopAutoScroll(); // Stop auto-scroll when user interacts manually
    
    let newIndex = activeIndex;
    if (direction === "left") {
      newIndex = activeIndex > 0 ? activeIndex - 1 : countries.length - 1;
    } else if (direction === "right") {
      newIndex = activeIndex < countries.length - 1 ? activeIndex + 1 : 0;
    }
    
    scrollToIndex(newIndex);
    
    // Restart auto-scroll after manual interaction
    startAutoScrollWithDelay();
  };

  const updateButtonVisibility = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtStart = scrollLeft <= 10;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
    
    setShowLeftButton(!isAtStart);
    setShowRightButton(!isAtEnd);
  };

  const startAutoScroll = () => {
    stopAutoScroll(); // Clear any existing interval
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (isAnimating) return;
      
      const nextIndex = (activeIndex + 1) % countries.length;
      scrollToIndex(nextIndex);
    }, 3000); // Auto-scroll every 3 seconds
  };

  const startAutoScrollWithDelay = () => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    
    autoScrollTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const handleScroll = () => {
    if (isAnimating) return;
    
    updateButtonVisibility();
    
    // Find which card is currently centered
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handleTouchStart = () => {
    stopAutoScroll();
  };

  const handleTouchEnd = () => {
    // Snap to nearest card
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    scrollToIndex(closestIndex);
    
    // Restart auto-scroll after touch interaction
    startAutoScrollWithDelay();
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scroll("left");
      } else if (e.key === 'ArrowRight') {
        scroll("right");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isAnimating]);

  useEffect(() => {
    const handleResize = () => {
      updateButtonVisibility();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize button visibility and center first card on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      updateButtonVisibility();
      if (scrollContainerRef.current) {
        scrollToIndex(0);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      stopAutoScroll();
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

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

        {/* Mobile Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons for Mobile */}
          <div className="md:hidden flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 pointer-events-none">
            <button
              onClick={() => scroll("left")}
              className={`bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto transition-all duration-300 -ml-2 ${!showLeftButton && activeIndex === 0 ? 'opacity-50' : ''}`}
              aria-label="Scroll left"
              disabled={isAnimating}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className={`bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto transition-all duration-300 -mr-2 ${!showRightButton && activeIndex === countries.length - 1 ? 'opacity-50' : ''}`}
              aria-label="Scroll right"
              disabled={isAnimating}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index}>
                <div className="w-[80%] md:w-full mx-auto">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <div className="h-48 relative">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div
                        className={`absolute inset-0 bg-black/50 transition-all duration-700 rounded-xl ${
                          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                      ></div>
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

          {/* Mobile Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x pb-4 -mx-4 px-4 scroll-smooth"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={() => {
              if (isVisible) startAutoScroll();
            }}
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollPadding: '0 25%'
            }}
          >
            {/* Left padding for centering first card */}
            <div className="flex-shrink-0 w-[75%]"></div>
            
            {countries.map((country, index) => (
              <div 
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex-shrink-0 w-[80%] px-2 snap-center"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-black/50 transition-all duration-700 rounded-xl ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    ></div>
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
            
            {/* Right padding for centering last card */}
            <div className="flex-shrink-0 w-[25%]"></div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm">
            Over 10,000+ students successfully placed in these destinations
          </p>
        </div>

      </div>

      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure smooth scrolling */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Prevent flash of unstyled content */
        @media (max-width: 767px) {
          [ref="scrollContainerRef"] {
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  );
};

export default CountriesSection;