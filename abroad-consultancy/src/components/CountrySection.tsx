import React, { useEffect, useRef, useState, TouchEvent } from "react";

const CountriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs to manage auto-scroll
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollActiveRef = useRef(true);
  const lastInteractionTimeRef = useRef(Date.now());
  const isSwipingRef = useRef(false);

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

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Handle physical scrolling when index changes
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[currentIndex] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetLeft;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentIndex, isMobile]);

  // Start auto-scroll timer
  const startAutoScrollTimer = () => {
    if (!isMobile || !isAutoScrollActiveRef.current) return;
    
    // Clear any existing timeout
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    
    // Calculate time since last interaction
    const timeSinceLastInteraction = Date.now() - lastInteractionTimeRef.current;
    const timeToWait = Math.max(0, 3000 - timeSinceLastInteraction);
    
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (isAutoScrollActiveRef.current && isMobile && !isSwipingRef.current) {
        setCurrentIndex((prev) => (prev + 1) % countries.length);
        // Reset interaction time after auto-scroll
        lastInteractionTimeRef.current = Date.now();
        // Start next auto-scroll
        startAutoScrollTimer();
      }
    }, timeToWait);
  };

  // Pause auto-scroll for user interaction
  const pauseAutoScrollForInteraction = () => {
    isAutoScrollActiveRef.current = false;
    lastInteractionTimeRef.current = Date.now();
    
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
      autoScrollTimeoutRef.current = null;
    }
  };

  // Resume auto-scroll after interaction
  const resumeAutoScroll = () => {
    isAutoScrollActiveRef.current = true;
    // Start timer from current position
    startAutoScrollTimer();
  };

  // Initialize auto-scroll
  useEffect(() => {
    if (isMobile) {
      startAutoScrollTimer();
    }
    
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [isMobile, currentIndex]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    isSwipingRef.current = true;
    pauseAutoScrollForInteraction();
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    // Calculate scroll position during swipe to find current card
    if (scrollContainerRef.current && touchStart) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      
      // Calculate which card is currently in view during swipe
      const cardWidth = containerWidth * 0.8; // 80% width cards
      const gap = 16; // mx-2 = 0.5rem = 8px each side = 16px total
      const totalCardWidth = cardWidth + gap;
      
      const currentScrollCardIndex = Math.round(scrollLeft / totalCardWidth);
      const clampedIndex = Math.max(0, Math.min(currentScrollCardIndex, countries.length - 1));
      
      // Update current index during swipe (for smooth tracking)
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile) {
      // If no valid swipe, resume auto-scroll
      isSwipingRef.current = false;
      setTimeout(resumeAutoScroll, 100);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    // Determine final card position based on scroll position
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      
      // Calculate which card is centered
      const cardWidth = containerWidth * 0.8;
      const gap = 16;
      const totalCardWidth = cardWidth + gap;
      const scrollPosition = scrollLeft + (containerWidth / 2);
      
      const finalCardIndex = Math.round(scrollPosition / totalCardWidth);
      const clampedIndex = Math.max(0, Math.min(finalCardIndex, countries.length - 1));
      
      // Set to the card that's closest to center
      setCurrentIndex(clampedIndex);
    }
    
    // If it was a deliberate swipe, also handle direction
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > minSwipeDistance) {
        // Swipe left - next card
        setCurrentIndex(prev => (prev < countries.length - 1 ? prev + 1 : 0));
      } else if (distance < -minSwipeDistance) {
        // Swipe right - previous card
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : countries.length - 1));
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    isSwipingRef.current = false;
    
    // Resume auto-scroll after interaction
    setTimeout(resumeAutoScroll, 100);
  };

  const nextCard = () => {
    pauseAutoScrollForInteraction();
    setCurrentIndex(prev => (prev < countries.length - 1 ? prev + 1 : 0));
    // Resume auto-scroll
    setTimeout(resumeAutoScroll, 100);
  };

  const prevCard = () => {
    pauseAutoScrollForInteraction();
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : countries.length - 1));
    // Resume auto-scroll
    setTimeout(resumeAutoScroll, 100);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Your Global Ambitions
          </h2>
          <p className="sm:text-med md:text-lg text-center text-gray-600 max-w-4xl mx-auto">
            Secure your place at a top-ranked international university. We provide the expert admissions and visa guidance you need to turn your study abroad goals into a global career.
          </p>
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="sm:hidden lg:hidden relative ">
          <button
            onClick={prevCard}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {countries.map((country, index) => (
              <div key={index} className="flex-shrink-0 w-[80%] mx-2 snap-center">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img src={country.image} alt={country.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className={`absolute inset-0 bg-black/50 transition-all duration-700 rounded-xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75"}`}>
                      <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index}>
              <div className="w-[80%] sm:w-[90%] md:w-full mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img src={country.image} alt={country.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className={`absolute inset-0 bg-black/50 transition-all duration-700 rounded-xl ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75"}`}>
                      <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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