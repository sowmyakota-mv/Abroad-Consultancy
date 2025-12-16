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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-900 via-green-700 to-yellow-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🇦🇺</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎓</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in Australia
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Experience world-class education, vibrant multicultural cities, and excellent post-study work opportunities 
              in one of the world's most beautiful countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>navigate('/contact')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">7</div>
              <div className="text-gray-600">Top 100 Global Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">720,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">2-6 Years</div>
              <div className="text-gray-600">Post-Study Work Rights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">95%</div>
              <div className="text-gray-600">Graduate Employability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === section 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - All sections visible without scrolling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Study in Australia - Complete Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Australia offers world-class education with globally recognized degrees, 
              cutting-edge research opportunities, and excellent post-study work options 
              in a beautiful, multicultural environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '🏫', title: 'Top Universities', desc: '7 in Top 100 globally' },
              { icon: '⏱️', title: 'Study Duration', desc: 'Bachelor: 3-4 years, Master: 1-2 years' },
              { icon: '💼', title: 'Work Rights', desc: '40 hrs/fortnight during studies' },
              { icon: '🌏', title: 'Multicultural', desc: 'Students from 140+ countries' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Australia?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">#1</div>
                <div className="font-bold text-gray-900 mb-2">Education System</div>
                <div className="text-gray-600">Ranked 1st in Higher Education System Strength</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">6 of Top 30</div>
                <div className="font-bold text-gray-900 mb-2">Most Liveable Cities</div>
                <div className="text-gray-600">Melbourne, Sydney, Adelaide, Perth, Brisbane, Canberra</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">$15 Billion</div>
                <div className="font-bold text-gray-900 mb-2">Annual Research Investment</div>
                <div className="text-gray-600">World-class research facilities and funding</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Australia Section */}
        <section id="why-australia" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Study in Australia?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">World-Class Education</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Home to several top-ranked universities and institutions, Australia upholds high academic standards 
                and fosters innovative research. Degrees obtained from Australian universities are not only highly 
                respected within the country but also recognized globally.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Australian National University ranked #1 in Australia</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Innovative teaching methods and practical learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Industry-relevant curriculum with strong employer links</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Multicultural Environment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Australia's multicultural society creates a vibrant and inclusive atmosphere for international students. 
                Students from diverse backgrounds come together, fostering a rich cultural exchange.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-600 mb-2">140+</div>
                  <div className="text-gray-600">Nationalities</div>
                </div>
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-600 mb-2">30%</div>
                  <div className="text-gray-600">International Students</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Quality of Life Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏖️</div>
                <h4 className="text-xl font-bold mb-3">Beautiful Environment</h4>
                <p className="text-gray-300">Stunning beaches, natural wonders, and great weather year-round</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold mb-3">Safe & Stable</h4>
                <p className="text-gray-300">Low crime rates and political stability ensure student safety</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold mb-3">Strong Economy</h4>
                <p className="text-gray-300">Thriving job market with opportunities across sectors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section id="key-points" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Advantages of Studying in Australia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                <div className="text-green-600 mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education System Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">AQF</div>
                <div className="text-gray-700">Australian Qualifications Framework ensures quality</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">TEQSA</div>
                <div className="text-gray-700">Tertiary Education Quality Standards Agency regulation</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">CRICOS</div>
                <div className="text-gray-700">Registered institutions for international students</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intakes Section */}
        <section id="intakes" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Intake Periods in Australia</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                  index === 0 ? 'bg-green-100 text-green-700' :
                  index === 1 ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  {intake.term}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{intake.months}</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Application Period</div>
                  <div className="font-medium">{intake.application}</div>
                </div>
                <div className="text-gray-600">{intake.features}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Research & Choose (12-18 months before)</div>
                  <div className="text-gray-600">Select universities and courses</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Prepare & Apply (6-12 months before)</div>
                  <div className="text-gray-600">Documents, tests, and applications</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Visa Process (3-4 months before)</div>
                  <div className="text-gray-600">Student visa application and approval</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* English Requirements Section */}
        <section id="english" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">English Proficiency Requirements</h2>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Test</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Undergraduate</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Postgraduate</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {englishRequirements.map((test, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{test.test}</td>
                    <td className="py-4 px-6">{test.undergraduate}</td>
                    <td className="py-4 px-6">{test.postgraduate}</td>
                    <td className="py-4 px-6">{test.validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemptions & Alternatives</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Previous education in English medium (minimum 5 years)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Citizenship of English-speaking countries</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Completion of English pathway programs in Australia</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa English Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">IELTS</span>
                  </div>
                  <span>Overall 5.5 for Student Visa (Subclass 500)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">PTE</span>
                  </div>
                  <span>Overall 42 for Student Visa (Subclass 500)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">TOEFL</span>
                  </div>
                  <span>46 for Student Visa (Subclass 500)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        <section id="universities" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in Australia</h2>
          
          <div className="space-y-6 mb-12">
            {topUniversities.map((uni, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-green-700 font-bold">{uni.rank}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {uni.location} • {uni.type} • {uni.students} students
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">University Groups & Rankings</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏅</div>
                <h4 className="text-xl font-bold mb-3">Group of Eight</h4>
                <p className="text-gray-300">Australia's leading research-intensive universities including ANU, Melbourne, Sydney</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌏</div>
                <h4 className="text-xl font-bold mb-3">Global Rankings</h4>
                <p className="text-gray-300">7 Australian universities in QS World Top 100, 9 in THE Top 200</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Specializations</h4>
                <p className="text-gray-300">World-leading programs in Medicine, Engineering, Business, and Sciences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Living Section */}
        <section id="cost-living" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Cost of Living and Tuition Fees</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tuition Fees</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Undergraduate Programs</h4>
                  <div className="text-2xl font-bold text-green-600">$20,000 - $45,000 AUD/year</div>
                  <div className="text-gray-600">Arts: $20,000-35,000 • Science: $25,000-40,000 • Medicine: $45,000+</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Postgraduate Programs</h4>
                  <div className="text-2xl font-bold text-green-600">$22,000 - $50,000 AUD/year</div>
                  <div className="text-gray-600">MBA: $40,000-60,000 • Engineering: $30,000-45,000</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Living Expenses</h3>
              </div>
              <div className="space-y-4">
                {livingCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700">{cost.item}</span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.amount}</div>
                      <div className="text-sm text-gray-500">{cost.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison by City</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Sydney</div>
                <div className="text-gray-700">$25,000 - $30,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Melbourne</div>
                <div className="text-gray-700">$22,000 - $27,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Brisbane</div>
                <div className="text-gray-700">$20,000 - $25,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Adelaide</div>
                <div className="text-gray-700">$18,000 - $23,000/year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Rights Section */}
        <section id="work-rights" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Opportunities During Studies</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partTimeOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{option.role}</h3>
                    <div className="text-gray-600 text-sm">{option.type}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Hours/Fortnight</div>
                    <div className="font-bold text-gray-900">{option.hours}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Average Pay</div>
                    <div className="font-bold text-gray-900">{option.pay}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Work Regulations (Visa Subclass 500)</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Work Hours:</strong> Maximum 48 hours per fortnight during study periods</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Unlimited Hours:</strong> During scheduled course breaks and holidays</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Minimum Wage:</strong> $21.38 per hour (as of 2023)</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Tax File Number (TFN):</strong> Required for employment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section id="healthcare" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Healthcare for International Students</h2>
          
          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-3xl font-bold mb-4">Overseas Student Health Cover (OSHC)</h3>
              <p className="text-xl text-blue-100">Mandatory health insurance for all international students in Australia</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Coverage Includes</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Doctor visits and consultations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Hospital treatment and surgery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Emergency ambulance services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Some prescription medications
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Cost & Providers</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 text-yellow-300 mr-2" />
                    Average cost: $600 - $1,000 per year
                  </li>
                  <li className="flex items-center">
                    <Building className="h-4 w-4 text-yellow-300 mr-2" />
                    Providers: Bupa, Allianz, Medibank, NIB
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-300 mr-2" />
                    Must cover entire study period
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-yellow-300 mr-2" />
                    Can include family members
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Australian Healthcare System</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  World-class public and private hospitals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Medicare available to some international students
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  High standard of medical care and facilities
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Support Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  On-campus health centers at all universities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Counseling and mental health support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  24/7 emergency support hotlines
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Post-Study Work Section */}
        <section id="post-study" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Post-Study Work Opportunities</h2>
          
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4">Temporary Graduate Visa (Subclass 485)</h3>
              <p className="text-xl text-green-100">Work in Australia for 2-6 years after graduation</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Bachelor Degree</h4>
                <div className="text-3xl font-bold mb-2">2 Years</div>
                <p className="text-green-100">Work permission duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Master Degree</h4>
                <div className="text-3xl font-bold mb-2">3 Years</div>
                <p className="text-green-100">Work permission duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">PhD Degree</h4>
                <div className="text-3xl font-bold mb-2">4 Years</div>
                <p className="text-green-100">Work permission duration</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Under 50 years of age
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Recent graduate from Australian institution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Meet English language requirements
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Health insurance coverage
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Apply within 6 months of course completion
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Application fee: $1,680 AUD
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Processing time: 4-9 months
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No job offer required
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Full work rights in any occupation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Can study further if desired
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pathway to permanent residency
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Bring family members
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Industries for Graduates</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-bold text-gray-900">IT & Technology</div>
                <div className="text-gray-600">$65,000 - $120,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-bold text-gray-900">Healthcare</div>
                <div className="text-gray-600">$70,000 - $150,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <div className="font-bold text-gray-900">Engineering</div>
                <div className="text-gray-600">$65,000 - $110,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold text-gray-900">Business & Finance</div>
                <div className="text-gray-600">$60,000 - $100,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section id="courses" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses in Australia</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{course.field}</h3>
                    <div className="text-gray-600">Top universities: {course.universities}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Average Duration</span>
                    <span className="font-bold">3-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Tuition</span>
                    <span className="font-bold">$25,000 - $45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Career Prospects</span>
                    <span className="font-bold">Excellent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Emerging Study Fields</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-bold text-gray-900 mb-2">Renewable Energy</div>
                <div className="text-gray-600">Growing focus on sustainability and green technology</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold text-gray-900 mb-2">AI & Data Science</div>
                <div className="text-gray-600">High demand for tech professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-bold text-gray-900 mb-2">Mental Health</div>
                <div className="text-gray-600">Increasing focus on healthcare services</div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section id="scholarships" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Scholarships in Australia</h2>
          
          <div className="space-y-6 mb-12">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {scholarship.eligibility}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">1</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Application Submission</div>
                    <div className="text-gray-600">Submit comprehensive application with required documents</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">2</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Assessment & Shortlisting</div>
                    <div className="text-gray-600">Review of academic achievements and extracurricular activities</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">3</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Interview & Evaluation</div>
                    <div className="text-gray-600">Virtual interview to assess aspirations and potential</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">4</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Final Selection</div>
                    <div className="text-gray-600">Notification of successful candidates</div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Hold an offer of admission to an Australian institution through Masters Visa</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Demonstrate outstanding academic achievements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Showcase involvement in extracurricular activities or community service</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Meet English language proficiency requirements</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold mb-6">Study in UK / Study in USA</h3>
              <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
                Explore the gateway to world-class education in Australia with our Masters Visa Overseas Education 
                Consultancy. We simplify the complex process, providing expert guidance on admissions, visa procedures, 
                and more. Elevate your academic journey with our comprehensive support, ensuring a smooth transition 
                to Australian universities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={()=>navigate('/contact')} className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
                  Contact Us for Australia
                </button>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudyAustraliaPage;