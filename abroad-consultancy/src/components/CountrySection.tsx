import React, { useEffect, useRef, useState, useCallback } from "react";

const CountriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const scrollAnimationRef = useRef<number | null>(null);
  const lastScrollTime = useRef(0);
  const velocityRef = useRef(0);

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
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
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

  // Create extended array for continuous scrolling
  const extendedCountries = [...countries, ...countries, ...countries];

  const getScrollPositionForIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current || !cardRefs.current[0]) return 0;
    
    const container = scrollContainerRef.current;
    const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
    const cardMargin = 16; // 4 (px-2) * 2
    const totalCardWidth = cardWidth + cardMargin;
    
    // Calculate center position for the index
    const containerWidth = container.clientWidth;
    const scrollPosition = (index * totalCardWidth) - (containerWidth / 2) + (cardWidth / 2);
    
    return scrollPosition;
  }, []);

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollPosition = getScrollPositionForIndex(index);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: smooth ? "smooth" : "auto"
    });
    
    // Calculate real index (accounting for continuous scroll)
    const realIndex = index % countries.length;
    setActiveIndex(realIndex);
  }, [countries.length, getScrollPositionForIndex]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || !cardRefs.current[0] || isDragging.current) return;
    
    const container = scrollContainerRef.current;
    const currentTime = Date.now();
    const deltaTime = currentTime - lastScrollTime.current;
    
    if (deltaTime > 0) {
      const currentScroll = container.scrollLeft;
      velocityRef.current = (currentScroll - velocityRef.current) / deltaTime;
    }
    
    lastScrollTime.current = currentTime;
    
    // Find which card is currently centered
    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
    const cardMargin = 16;
    const totalCardWidth = cardWidth + cardMargin;
    
    // Calculate virtual index (for continuous scrolling)
    const virtualIndex = Math.round(containerCenter / totalCardWidth);
    const realIndex = virtualIndex % countries.length;
    
    if (realIndex !== activeIndex) {
      setActiveIndex(realIndex);
    }
  }, [activeIndex, countries.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoScroll();
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    velocityRef.current = 0;
    lastScrollTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    
    touchEndX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
    
    scrollAnimationRef.current = requestAnimationFrame(() => {
      if (scrollContainerRef.current) {
        const currentScroll = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.scrollLeft = currentScroll + diff;
        touchStartX.current = touchEndX.current;
        handleScroll();
      }
    });
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    
    // Calculate momentum
    const momentum = velocityRef.current * 2;
    const minSwipeDistance = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Swipe detected
      const direction = swipeDistance > 0 ? "right" : "left";
      if (direction === "right") {
        scrollToIndex(activeIndex + countries.length + 1);
      } else {
        scrollToIndex(activeIndex + countries.length - 1);
      }
    } else if (Math.abs(momentum) > 0.5) {
      // Momentum scrolling
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const targetScroll = container.scrollLeft + (momentum * 100);
        
        const animateMomentum = () => {
          if (!scrollContainerRef.current) return;
          
          const currentScroll = scrollContainerRef.current.scrollLeft;
          const diff = targetScroll - currentScroll;
          
          if (Math.abs(diff) > 1) {
            scrollContainerRef.current.scrollLeft = currentScroll + (diff * 0.1);
            requestAnimationFrame(animateMomentum);
          } else {
            snapToNearestCard();
          }
        };
        
        requestAnimationFrame(animateMomentum);
      }
    } else {
      // Snap to nearest card
      snapToNearestCard();
    }
    
    // Restart auto-scroll
    setTimeout(() => startAutoScroll(), 3000);
  };

  const snapToNearestCard = () => {
    if (!scrollContainerRef.current || !cardRefs.current[0]) return;
    
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + (container.clientWidth / 2);
    const cardWidth = cardRefs.current[0].offsetWidth;
    const cardMargin = 16;
    const totalCardWidth = cardWidth + cardMargin;
    
    const nearestIndex = Math.round(containerCenter / totalCardWidth);
    scrollToIndex(nearestIndex);
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    
    autoScrollIntervalRef.current = setInterval(() => {
      scrollToIndex(activeIndex + countries.length + 1);
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Initialize scroll position
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        // Start at the middle section (for infinite scroll effect)
        const startIndex = countries.length;
        scrollToIndex(startIndex, false);
        startAutoScroll();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const currentIndex = activeIndex + countries.length;
        scrollToIndex(currentIndex, false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, countries.length, scrollToIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Inter']">
            Empowering Your Global Ambitions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-4xl mx-auto font-['Inter'] leading-relaxed">
            Secure your place at a top-ranked international university. We provide the expert admissions and visa guidance you need to turn your study abroad goals into a global career.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index}>
              <div className="w-[80%] md:w-full mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 rounded-2xl ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 flex items-end justify-center text-center px-4 pb-6 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white font-['Inter'] drop-shadow-lg">
                        {country.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Container */}
        <div className="md:hidden relative overflow-hidden">
          {/* Card Indicators */}
          <div className="flex justify-center items-center space-x-2 mb-6">
            {countries.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "w-8 bg-blue-600" 
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Carousel with Touch Support */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-visible touch-pan-x pb-8 -mx-4 scrollbar-hide will-change-transform"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'auto',
              touchAction: 'pan-x'
            }}
          >
            {extendedCountries.map((country, index) => (
              <div 
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`flex-shrink-0 w-[80%] px-2 transition-transform duration-300 ${
                  Math.abs((index % countries.length) - activeIndex) <= 1 
                    ? 'opacity-100' 
                    : 'opacity-40'
                }`}
                style={{
                  transform: `scale(${
                    Math.abs((index % countries.length) - activeIndex) === 0 
                      ? '1.05' 
                      : '0.95'
                  })`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 rounded-2xl ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 flex items-end justify-center text-center px-4 pb-6 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white font-['Inter'] drop-shadow-lg">
                        {country.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Hint */}
          <div className="flex justify-center items-center mt-4 space-x-2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-['Inter']">Swipe to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm font-['Inter']">
            Over 10,000+ students successfully placed in these destinations
          </p>
        </div>

      </div>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* iOS-style momentum scrolling */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Optimize for 60fps animations */
        .will-change-transform {
          will-change: transform;
        }
        
        /* Prevent text selection during swipe */
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
        
        /* Optimize image rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  );
};

export default CountriesSection;