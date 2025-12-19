import { ArrowBigDown, ArrowDown, ArrowDown01, ArrowDownCircle, ArrowDownFromLine, ArrowDownIcon, ArrowDownLeft, ArrowDownNarrowWideIcon, ArrowDownUp, ChevronDown, MessageCircleMore, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const studyAbroadCountries = [
    { name: 'UK', path: '/study-abroad/uk' },
    { name: 'USA', path: '/study-abroad/usa' },
    { name: 'Canada', path: '/study-abroad/canada' },
    { name: 'Australia', path: '/study-abroad/australia' },
    { name: 'Germany', path: '/study-abroad/germany' },
    { name: 'New Zealand', path: '/study-abroad/new-zealand' },
    { name: 'Europe', path: '/study-abroad/europe' },
    { name: 'Ireland', path: '/study-abroad/Ireland' },
  ];

  const servicesList = [
    { name: 'Student Profile Analysis', path: '/services/student-profile' },
    { name: 'Professional Career Guidance', path: '/services/career-guidance' },
    { name: 'IELTS/TOEFL/PTE Preparation', path: '/services/IELTS/TOEFL/PTE-preparation' },
    { name: 'One-on-One Expert Counselling', path: '/services/one-on-one-expert-counselling' },
    { name: 'University Application', path: '/services/university-application' },
    { name: 'Scholarship & Financial Aid Assistance', path: '/services/scholarship-financial-aid-assistance' },
    { name: 'Education Loan Processing', path: '/services/education-loan-processing' },
    { name: 'Visa Assistance', path: '/services/visa-assistance' },
    { name: 'Pre-Departure Support', path: '/services/pre-departure' },
    { name: 'Accommodation Assistance', path: '/services/accommodation-assistance' },
    { name: 'Abroad Part-Time Job', path: '/services/abroad-part-time-job' },
    { name: 'Post-Masters Internship Placement', path: '/services/post-masters-internship' },
  ];

  // Function to handle navigation with scroll to section
  const handleSectionNavigation = (sectionId: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're already on home page, just scroll to section
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Scroll to the top of the section
          const yOffset = -80; // Adjust this value based on your header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50); // Small delay to ensure DOM is ready
    } else {
      // Navigate to home page with hash in URL
      navigate(`/#${sectionId}`);
    }
  };

  // Effect to handle hash navigation when page loads
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && location.pathname === '/') {
        const sectionId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            // Scroll to the top of the section with offset for header
            const yOffset = -80; // Adjust this value based on your header height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100); // Delay to ensure page is fully loaded
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-dartglobe' },
    { name: 'Study Abroad', href: '#' },
    { 
      name: 'Our Services', 
      href: '#services',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('services');
      }
    },
    { 
      name: 'Why Choose Us', 
      href: '#why-choose-us',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('why-choose-us');
      }
    },
    { 
      name: 'Our Success', 
      href: '#testimonials',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('testimonials');
      }
    },
    { name: 'FAQ', href: '/faq' },
    { name: 'Book Free Counselling', href: '#', isCta: true, onClick: () => setIsCounsellingOpen(true) }
  ];

  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:info@dartglobe.com',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverBorderColor: 'hover:border-blue-700',
      onClick: () => {
        window.location.href = 'mailto:info@dartglobe.com?subject=Enquiry&body=Hello, I would like to get more information about your services.';
      }
    },
    { 
      icon: Phone, 
      label: 'Contact', 
      href: 'tel:+911234567890',
      iconColor: 'text-green-600',
      borderColor: 'border-green-600',
      hoverBorderColor: 'hover:border-green-700',
      onClick: () => {
        window.location.href = 'tel:+911234567890';
      }
    },
    { 
      icon: MessageCircleMore, 
      label: 'WhatsApp', 
      href: 'https://wa.me/911234567890',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500',
      hoverBorderColor: 'hover:border-green-600',
      onClick: () => {
        window.open('https://wa.me/911234567890?text=Hello%20DartGlobe,%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank');
      }
    }
  ];

  // Handle contact item click
  const handleContactClick = (item: typeof contactItems[0]) => {
    // Use onClick handler if provided
    if (item.onClick) {
      item.onClick();
    } 
    // Fallback to href
    else if (item.href) {
      if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank');
      }
    }
  };

  // Helper function to render icon with increased size
  const renderIcon = (item: typeof contactItems[0]) => {
    const IconComponent = item.icon;
    
    // Increased icon sizes
    return <IconComponent size={isMobile ? 22 : 24} className={item.iconColor} />;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3">
            <div className="flex justify-between items-center">

              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="/logo"
                  alt="consultancy"
                  className="h-16 w-auto object-contain"
                  onClick={() => navigate('/')}
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link) =>
                  link.name === 'Study Abroad' ? (
                    <div key={link.name} className="relative group">
                      <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600">
                        Study Abroad
                        <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
                      </button>

                      <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <ul className="py-2">
                          {studyAbroadCountries.map((country) => (
                            <li key={country.name}>
                              <Link to={country.path} className="block px-4 py-2 hover:bg-blue-50">
                                Study in {country.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={(e) => {
                        if (link.onClick) {
                          link.onClick(e);
                        }
                      }}
                      className={`font-medium ${
                        link.isCta
                          ? 'bg-purple-700 md:bg-[#FB8234] text-white px-5 py-2.5 rounded-3xl'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-blue-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-blue-700"></span>
                  <span className="block w-6 h-0.5 bg-blue-700"></span>
                  <span className="block w-6 h-0.5 bg-blue-700"></span>
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
                <nav className="flex flex-col space-y-1 p-4">
                  
                  {/* Home */}
                  {navLinks
                    .filter(link => link.name === 'Home')
                    .map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}

                  {/* About Us */}
                  {navLinks
                    .filter(link => link.name === 'About Us')
                    .map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}

                  {/* Study Abroad */}
                  <div className="pt-1">
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setIsStudyOpen(!isStudyOpen)}
                    >
                      <span>Study Abroad</span>
                      <ChevronDown className={`${isStudyOpen ? 'rotate-180' : ''} transition-transform duration-200`} size={16} />
                    </button>

                    {isStudyOpen && (
                      <div className="mt-1 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                        {studyAbroadCountries.map((c) => (
                          <Link
                            key={c.name}
                            to={c.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors pl-4"
                          >
                            Study in {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Services - Now scrolls to section */}
                  {navLinks
                    .filter(link => link.name === 'Our Services')
                    .map((link) => (
                      <button
                        key={link.name}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) {
                            link.onClick(e);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ))}

                  {/* Why Choose Us */}
                  {navLinks
                    .filter(link => link.name === 'Why Choose Us')
                    .map((link) => (
                      <button
                        key={link.name}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) {
                            link.onClick(e);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ))}

                  {/* Our Success */}
                  {navLinks
                    .filter(link => link.name === 'Our Success')
                    .map((link) => (
                      <button
                        key={link.name}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) {
                            link.onClick(e);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ))}

                  {/* FAQ */}
                  {navLinks
                    .filter(link => link.name === 'FAQ')
                    .map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}

                  {/* Book Free Counselling - CTA Button */}
                  {navLinks
                    .filter(link => link.isCta)
                    .map((link) => (
                      <button
                        key={link.name}
                        onClick={() => {
                          if (link.onClick) link.onClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="mt-2 bg-purple-700 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-purple-800 transition-colors text-center"
                      >
                        {link.name}
                      </button>
                    ))}

                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Horizontal Contact Buttons - Always Visible */}
      <div className="fixed bottom-4 right-0 z-50">
        <div className="flex items-center gap-3 p-2">
          {contactItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleContactClick(item)}
              className={`w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow hover:shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor}`}
              title={item.label}
            >
              {renderIcon(item)}
            </button>
          ))}
        </div>
      </div>

      {/* Free Counselling Modal */}
      {isCounsellingOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 ">
          
          {/* Modal Container */}
          <div className="relative h-[96vh] w-full max-w-5xl mx-4 my-10 animate-popOut">
            
            {/* Close Button */}
            <button
              onClick={() => setIsCounsellingOpen(false)}
              className="absolute top-2 right-4 text hover:scale-105 transition"
            >
              <X size={30} />
            </button>

            {/* Scrollable Contact Form */}
            <div className="h-full rounded-3xl shadow-2xl bg-white ">
              <ContactForm />
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes popOut {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-popOut {
          animation: popOut 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;