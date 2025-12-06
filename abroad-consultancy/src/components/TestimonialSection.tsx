import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card active
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Minimum swipe distance
  const minSwipeDistance = 50;
  
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      country: "USA",
      university: "Harvard University",
      course: "Masters in Computer Science",
      rating: 5,
      content: "Thanks to their guidance, I got into my dream university with a scholarship. The mock visa interviews were very helpful!",
      image: "/testimonials/rahul.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      country: "Canada",
      university: "University of Toronto",
      course: "MBA",
      rating: 5,
      content: "The end-to-end support was incredible. From profile building to accommodation assistance, they handled everything perfectly.",
      image: "/testimonials/priya.jpg"
    },
    {
      id: 3,
      name: "Amit Kumar",
      country: "Germany",
      university: "Technical University of Munich",
      course: "Masters in Mechanical Engineering",
      rating: 5,
      content: "Got admission in a top German university with a DAAD scholarship. Their guidance on German university applications was spot on.",
      image: "/testimonials/amit.jpg"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      country: "Australia",
      university: "University of Melbourne",
      course: "Masters in Data Science",
      rating: 5,
      content: "The IELTS preparation materials and mock tests helped me score 8.0. Couldn't have done it without their support.",
      image: "/testimonials/sneha.jpg"
    },
    {
      id: 5,
      name: "Vikram Singh",
      country: "UK",
      university: "University of Oxford",
      course: "Masters in Finance",
      rating: 5,
      content: "Secured admission at Oxford with a 50% scholarship. Their SOP and LOR guidance made all the difference.",
      image: "/testimonials/vikram.jpg"
    },
    {
      id: 6,
      name: "Ananya Desai",
      country: "USA",
      university: "Stanford University",
      course: "Masters in Business Analytics",
      rating: 5,
      content: "From profile evaluation to visa approval, every step was handled professionally. Highly recommended!",
      image: "/testimonials/ananya.jpg"
    },
    {
      id: 7,
      name: "Rajesh Mehta",
      country: "Canada",
      university: "University of British Columbia",
      course: "Masters in Civil Engineering",
      rating: 5,
      content: "The loan processing support helped me secure education loan quickly. Got my visa in first attempt.",
      image: "/testimonials/rajesh.jpg"
    },
    {
      id: 8,
      name: "Pooja Verma",
      country: "Australia",
      university: "University of Sydney",
      course: "Masters in Public Health",
      rating: 5,
      content: "Found perfect accommodation near campus through their assistance. Part-time job support was also very helpful.",
      image: "/testimonials/pooja.jpg"
    },
    {
      id: 9,
      name: "Karan Malhotra",
      country: "Germany",
      university: "RWTH Aachen University",
      course: "Masters in Automotive Engineering",
      rating: 5,
      content: "Free services with premium quality! Got admission in top German university without any consultancy fees.",
      image: "/testimonials/karan.jpg"
    },
    {
      id: 10,
      name: "Divya Nair",
      country: "UK",
      university: "Imperial College London",
      course: "Masters in Biotechnology",
      rating: 5,
      content: "Their scholarship guidance helped me secure £20,000 scholarship. Couldn't be happier with the results.",
      image: "/testimonials/divya.jpg"
    },
    {
      id: 11,
      name: "Arjun Joshi",
      country: "USA",
      university: "MIT",
      course: "Masters in Robotics",
      rating: 5,
      content: "The personalized counseling sessions helped me choose the right university and program for my career goals.",
      image: "/testimonials/arjun.jpg"
    },
    {
      id: 12,
      name: "Meera Choudhary",
      country: "Canada",
      university: "McGill University",
      course: "Masters in Psychology",
      rating: 5,
      content: "Post-arrival support was exceptional. They helped with airport pickup, bank account, and everything needed to settle.",
      image: "/testimonials/meera.jpg"
    }
  ];

  const scrollLeft = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const scrollRight = () => {
    setCurrentIndex(prev => {
      if (prev >= testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      scrollRight(); // Swipe left = next
    }
    
    if (isRightSwipe) {
      scrollLeft(); // Swipe right = previous
    }
  };

  // Get the three testimonials to display (left, center, right)
  const getDisplayTestimonials = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    
    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex]
    ];
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= testimonials.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-20 h-1 bg-orange-200"></div>
            <span className="mx-4 text-orange-600 font-semibold">SUCCESS STORIES</span>
            <div className="w-20 h-1 bg-orange-200"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who successfully achieved their study abroad dreams with our guidance
          </p>
        </div>

        {/* Testimonials Container - 80% width */}
        <div className="relative flex justify-center">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-110 active:scale-95 md:hidden lg:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* 3 Card Layout - 80% width with touch/swipe area */}
          <div 
            ref={containerRef}
            className="w-3/5 md:w-4/5 relative h-[300px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {getDisplayTestimonials().map((testimonial, index) => (
              <div
  key={`${testimonial.id}-${index}`}
  className={`absolute transition-all duration-500 ease-in-out touch-none ${
    index === 0 
      ? 'left-0 scale-90 opacity-30 blur-xxs -translate-y-8' 
      : index === 1 
      ? 'left-1/2 transform -translate-x-1/2 z-10 scale-100 opacity-100' 
      : 'right-0 scale-90 opacity-30 blur-xxs -translate-y-8'
  } ${
    // Center card widths
    index === 1 
      ? 'w-[280px] sm:w-[320px] md:w-[380px]' 
      : 'w-[220px] sm:w-[280px] md:w-[320px]'
  }`}
>
                <TestimonialCard 
                  testimonial={testimonial} 
                  isCenter={index === 1}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-110 active:scale-95 md:hidden lg:block"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component (unchanged)
const TestimonialCard: React.FC<{ testimonial: any; isCenter: boolean }> = ({ testimonial, isCenter }) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 ${
      isCenter 
        ? 'p-8 min-h-[240px] shadow-xl' 
        : 'p-6 min-h-[200px] shadow-md mt-12'
    }`}>
      {/* Rating - Only show in center card */}
      {isCenter && (
        <div className="flex justify-center mb-4">
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mx-0.5" />
            ))}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className={`${isCenter ? 'mb-6' : 'mb-4'}`}>
        <p className={`text-gray-600 text-sm leading-relaxed italic text-center ${
          isCenter 
            ? 'text-base line-clamp-5' 
            : 'text-sm line-clamp-4 opacity-80'
        }`}>
          "{testimonial.content}"
        </p>
      </div>
      
      {/* Student Info */}
      <div className="flex items-center">
        {/* Avatar */}
        <div className={`rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 ${
          isCenter ? 'h-10 w-10 text-lg' : 'h-10 w-10 text-base'
        }`}>
          {testimonial.name.charAt(0)}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`font-bold text-gray-900 truncate ${isCenter ? 'text-lg' : 'text-base'}`}>
            {testimonial.name}
          </h4>
          
          {/* Only show full details in center card */}
          {isCenter ? (
            <>
              <div className="text-sm text-gray-600 font-medium truncate">
                {testimonial.university}
              </div>
              <div className="text-sm text-gray-500 truncate">
                {testimonial.course}
              </div>
              <div className="text-xs text-gray-400">
                Studying in {testimonial.country}
              </div>
            </>
          ) : (
            // For side cards, only show name and country
            <div className="text-sm text-gray-500 truncate">
              Studying in {testimonial.country}
            </div>
          )}
        </div>
      </div>
      
      {/* Quote Icon - Only show in center card */}
      {isCenter && (
        <div className="absolute -bottom-6 right-6 z-10">
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-[#FF6603] flex items-center justify-center shadow-lg">
              <Quote className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;