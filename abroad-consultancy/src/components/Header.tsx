import { ArrowDown, ArrowDown01, ArrowDownCircle, ArrowDownFromLine, ArrowDownIcon, ArrowDownLeft, ArrowDownNarrowWideIcon, MessageCircleMore, X } from 'lucide-react';
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-dartglobe' },
    { name: 'Study Abroad', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Why Choose Us', href: location.pathname === '/' ? '#why-choose-us' : '/#why-choose-us' },
    { name: 'Our Success', href: location.pathname === '/' ? '#testimonials' : '/#testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Book Free Counselling', href: '#', isCta: true, onClick: () => setIsCounsellingOpen(true) }
  ];

  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:info@dartglobe.com',
      onClick: () => {
        window.location.href = 'mailto:info@dartglobe.com?subject=Enquiry&body=Hello, I would like to get more information about your services.';
      }
    },
    { 
      icon: Phone, 
      label: 'Contact', 
      href: 'tel:+911234567890',
      onClick: () => {
        window.location.href = 'tel:+911234567890';
      }
    },
    { 
      icon: MessageCircleMore, 
      label: 'WhatsApp', 
      href: 'https://wa.me/911234567890',
      onClick: () => {
        window.open('https://wa.me/911234567890?text=Hello%20DartGlobe,%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank');
      }
    }
  ];

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isChatOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.ai-chat-container') && !target.closest('.ai-chat-main-icon')) {
          setIsChatOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isChatOpen]);

  // Helper function to render icon
  const renderIcon = (index: number) => {
    const item = contactItems[index];
    const IconComponent = item.icon;
    let iconClass = "text-blue-600";
    
    if (item.label === 'Contact') {
      iconClass = "text-green-600";
    } else if (item.label === 'WhatsApp') {
      iconClass = "text-green-500";
    }
    
    return <IconComponent size={18} className={iconClass} />;
  };

  // Handle contact item click
  const handleContactClick = (item: typeof contactItems[0]) => {
    // Close the chat menu first
    setIsChatOpen(false);
    
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
                        <ArrowDownLeft size={18} className="group-hover:rotate-180 transition-transform" />
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
                  ) : link.name === 'Our Services' ? (
                    <div key={link.name} className="relative group">
                      <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600">
                        Our Services
                        <ArrowDownLeft size={18} className="group-hover:rotate-180 transition-transform" />
                      </button>

                      {/* ✅ Scrollable Services Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <ul className="py-2 max-h-76 overflow-y-auto">
                          {servicesList.map((service) => (
                            <li key={service.name}>
                              <Link to={service.path} className="block px-4 py-2 hover:bg-blue-50">
                                {service.name}
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
                      onClick={link.onClick}
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
              if (link.onClick) link.onClick();
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
              if (link.onClick) link.onClick();
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
          <ArrowDownLeft className={`${isStudyOpen ? 'rotate-180' : ''} transition-transform duration-200`} size={16} />
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

      {/* Services */}
      <div className="pt-1">
        <button
          className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setIsServiceOpen(!isServiceOpen)}
        >
          <span>Our Services</span>
          <ArrowDownLeft className={`${isServiceOpen ? 'rotate-180' : ''} transition-transform duration-200`} size={16} />
        </button>

        {isServiceOpen && (
          <div className="mt-1 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
            {servicesList.map((s) => (
              <Link
                key={s.name}
                to={s.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors pl-4"
              >
                {s.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Why Choose Us */}
      {navLinks
        .filter(link => link.name === 'Why Choose Us')
        .map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => {
              if (link.onClick) link.onClick();
              setIsMobileMenuOpen(false);
            }}
            className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {link.name}
          </Link>
        ))}

      {/* Our Success */}
      {navLinks
        .filter(link => link.name === 'Our Success')
        .map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => {
              if (link.onClick) link.onClick();
              setIsMobileMenuOpen(false);
            }}
            className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {link.name}
          </Link>
        ))}

      {/* FAQ */}
      {navLinks
        .filter(link => link.name === 'FAQ')
        .map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => {
              if (link.onClick) link.onClick();
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

      {/* AI Chat Widget */}
      <div className="ai-chat-container fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
        {/* Contact Sub-Icons - Always Visible Desktop Layout */}
        {!isMobile && (
          <div className="absolute bottom-0 right-0 flex flex-col items-center space-y-3">
            {/* Top Center */}
            <button
              onClick={() => handleContactClick(contactItems[0])}
              className="absolute -bottom-6 -left-14 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-14 -translate-x-1"
              title={contactItems[0].label}
            >
              {renderIcon(0)}
            </button>

            {/* Bottom Left */}
            <button
              onClick={() => handleContactClick(contactItems[1])}
              className="absolute -bottom-9 -left-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-7 -translate-x-12"
              title={contactItems[1].label}
            >
              {renderIcon(1)}
            </button>

            {/* Right Top */}
            <button
              onClick={() => handleContactClick(contactItems[2])}
              className="absolute -bottom-2 -left-15 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-14 translate-x-12"
              title={contactItems[2].label}
            >
              {renderIcon(2)}
            </button>
          </div>
        )}

        {/* Contact Sub-Icons - Always Visible Mobile Layout */}
        {isMobile && (
          <div className="absolute bottom-0 right-0 flex flex-col items-center space-y-3">
            {/* Top Center */}
            <button
              onClick={() => handleContactClick(contactItems[0])}
              className="absolute -bottom-6 -left-14 w-8 h-8  rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-14 -translate-x-1"
              title={contactItems[0].label}
            >
              {renderIcon(0)}
            </button>

            {/* Bottom Left */}
            <button
              onClick={() => handleContactClick(contactItems[1])}
              className="absolute -bottom-9 -left-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-7 -translate-x-12"
              title={contactItems[1].label}
            >
              {renderIcon(1)}
            </button>

            {/* Right Top */}
            <button
              onClick={() => handleContactClick(contactItems[2])}
              className="absolute -bottom-2 -left-15 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-14 translate-x-12"
              title={contactItems[2].label}
            >
              {renderIcon(2)}
            </button>
          </div>
        )}

        {/* Main Chat Icon */}
        <button
          className="ai-chat-main-icon w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white relative z-50"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? (
            <X size={isMobile ? 20 : 24} className="transition-transform duration-300" />
          ) : (
            <MessageCircle size={isMobile ? 20 : 24} />
          )}
        </button>
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
        
        .ai-chat-main-icon:hover {
          transform: scale(1.1);
        }
        
        .ai-chat-main-icon:active {
          transform: scale(0.95);
        }
        
        .ai-chat-container {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 50;
        }
        
        @media (min-width: 768px) {
          .ai-chat-container {
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;