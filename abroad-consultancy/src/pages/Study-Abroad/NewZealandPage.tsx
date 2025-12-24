import React from 'react';
import { 
  GraduationCap, DollarSign, Home, Briefcase, 
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Mountain, Trees, Waves, Sunrise
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyNewZealandPage: React.FC = () => {
    const navigate=useNavigate()
  // Top Universities
  const topUniversities = [
    { name: 'University of Auckland', rank: '#1', location: 'Auckland', type: 'Public', students: '40,000+' },
    { name: 'University of Otago', rank: '#2', location: 'Dunedin', type: 'Public', students: '21,000+' },
    { name: 'Victoria University of Wellington', rank: '#3', location: 'Wellington', type: 'Public', students: '22,000+' },
    { name: 'University of Canterbury', rank: '#4', location: 'Christchurch', type: 'Public', students: '15,000+' },
    { name: 'Massey University', rank: '#5', location: 'Palmerston North', type: 'Public', students: '35,000+' },
    { name: 'University of Waikato', rank: '#6', location: 'Hamilton', type: 'Public', students: '12,000+' },
    { name: 'Auckland University of Technology', rank: '#7', location: 'Auckland', type: 'Public', students: '29,000+' },
    { name: 'Lincoln University', rank: '#8', location: 'Christchurch', type: 'Public', students: '3,500+' },
  ];

  // Popular Courses
  const popularCourses = [
    { field: 'Agriculture & Environmental Science', universities: 'Lincoln, Massey, Canterbury' },
    { field: 'Business & Management', universities: 'Auckland, Victoria, Otago' },
    { field: 'Engineering & Technology', universities: 'Canterbury, Auckland, AUT' },
    { field: 'Health Sciences', universities: 'Otago, Auckland, AUT' },
    { field: 'Tourism & Hospitality', universities: 'AUT, Victoria, Otago' },
    { field: 'Film & Creative Arts', universities: 'Auckland, Victoria, AUT' },
  ];

  // Scholarships
  const scholarships = [
    { name: 'New Zealand International Scholarships', amount: 'Full tuition + living', eligibility: 'Developing countries', deadline: 'Apr 30, 2024' },
    { name: 'University of Auckland Scholarships', amount: 'Up to $10,000 NZD', eligibility: 'International students', deadline: 'Varies' },
    { name: 'New Zealand Excellence Awards', amount: '$5,000-$25,000', eligibility: 'High-achieving students', deadline: 'May 15, 2024' },
    { name: 'Research & PhD Scholarships', amount: 'Full funding + stipend', eligibility: 'Research students', deadline: 'Varies' },
    { name: 'Māori & Pacific Scholarships', amount: '$3,000-$15,000', eligibility: 'Indigenous students', deadline: 'Varies' },
  ];

  // Intakes
  const intakes = [
    { term: 'Semester 1', months: 'February - June', application: 'Aug - Nov', features: 'Main intake, all courses' },
    { term: 'Semester 2', months: 'July - November', application: 'Feb - Apr', features: 'Most courses available' },
    { term: 'Summer School', months: 'November - February', application: 'Aug - Oct', features: 'Limited courses' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0', validity: '2 years' },
    { test: 'TOEFL iBT', undergraduate: '80-90', postgraduate: '90-100', validity: '2 years' },
    { test: 'PTE Academic', undergraduate: '50-58', postgraduate: '58-65', validity: '2 years' },
    { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-184', validity: 'Lifetime' },
  ];

  // Key Points
  const keyPoints = [
    { title: 'World-Class Education', description: 'All 8 universities in global top 500', icon: <Trophy className="h-6 w-6" /> },
    { title: 'Practical Learning', description: 'Hands-on, industry-focused education', icon: <Target className="h-6 w-6" /> },
    { title: 'Work Opportunities', description: '20 hours/week during studies', icon: <Briefcase className="h-6 w-6" /> },
    { title: 'Post-Study Work Rights', description: '1-3 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
    { title: 'Stunning Natural Beauty', description: 'Ranked 2nd safest country globally', icon: <Mountain className="h-6 w-6" /> },
    { title: 'Māori Culture', description: 'Rich indigenous cultural experience', icon: <Globe className="h-6 w-6" /> },
  ];

  // Work Options
  const workOptions = [
    { role: 'Part-time Jobs', hours: '20 hrs/week', pay: '$18-22/hour', type: 'During studies' },
    { role: 'Internships', hours: 'Full-time', pay: '$20-25/hour', type: 'Scheduled breaks' },
    { role: 'Research Assistant', hours: '15-20 hrs/week', pay: '$22-28/hour', type: 'Academic research' },
    { role: 'Hospitality & Retail', hours: 'Flexible hours', pay: '$18-21/hour', type: 'Entry level' },
  ];

  // Cost of Living
  const livingCosts = [
    { item: 'Accommodation', amount: '$12,000 - $18,000', period: 'per year' },
    { item: 'Food & Groceries', amount: '$4,000 - $7,000', period: 'per year' },
    { item: 'Transportation', amount: '$1,000 - $2,000', period: 'per year' },
    { item: 'Utilities & Internet', amount: '$1,000 - $2,000', period: 'per year' },
    { item: 'Health Insurance', amount: '$600 - $1,000', period: 'per year' },
    { item: 'Personal Expenses', amount: '$3,000 - $5,000', period: 'per year' },
  ];

  return (
    <div id='study-abroad/new-zealand' className="bg-white">
      {/* Hero Section */}
<section className="relative h-[30vh] sm:h-[60vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/new-zealand-bghero.png')",
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
  <span className="block ml-16 mt-4">New Zealand</span>
</h1>
  </div>
</div>
  </section>

      {/* Quick Stats */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">8</div>
              <div className="text-gray-600">World-Class Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">125,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">#2</div>
              <div className="text-gray-600">Safest Country Globally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 mb-2">1-3 Years</div>
              <div className="text-gray-600">Post-Study Work Rights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - All sections visible */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-8">
        
        {/* Overview Section */}
        <section className="w-[80%] mx-auto scroll-mt-20">
  <div className="flex justify-center mt-12 sm:mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-900 ">Study in New Zealand - Complete Overview</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
           For international students seeking top-notch education amid breathtaking natural landscapes, 
              New Zealand emerges as a popular and compelling destination with a unique educational experience.
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
        <section className='py-5 mt-8'>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '🏔️', title: 'Natural Beauty', desc: 'Stunning landscapes & outdoor lifestyle' },
              { icon: '🎓', title: 'Quality Education', desc: 'All universities in global top 500' },
              { icon: '🤝', title: 'Māori Culture', desc: 'Rich indigenous cultural experience' },
              { icon: '💼', title: 'Work Rights', desc: '20 hrs/week during studies' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose New Zealand?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">#1</div>
                <div className="font-bold text-gray-900 mb-2">Peaceful Nation</div>
                <div className="text-gray-600">Ranked 2nd in Global Peace Index</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="font-bold text-gray-900 mb-2">English-Speaking</div>
                <div className="text-gray-600">Easier adaptation for international students</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Practical</div>
                <div className="font-bold text-gray-900 mb-2">Learning Focus</div>
                <div className="text-gray-600">Industry-relevant, hands-on education</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why New Zealand Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Study in New Zealand?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education System</h3>
              </div>
              <p className="text-gray-700 mb-6">
                New Zealand boasts a well-regarded education system, featuring universities, polytechnics, 
                and institutes of technology that offer a diverse array of programs. The country's distinctive 
                focus on practical, hands-on learning sets it apart.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>NZQA ensures quality across all institutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Flexible pathways between institutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Industry partnerships for practical experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Mountain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cultural Experience</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Study in New Zealand offers a unique cultural experience, providing exposure to the rich 
                Māori and Pacific Islander cultures. Beyond the academic realm, students have the opportunity 
                to immerse themselves in the country's breathtaking landscapes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-600 mb-2">Māori</div>
                  <div className="text-gray-600">Indigenous culture</div>
                </div>
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-600 mb-2">Pasifika</div>
                  <div className="text-gray-600">Pacific Islander heritage</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black to-green-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-left">New Zealand Education Advantages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏔️</div>
                <h4 className="text-xl font-bold mb-3">Natural Environment</h4>
                <p className="text-gray-300">Study amidst mountains, beaches, and national parks</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-3">Friendly Community</h4>
                <p className="text-gray-300">Warm, welcoming, and inclusive society</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Innovation Hub</h4>
                <p className="text-gray-300">Leader in agriculture, film, and technology</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className='py-5'>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Key Advantages of Studying in New Zealand</h2>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">New Zealand Qualifications Framework (NZQF)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Levels 1-10</div>
                <div className="text-gray-700">Comprehensive qualification levels from certificates to doctorates</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">NZQA</div>
                <div className="text-gray-700">New Zealand Qualifications Authority ensures quality standards</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Global Recognition</div>
                <div className="text-gray-700">Degrees recognized internationally</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        {/* <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in New Zealand</h2>
          
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
            <h3 className="text-3xl font-bold mb-6 text-center">Types of Institutions</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-3">Universities</h4>
                <p className="text-gray-300">8 public universities offering comprehensive degree programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-xl font-bold mb-3">Institutes of Technology & Polytechnics (ITPs)</h4>
                <p className="text-gray-300">16 institutions offering vocational and applied education</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-bold mb-3">Private Training Establishments (PTEs)</h4>
                <p className="text-gray-300">Private institutions offering specialized programs</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Popular Courses Section */}
        <section className='py-5'>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses in New Zealand</h2>
          
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
                    <span className="font-bold">$22,000 - $35,000 NZD</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique Study Fields</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌿</div>
                <div className="font-bold text-gray-900 mb-2">Sustainable Agriculture</div>
                <div className="text-gray-600">World-leading in sustainable farming practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎬</div>
                <div className="font-bold text-gray-900 mb-2">Film Production</div>
                <div className="text-gray-600">Home to The Lord of the Rings and Hobbit trilogies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌊</div>
                <div className="font-bold text-gray-900 mb-2">Marine Science</div>
                <div className="text-gray-600">Strong focus on ocean research and conservation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intakes Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Intake Periods in New Zealand</h2>
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
                  <div className="font-bold text-gray-900">Research & Choose Program (12-18 months before)</div>
                  <div className="text-gray-600">Select universities and courses</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
                  <div className="text-gray-600">Academic transcripts, English tests, SOP</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Apply & Visa Process (4-6 months before)</div>
                  <div className="text-gray-600">University applications and student visa</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* English Requirements Section */}
        <section>
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
                  <span>Previous education in English medium (minimum 2 years)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Citizenship of English-speaking countries</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Completion of English pathway programs in NZ</span>
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
                  <span>Overall 5.5 for Student Visa (must meet university requirements)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">NZCEL</span>
                  </div>
                  <span>New Zealand Certificate in English Language accepted</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">Pathway</span>
                  </div>
                  <span>English language courses available for preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost of Living Section */}
        <section className='py-5'>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Cost of Living and Tuition Fees</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tuition Fees</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Undergraduate Programs</h4>
                  <div className="text-2xl font-bold text-green-600">$22,000 - $32,000 NZD/year</div>
                  <div className="text-gray-600">Arts: $22,000-28,000 • Science: $25,000-32,000 • Engineering: $30,000-40,000</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Postgraduate Programs</h4>
                  <div className="text-2xl font-bold text-green-600">$26,000 - $45,000 NZD/year</div>
                  <div className="text-gray-600">MBA: $40,000-55,000 • Engineering: $35,000-45,000 • Research: $7,000-10,000</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Living Expenses</h3>
              </div>
              <div className="space-y-">
                {livingCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-700">{cost.item}</span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.amount}</div>
                      <div className="text-sm text-gray-500">{cost.period}</div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold text-gray-900">Total Annual Living Cost</span>
                  <span className="font-bold text-green-600">$20,000 - $35,000 NZD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison by City</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Auckland</div>
                <div className="text-gray-700">$25,000 - $35,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Wellington</div>
                <div className="text-gray-700">$22,000 - $30,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Christchurch</div>
                <div className="text-gray-700">$20,000 - $28,000/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Dunedin</div>
                <div className="text-gray-700">$18,000 - $25,000/year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Opportunities Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Opportunities During Studies</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {workOptions.map((option, index) => (
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
                    <div className="text-sm text-gray-500">Hours</div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Work Regulations (Student Visa)</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Work Hours:</strong> Maximum 20 hours per week during study periods</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Full-time Work:</strong> During scheduled Christmas and New Year holidays</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Minimum Wage:</strong> $22.70 per hour (as of April 2023)</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yellow-600 mr-3" />
                <span><strong>Post-Study Work:</strong> 1-3 years depending on qualification level</span>
              </div>
            </div>
          </div>
        </section>

        {/* Visa & Application Process Section */}
        <section className='py-5'>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Visa and Application Process</h2>
          
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-3xl font-bold mb-4">Student Visa Requirements</h3>
              <p className="text-xl text-green-100">Essential documents and process for studying in New Zealand</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Required Documents</h4>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Offer of place from NZQA-approved institution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Proof of sufficient funds ($20,000 NZD/year)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Medical and chest X-ray certificates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    Police certificate (if over 17 and staying 2+ years)
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Application Process</h4>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-300 mr-2" />
                    Apply online through Immigration NZ website
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 text-yellow-300 mr-2" />
                    Application fee: $375 NZD
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-yellow-300 mr-2" />
                    Processing time: 20-25 working days
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-yellow-300 mr-2" />
                    Can include partner and dependent children
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Most student visas require health insurance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Some universities include insurance in fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Must cover entire duration of stay
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Emergency medical coverage required
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pathway to Residence</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Post-study work visa (1-3 years)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Skilled Migrant Category residence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Green List occupations priority
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Partner work rights available
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Post-Study Work Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Post-Study Work Opportunities</h2>
          
          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-3xl p-12 text-white mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4">Post-Study Work Visa (PSWV)</h3>
              <p className="text-xl text-blue-100">Work in New Zealand for 1-3 years after graduation</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Level 7 Qualification</h4>
                <div className="text-3xl font-bold mb-2">1 Year</div>
                <p className="text-blue-100">Bachelor's or Graduate Diploma</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Level 8+ Qualification</h4>
                <div className="text-3xl font-bold mb-2">3 Years</div>
                <p className="text-blue-100">Postgraduate Diploma or Master's</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Doctoral Degree</h4>
                <div className="text-3xl font-bold mb-2">3 Years</div>
                <p className="text-blue-100">PhD or equivalent</p>
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
                  Completed qualification in New Zealand
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Study duration minimum 30 weeks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Apply within 3 months of course end date
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Meet health and character requirements
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Application fee: $495 NZD
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Processing time: 2-4 months
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No job offer required
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Can work in any job, any hours
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
                  Gain New Zealand work experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pathway to Skilled Migrant Visa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Bring partner and dependent children
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Opportunity for permanent residency
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-bold text-gray-900">IT & Technology</div>
                <div className="text-gray-600">$65,000 - $120,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌾</div>
                <div className="font-bold text-gray-900">Agriculture</div>
                <div className="text-gray-600">$55,000 - $90,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-bold text-gray-900">Healthcare</div>
                <div className="text-gray-600">$70,000 - $130,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <div className="font-bold text-gray-900">Construction</div>
                <div className="text-gray-600">$60,000 - $100,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Scholarships in New Zealand</h2>
          
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
                    <div className="font-bold text-gray-900">Research and Identify Scholarships</div>
                    <div className="text-gray-600">Begin by researching New Zealand scholarships aligning with your academic goals</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">2</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Check Eligibility Criteria</div>
                    <div className="text-gray-600">Review eligibility criteria for potential New Zealand scholarships</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">3</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Prepare Required Documentation</div>
                    <div className="text-gray-600">Prepare essential documents—transcripts, recommendation letters, statement of purpose</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-green-700">4</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Submit Applications and Follow Up</div>
                    <div className="text-gray-600">Submit scholarship applications by deadlines and track application status</div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Demonstrate outstanding academic achievements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Meet the specific eligibility requirements set by the chosen university</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Admitted to elite universities, honoring exceptional academics and intellectual potential</span>
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
                For in-depth information on our New Zealand scholarships, eligibility criteria, and the application 
                process, enroll with Masters Visa Overseas Education Consultancy. Our dedicated team will guide 
                you through the intricacies of the scholarship application, ensuring you have the support you need 
                to turn your academic aspirations into a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={()=>navigate('/contact')} className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
                  Contact Us for New Zealand
                </button>
                
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default StudyNewZealandPage;