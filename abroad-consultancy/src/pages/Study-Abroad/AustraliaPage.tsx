import React, { useState } from 'react';
import { 
  GraduationCap, DollarSign, Home, Briefcase, 
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Stethoscope, Sun, Coffee, Plane
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyAustraliaPage: React.FC = () => {
    const navigate=useNavigate()
  const [activeSection, setActiveSection] = useState('overview');

  // Top Universities
  const topUniversities = [
    { name: 'University of Melbourne', rank: '#1', location: 'Melbourne', type: 'Public', students: '52,000+' },
    { name: 'Australian National University', rank: '#2', location: 'Canberra', type: 'Public', students: '20,000+' },
    { name: 'University of Sydney', rank: '#3', location: 'Sydney', type: 'Public', students: '73,000+' },
    { name: 'University of New South Wales', rank: '#4', location: 'Sydney', type: 'Public', students: '62,000+' },
    { name: 'University of Queensland', rank: '#5', location: 'Brisbane', type: 'Public', students: '55,000+' },
    { name: 'Monash University', rank: '#6', location: 'Melbourne', type: 'Public', students: '86,000+' },
    { name: 'University of Western Australia', rank: '#7', location: 'Perth', type: 'Public', students: '25,000+' },
    { name: 'University of Adelaide', rank: '#8', location: 'Adelaide', type: 'Public', students: '27,000+' },
  ];

  // Scholarships
  const scholarships = [
    { name: 'Australia Awards Scholarships', amount: 'Full tuition + living', eligibility: 'Developing countries', deadline: 'Apr 30, 2024' },
    { name: 'Endeavour Scholarships', amount: 'Up to $272,500', eligibility: 'International students', deadline: 'Jun 30, 2024' },
    { name: 'Research Training Program', amount: 'Tuition fee offset', eligibility: 'Research students', deadline: 'Varies' },
    { name: 'University-specific Scholarships', amount: 'Up to $40,000', eligibility: 'Merit-based', deadline: 'Varies' },
    { name: 'Destination Australia', amount: '$15,000/year', eligibility: 'Regional areas', deadline: 'Varies' },
  ];

  // Intakes
  const intakes = [
    { term: 'Semester 1', months: 'February - June', application: 'Aug - Nov', features: 'Main intake, all courses' },
    { term: 'Semester 2', months: 'July - November', application: 'Feb - May', features: 'Most courses available' },
    { term: 'Summer Term', months: 'November - February', application: 'Aug - Oct', features: 'Limited courses' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0', validity: '2 years' },
    { test: 'TOEFL iBT', undergraduate: '60-79', postgraduate: '79-94', validity: '2 years' },
    { test: 'PTE Academic', undergraduate: '50-58', postgraduate: '58-65', validity: '2 years' },
    { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-185', validity: 'Lifetime' },
  ];

  // Key Points
  const keyPoints = [
    { title: 'World-Class Education', description: '7 universities in global top 100', icon: <Trophy className="h-6 w-6" /> },
    { title: 'Research Excellence', description: 'World-leading research facilities', icon: <Target className="h-6 w-6" /> },
    { title: 'Work Opportunities', description: '40 hours/fortnight during studies', icon: <Briefcase className="h-6 w-6" /> },
    { title: 'Post-Study Work Rights', description: '2-6 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
    { title: 'Quality of Life', description: 'Top 10 most liveable cities', icon: <Heart className="h-6 w-6" /> },
    { title: 'Multicultural Society', description: 'Students from 140+ countries', icon: <Globe className="h-6 w-6" /> },
  ];

  // Part-time Work Options
  const partTimeOptions = [
    { role: 'Retail & Hospitality', hours: '20-40 hrs/fortnight', pay: '$21-25/hour', type: 'Flexible hours' },
    { role: 'Tutoring', hours: '10-20 hrs/fortnight', pay: '$30-50/hour', type: 'Academic support' },
    { role: 'Internships', hours: '20-40 hrs/fortnight', pay: '$25-35/hour', type: 'Industry experience' },
    { role: 'Research Assistant', hours: '15-20 hrs/fortnight', pay: '$35-45/hour', type: 'Academic research' },
  ];

  // Accommodation Options
  const accommodationOptions = [
    { type: 'University Accommodation', cost: '$250-400/week', features: 'On-campus, utilities included' },
    { type: 'Private Student Housing', cost: '$300-500/week', features: 'Modern amenities, social spaces' },
    { type: 'Shared Apartments', cost: '$150-300/week', features: 'Independence, shared facilities' },
    { type: 'Homestay', cost: '$200-350/week', features: 'Cultural immersion, meals included' },
  ];

  // Popular Courses
  const popularCourses = [
    { field: 'Business & Management', universities: 'Melbourne, UNSW, Sydney' },
    { field: 'Engineering & Technology', universities: 'ANU, Monash, Queensland' },
    { field: 'Health & Medicine', universities: 'Sydney, Melbourne, Monash' },
    { field: 'Computer Science', universities: 'Melbourne, ANU, UNSW' },
  ];

  // Cost of Living Breakdown
  const livingCosts = [
    { item: 'Accommodation', amount: '$8,000 - $15,000', period: 'per year' },
    { item: 'Food & Groceries', amount: '$4,000 - $7,000', period: 'per year' },
    { item: 'Transportation', amount: '$1,000 - $2,000', period: 'per year' },
    { item: 'Utilities', amount: '$1,000 - $2,000', period: 'per year' },
    { item: 'Entertainment', amount: '$2,000 - $4,000', period: 'per year' },
    { item: 'Health Insurance', amount: '$600 - $1,000', period: 'per year' },
  ];

  const sections = [
    'overview', 'why-australia', 'key-points', 'intakes', 'english', 
    'universities', 'cost-living', 'work-rights', 'healthcare',
    'post-study', 'courses', 'scholarships'
  ];

  return (
    <div className="bg-white overflow-hidden">
     {/* Hero Section */}
<section className="relative mt-12 sm:mt-0 md:mt-0 h-[30vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/australia-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
    {/* Optional Overlay */}
    {/* <div className="absolute inset-0 bg-black/30"></div> */}

    {/* Bottom Curve (part of hero bg) */}
  {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="relative block w-full h-[100px]"
    >
      <path
        d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
        className="fill-white"
      ></path>
    </svg>
  </div> */}
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb- max-w-3xl">
  Study in <br />
  <span className="block ml-16 mt-4">Australia</span>
</h1>
  </div>
</div>
</section>

      {/* Quick Stats */}
      <section className='-mt-12 sm:mt-0 md:mt-0'>
        <div className="py-5 bg-gray-50 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">7</div>
              <div className="text-gray-600">Top 100 Global Universities</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">720,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">2-6 Years</div>
              <div className="text-gray-600">Post-Study Work Rights</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">95%</div>
              <div className="text-gray-600">Graduate Employability</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Main Content - All sections in one column without scrolling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="space-y-2">
          
          {/* Check Eligibility Section - NEW */}
          <section className="w-[90%] mx-auto scroll-mt-20">
  <div className="flex justify-center mt-12 sm:mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-900 ">Why study in Australia?</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
            Study in Australia as an international student presents a unique and rewarding experience 
                that sets it apart from other destinations. Here is a summary of what to expect when 
                pursuing education in Australia.
              </p>
        </div>
        <div className="mt-2 md:mt-2">
          <button onClick={()=>navigate('/contact')} className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-md md:text-lg hover:shadow-2xl transition-all hover:scale-105">
            Check Your Eligibility
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-20 py-5">
            <div className="text-left mb-4 mt-8 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Overview</h2>
              <p className="text-lg text-gray-600 text-left">
                Australia offers world-class education with globally recognized degrees, 
                cutting-edge research opportunities, and excellent post-study work options 
                in a beautiful, multicultural environment.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 ">
              {[
                { icon: '🏫', title: 'Top Universities', desc: '7 in Top 100' },
                { icon: '⏱️', title: 'Study Duration', desc: '3-4 years' },
                { icon: '💼', title: 'Work Rights', desc: '40 hrs/fortnight' },
                { icon: '🌏', title: 'Multicultural', desc: '140+ countries' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-gray-900 mb-1 text-lg">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost of Living and Healthcare Combined Section - NEW */}
          <section className="grid md:grid-cols-2 gap-8 py-5">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100 mt-8">
              <div className="flex items-center mb-4 ">
                <DollarSign className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cost of Living and Tuition Fees</h3>
              </div>
              <p className="text-gray-700 mb-4">
                While Australia has a reputation for being relatively expensive, the cost of 
                education and living expenses can vary based on your location and chosen institution. 
                Financial aid options and scholarships are available to eligible students.
              </p>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-2">Undergraduate Programs</h4>
                <div className="text-xl font-bold text-green-600">$20,000 - $45,000 AUD/year</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 mt-8">
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Healthcare System</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Australia prioritizes the well-being of its international students by providing 
                access to a world-class healthcare system. The Overseas Student Health Cover (OSHC) 
                ensures affordable medical care.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">OSHC Coverage</h4>
                <div className="text-xl font-bold text-blue-600">$600 - $1,000/year</div>
                <div className="text-sm text-gray-600">Doctor visits, hospital treatment, prescriptions</div>
              </div>
            </div>
          </section>

          {/* Post-Study Work Section - Enhanced */}
          <section id="post-study" className="scroll-mt-20 py-8">
            <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Briefcase className="h-10 w-10 text-yellow-300 mr-4" />
                <h2 className="text-3xl font-bold">Post-Study Work Opportunities</h2>
              </div>
              <p className="text-lg mb-6 text-blue-100">
                Upon completing their study in Australia, international students have the opportunity 
                to gain practical experience through the Temporary Graduate visa (subclass 485). This 
                allows graduates to work in Australia, providing valuable exposure to the local job market.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
                  <div className="text-xl md:text-3xl font-bold mb-2">2 Years</div>
                  <div className="text-blue-100">Bachelor Degree</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
                  <div className="text-xl md:text-3xl font-bold mb-2">3 Years</div>
                  <div className="text-blue-100">Master Degree</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
                  <div className="text-xl md:text-3xl font-bold mb-2">4 Years</div>
                  <div className="text-blue-100">PhD Degree</div>
                </div>
              </div>
              
              <div className="flex items-center text-green-200">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Enhances employability on a global scale</span>
              </div>
            </div>
          </section>

          {/* Multicultural Environment Section - NEW */}
          <section className='py-5 mt-8'>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 py-5">
            <div className="text-left mb-8">
              <div className="flex mb-4">
                <Globe className="h-12 w-12 text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multicultural Environment</h2>
              </div><p className="text-lg text-gray-700 text-left">
                Australia's multicultural society creates a vibrant and inclusive atmosphere for 
                international students. Students from diverse backgrounds come together, fostering 
                a rich cultural exchange that prepares students for a globalized world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-2xl mb-2">🌏</div>
                <div className="font-bold text-gray-900">Diverse Backgrounds</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-bold text-gray-900">Cultural Exchange</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-bold text-gray-900">Global Perspective</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="font-bold text-gray-900">Understanding</div>
              </div>
            </div>
            </div>
          </section>

          {/* World-Class Education Section - Enhanced */}
          <section className='py-5 mt-8'>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg ">
            <div className="flex items-center mb-6">
              <Trophy className="h-10 w-10 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">World-Class Education</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Home to several top-ranked universities and institutions, Australia upholds high 
              academic standards and fosters innovative research. Degrees obtained from Australian 
              universities are not only highly respected within the country but also recognized 
              globally, adding prestige to your academic credentials.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Top-Ranked Institutions</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>7 universities in QS World Top 100</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Innovative teaching methods</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    <span>Internationally respected degrees</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    <span>Industry-relevant curriculum</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </section>

          {/* Scholarships Section - Enhanced */}
          <section id="scholarships" className="scroll-mt-20 py-5">
            <div className="text-left  mb-8 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarships in Australia</h2>
              <p className="text-lg text-gray-600">
                Discover exclusive scholarship opportunities for international students with Masters Visa. 
                We provide specialized guidance to unlock financial aid for your academic journey.
              </p>
            </div>

            {/* Scholarship Application Process */}
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Process</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="font-bold text-green-600">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Application Submission</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Submit comprehensive application with all required documents
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Assessment</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Review of academic achievements and extracurricular activities
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Interview</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Virtual interview to assess aspirations and potential
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">Final Selection</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Notification of successful candidates
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Hold an offer of admission to an Australian institution through Masters Visa</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Showcase involvement in extracurricular activities or community service</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Demonstrate outstanding academic achievements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Meet English language proficiency requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Masters Visa Services Section - NEW */}       
          <section className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white ">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Study in Australia with DartGlobe</h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
                Explore the gateway to world-class education in Australia with our DartGlobe 
                Overseas Education Consultancy. We simplify the complex process, providing expert 
                guidance on admissions, visa procedures, and more.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">Admissions Guidance</h3>
                <p className="text-blue-100">Expert assistance with university applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Visa Procedures</h3>
                <p className="text-blue-100">Complete support for student visa applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Support</h3>
                <p className="text-blue-100">End-to-end assistance for smooth transition</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold mb-8">
                Elevate your academic journey with our comprehensive support, ensuring a smooth 
                transition to Australian universities. Unleash your potential and embrace a 
                vibrant learning experience in a culturally diverse environment.
              </p>
              
              <button 
                onClick={() => navigate('/contact')} 
                className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                Contact Us for Australia
              </button>
            </div>
          </section>

          {/* Existing Compact Sections */}
          <div className="grid md:grid-cols-3 gap-8 py-5 mt-8">
            {/* Intakes Section */}
            <section id="intakes" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intake Periods</h2>
              <div className="space-y-3">
                {intakes.map((intake, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full mb-2 text-xs ${
                      index === 0 ? 'bg-green-100 text-green-700' :
                      index === 1 ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {intake.term}
                    </div>
                    <div className="text-sm font-bold text-gray-900">{intake.months}</div>
                    <div className="text-xs text-gray-600">{intake.features}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* English Requirements Section */}
            <section id="english" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">English Requirements</h2>
              <div className="space-y-2">
                {englishRequirements.map((test, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="font-medium text-gray-900">{test.test}</div>
                    <div className="text-sm text-gray-600">UG: {test.undergraduate} | PG: {test.postgraduate}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Courses Section */}
            <section id="courses" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Courses</h2>
              <div className="space-y-3">
                {popularCourses.map((course, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{course.field}</h3>
                    <div className="text-xs text-gray-600">{course.universities}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyAustraliaPage;