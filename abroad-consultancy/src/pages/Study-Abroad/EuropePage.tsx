// import React from 'react';
// import { 
//   GraduationCap, Euro, Home, Briefcase, 
//   Award, Globe, Users, Calendar, BookOpen,
//   CheckCircle, Clock, MapPin, Star,
//   ChevronRight, Search, Download, Phone,
//   Mail, MessageSquare, Shield, Target,
//   Trophy, TrendingUp, Building, Heart,
//   Train, Plane, Globe2, Languages,
//   Compass, Zap, Castle, Coffee
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyEuropePage: React.FC = () => {
//     const navigate=useNavigate()
//   // Top Universities
//   const topUniversities = [
//     { name: 'University of Oxford', rank: '#1', location: 'UK', type: 'Public', students: '24,000+' },
//     { name: 'University of Cambridge', rank: '#2', location: 'UK', type: 'Public', students: '23,000+' },
//     { name: 'ETH Zurich', rank: '#3', location: 'Switzerland', type: 'Public', students: '22,000+' },
//     { name: 'Imperial College London', rank: '#4', location: 'UK', type: 'Public', students: '19,000+' },
//     { name: 'University College London', rank: '#5', location: 'UK', type: 'Public', students: '43,000+' },
//     { name: 'University of Edinburgh', rank: '#6', location: 'UK', type: 'Public', students: '40,000+' },
//     { name: 'Sorbonne University', rank: '#7', location: 'France', type: 'Public', students: '55,000+' },
//     { name: 'Technical University of Munich', rank: '#8', location: 'Germany', type: 'Public', students: '50,000+' },
//   ];

//   // Popular Countries
//   const popularCountries = [
//     { name: 'Germany', students: '350,000+', tuition: 'Low/Free', language: 'German/English' },
//     { name: 'France', students: '300,000+', tuition: '€3,000-€10,000', language: 'French/English' },
//     { name: 'Netherlands', students: '85,000+', tuition: '€8,000-€20,000', language: 'Dutch/English' },
//     { name: 'Italy', students: '100,000+', tuition: '€1,000-€4,000', language: 'Italian/English' },
//     { name: 'Spain', students: '75,000+', tuition: '€1,000-€5,000', language: 'Spanish/English' },
//     { name: 'Sweden', students: '40,000+', tuition: '€9,000-€15,000', language: 'Swedish/English' },
//   ];

//   // Scholarships
//   const scholarships = [
//     { name: 'Erasmus+ Programme', amount: 'Full funding + grants', eligibility: 'All EU countries', deadline: 'Mar 31, 2024' },
//     { name: 'DAAD Scholarships', amount: '€850-€1,200/month', eligibility: 'International students', deadline: 'Varies' },
//     { name: 'Eiffel Excellence Scholarship', amount: 'Full tuition + stipend', eligibility: 'Master/PhD students', deadline: 'Jan 10, 2024' },
//     { name: 'Swiss Government Excellence', amount: 'Full funding', eligibility: 'Research students', deadline: 'Varies' },
//     { name: 'Netherlands Orange Tulip', amount: '€5,000-€25,000', eligibility: 'Non-EU students', deadline: 'Apr 1, 2024' },
//   ];

//   // Intakes
//   const intakes = [
//     { term: 'Winter Semester', months: 'September - February', application: 'Dec - Jul', features: 'Main intake, most courses' },
//     { term: 'Summer Semester', months: 'March - July', application: 'Sep - Jan', features: 'Limited courses available' },
//     { term: 'Rolling Admissions', months: 'Varies', application: 'Year-round', features: 'Some universities/programs' },
//   ];

//   // Language Requirements
//   const languageRequirements = [
//     { language: 'English', test: 'IELTS/TOEFL', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0' },
//     { language: 'German', test: 'TestDaF/DSH', level: 'B2-C1', courses: 'Most German programs' },
//     { language: 'French', test: 'DELF/DALF', level: 'B2-C1', courses: 'French-taught programs' },
//     { language: 'Spanish', test: 'DELE', level: 'B2-C1', courses: 'Spanish-taught programs' },
//   ];

//   // Key Points
//   const keyPoints = [
//     { title: 'Diverse Academic Options', description: '30,000+ programs across Europe', icon: <BookOpen className="h-6 w-6" /> },
//     { title: 'Cultural Diversity', description: '44 countries with unique cultures', icon: <Globe2 className="h-6 w-6" /> },
//     { title: 'Multilingual Environment', description: '24 official EU languages', icon: <Languages className="h-6 w-6" /> },
//     { title: 'Easy Travel', description: 'Border-free Schengen area', icon: <Train className="h-6 w-6" /> },
//     { title: 'Affordable Education', description: 'Low/Free tuition in many countries', icon: <Euro className="h-6 w-6" /> },
//     { title: 'Research Excellence', description: 'World-leading research institutions', icon: <Zap className="h-6 w-6" /> },
//   ];

//   // Popular Courses
//   const popularCourses = [
//     { field: 'Engineering & Technology', countries: 'Germany, Switzerland, Netherlands' },
//     { field: 'Business & Management', countries: 'UK, France, Spain' },
//     { field: 'Arts & Humanities', countries: 'Italy, France, UK' },
//     { field: 'Medicine & Health Sciences', countries: 'Germany, UK, Sweden' },
//   ];

//   // Cost of Living Breakdown
//   const livingCosts = [
//     { country: 'Germany', amount: '€850 - €1,200', period: 'per month' },
//     { country: 'France', amount: '€900 - €1,400', period: 'per month' },
//     { country: 'Netherlands', amount: '€1,000 - €1,500', period: 'per month' },
//     { country: 'Italy', amount: '€700 - €1,100', period: 'per month' },
//     { country: 'Spain', amount: '€650 - €1,000', period: 'per month' },
//     { country: 'Sweden', amount: '€850 - €1,300', period: 'per month' },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
// <section className="relative h-[44vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
//     style={{
//       backgroundImage: "url('/europe-bghero.png')",
//       backgroundSize: "100% auto" // ✅ shows full image
//     }}
//   >
//     {/* Optional Overlay */}
//     {/* <div className="absolute inset-0 bg-black/30"></div> */}

//     {/* Bottom Curve (part of hero bg) */}
//   {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//     <svg
//       viewBox="0 0 1000 100"
//       preserveAspectRatio="none"
//       className="relative block w-full h-[100px]"
//     >
//       <path
//         d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
//         className="fill-white"
//       ></path>
//     </svg>
//   </div> */}
//   </div>
  
//   {/* Content */}
//   <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
//   <div className="max-w-xl text-center md:text-left">
//     <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 max-w-3xl">
//   Study in <br />
//   <span className="block ml-16 mt-4">Europe</span>
// </h1>
//   </div>
// </div>
//   </section>

//       {/* Quick Stats */}
//       <section className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-900 mb-2">44</div>
//               <div className="text-gray-600">Countries to Choose From</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-900 mb-2">1.8M+</div>
//               <div className="text-gray-600">International Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-900 mb-2">24</div>
//               <div className="text-gray-600">Official Languages</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-900 mb-2">30,000+</div>
//               <div className="text-gray-600">Academic Programs</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content - All sections visible without navigation */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-16"> */}
        
//         {/* Overview Section */}
//           <section className="scroll-mt-20">
//   <div className="flex justify-center mt-12 sm:mt-12 w-[80%] mx-auto ">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-4 md:p-4 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center ">
//         <h2 className="text-4xl font-bold text-gray-900 ">Study in Europe - Complete Overview</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//           Europe offers unparalleled academic diversity, cultural richness, and historic excellence 
//               across 44 countries, providing students with a truly global education experience.
//             </p>
//         </div>
//         <div className="mt-2 md:mt-2">
//           <button onClick={()=>navigate('/contact')} className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-md md:text-lg hover:shadow-2xl transition-all hover:scale-105">
//             Check Your Eligibility
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

//           <div className="w-[92%] mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             {[
//               { icon: '🏛️', title: 'Historic Universities', desc: 'Founded as early as 1088 AD' },
//               { icon: '🌍', title: 'Cultural Diversity', desc: 'Experience 44 different cultures' },
//               { icon: '🚆', title: 'Easy Travel', desc: 'Border-free Schengen area' },
//               { icon: '💰', title: 'Affordable', desc: 'Low/Free tuition in many countries' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <div className="font-bold text-gray-900 mb-2">{item.title}</div>
//                 <div className="text-gray-600">{item.desc}</div>
//               </div>
//             ))}
//           </div>

//           <div className="w-[92%] mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Europe?</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">#1</div>
//                 <div className="font-bold text-gray-900 mb-2">Global Education Hub</div>
//                 <div className="text-gray-600">Home to world's oldest and most prestigious universities</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
//                 <div className="font-bold text-gray-900 mb-2">Ranked Universities</div>
//                 <div className="text-gray-600">In QS and THE World University Rankings</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">€80B+</div>
//                 <div className="font-bold text-gray-900 mb-2">Research Funding</div>
//                 <div className="text-gray-600">Annual investment in research and innovation</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Europe Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Why Study in Europe?</h2>
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                   <BookOpen className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Diverse Academic Opportunities</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 One of the foremost attractions for international students in Europe is the diverse range 
//                 of academic opportunities. Whether you aspire to delve into the arts, sciences, engineering, 
//                 or business, European universities offer a multitude of programs at various levels of study.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>30,000+ academic programs across all disciplines</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Flexible education systems with multiple entry points</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Bologna Process ensures degree compatibility across Europe</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
//                   <Globe2 className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Cultural Diversity</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Europe is a melting pot of cultures, each country boasting its own distinct traditions, 
//                 history, and way of life. Studying in Europe provides international students with the 
//                 opportunity to immerse themselves in this cultural diversity.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-blue-600 mb-2">44</div>
//                   <div className="text-gray-600">Unique Countries</div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-blue-600 mb-2">2000+</div>
//                   <div className="text-gray-600">Years of History</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-8 text-center">European Education Advantages</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🏛️</div>
//                 <h4 className="text-xl font-bold mb-3">Historic Excellence</h4>
//                 <p className="text-gray-300">World's oldest universities with centuries of academic tradition</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🌐</div>
//                 <h4 className="text-xl font-bold mb-3">Global Recognition</h4>
//                 <p className="text-gray-300">Degrees recognized and respected worldwide</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🎯</div>
//                 <h4 className="text-xl font-bold mb-3">Innovation Hub</h4>
//                 <p className="text-gray-300">Leading in research, technology, and sustainable development</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Key Points Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Key Advantages of Studying in Europe</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {keyPoints.map((point, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
//                 <div className="text-blue-600 mb-4">{point.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
//                 <p className="text-gray-600">{point.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-blue-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">European Higher Education Area</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">Bologna Process</div>
//                 <div className="text-gray-700">Standardized 3-cycle degree system (Bachelor, Master, PhD)</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">ECTS Credits</div>
//                 <div className="text-gray-700">European Credit Transfer System for easy mobility</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-blue-600 mb-2">Diploma Supplement</div>
//                 <div className="text-gray-700">Free document explaining degree for employers worldwide</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Popular Countries Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Popular Study Destinations in Europe</h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {popularCountries.map((country, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                     <div className="text-2xl">
//                       {country.name === 'Germany' && '🇩🇪'}
//                       {country.name === 'France' && '🇫🇷'}
//                       {country.name === 'Netherlands' && '🇳🇱'}
//                       {country.name === 'Italy' && '🇮🇹'}
//                       {country.name === 'Spain' && '🇪🇸'}
//                       {country.name === 'Sweden' && '🇸🇪'}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
//                     <div className="text-gray-600">{country.students} international students</div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Annual Tuition</span>
//                     <span className="font-bold">{country.tuition}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Teaching Language</span>
//                     <span className="font-bold">{country.language}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Popular For</span>
//                     <span className="font-bold text-blue-600">View Programs</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fee Comparison</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-green-600 mb-2">Free</div>
//                 <div className="font-bold text-gray-900 mb-2">Germany & Norway</div>
//                 <div className="text-gray-600">Public universities (semester fee: €150-€300)</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-yellow-600 mb-2">Low Cost</div>
//                 <div className="font-bold text-gray-900 mb-2">Italy, Spain, France</div>
//                 <div className="text-gray-600">€1,000 - €5,000 per year</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">Moderate</div>
//                 <div className="font-bold text-gray-900 mb-2">Netherlands, Sweden, Ireland</div>
//                 <div className="text-gray-600">€8,000 - €20,000 per year</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Intakes Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Intake Periods in Europe</h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {intakes.map((intake, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//                 <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
//                   index === 0 ? 'bg-blue-100 text-blue-700' :
//                   index === 1 ? 'bg-purple-100 text-purple-700' :
//                   'bg-green-100 text-green-700'
//                 }`}>
//                   <Calendar className="h-4 w-4 mr-2" />
//                   {intake.term}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{intake.months}</h3>
//                 <div className="mb-4">
//                   <div className="text-sm text-gray-500 mb-2">Application Period</div>
//                   <div className="font-medium">{intake.application}</div>
//                 </div>
//                 <div className="text-gray-600">{intake.features}</div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline for Europe</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Research & Choose Country (12-18 months before)</div>
//                   <div className="text-gray-600">Consider language, costs, and program availability</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
//                   <div className="text-gray-600">Language tests, transcripts, motivation letters</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Apply & Visa Process (3-6 months before)</div>
//                   <div className="text-gray-600">University applications and student visa</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Languages Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Language Options in Europe</h2>
          
//           <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Language</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Proficiency Test</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Required Level</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Program Availability</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {languageRequirements.map((lang, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="py-4 px-6 font-medium">{lang.language}</td>
//                     <td className="py-4 px-6">{lang.test}</td>
//                     <td className="py-4 px-6">{lang.level || lang.undergraduate}</td>
//                     <td className="py-4 px-6">{lang.courses || 'Available'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">English-Taught Programs</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Netherlands:</strong> 2,000+ English-taught programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Germany:</strong> 1,800+ English-taught programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Sweden:</strong> 900+ English-taught programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Denmark:</strong> 700+ English-taught programs</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-purple-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Language Learning Opportunities</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-purple-600">🇫🇷</span>
//                   </div>
//                   <span>Free language courses at many universities</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-purple-600">🇩🇪</span>
//                   </div>
//                   <span>Language preparation courses before degree programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-purple-600">🇪🇸</span>
//                   </div>
//                   <span>Language exchange programs with local students</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Top Universities Section */}
//         {/* <section>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in Europe</h2>
          
//           <div className="space-y-6 mb-12">
//             {topUniversities.map((uni, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                   <div className="flex items-center mb-4 md:mb-0">
//                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                       <div className="text-blue-700 font-bold">{uni.rank}</div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
//                       <div className="flex items-center text-gray-600 mt-1">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         {uni.location} • {uni.type} • {uni.students} students
//                       </div>
//                     </div>
//                   </div>
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-6 text-center">University Groups & Networks</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🎓</div>
//                 <h4 className="text-xl font-bold mb-3">League of European Research Universities (LERU)</h4>
//                 <p className="text-gray-300">23 leading research-intensive universities promoting research quality</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🏛️</div>
//                 <h4 className="text-xl font-bold mb-3">Coimbra Group</h4>
//                 <p className="text-gray-300">39 long-established European universities with strong academic traditions</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🌍</div>
//                 <h4 className="text-xl font-bold mb-3">Utrecht Network</h4>
//                 <p className="text-gray-300">31 European universities promoting internationalization and cooperation</p>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* Cost of Living Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Cost of Living in European Countries</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                   <Euro className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Monthly Living Costs</h3>
//               </div>
//               <div className="space-y-4">
//                 {livingCosts.map((cost, index) => (
//                   <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <span className="text-gray-700">{cost.country}</span>
//                     <div className="text-right">
//                       <div className="font-bold text-gray-900">{cost.amount}</div>
//                       <div className="text-sm text-gray-500">{cost.period}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
//                   <Home className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Cost Breakdown (Monthly)</h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Accommodation</span>
//                   <span className="font-bold">€300 - €600</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Food & Groceries</span>
//                   <span className="font-bold">€200 - €350</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Transportation</span>
//                   <span className="font-bold">€40 - €100</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Health Insurance</span>
//                   <span className="font-bold">€30 - €100</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Study Materials</span>
//                   <span className="font-bold">€50 - €100</span>
//                 </div>
//                 <div className="flex justify-between border-t pt-2">
//                   <span className="font-bold text-gray-900">Total Range</span>
//                   <span className="font-bold text-blue-600">€650 - €1,500</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-green-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Discounts & Savings</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🚆</div>
//                 <div className="font-bold text-gray-900 mb-2">Transport Discounts</div>
//                 <div className="text-gray-600">50-75% off on trains, buses, and metros</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🎭</div>
//                 <div className="font-bold text-gray-900 mb-2">Cultural Activities</div>
//                 <div className="text-gray-600">Free/reduced museum, theater, and cinema tickets</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🍕</div>
//                 <div className="font-bold text-gray-900 mb-2">Food & Restaurants</div>
//                 <div className="text-gray-600">Student discounts at university cafeterias and partner restaurants</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Work Rights Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Work Opportunities During Studies</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {[
//               { role: 'Part-time Jobs', hours: '10-20 hrs/week', pay: '€10-€15/hour', type: 'Flexible hours' },
//               { role: 'Internships', hours: '20-40 hrs/week', pay: '€15-€25/hour', type: 'Industry experience' },
//               { role: 'Research Assistant', hours: '10-15 hrs/week', pay: '€12-€20/hour', type: 'Academic research' },
//               { role: 'On-campus Jobs', hours: '10-15 hrs/week', pay: '€9-€12/hour', type: 'University positions' },
//             ].map((option, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                     <Briefcase className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{option.role}</h3>
//                     <div className="text-gray-600 text-sm">{option.type}</div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <div className="text-sm text-gray-500">Hours/Week</div>
//                     <div className="font-bold text-gray-900">{option.hours}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Average Pay</div>
//                     <div className="font-bold text-gray-900">{option.pay}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Regulations by Country</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Germany:</strong> 120 full days or 240 half days per year</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>France:</strong> 964 hours per year (approx. 60% of full-time)</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Netherlands:</strong> 16 hours per week or full-time during June-August</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Sweden:</strong> No limit during studies, must not interfere with studies</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Quality of Life Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Quality of Life in Europe</h2>
          
//           <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
//             <div className="text-center mb-8">
//               <div className="text-5xl mb-4">🏛️</div>
//               <h3 className="text-3xl font-bold mb-4">Europe's High Quality of Life</h3>
//               <p className="text-xl text-green-100">Safe, efficient, and culturally rich environments for students</p>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Safety & Security</h4>
//                 <ul className="space-y-2 text-green-100">
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Low crime rates across most European countries
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Excellent healthcare systems with universal coverage
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Political stability and democratic societies
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Cultural & Recreational</h4>
//                 <ul className="space-y-2 text-green-100">
//                   <li className="flex items-center">
//                     <Castle className="h-4 w-4 text-yellow-300 mr-2" />
//                     Rich historical heritage and architectural marvels
//                   </li>
//                   <li className="flex items-center">
//                     <Coffee className="h-4 w-4 text-yellow-300 mr-2" />
//                     Vibrant cafe culture and social life
//                   </li>
//                   <li className="flex items-center">
//                     <Compass className="h-4 w-4 text-yellow-300 mr-2" />
//                     Easy access to nature, beaches, and mountains
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
//                 <Heart className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Systems</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Mandatory health insurance for all students
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   High-quality public and private hospitals
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   University health centers on campus
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//                 <Train className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Efficient public transport systems
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Student discounts on transport passes
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Easy inter-country travel with Schengen visa
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Student Support</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   International student offices
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Language support services
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Career counseling and job placement
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Post-Study Work Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Post-Graduation Work Opportunities</h2>
          
//           <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-6 text-white mb-12">
//             <div className="text-center mb-8">
//               <div className="text-5xl mb-4">🎓</div>
//               <h3 className="text-3xl font-bold mb-4">Post-Study Work Permits in Europe</h3>
//               <p className="text-xl text-blue-100">Stay and work in Europe after completing your studies</p>
//             </div>
            
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                 <h4 className="text-xl font-bold mb-4">Germany</h4>
//                 <div className="text-3xl font-bold mb-2">18 Months</div>
//                 <p className="text-blue-100">Job seeker visa after graduation</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                 <h4 className="text-xl font-bold mb-4">Netherlands</h4>
//                 <div className="text-3xl font-bold mb-2">1 Year</div>
//                 <p className="text-blue-100">Orientation year for graduates</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                 <h4 className="text-xl font-bold mb-4">Sweden</h4>
//                 <div className="text-3xl font-bold mb-2">1 Year</div>
//                 <p className="text-blue-100">Extended residency for job seeking</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
//                 <CheckCircle className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Completed degree from European institution
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Valid health insurance coverage
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Sufficient financial means
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Clean criminal record
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//                 <Euro className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Application Process</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Apply before student visa expires
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Application fees: €50-€200
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Processing time: 1-3 months
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   May require job offer for extension
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
//                 <TrendingUp className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Gaining European work experience
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Pathway to permanent residency
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Improved career prospects
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Network building opportunities
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Sectors for Graduates</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💻</div>
//                 <div className="font-bold text-gray-900">IT & Tech</div>
//                 <div className="text-gray-600">€45,000 - €80,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏥</div>
//                 <div className="font-bold text-gray-900">Healthcare</div>
//                 <div className="text-gray-600">€50,000 - €90,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏗️</div>
//                 <div className="font-bold text-gray-900">Engineering</div>
//                 <div className="text-gray-600">€48,000 - €85,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">📊</div>
//                 <div className="font-bold text-gray-900">Business</div>
//                 <div className="text-gray-600">€42,000 - €75,000</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Popular Courses Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Popular Courses in Europe</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {popularCourses.map((course, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                     <BookOpen className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{course.field}</h3>
//                     <div className="text-gray-600">Top countries: {course.countries}</div>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Average Duration</span>
//                     <span className="font-bold">3-4 years</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Annual Tuition</span>
//                     <span className="font-bold">€1,000 - €15,000</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Career Prospects</span>
//                     <span className="font-bold">Excellent</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Emerging Study Fields in Europe</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🌱</div>
//                 <div className="font-bold text-gray-900 mb-2">Sustainable Development</div>
//                 <div className="text-gray-600">EU focus on green technology and sustainability</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🤖</div>
//                 <div className="font-bold text-gray-900 mb-2">Artificial Intelligence</div>
//                 <div className="text-gray-600">Leading AI research hubs across Europe</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💊</div>
//                 <div className="font-bold text-gray-900 mb-2">Biotechnology</div>
//                 <div className="text-gray-600">Strong focus on medical research and innovation</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Scholarships Section */}
//         <section className=''>
//           <h2 className="text-4xl font-bold text-gray-900 mt-8 w-[92%] mx-auto ">Scholarships in Europe</h2>
          
//           {/* <div className="space-y-6 mb-12">
//             {scholarships.map((scholarship, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                   <div className="mb-4 md:mb-0">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
//                     <div className="flex flex-wrap gap-4">
//                       <div className="flex items-center text-gray-600">
//                         <Euro className="h-4 w-4 mr-1" />
//                         {scholarship.amount}
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <Users className="h-4 w-4 mr-1" />
//                         {scholarship.eligibility}
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <Calendar className="h-4 w-4 mr-1" />
//                         Deadline: {scholarship.deadline}
//                       </div>
//                     </div>
//                   </div>
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div> */}

//           <div className="grid md:grid-cols-2 gap-8 mb-12 w-[92%] mx-auto py-5">
//             <div className="bg-blue-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Categories</h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Government Scholarships</h4>
//                   <div className="text-gray-600">European nations provide government-sponsored scholarships, covering tuition, living, and travel expenses</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Institutional Scholarships</h4>
//                   <div className="text-gray-600">Universities offer a range of scholarships, fostering academic excellence and diversity</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Erasmus+ Programme</h4>
//                   <div className="text-gray-600">Supports education, training, youth, and sport, offering scholarships for international students</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Research Scholarships</h4>
//                   <div className="text-gray-600">Innovative scholarships supporting international students in pioneering research</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-purple-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Evidenced superior academic prowess through consistently high grades and exemplary achievements</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Meet language proficiency requirements (English or European languages)</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Fulfill any specific criteria outlined by the individual scholarship program</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Demonstrate leadership potential and community involvement</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-12 text-white">
//             <div className="text-center">
//               <h3 className="text-xl md:text-3xl font-bold mb-6">Study in Europe</h3>
//               <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
//                 Enroll with Masters Visa for More Details. Navigating the scholarship landscape and the 
//                 European education system can be complex, but with the support of Masters Visa Overseas 
//                 Education Consultancy, you gain access to valuable insights, personalized guidance, 
//                 and a streamlined application process.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button onClick={()=>navigate('/contact')} className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
//                   Contact Us for Europe
//                 </button>
                
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//   );
// };

// export default StudyEuropePage;




import React from 'react';
import {
  GraduationCap, PoundSterling, Home, Briefcase,
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  MapPinned,
  BriefcaseBusiness,
  Landmark,
  PlaneTakeoff,
  Subtitles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyEuropePage: React.FC = () => {
    const navigate=useNavigate()
  
  // Major Benefits
  const majorBenefits = [
    {
      title: 'Master Global Standards',
      description: 'Home to the world’s oldest and most prestigious universities. Benefit from the Bologna Process, ensuring your degree is recognized and respected across the globe.',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'The Borderless Advantage',
      description: 'Your student visa is a gateway. Study in one country and explore the entire Schengen Area with ease, gaining exposure to dozens of cultures and languages.',
      icon: <PlaneTakeoff className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Global Career Gateway',
      description: 'Gain access to a powerhouse economy. Many European nations offer post-study work visas, connecting you to leading global firms in tech, finance, and the arts.',
      icon: <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Historic & Vibrant Lifestyle',
      description: 'Experience an unparalleled lifestyle. From Mediterranean coasts to Alpine peaks, Europe offers high safety standards, world-class healthcare, and vibrant social scenes.',
      icon: <Landmark className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'September (Fall)', duration: 'Primary Intake', application: 'November to July (Best for Scholarships)' },
    { id: 2, term: 'January (Winter)', duration: 'Secondary Intake', application: 'June to September' },
    { id: 3, term: 'May (Spring)', duration: 'Limited Intake', application: 'October to January' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS Academic', requirement: '6.0 – 7.0 Overall', Subtitle: 'The gold standard across Europe. Most bachelors programs require a 6.0, while master’s degrees often look for 6.5 or higher.' },
    { test: 'TOEFL iBT', requirement: '85 – 95',Subtitle: 'Widely recognized by research universities and business schools. Higher scores are generally required for competitive English-taught programs.' },
    { test: 'PTE Academic', requirement: '59 – 65', Subtitle: 'A fast, computer-based alternative gaining massive popularity in countries like Germany, France, and Finland for its quick results.' },
    { test: 'Cambridge English', requirement: '170 - 185 (B2/C1)', Subtitle: 'Highly regarded in Europe. Unlike other tests, Cambridge certifications (B2 First or C1 Advanced) often never expire.' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Smart Shortlisting', description: 'We dont just guess; we match your academic profile with high-value scholarships (University-specific, Government, and Private) where you have the highest chance of winning.' },
    { step: 2, title: 'Essay Strategy', description: 'Scholarship essays are different from admission SOPs. Our editors help you craft a compelling narrative that highlights your leadership and merit to the committee.' },
    { step: 3, title: 'Document Perfection', description: 'A single missing document can lead to rejection. We meticulously review your transcripts, recommendation letters, and financial proofs before submission.' },
    { step: 4, title: 'Interview Prep', description: 'For prestigious awards (like Chevening or Commonwealth), we conduct mock interviews to ensure you can articulate your vision and goals confidently.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/europe-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl">
  Study in Europe<br />
  {/* <span className="block ml-12 sm:ml-12 md:ml-16 lg:ml-16 mt-2">United Kingdom</span> */}
</h1>
  </div>
</div>
</section>

        {/* Study in UK - Overview */}
       <section className="w-[80%] mx-auto scroll-mt-20">
  <div className="flex justify-center py-5 mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8  border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the Europe</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
           Europe is more than a study destination it’s a gateway to global careers. Home to world-class universities, internationally 
           recognized degrees, and innovative teaching approaches, Europe offers high academic standards with flexible and often shorter 
           program durations. Its rich cultural diversity and strong industry connections equip students with the skills and global exposure 
           needed to succeed in the international job market. We guide you through university admissions, scholarships, and visa processes, ensuring 
           a smooth and confident transition to your European education journey.</p></div>
        <div className="mt-2">
          <button onClick={()=>navigate('/contact')} className="bg-purple-700 md:bg-[#FB8234] text-white font-semibold rounded-4xl shadow md:hover:bg-[#FF6603] hover:bg-purple-800 text-white px-6 md:px-8 py-3 md:py-4  font-bold text-med md:text-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            Check My Eligibility
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Major Benefits */}
        <section className=''>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the Europe for Your Education?</h2>
  <div className="w-[92%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
    {majorBenefits.map((benefit, index) => {
      // Define different light colors for each card
      const cardColors = [
        'bg-blue-50 border-blue-100 hover:border-blue-300', // Blue theme
        'bg-green-50 border-green-100 hover:border-green-300', // Green theme
        // 'bg-purple-50 border-purple-100 hover:border-purple-300', // Purple theme
        // 'bg-orange-50 border-orange-100 hover:border-orange-300', // Orange theme
        'bg-cyan-50 border-cyan-100 hover:border-cyan-300', // Cyan theme
        // 'bg-pink-50 border-pink-100 hover:border-pink-300', // Pink theme
        // 'bg-amber-50 border-amber-100 hover:border-amber-300', // Amber theme
        'bg-indigo-50 border-indigo-100 hover:border-indigo-300', // Indigo theme
      ];

      const iconColors = [
        'bg-blue-100 text-blue-600', // Blue icon
        'bg-green-100 text-green-600', // Green icon
        // 'bg-purple-100 text-purple-600', // Purple icon
        // 'bg-orange-100 text-orange-600', // Orange icon
        'bg-cyan-100 text-cyan-600', // Cyan icon
        // 'bg-pink-100 text-pink-600', // Pink icon
        // 'bg-amber-100 text-amber-600', // Amber icon
        'bg-indigo-100 text-indigo-600', // Indigo icon
      ];

      const colorIndex = index % cardColors.length;
      
      return (
        <div 
          key={index} 
          className={`rounded-xl p-4 ${cardColors[colorIndex]} hover:shadow-xl transition-all h-full flex flex-col`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 md:w-16 md:h-14 rounded-2xl flex items-center justify-center ${iconColors[colorIndex]}`}>
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {benefit.title}
            </h3>
          </div>
          <p className="text-sm text-gray-700 flex-grow">{benefit.description}</p>
        </div>
      );
    })}
  </div>
</section>

        {/* Intakes in the UK */}
<section className="bg-gray-100 w-full min-h-screen py-5 md:py-5 mt-12">
  <div className="w-[92%] mx-auto ">
    
    {/* Desktop Table */}
    <div className="hidden md:block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg mb-10">
      {/* Title and Paragraph inside table container */}
      <div className="p-8 pb-4 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the Europe</h2>
        <p className="text-sm  text-gray-700 text-left">
          Europe offers a variety of entry points across its 48 member nations. Whether you are targeting a tuition-free public university in Germany, a luxury management school in France, or an innovation hub in Sweden, there is an intake that perfectly aligns with your financial and academic preparation.</p>
      </div>
      
      <table className="w-full">
        <thead className="bg-blue-100">
          <tr>
            <th className="py-6 px-6 text-center font-bold text-lg">#</th>
            <th className="py-6 px-6 text-center font-bold text-lg">Intake Name</th>
            <th className="py-6 px-6 text-center font-bold text-lg">Intake Type</th>
            <th className="py-6 px-6 text-center font-bold text-lg">Applications Open</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {intakes.map((intake) => (
            <tr key={intake.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-6 px-6 font-bold text-lg text-center">{intake.id}</td>
              <td className="py-6 px-6">
                <div className="font-bold text-gray-900 text-lg text-center">{intake.term}</div>
              </td>
              <td className="py-6 px-8 text-gray-700 text-center">{intake.duration}</td>
              <td className="py-6 px-8 text-center">
                <span className="font-medium text-gray-900 text-center">{intake.application}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-4 mb-10">
      {/* Title and Paragraph for mobile - outside the cards */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the UK</h2>
        <p className="text-sm text-gray-700 text-left mb-4">
         Europe offers a variety of entry points across its 48 member nations. Whether you are targeting a tuition-free public university in Germany, a luxury management school in France, or an innovation hub in Sweden, there is an intake that perfectly aligns with your financial and academic preparation.</p>
      </div>
      
      {intakes.map((intake) => (
        <div key={intake.id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                {intake.id}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{intake.term}</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 font-medium mb-1">Duration</div>
              <div className="text-gray-700 font-medium">{intake.duration}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 font-medium mb-1">Applications Open</div>
              <div className="text-gray-700 font-medium">{intake.application}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-2xl p-10 border border-blue-100">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Intake Summary Cards</h3>
  <div className="grid md:grid-cols-3 gap-8">
    {/* Card 1 - Primary Intake */}
    <div className="bg-blue-50 p-4 rounded-xl border border-gray-200 relative">
      {/* Tagline - Half inside, half outside */}
      <div className="absolute -top-3 right-0 z-10">
        <div className="bg-blue-600 text-white pl-6 pr-3 py-1 text-xs font-semibold relative">
          <span>Most Popular</span>
          {/* Diagonal cut effect on left side */}
          <div className="absolute left-0 top-0 w-0 h-0 border-l-[12px] border-l-white border-t-[24px] border-t-blue-600  border-b-blue-600"></div>
        </div>
      </div>
      
      {/* Content with padding to accommodate tag */}
      <div className="pt-1">
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Primary Intake (September)</h4>
        <p className="text-gray-700 text-xs mb-1">This is the main intake for all UK universities. It offers the widest range of courses, maximum scholarship availability, and aligns perfectly with the end of the Indian academic year.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>100% Course & University Availability.</span>
        </p>
      </div>
    </div>

    {/* Card 2 - Secondary Intake */}
    <div className="bg-green-50 p-4 rounded-xl border border-gray-200 relative">
      {/* Tagline - Half inside, half outside */}
      <div className="absolute -top-3 right-0 z-10">
        <div className="bg-green-600 text-white pl-6 pr-3 py-1 text-xs font-semibold relative">
          <span>Best for Prep</span>
          {/* Diagonal cut effect on left side */}
          <div className="absolute left-0 top-0 w-0 h-0 border-l-[12px] border-l-white border-t-[24px] border-t-green-600  border-b-green-600"></div>
        </div>
      </div>
      
      {/* Content with padding to accommodate tag */}
      <div className="pt-1">
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Secondary Intake (January)</h4>
        <p className="text-gray-700 text-xs mb-1">Missed September? No problem. The January intake is ideal for students who need extra time for IELTS/PTE preparation or funding. While course options are slightly fewer, the competition is often lower.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Extra preparation time without wasting a full year.</span>
        </p>
      </div>
    </div>

    {/* Card 3 - Seasonal Intake */}
    <div className="bg-purple-50 p-4 rounded-xl border border-gray-200 relative">
      {/* Tagline - Half inside, half outside */}
      <div className="absolute -top-3 right-0 z-10">
        <div className="bg-purple-600 text-white pl-6 pr-3 py-1 text-xs font-semibold relative">
          <span>Specialized</span>
          {/* Diagonal cut effect on left side */}
          <div className="absolute left-0 top-0 w-0 h-0 border-l-[12px] border-l-white border-t-[24px] border-t-purple-600 border-b-purple-600"></div>
        </div>
      </div>
      
      {/* Content with padding to accommodate tag */}
      <div className="pt-1">
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Seasonal Intake (May)</h4>
        <p className="text-gray-700 text-xs mb-1">A smaller, specialized intake offered by select universities. It is best suited for students targeting specific vocational courses or those who want to align their graduation with specific job market cycles.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Limited competition for specific programs.</span>
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
</section>

        {/* English Requirements */}
        <section className=''>
        <div className='py-5 mb-4 w-[92%] mx-auto mt-8 '>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3  text-left ">English Proficiency Requirements</h2>
          <p className="text-sm text-gray-700 mb-4 text-left ">
            Most European universities require proof of English proficiency for international programs. While specific score requirements vary by country and institution, aiming for a B2 or C1 level on the CEFR scale will ensure your eligibility for most top-tier degrees.</p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {englishRequirements.map((test, index) => (
              <div key={index} className="bg-blue-100 rounded-xl p-3 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-med md:text-lg font-bold text-blue-700 ">{test.test}</div>
                <div className="text-med md:text-lg text-gray-700 font-bold">{test.requirement}</div>
                <div className='text-xs text-gray-700'>{test.Subtitle}</div> 
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-2xl p-3 border border-yellow-200">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-yellow-100 rounded-3xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="font-bold text-yellow-700 text-xl">💡</span>
              </div>
              <div>
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: Proficiency Waivers</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Did you complete your previous education in English? Many European universities waive standardized testing if you can provide a Medium of Instruction (MOI) certificate from your previous school or if you are a native speaker. Additionally, some countries allow entrance exams in place of IELTS. Consult our experts to see if you can skip the exam!</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the Europe</h2>
      <p className="text-sm  text-gray-700">
        Europe offers a unique "Earn while you Learn" model. With some of the world’s strongest labor laws and a high demand for skilled talent, international students can gain professional experience while significantly offsetting their living costs.</p></div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Term Time (Classes On):</strong> Most EU nations allow 20 hours, but countries like Finland and Spain have expanded this to 30 hours to support student living costs.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Holiday Time (Breaks):</strong>During Summer, Christmas, and Easter breaks, you can work 40+ hours. There is no cap on earnings during these periods.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>On-Campus:</strong> Positions like Research Assistant or Library Aide often come with tax-free "mini-job" benefits.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Job Security:</strong>You are protected by EU law. This includes minimum wage (avg. €13–€15/hr), paid sick leave, and protection against unfair dismissal.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 md:p-8 border border-red-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Job Sectors</h3>
        <p className="text-sm md:text-base text-gray-700 mb-3">
          Part-time work can be found in various sectors, including:
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🛒</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Retail & Supermarkets</div>
            <div className='text-xs text-gray-700'>(Sales Associate, Inventory Clerk, and Customer Experience roles in major high-street brands.)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality & Events</div>
            <div className='text-xs text-gray-700'>(Baristas, Waitstaff at international cafes, and Event Staff at major festivals and stadiums.)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">University On-Campus</div>
            <div className='text-xs text-gray-700'>(Library Aides, Student Ambassadors for campus tours, and Research Assistantships.)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Industry Internships</div>
            <div className='text-xs text-gray-700'>(Working Student" (Werkstudent) roles providing paid, field-specific experience in tech, engineering, and finance.)</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200">
      <div className="flex items-start">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
          <span className="font-bold text-yellow-700 text-lg md:text-xl">
💡</span>
        </div>
        <div>
          <h3 className="text-med md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Did You Know? Europe Protects Your Pay!</h3>
          <p className="text-xs md:text-sm text-gray-700">
          International students in Europe are entitled to the same statutory minimum wage as local citizens. Under the EU Fair Wages Framework, employers are legally required to pay you fairly for every hour worked, regardless of your age or nationality.</p></div>
      </div>
    </div>
  </div>
</section>

{/* Quality Education & Benefits Section */}
<section className='py-5 mt-12 w-[92%] mx-auto'>
  
  {/* 1. Quality Education - Image Left, Content Right */}
  <div className="flex flex-col md:flex-row gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 order-2 md:order-1 -mt-12">
      <img 
        src="/quality-uk2.png" 
        alt="UK Degree Prestige"
        className="w-full h-full sm:h-60 object-contain"
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Quality Education</h2>
      <h3 className="text-sm md:text-base font-semibold text-[#FB8234] mb-3">
        Focus on the global prestige and career impact of a European degree.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Legacy of Elite Standards.
  </span>{" "}
  Europe is the cradle of modern higher education, housing iconic institutions like the University of Bologna, ETH Zurich, and Sorbonne. Under the Bologna Process, every degree meets rigorous quality standards, ensuring your qualification is a "Global Gold Standard" respected by Fortune 500 companies and research bodies worldwide.</p>
    </div>
  </div>

  {/* 2. Academic Structure - Image Right, Content Left */}
  <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 order-2 md:order-1 -mt-4 md:mt-1">
      <img 
        src="/academic-uk1.png" 
        alt="UK Degree Structure"
        className="w-full h-full  object-contain"
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Academic Structure</h2>
      <h3 className="text-sm md:text-base font-semibold text-[#FB8234] mb-3">
        Highlight the biggest advantage: saving time and money with shorter degrees.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Efficient, Focused, and Flexible.
  </span>{" "}
   European degrees are designed to get you career-ready faster. Most Bachelor’s degrees are 3 years and Master’s degrees are 1 to 2 years. This intensive, specialized focus saves you a full year of tuition and living expenses compared to the US system, allowing you to enter the global workforce ahead of your peers.</p>
    </div>
  </div>

  {/* 3. Support Services - Image Left, Content Right */}
  <div className="flex flex-col md:flex-row gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-6 order-2 md:order-1">
      <img 
        src="/service-uk1.png" 
        alt="Student Support Services"
        className="w-full h-full sm:h-60 md:h-full object-contain "
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Support Services</h2>
      <h3 className="text-sm md:text-base font-semibold text-[#FB8234] mb-3">
        Reassure students that they won't be alone and help is always available.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Your Bridge to a New Culture.
  </span>{" "}
    You are never alone in your journey. European universities offer extensive "Welcome Services," including Buddy Programs (where local students mentor you), dedicated International Offices, and multilingual counseling. From navigating health insurance to finding the perfect student "WG" (shared flat), Europe’s support network is built on the values of social inclusion and student well-being.</p>
    </div>
  </div>

  {/* 4. Research Opportunities - Image Right, Content Left */}
  <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-8 md:-mt-12 order-2 md:order-1">
      <img 
        src="/research-uk.png" 
        alt="Research Opportunities"
        className="w-full h-65 object-contain"
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Research Opportunities</h2>
      <h3 className="text-sm md:text-base font-semibold text-[#FB8234] mb-3">
        Frame research not just for academics, but as cutting-edge learning that builds skills.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Learning at the Epicenter of Discovery.
  </span>{" "}
   Europe leads the world in sustainable tech, engineering, and the arts. As a student, you are part of the European Research Area (ERA). You won't just read textbooks; you'll work in state-of-the-art labs alongside pioneers in AI, Green Energy, and Medicine, building the critical problem-solving skills that 2026 employers demand.</p>
    </div>
  </div>

  {/* 5. Post-Study Work Options - Image Left, Content Right */}
  <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-8 order-2 md:order-1">
      <img 
        src="/Visa.png" 
        alt="Post-Study Work Visa"
        className="w-full h-56 object-contain "
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Post-Study Work Options</h2>
      <h3 className="text-sm md:text-base font-semibold text-[#FB8234] mb-3">
        Clearly explain the visa benefit as a career launchpad.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Your Gateway to a Global Career.
  </span>{" "}
   Graduation is just the beginning. Most European nations offer a Job Seeker Visa (Post-Study Work) ranging from 12 to 24 months (e.g., 18 months in Germany, 2 years in Ireland/France). This allows you to work without a specific sponsor initially, giving you the freedom to secure a role in Europe’s thriving economy and potentially bridge toward a Blue Card.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the Europe</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Don't let tuition fees hold you back. The Europe offers millions of pounds in scholarships for international students. Our experts help you identify, target, and apply for the best financial aid packages to significantly lower your education costs.</p>
          </div>

          <div className="w-[92%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-left">The Process (How We Help)</h3>
              <div className="space-y-2">
                {scholarshipProcess.map((step) => (
                  <div key={step.step} className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-start">
                      {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl flex items-center justify-center mr-6 text-white font-bold text-2xl">
                        {step.step}
                      </div> */}
                      <div>
                        <h4 className="text-med md:text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                        <p className="text-xs md:text-sm text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-left">Scholarship Details (The Facts)</h3>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-3 border border-blue-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Types of Scholarships</h4>
                  <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm">
  <li className="mb-1">
    For high academic achievers.
  </li>

  <li className="mb-1">
    Automatic bursaries (often £1,000–£3,000) for early applicants.
  </li>

  <li className="mb-1">
    Prestigious full-funding options like Chevening and GREAT Scholarships.
  </li>
</ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   {/* What to Expect: */}
  </span>{" "}
   While full rides exist, most UK university scholarships offer a tuition reduction ranging from £1,000 to £5,000. Top-tier candidates can secure 50% to 100% waivers in competitive rounds.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
   {/* How to Qualify: */}
  </span>{" "}
   Committees look beyond just grades. They seek leadership potential, extracurricular achievements, and a clear vision of how you will use your degree to make an impact.</p>
                </div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your Europe Success Story Starts Here</h3>
            <p className="text-sm md:text-med text-blue-100 mb-3 max-w-3xl mx-auto">
             Stop dreaming and start planning. Let <strong className='text-red-400'>DartGlobe </strong> turn your study abroad ambitions into reality.</p>
            <p className="text-xs md:text-sm md:text-lg text-blue-100 mb-4 max-w-4xl mx-auto">
              Ready to take the next step? Don't navigate the complex admission process alone. From shortlisting the perfect university to securing your visa and scholarships, our experts are with you at every milestone.</p>
            <button onClick={()=>navigate("/contact")} className="bg-white text-blue-900 px-6 md:px-12 py-5 rounded-xl font-bold text-sm md:text-xl hover:shadow-2xl transition-all flex items-center justify-center mx-auto cursor-pointer hover:scale-105">
              🚀 Start My Free Application
            </button>
          </div>
        </section>
      {/* </div> */}
    </div>
  );
};

export default StudyEuropePage;