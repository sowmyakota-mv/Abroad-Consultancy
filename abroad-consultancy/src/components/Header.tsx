import { ArrowDownNarrowWideIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    { name: 'Book Free Counselling', href: location.pathname === '/' ? '#quote' : '/#quote', isCta: true }
  ];

  return (
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
                      <ArrowDownNarrowWideIcon size={18} className="group-hover:rotate-180 transition-transform" />
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
                      <ArrowDownNarrowWideIcon size={18} className="group-hover:rotate-180 transition-transform" />
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
            <div className="lg:hidden mt-4 border-t pt-4">
              <nav className="flex flex-col space-y-3">

                {/* Study Abroad Mobile */}
                <button
                  className="flex justify-center gap-1 py-2"
                  onClick={() => setIsStudyOpen(!isStudyOpen)}
                >
                  Study Abroad
                  <ArrowDownNarrowWideIcon className={`${isStudyOpen && 'rotate-180'} transition-transform`} />
                </button>

                {isStudyOpen &&
                  studyAbroadCountries.map((c) => (
                    <Link key={c.name} to={c.path} className="text-center py-1">
                      Study in {c.name}
                    </Link>
                  ))}

                {/* ✅ Services Mobile (Scrollable) */}
                <button
                  className="flex justify-center gap-1 py-2"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                >
                  Our Services
                  <ArrowDownNarrowWideIcon className={`${isServiceOpen && 'rotate-180'} transition-transform`} />
                </button>

                {isServiceOpen && (
                  <div className="max-h-56 overflow-y-auto">
                    {servicesList.map((s) => (
                      <Link key={s.name} to={s.path} className="block text-center py-1">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}

              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
