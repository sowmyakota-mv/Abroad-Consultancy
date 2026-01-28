import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle section navigation
  const handleSectionNavigation = (sectionId: string) => {
    // If we're already on the homepage, scroll to section
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80; // Adjust for header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Function to handle regular page navigation
  const handlePageNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation links configuration
  const navLinks = [
    { 
      name: 'Home', 
      type: 'page',
      path: '/',
      onClick: () => handlePageNavigation('/')
    },
    { 
      name: 'About Us', 
      type: 'page',
      path: '/about-dartglobe',
      onClick: () => handlePageNavigation('/about-dartglobe')
    },
    { 
      name: 'Our Services', 
      type: 'section',
      sectionId: 'services',
      onClick: () => handleSectionNavigation('services')
    },
    { 
      name: 'Study Abroad', 
      type: 'page',
      path: '/study-abroad',
      onClick: () => handlePageNavigation('/study-abroad')
    },
    { 
      name: 'Our Success', 
      type: 'section',
      sectionId: 'testimonials',
      onClick: () => handleSectionNavigation('testimonials')
    },
    { 
      name: 'Why Choose Us', 
      type: 'section',
      sectionId: 'why-choose-us',
      onClick: () => handleSectionNavigation('why-choose-us')
    },
    { 
      name: 'FAQ', 
      type: 'page',
      path: '/faq',
      onClick: () => handlePageNavigation('/faq')
    },
    { 
      name: 'Contact', 
      type: 'section',
      sectionId: 'contact',
      onClick: () => handlePageNavigation('/contact')
    }
  ];

  // Split navlinks into two columns
  const leftColumnLinks = navLinks.slice(0, 4);
  const rightColumnLinks = navLinks.slice(4);

  return (
    <footer className="bg-gradient-to-br from-[#1a365d] via-[#2d3748] to-[#4a5568] text-slate-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* First Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  DARTGLOBE
                </h2>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Building bridges to brighter futures worldwide. We've been the catalyst for 
              countless success stories, empowering ambitious individuals to transcend borders 
              and achieve extraordinary global careers
            </p>
            
            <div className="pt-4">
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FaFacebookF className="text-slate-300 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-400 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FaTwitter className="text-slate-300 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FaLinkedinIn className="text-slate-300 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FaInstagram className="text-slate-300 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <FaYoutube className="text-slate-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {leftColumnLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="flex items-center text-slate-300 hover:text-blue-300 transition-colors duration-300 group w-full text-left"
                  >
                    <FaArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {rightColumnLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="flex items-center text-slate-300 hover:text-blue-300 transition-colors duration-300 group w-full text-left"
                  >
                    <FaArrowRight className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            
            {/* Two Addresses Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Bangalore Address */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-blue-300 mb-1">Bangalore Office</p>
                  <p className="text-slate-300 text-xs leading-tight">
                    No. 90/3, 2nd Floor,<br />
                    Outer Ring Rd,<br />
                    Opp. Innovative Multiplex,<br />
                    Marathahalli,<br />
                    Bangalore - 560037
                  </p>
                </div>
              </div>
              
              {/* Hyderabad Address */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-blue-300 mb-1">Hyderabad Office</p>
                  <p className="text-slate-300 text-xs leading-tight">
                    #918, 8th Floor,<br />
                    Vasavi MPM Grand,<br />
                    Beside Ameerpet Metro,<br />
                    (Pillar 1062 & 1063),<br />
                    Ameerpet, Hyderabad - 500073
                  </p>
                </div>
              </div>
            </div>
            
            {/* Phone & Email Below Addresses */}
            <div className="space-y-4">
              {/* Phone Number */}
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-blue-300">Phone Number</p>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              {/* Email Address */}
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-blue-300">Email Address</p>
                  <p className="text-slate-300">info@dartglobe.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>
        
        {/* Second Row: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-blue-300 font-semibold">DARTGLOBE</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => handlePageNavigation('/privacy-policy')} className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-300">
              Privacy Policy
            </button>
            <button onClick={() => handlePageNavigation('/terms')} className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-300">
              Terms of Service
            </button>
            <button onClick={() => handlePageNavigation('/cookies')} className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-300">
              Cookie Policy
            </button>
            <button onClick={() => handlePageNavigation('/disclaimer')} className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-300">
              Disclaimer
            </button>
            <button onClick={() => handlePageNavigation('/sitemap')} className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-300">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;