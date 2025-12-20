import React from 'react';
import { 
  GraduationCap, Euro, Home, Briefcase, 
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Train, Plane, Globe2, Languages,
  Compass, Zap, Castle, Coffee
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyEuropePage: React.FC = () => {
    const navigate=useNavigate()
  // Top Universities
  const topUniversities = [
    { name: 'University of Oxford', rank: '#1', location: 'UK', type: 'Public', students: '24,000+' },
    { name: 'University of Cambridge', rank: '#2', location: 'UK', type: 'Public', students: '23,000+' },
    { name: 'ETH Zurich', rank: '#3', location: 'Switzerland', type: 'Public', students: '22,000+' },
    { name: 'Imperial College London', rank: '#4', location: 'UK', type: 'Public', students: '19,000+' },
    { name: 'University College London', rank: '#5', location: 'UK', type: 'Public', students: '43,000+' },
    { name: 'University of Edinburgh', rank: '#6', location: 'UK', type: 'Public', students: '40,000+' },
    { name: 'Sorbonne University', rank: '#7', location: 'France', type: 'Public', students: '55,000+' },
    { name: 'Technical University of Munich', rank: '#8', location: 'Germany', type: 'Public', students: '50,000+' },
  ];

  // Popular Countries
  const popularCountries = [
    { name: 'Germany', students: '350,000+', tuition: 'Low/Free', language: 'German/English' },
    { name: 'France', students: '300,000+', tuition: '€3,000-€10,000', language: 'French/English' },
    { name: 'Netherlands', students: '85,000+', tuition: '€8,000-€20,000', language: 'Dutch/English' },
    { name: 'Italy', students: '100,000+', tuition: '€1,000-€4,000', language: 'Italian/English' },
    { name: 'Spain', students: '75,000+', tuition: '€1,000-€5,000', language: 'Spanish/English' },
    { name: 'Sweden', students: '40,000+', tuition: '€9,000-€15,000', language: 'Swedish/English' },
  ];

  // Scholarships
  const scholarships = [
    { name: 'Erasmus+ Programme', amount: 'Full funding + grants', eligibility: 'All EU countries', deadline: 'Mar 31, 2024' },
    { name: 'DAAD Scholarships', amount: '€850-€1,200/month', eligibility: 'International students', deadline: 'Varies' },
    { name: 'Eiffel Excellence Scholarship', amount: 'Full tuition + stipend', eligibility: 'Master/PhD students', deadline: 'Jan 10, 2024' },
    { name: 'Swiss Government Excellence', amount: 'Full funding', eligibility: 'Research students', deadline: 'Varies' },
    { name: 'Netherlands Orange Tulip', amount: '€5,000-€25,000', eligibility: 'Non-EU students', deadline: 'Apr 1, 2024' },
  ];

  // Intakes
  const intakes = [
    { term: 'Winter Semester', months: 'September - February', application: 'Dec - Jul', features: 'Main intake, most courses' },
    { term: 'Summer Semester', months: 'March - July', application: 'Sep - Jan', features: 'Limited courses available' },
    { term: 'Rolling Admissions', months: 'Varies', application: 'Year-round', features: 'Some universities/programs' },
  ];

  // Language Requirements
  const languageRequirements = [
    { language: 'English', test: 'IELTS/TOEFL', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0' },
    { language: 'German', test: 'TestDaF/DSH', level: 'B2-C1', courses: 'Most German programs' },
    { language: 'French', test: 'DELF/DALF', level: 'B2-C1', courses: 'French-taught programs' },
    { language: 'Spanish', test: 'DELE', level: 'B2-C1', courses: 'Spanish-taught programs' },
  ];

  // Key Points
  const keyPoints = [
    { title: 'Diverse Academic Options', description: '30,000+ programs across Europe', icon: <BookOpen className="h-6 w-6" /> },
    { title: 'Cultural Diversity', description: '44 countries with unique cultures', icon: <Globe2 className="h-6 w-6" /> },
    { title: 'Multilingual Environment', description: '24 official EU languages', icon: <Languages className="h-6 w-6" /> },
    { title: 'Easy Travel', description: 'Border-free Schengen area', icon: <Train className="h-6 w-6" /> },
    { title: 'Affordable Education', description: 'Low/Free tuition in many countries', icon: <Euro className="h-6 w-6" /> },
    { title: 'Research Excellence', description: 'World-leading research institutions', icon: <Zap className="h-6 w-6" /> },
  ];

  // Popular Courses
  const popularCourses = [
    { field: 'Engineering & Technology', countries: 'Germany, Switzerland, Netherlands' },
    { field: 'Business & Management', countries: 'UK, France, Spain' },
    { field: 'Arts & Humanities', countries: 'Italy, France, UK' },
    { field: 'Medicine & Health Sciences', countries: 'Germany, UK, Sweden' },
  ];

  // Cost of Living Breakdown
  const livingCosts = [
    { country: 'Germany', amount: '€850 - €1,200', period: 'per month' },
    { country: 'France', amount: '€900 - €1,400', period: 'per month' },
    { country: 'Netherlands', amount: '€1,000 - €1,500', period: 'per month' },
    { country: 'Italy', amount: '€700 - €1,100', period: 'per month' },
    { country: 'Spain', amount: '€650 - €1,000', period: 'per month' },
    { country: 'Sweden', amount: '€850 - €1,300', period: 'per month' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[64vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/europe-bghero.png')",
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
    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 max-w-3xl">
  Study in <br />
  <span className="block ml-16 mt-4">Europe</span>
</h1>
  </div>
</div>
  </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">44</div>
              <div className="text-gray-600">Countries to Choose From</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">1.8M+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24</div>
              <div className="text-gray-600">Official Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">30,000+</div>
              <div className="text-gray-600">Academic Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - All sections visible without navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Study in Europe - Complete Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europe offers unparalleled academic diversity, cultural richness, and historic excellence 
              across 44 countries, providing students with a truly global education experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '🏛️', title: 'Historic Universities', desc: 'Founded as early as 1088 AD' },
              { icon: '🌍', title: 'Cultural Diversity', desc: 'Experience 44 different cultures' },
              { icon: '🚆', title: 'Easy Travel', desc: 'Border-free Schengen area' },
              { icon: '💰', title: 'Affordable', desc: 'Low/Free tuition in many countries' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Europe?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">#1</div>
                <div className="font-bold text-gray-900 mb-2">Global Education Hub</div>
                <div className="text-gray-600">Home to world's oldest and most prestigious universities</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                <div className="font-bold text-gray-900 mb-2">Ranked Universities</div>
                <div className="text-gray-600">In QS and THE World University Rankings</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">€80B+</div>
                <div className="font-bold text-gray-900 mb-2">Research Funding</div>
                <div className="text-gray-600">Annual investment in research and innovation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Europe Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Study in Europe?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Diverse Academic Opportunities</h3>
              </div>
              <p className="text-gray-700 mb-6">
                One of the foremost attractions for international students in Europe is the diverse range 
                of academic opportunities. Whether you aspire to delve into the arts, sciences, engineering, 
                or business, European universities offer a multitude of programs at various levels of study.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>30,000+ academic programs across all disciplines</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Flexible education systems with multiple entry points</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Bologna Process ensures degree compatibility across Europe</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cultural Diversity</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Europe is a melting pot of cultures, each country boasting its own distinct traditions, 
                history, and way of life. Studying in Europe provides international students with the 
                opportunity to immerse themselves in this cultural diversity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-blue-600 mb-2">44</div>
                  <div className="text-gray-600">Unique Countries</div>
                </div>
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2000+</div>
                  <div className="text-gray-600">Years of History</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">European Education Advantages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h4 className="text-xl font-bold mb-3">Historic Excellence</h4>
                <p className="text-gray-300">World's oldest universities with centuries of academic tradition</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌐</div>
                <h4 className="text-xl font-bold mb-3">Global Recognition</h4>
                <p className="text-gray-300">Degrees recognized and respected worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Innovation Hub</h4>
                <p className="text-gray-300">Leading in research, technology, and sustainable development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Advantages of Studying in Europe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-blue-600 mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">European Higher Education Area</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Bologna Process</div>
                <div className="text-gray-700">Standardized 3-cycle degree system (Bachelor, Master, PhD)</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">ECTS Credits</div>
                <div className="text-gray-700">European Credit Transfer System for easy mobility</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Diploma Supplement</div>
                <div className="text-gray-700">Free document explaining degree for employers worldwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Countries Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Study Destinations in Europe</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularCountries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-2xl">
                      {country.name === 'Germany' && '🇩🇪'}
                      {country.name === 'France' && '🇫🇷'}
                      {country.name === 'Netherlands' && '🇳🇱'}
                      {country.name === 'Italy' && '🇮🇹'}
                      {country.name === 'Spain' && '🇪🇸'}
                      {country.name === 'Sweden' && '🇸🇪'}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                    <div className="text-gray-600">{country.students} international students</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Tuition</span>
                    <span className="font-bold">{country.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Teaching Language</span>
                    <span className="font-bold">{country.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Popular For</span>
                    <span className="font-bold text-blue-600">View Programs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fee Comparison</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Free</div>
                <div className="font-bold text-gray-900 mb-2">Germany & Norway</div>
                <div className="text-gray-600">Public universities (semester fee: €150-€300)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Low Cost</div>
                <div className="font-bold text-gray-900 mb-2">Italy, Spain, France</div>
                <div className="text-gray-600">€1,000 - €5,000 per year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Moderate</div>
                <div className="font-bold text-gray-900 mb-2">Netherlands, Sweden, Ireland</div>
                <div className="text-gray-600">€8,000 - €20,000 per year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intakes Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Intake Periods in Europe</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                  index === 0 ? 'bg-blue-100 text-blue-700' :
                  index === 1 ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
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

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline for Europe</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Research & Choose Country (12-18 months before)</div>
                  <div className="text-gray-600">Consider language, costs, and program availability</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
                  <div className="text-gray-600">Language tests, transcripts, motivation letters</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Apply & Visa Process (3-6 months before)</div>
                  <div className="text-gray-600">University applications and student visa</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Language Options in Europe</h2>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Language</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Proficiency Test</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Required Level</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-900">Program Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {languageRequirements.map((lang, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{lang.language}</td>
                    <td className="py-4 px-6">{lang.test}</td>
                    <td className="py-4 px-6">{lang.level || lang.undergraduate}</td>
                    <td className="py-4 px-6">{lang.courses || 'Available'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">English-Taught Programs</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span><strong>Netherlands:</strong> 2,000+ English-taught programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span><strong>Germany:</strong> 1,800+ English-taught programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span><strong>Sweden:</strong> 900+ English-taught programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span><strong>Denmark:</strong> 700+ English-taught programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Language Learning Opportunities</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">🇫🇷</span>
                  </div>
                  <span>Free language courses at many universities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">🇩🇪</span>
                  </div>
                  <span>Language preparation courses before degree programs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">🇪🇸</span>
                  </div>
                  <span>Language exchange programs with local students</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in Europe</h2>
          
          <div className="space-y-6 mb-12">
            {topUniversities.map((uni, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-blue-700 font-bold">{uni.rank}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {uni.location} • {uni.type} • {uni.students} students
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">University Groups & Networks</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-3">League of European Research Universities (LERU)</h4>
                <p className="text-gray-300">23 leading research-intensive universities promoting research quality</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-xl font-bold mb-3">Coimbra Group</h4>
                <p className="text-gray-300">39 long-established European universities with strong academic traditions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-bold mb-3">Utrecht Network</h4>
                <p className="text-gray-300">31 European universities promoting internationalization and cooperation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Living Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Cost of Living in European Countries</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Euro className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Monthly Living Costs</h3>
              </div>
              <div className="space-y-4">
                {livingCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700">{cost.country}</span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.amount}</div>
                      <div className="text-sm text-gray-500">{cost.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cost Breakdown (Monthly)</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Accommodation</span>
                  <span className="font-bold">€300 - €600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Food & Groceries</span>
                  <span className="font-bold">€200 - €350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Transportation</span>
                  <span className="font-bold">€40 - €100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Health Insurance</span>
                  <span className="font-bold">€30 - €100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Study Materials</span>
                  <span className="font-bold">€50 - €100</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold text-gray-900">Total Range</span>
                  <span className="font-bold text-blue-600">€650 - €1,500</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Discounts & Savings</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🚆</div>
                <div className="font-bold text-gray-900 mb-2">Transport Discounts</div>
                <div className="text-gray-600">50-75% off on trains, buses, and metros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎭</div>
                <div className="font-bold text-gray-900 mb-2">Cultural Activities</div>
                <div className="text-gray-600">Free/reduced museum, theater, and cinema tickets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🍕</div>
                <div className="font-bold text-gray-900 mb-2">Food & Restaurants</div>
                <div className="text-gray-600">Student discounts at university cafeterias and partner restaurants</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Rights Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Opportunities During Studies</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { role: 'Part-time Jobs', hours: '10-20 hrs/week', pay: '€10-€15/hour', type: 'Flexible hours' },
              { role: 'Internships', hours: '20-40 hrs/week', pay: '€15-€25/hour', type: 'Industry experience' },
              { role: 'Research Assistant', hours: '10-15 hrs/week', pay: '€12-€20/hour', type: 'Academic research' },
              { role: 'On-campus Jobs', hours: '10-15 hrs/week', pay: '€9-€12/hour', type: 'University positions' },
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{option.role}</h3>
                    <div className="text-gray-600 text-sm">{option.type}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Hours/Week</div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Regulations by Country</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Germany:</strong> 120 full days or 240 half days per year</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>France:</strong> 964 hours per year (approx. 60% of full-time)</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Netherlands:</strong> 16 hours per week or full-time during June-August</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Sweden:</strong> No limit during studies, must not interfere with studies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quality of Life Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Quality of Life in Europe</h2>
          
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-3xl font-bold mb-4">Europe's High Quality of Life</h3>
              <p className="text-xl text-green-100">Safe, efficient, and culturally rich environments for students</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Safety & Security</h4>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Low crime rates across most European countries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Excellent healthcare systems with universal coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Political stability and democratic societies
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Cultural & Recreational</h4>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center">
                    <Castle className="h-4 w-4 text-yellow-300 mr-2" />
                    Rich historical heritage and architectural marvels
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 text-yellow-300 mr-2" />
                    Vibrant cafe culture and social life
                  </li>
                  <li className="flex items-center">
                    <Compass className="h-4 w-4 text-yellow-300 mr-2" />
                    Easy access to nature, beaches, and mountains
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mandatory health insurance for all students
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  High-quality public and private hospitals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  University health centers on campus
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Train className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Efficient public transport systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Student discounts on transport passes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Easy inter-country travel with Schengen visa
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  International student offices
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Language support services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Career counseling and job placement
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Post-Study Work Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Post-Graduation Work Opportunities</h2>
          
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4">Post-Study Work Permits in Europe</h3>
              <p className="text-xl text-blue-100">Stay and work in Europe after completing your studies</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Germany</h4>
                <div className="text-3xl font-bold mb-2">18 Months</div>
                <p className="text-blue-100">Job seeker visa after graduation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Netherlands</h4>
                <div className="text-3xl font-bold mb-2">1 Year</div>
                <p className="text-blue-100">Orientation year for graduates</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Sweden</h4>
                <div className="text-3xl font-bold mb-2">1 Year</div>
                <p className="text-blue-100">Extended residency for job seeking</p>
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
                  Completed degree from European institution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Valid health insurance coverage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sufficient financial means
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Clean criminal record
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Euro className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Apply before student visa expires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Application fees: €50-€200
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Processing time: 1-3 months
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  May require job offer for extension
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
                  Gaining European work experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pathway to permanent residency
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Improved career prospects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Network building opportunities
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Sectors for Graduates</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-bold text-gray-900">IT & Tech</div>
                <div className="text-gray-600">€45,000 - €80,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-bold text-gray-900">Healthcare</div>
                <div className="text-gray-600">€50,000 - €90,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <div className="font-bold text-gray-900">Engineering</div>
                <div className="text-gray-600">€48,000 - €85,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold text-gray-900">Business</div>
                <div className="text-gray-600">€42,000 - €75,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses in Europe</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{course.field}</h3>
                    <div className="text-gray-600">Top countries: {course.countries}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Average Duration</span>
                    <span className="font-bold">3-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Tuition</span>
                    <span className="font-bold">€1,000 - €15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Career Prospects</span>
                    <span className="font-bold">Excellent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Emerging Study Fields in Europe</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-bold text-gray-900 mb-2">Sustainable Development</div>
                <div className="text-gray-600">EU focus on green technology and sustainability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold text-gray-900 mb-2">Artificial Intelligence</div>
                <div className="text-gray-600">Leading AI research hubs across Europe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💊</div>
                <div className="font-bold text-gray-900 mb-2">Biotechnology</div>
                <div className="text-gray-600">Strong focus on medical research and innovation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Scholarships in Europe</h2>
          
          <div className="space-y-6 mb-12">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-600">
                        <Euro className="h-4 w-4 mr-1" />
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
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Categories</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Government Scholarships</h4>
                  <div className="text-gray-600">European nations provide government-sponsored scholarships, covering tuition, living, and travel expenses</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Institutional Scholarships</h4>
                  <div className="text-gray-600">Universities offer a range of scholarships, fostering academic excellence and diversity</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Erasmus+ Programme</h4>
                  <div className="text-gray-600">Supports education, training, youth, and sport, offering scholarships for international students</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Research Scholarships</h4>
                  <div className="text-gray-600">Innovative scholarships supporting international students in pioneering research</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Evidenced superior academic prowess through consistently high grades and exemplary achievements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Meet language proficiency requirements (English or European languages)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Fulfill any specific criteria outlined by the individual scholarship program</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Demonstrate leadership potential and community involvement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold mb-6">Study in Europe</h3>
              <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
                Enroll with Masters Visa for More Details. Navigating the scholarship landscape and the 
                European education system can be complex, but with the support of Masters Visa Overseas 
                Education Consultancy, you gain access to valuable insights, personalized guidance, 
                and a streamlined application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={()=>navigate('/contact')} className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
                  Contact Us for Europe
                </button>
                
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default StudyEuropePage;