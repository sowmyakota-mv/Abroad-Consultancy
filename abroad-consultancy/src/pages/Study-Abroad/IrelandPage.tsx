import React from 'react';
import { 
  GraduationCap, Euro, Home, Briefcase, 
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Coffee, Music, Code, Microscope,
  Book, CloudRain, Beer
} from 'lucide-react';

const StudyIrelandPage: React.FC = () => {
  // Top Universities
  const topUniversities = [
    { name: 'Trinity College Dublin', rank: '#1', location: 'Dublin', type: 'Public', students: '18,000+' },
    { name: 'University College Dublin', rank: '#2', location: 'Dublin', type: 'Public', students: '33,000+' },
    { name: 'University College Cork', rank: '#3', location: 'Cork', type: 'Public', students: '21,000+' },
    { name: 'National University of Ireland, Galway', rank: '#4', location: 'Galway', type: 'Public', students: '19,000+' },
    { name: 'Dublin City University', rank: '#5', location: 'Dublin', type: 'Public', students: '17,000+' },
    { name: 'University of Limerick', rank: '#6', location: 'Limerick', type: 'Public', students: '16,000+' },
    { name: 'Maynooth University', rank: '#7', location: 'Maynooth', type: 'Public', students: '14,000+' },
    { name: 'Technological University Dublin', rank: '#8', location: 'Dublin', type: 'Public', students: '28,000+' },
  ];

  // Popular Courses
  const popularCourses = [
    { field: 'Computer Science & IT', universities: 'TCD, UCD, DCU', companies: 'Google, Facebook, Microsoft' },
    { field: 'Pharmaceutical Sciences', universities: 'UCC, TCD, UCD', companies: 'Pfizer, Johnson & Johnson' },
    { field: 'Business & Finance', universities: 'UCD, TCD, DCU', companies: 'Irish banks, multinationals' },
    { field: 'Engineering', universities: 'UCD, TCD, UL', companies: 'Intel, IBM, Medtronic' },
    { field: 'Literature & Humanities', universities: 'TCD, UCC, NUIG', companies: 'Publishing, media, education' },
    { field: 'Food Science & Agriculture', universities: 'UCD, UCC', companies: 'Kerry Group, Glanbia' },
  ];

  // Scholarships
  const scholarships = [
    { name: 'Government of Ireland Scholarships', amount: '€10,000-€24,000', eligibility: 'All nationalities', deadline: 'Mar 25, 2024' },
    { name: 'Trinity College Dublin Scholarships', amount: '€5,000-€10,000', eligibility: 'International students', deadline: 'Varies' },
    { name: 'UCD Global Scholarships', amount: '€3,000-€10,000', eligibility: 'Non-EU students', deadline: 'Apr 30, 2024' },
    { name: 'Sport Scholarships', amount: '€1,500-€5,000', eligibility: 'Athletes', deadline: 'Varies' },
    { name: 'Claddagh Scholarship Program', amount: '€2,000-€8,000', eligibility: 'US & Canadian students', deadline: 'Feb 15, 2024' },
  ];

  // Intakes
  const intakes = [
    { term: 'Autumn Semester', months: 'September - December', application: 'Nov - Jun', features: 'Main intake, all courses' },
    { term: 'Spring Semester', months: 'January - May', application: 'Aug - Nov', features: 'Limited courses' },
    { term: 'Summer Programs', months: 'June - August', application: 'Jan - Apr', features: 'Short courses, research' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.5', validity: '2 years' },
    { test: 'TOEFL iBT', undergraduate: '80-90', postgraduate: '90-100', validity: '2 years' },
    { test: 'PTE Academic', undergraduate: '63', postgraduate: '63-70', validity: '2 years' },
    { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-185', validity: 'Lifetime' },
    { test: 'Duolingo', undergraduate: '105-110', postgraduate: '110-120', validity: '2 years' },
  ];

  // Key Points
  const keyPoints = [
    { title: 'English-Speaking EU Country', description: 'Only English-speaking country in Eurozone', icon: <Globe className="h-6 w-6" /> },
    { title: 'Tech Hub of Europe', description: 'European HQ for Google, Facebook, Apple', icon: <Code className="h-6 w-6" /> },
    { title: 'Work Opportunities', description: '20 hours/week during studies', icon: <Briefcase className="h-6 w-6" /> },
    { title: 'Post-Study Work Visa', description: '2 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
    { title: 'Friendly Culture', description: 'Known for hospitality and warmth', icon: <Heart className="h-6 w-6" /> },
    { title: 'Rich Literary Heritage', description: 'Home to Nobel laureates in Literature', icon: <Book className="h-6 w-6" /> },
  ];

  // Cost of Living
  const livingCosts = [
    { item: 'Accommodation', amount: '€500 - €1,200', period: 'per month', notes: 'Dublin highest, other cities cheaper' },
    { item: 'Food & Groceries', amount: '€250 - €400', period: 'per month', notes: 'Supermarkets and eating out' },
    { item: 'Transportation', amount: '€100 - €150', period: 'per month', notes: 'Student Leap Card discounts' },
    { item: 'Utilities & Internet', amount: '€50 - €100', period: 'per month', notes: 'Electricity, heating, WiFi' },
    { item: 'Health Insurance', amount: '€45 - €120', period: 'per month', notes: 'Mandatory for non-EU students' },
    { item: 'Books & Materials', amount: '€75 - €150', period: 'per month', notes: 'Varies by course' },
  ];

  // Major Companies in Ireland
  const majorCompanies = [
    { name: 'Google', sector: 'Technology', headquarters: 'Dublin', employees: '8,000+' },
    { name: 'Facebook/Meta', sector: 'Technology', headquarters: 'Dublin', employees: '3,000+' },
    { name: 'Apple', sector: 'Technology', headquarters: 'Cork', employees: '6,000+' },
    { name: 'Microsoft', sector: 'Technology', headquarters: 'Dublin', employees: '2,000+' },
    { name: 'Intel', sector: 'Semiconductors', headquarters: 'Leixlip', employees: '5,000+' },
    { name: 'Pfizer', sector: 'Pharmaceuticals', headquarters: 'Dublin', employees: '4,000+' },
  ];

  return (
    <div id='study-abroad/ireland' className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 via-white to-orange-500 text-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🇮🇪</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎓</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-full mb-6">
              <div className="text-4xl">🇮🇪</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in Ireland
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Experience world-class education in Europe's tech hub, 
              with friendly culture, English-speaking environment, and excellent career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download Ireland Guide
              </button>
              <button className="bg-transparent border-2 border-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center">
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
              <div className="text-3xl font-bold text-green-700 mb-2">35,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">1,000+</div>
              <div className="text-gray-600">Multinational Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">#1</div>
              <div className="text-gray-600">EU for FDI per capita</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">2 Years</div>
              <div className="text-gray-600">Post-Study Work Visa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - All sections visible */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Study in Ireland - Complete Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ireland offers world-class education in an English-speaking EU country, 
              with vibrant culture, leading multinational companies, and excellent graduate employment rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '💻', title: 'Tech Hub', desc: 'European HQ for tech giants' },
              { icon: '🇪🇺', title: 'EU Country', desc: 'English-speaking EU member' },
              { icon: '🎓', title: 'Quality Education', desc: '7 universities in global rankings' },
              { icon: '🍀', title: 'Friendly Culture', desc: 'Warm hospitality and vibrant social life' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Ireland?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">#1</div>
                <div className="font-bold text-gray-900 mb-2">Globalized Economy</div>
                <div className="text-gray-600">Highest globalized economy in EU</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">90%</div>
                <div className="font-bold text-gray-900 mb-2">Graduate Employment</div>
                <div className="text-gray-600">Within 9 months of graduation</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">12.5%</div>
                <div className="font-bold text-gray-900 mb-2">Corporate Tax Rate</div>
                <div className="text-gray-600">Attracts multinational companies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ireland Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Study in Ireland?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Europe's Tech Hub</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Ireland is known as the "Silicon Valley of Europe" with European headquarters 
                for major tech companies like Google, Facebook, Apple, Microsoft, and Intel. 
                This creates unparalleled internship and employment opportunities for students.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>9 of top 10 global software companies in Ireland</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>16 of top 20 medical technology companies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>8 of top 10 global pharmaceutical companies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Irish Culture & Lifestyle</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Ireland is famous for its friendly people, rich literary heritage, 
                vibrant music scene, and welcoming atmosphere. Students enjoy a 
                high quality of life with beautiful landscapes and historic cities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-700 mb-2">#4</div>
                  <div className="text-gray-600">World's most peaceful country</div>
                </div>
                <div className="bg-white p-4 rounded-xl border">
                  <div className="text-2xl font-bold text-green-700 mb-2">4 Nobel</div>
                  <div className="text-gray-600">Literature laureates</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Irish Education Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-3">Ancient Universities</h4>
                <p className="text-gray-200">Trinity College Dublin founded in 1592</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔬</div>
                <h4 className="text-xl font-bold mb-3">Research Excellence</h4>
                <p className="text-gray-200">World-leading in ICT, biotech, and agriculture</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-3">Industry Links</h4>
                <p className="text-gray-200">Strong partnerships with multinational companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Advantages of Studying in Ireland</h2>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Irish Higher Education System</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">Universities</div>
                <div className="text-gray-700">7 universities offering comprehensive degree programs</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">Institutes of Technology</div>
                <div className="text-gray-700">14 IoTs offering technical and vocational education</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-700 mb-2">Colleges</div>
                <div className="text-gray-700">Private and specialized colleges</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in Ireland</h2>
          
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

          <div className="bg-gradient-to-r from-green-800 to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">University Groups & Rankings</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-xl font-bold mb-3">Trinity College Dublin</h4>
                <p className="text-gray-200">Ranked #1 in Ireland, top 100 globally</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Irish Universities Association</h4>
                <p className="text-gray-200">7 member universities promoting excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h4 className="text-xl font-bold mb-3">Research Funding</h4>
                <p className="text-gray-200">€800M+ annual research expenditure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses in Ireland</h2>
          
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
                    <span className="text-gray-700">Industry Partners</span>
                    <span className="font-bold">{course.companies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Average Duration</span>
                    <span className="font-bold">3-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Starting Salary</span>
                    <span className="font-bold text-green-600">€35,000 - €50,000</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique Study Fields in Ireland</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💊</div>
                <div className="font-bold text-gray-900 mb-2">Pharmaceutical Sciences</div>
                <div className="text-gray-600">World leader in pharmaceutical manufacturing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🍺</div>
                <div className="font-bold text-gray-900 mb-2">Brewing & Distilling</div>
                <div className="text-gray-600">Home to Guinness, Jameson, and Irish whiskey</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎵</div>
                <div className="font-bold text-gray-900 mb-2">Music & Performing Arts</div>
                <div className="text-gray-600">Rich musical heritage and vibrant scene</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intakes Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Intake Periods in Ireland</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                  index === 0 ? 'bg-green-100 text-green-700' :
                  index === 1 ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
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

          <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline for Ireland</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Research & Choose Course (12-18 months before)</div>
                  <div className="text-gray-600">Explore universities and programs through CAO or direct applications</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
                  <div className="text-gray-600">Personal statement, references, academic transcripts, English tests</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Apply & Visa Process (4-6 months before)</div>
                  <div className="text-gray-600">Submit applications, secure admission, apply for student visa</div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemptions</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Previous education taught entirely in English (minimum 2 years)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Nationals of majority English-speaking countries</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Completion of recognized foundation program in Ireland</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preparatory Programs</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">📚</span>
                  </div>
                  <span>International Foundation Year (IFY)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">🎓</span>
                  </div>
                  <span>Pre-Master's programs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">💬</span>
                  </div>
                  <span>English language preparation courses</span>
                </li>
              </ul>
            </div>
          </div>
        </section>     

        {/* Cost of Living Section - Continued from where it left off */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Cost of Living and Tuition Fees</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              {/* ... Tuition Fees content ... */}
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Monthly Living Expenses</h3>
              </div>
              <div className="space-y-4">
                {livingCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <div className="text-gray-700">{cost.item}</div>
                      <div className="text-sm text-gray-500">{cost.notes}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.amount}</div>
                      <div className="text-sm text-gray-500">{cost.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-orange-600 rounded-3xl p-12 text-white mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Financial Planning Tips</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-3">Student Budget</h4>
                <p className="text-gray-200">Plan €10,000-€15,000 per year for living expenses</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h4 className="text-xl font-bold mb-3">Bank Account</h4>
                <p className="text-gray-200">Open an Irish bank account upon arrival</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h4 className="text-xl font-bold mb-3">Student Discounts</h4>
                <p className="text-gray-200">Use student cards for transport, food, and entertainment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Scholarships for International Students</h2>
          
          <div className="space-y-6 mb-12">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
                    </div>
                    <div className="text-gray-600">Eligibility: {scholarship.eligibility}</div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="text-2xl font-bold text-green-700 mb-2">{scholarship.amount}</div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Deadline: {scholarship.deadline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Early Applications</div>
                    <div className="text-gray-600">Apply 6-12 months before deadlines</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Strong Personal Statement</div>
                    <div className="text-gray-600">Highlight achievements and goals</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Academic Excellence</div>
                    <div className="text-gray-600">Maintain high GPA and test scores</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Extra-curricular Activities</div>
                    <div className="text-gray-600">Show leadership and community involvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Companies Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Major Companies in Ireland</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {majorCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <div className="text-gray-600">{company.sector}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Headquarters</span>
                    <span className="font-bold">{company.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Employees</span>
                    <span className="font-bold">{company.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Student Programs</span>
                    <span className="font-bold text-green-600">Internships & Graduate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-800 to-orange-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Career Opportunities in Ireland</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-bold mb-3">Work During Studies</h4>
                <p className="text-gray-200">20 hours/week during term, 40 hours/week during holidays</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold mb-3">Graduate Employment</h4>
                <p className="text-gray-200">90% find employment within 9 months of graduation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🇪🇺</div>
                <h4 className="text-xl font-bold mb-3">EU Work Rights</h4>
                <p className="text-gray-200">Work anywhere in the EU after Irish education</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Life Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Student Life in Ireland</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Music className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cultural Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-green-600">🎵</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Traditional Music</div>
                    <div className="text-gray-600">Live sessions in pubs across the country</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-green-600">🏛️</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Historic Sites</div>
                    <div className="text-gray-600">Castles, ancient ruins, and heritage centers</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-green-600">🎭</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Festivals</div>
                    <div className="text-gray-600">St. Patrick's Day, Galway Arts Festival, and more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Campus Life</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">🤝</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Student Societies</div>
                    <div className="text-gray-600">200+ clubs and societies in major universities</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">⚽</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Sports Facilities</div>
                    <div className="text-gray-600">GAA, rugby, soccer, and fitness centers</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-orange-600">📚</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Library Access</div>
                    <div className="text-gray-600">24/7 access to extensive digital and physical collections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-4">🍀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Irish Hospitality</h3>
              <p className="text-gray-600">Famous for friendly locals and welcoming atmosphere</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Community</h3>
              <p className="text-gray-600">Diverse student population from 160+ countries</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vibrant Cities</h3>
              <p className="text-gray-600">Modern amenities with rich historical heritage</p>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Application Process</h2>
          
          <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-3xl p-12 text-white mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Step-by-Step Guide</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold">1</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Choose Course</h4>
                <p className="text-gray-200">Select program and university</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold">2</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Check Requirements</h4>
                <p className="text-gray-200">Academic and English requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold">3</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Prepare Documents</h4>
                <p className="text-gray-200">Transcripts, personal statement, references</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold">4</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Apply for Visa</h4>
                <p className="text-gray-200">Submit visa application with required documents</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Academic transcripts and certificates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>English proficiency test scores</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Personal statement or statement of purpose</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Letters of recommendation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>CV/Resume</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Copy of passport</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Letter of acceptance from Irish institution</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Proof of sufficient funds (€7,000-€10,000)</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Medical insurance coverage</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Academic qualifications</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Proof of English proficiency</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Passport-sized photographs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-green-700 to-orange-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Irish Education Journey Today!</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of international students experiencing world-class education 
              in Ireland's welcoming and innovative environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Admissions Team
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-gray-200">
              <p className="text-sm">Email: admissions@studyireland.edu.ie | Phone: +353 1 234 5678</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Study Ireland</h3>
              <p className="text-gray-400">
                Your comprehensive guide to studying in Ireland. 
                Find the perfect course, university, and start your journey today.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Universities</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Scholarships</a></li>
                <li><a href="#" className="hover:text-white">Application Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Cost Calculator</a></li>
                <li><a href="#" className="hover:text-white">Visa Guide</a></li>
                <li><a href="#" className="hover:text-white">Accommodation</a></li>
                <li><a href="#" className="hover:text-white">Student Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@studyireland.edu.ie
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +353 1 234 5678
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Dublin, Ireland
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Study Ireland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyIrelandPage;