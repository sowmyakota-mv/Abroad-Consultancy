// import React from 'react';
// import { 
//   GraduationCap, DollarSign, Home, Briefcase, 
//   Award, Globe, Users, Calendar, BookOpen,
//   CheckCircle, Clock, MapPin, Star,
//   ChevronRight, Search, Download, Phone,
//   Mail, MessageSquare, Shield, Target,
//   Trophy, TrendingUp, Building, Heart,
//   Mountain, Trees, Waves, Sunrise
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyNewZealandPage: React.FC = () => {
//     const navigate=useNavigate()
//   // Top Universities
//   const topUniversities = [
//     { name: 'University of Auckland', rank: '#1', location: 'Auckland', type: 'Public', students: '40,000+' },
//     { name: 'University of Otago', rank: '#2', location: 'Dunedin', type: 'Public', students: '21,000+' },
//     { name: 'Victoria University of Wellington', rank: '#3', location: 'Wellington', type: 'Public', students: '22,000+' },
//     { name: 'University of Canterbury', rank: '#4', location: 'Christchurch', type: 'Public', students: '15,000+' },
//     { name: 'Massey University', rank: '#5', location: 'Palmerston North', type: 'Public', students: '35,000+' },
//     { name: 'University of Waikato', rank: '#6', location: 'Hamilton', type: 'Public', students: '12,000+' },
//     { name: 'Auckland University of Technology', rank: '#7', location: 'Auckland', type: 'Public', students: '29,000+' },
//     { name: 'Lincoln University', rank: '#8', location: 'Christchurch', type: 'Public', students: '3,500+' },
//   ];

//   // Popular Courses
//   const popularCourses = [
//     { field: 'Agriculture & Environmental Science', universities: 'Lincoln, Massey, Canterbury' },
//     { field: 'Business & Management', universities: 'Auckland, Victoria, Otago' },
//     { field: 'Engineering & Technology', universities: 'Canterbury, Auckland, AUT' },
//     { field: 'Health Sciences', universities: 'Otago, Auckland, AUT' },
//     { field: 'Tourism & Hospitality', universities: 'AUT, Victoria, Otago' },
//     { field: 'Film & Creative Arts', universities: 'Auckland, Victoria, AUT' },
//   ];

//   // Scholarships
//   const scholarships = [
//     { name: 'New Zealand International Scholarships', amount: 'Full tuition + living', eligibility: 'Developing countries', deadline: 'Apr 30, 2024' },
//     { name: 'University of Auckland Scholarships', amount: 'Up to $10,000 NZD', eligibility: 'International students', deadline: 'Varies' },
//     { name: 'New Zealand Excellence Awards', amount: '$5,000-$25,000', eligibility: 'High-achieving students', deadline: 'May 15, 2024' },
//     { name: 'Research & PhD Scholarships', amount: 'Full funding + stipend', eligibility: 'Research students', deadline: 'Varies' },
//     { name: 'Māori & Pacific Scholarships', amount: '$3,000-$15,000', eligibility: 'Indigenous students', deadline: 'Varies' },
//   ];

//   // Intakes
//   const intakes = [
//     { term: 'Semester 1', months: 'February - June', application: 'Aug - Nov', features: 'Main intake, all courses' },
//     { term: 'Semester 2', months: 'July - November', application: 'Feb - Apr', features: 'Most courses available' },
//     { term: 'Summer School', months: 'November - February', application: 'Aug - Oct', features: 'Limited courses' },
//   ];

//   // English Requirements
//   const englishRequirements = [
//     { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0', validity: '2 years' },
//     { test: 'TOEFL iBT', undergraduate: '80-90', postgraduate: '90-100', validity: '2 years' },
//     { test: 'PTE Academic', undergraduate: '50-58', postgraduate: '58-65', validity: '2 years' },
//     { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-184', validity: 'Lifetime' },
//   ];

//   // Key Points
//   const keyPoints = [
//     { title: 'World-Class Education', description: 'All 8 universities in global top 500', icon: <Trophy className="h-6 w-6" /> },
//     { title: 'Practical Learning', description: 'Hands-on, industry-focused education', icon: <Target className="h-6 w-6" /> },
//     { title: 'Work Opportunities', description: '20 hours/week during studies', icon: <Briefcase className="h-6 w-6" /> },
//     { title: 'Post-Study Work Rights', description: '1-3 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
//     { title: 'Stunning Natural Beauty', description: 'Ranked 2nd safest country globally', icon: <Mountain className="h-6 w-6" /> },
//     { title: 'Māori Culture', description: 'Rich indigenous cultural experience', icon: <Globe className="h-6 w-6" /> },
//   ];

//   // Work Options
//   const workOptions = [
//     { role: 'Part-time Jobs', hours: '20 hrs/week', pay: '$18-22/hour', type: 'During studies' },
//     { role: 'Internships', hours: 'Full-time', pay: '$20-25/hour', type: 'Scheduled breaks' },
//     { role: 'Research Assistant', hours: '15-20 hrs/week', pay: '$22-28/hour', type: 'Academic research' },
//     { role: 'Hospitality & Retail', hours: 'Flexible hours', pay: '$18-21/hour', type: 'Entry level' },
//   ];

//   // Cost of Living
//   const livingCosts = [
//     { item: 'Accommodation', amount: '$12,000 - $18,000', period: 'per year' },
//     { item: 'Food & Groceries', amount: '$4,000 - $7,000', period: 'per year' },
//     { item: 'Transportation', amount: '$1,000 - $2,000', period: 'per year' },
//     { item: 'Utilities & Internet', amount: '$1,000 - $2,000', period: 'per year' },
//     { item: 'Health Insurance', amount: '$600 - $1,000', period: 'per year' },
//     { item: 'Personal Expenses', amount: '$3,000 - $5,000', period: 'per year' },
//   ];

//   return (
//     <div id='study-abroad/new-zealand' className="bg-white">
//       {/* Hero Section */}
// <section className="relative h-[30vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
//     style={{
//       backgroundImage: "url('/new-zealand-bghero.png')",
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
//   <span className="block ml-16 mt-4">New Zealand</span>
// </h1>
//   </div>
// </div>
//   </section>

//       {/* Quick Stats */}
//       <section className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-900 mb-2">8</div>
//               <div className="text-gray-600">World-Class Universities</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-900 mb-2">125,000+</div>
//               <div className="text-gray-600">International Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-900 mb-2">#2</div>
//               <div className="text-gray-600">Safest Country Globally</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-900 mb-2">1-3 Years</div>
//               <div className="text-gray-600">Post-Study Work Rights</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content - All sections visible */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-8"> */}
        
//         {/* Overview Section */}
//         <section className="w-[80%] mx-auto scroll-mt-20">
//   <div className="flex justify-center mt-12 sm:mt-12">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center ">
//         <h2 className="text-4xl font-bold text-gray-900 ">Study in New Zealand - Complete Overview</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//            For international students seeking top-notch education amid breathtaking natural landscapes, 
//               New Zealand emerges as a popular and compelling destination with a unique educational experience.
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
// </section>
//         <section className='py-5 mt-8 w-[92%] mx-auto'>
//     <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             {[
//               { icon: '🏔️', title: 'Natural Beauty', desc: 'Stunning landscapes & outdoor lifestyle' },
//               { icon: '🎓', title: 'Quality Education', desc: 'All universities in global top 500' },
//               { icon: '🤝', title: 'Māori Culture', desc: 'Rich indigenous cultural experience' },
//               { icon: '💼', title: 'Work Rights', desc: '20 hrs/week during studies' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <div className="font-bold text-gray-900 mb-2">{item.title}</div>
//                 <div className="text-gray-600">{item.desc}</div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose New Zealand?</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">#1</div>
//                 <div className="font-bold text-gray-900 mb-2">Peaceful Nation</div>
//                 <div className="text-gray-600">Ranked 2nd in Global Peace Index</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
//                 <div className="font-bold text-gray-900 mb-2">English-Speaking</div>
//                 <div className="text-gray-600">Easier adaptation for international students</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Practical</div>
//                 <div className="font-bold text-gray-900 mb-2">Learning Focus</div>
//                 <div className="text-gray-600">Industry-relevant, hands-on education</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why New Zealand Section */}
//         <section className=' w-[92%] mx-auto py-5 mt-8'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Study in New Zealand?</h2>
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                   <BookOpen className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Education System</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 New Zealand boasts a well-regarded education system, featuring universities, polytechnics, 
//                 and institutes of technology that offer a diverse array of programs. The country's distinctive 
//                 focus on practical, hands-on learning sets it apart.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>NZQA ensures quality across all institutions</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Flexible pathways between institutions</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Industry partnerships for practical experience</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                   <Mountain className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Cultural Experience</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Study in New Zealand offers a unique cultural experience, providing exposure to the rich 
//                 Māori and Pacific Islander cultures. Beyond the academic realm, students have the opportunity 
//                 to immerse themselves in the country's breathtaking landscapes.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-green-600 mb-2">Māori</div>
//                   <div className="text-gray-600">Indigenous culture</div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-green-600 mb-2">Pasifika</div>
//                   <div className="text-gray-600">Pacific Islander heritage</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-black to-green-900 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-8 text-left">New Zealand Education Advantages</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🏔️</div>
//                 <h4 className="text-xl font-bold mb-3">Natural Environment</h4>
//                 <p className="text-gray-300">Study amidst mountains, beaches, and national parks</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🤝</div>
//                 <h4 className="text-xl font-bold mb-3">Friendly Community</h4>
//                 <p className="text-gray-300">Warm, welcoming, and inclusive society</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🎯</div>
//                 <h4 className="text-xl font-bold mb-3">Innovation Hub</h4>
//                 <p className="text-gray-300">Leader in agriculture, film, and technology</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Key Points Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Key Advantages of Studying in New Zealand</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {keyPoints.map((point, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
//                 <div className="text-green-600 mb-4">{point.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
//                 <p className="text-gray-600">{point.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-green-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">New Zealand Qualifications Framework (NZQF)</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Levels 1-10</div>
//                 <div className="text-gray-700">Comprehensive qualification levels from certificates to doctorates</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">NZQA</div>
//                 <div className="text-gray-700">New Zealand Qualifications Authority ensures quality standards</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Global Recognition</div>
//                 <div className="text-gray-700">Degrees recognized internationally</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Top Universities Section */}
//         {/* <section>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in New Zealand</h2>
          
//           <div className="space-y-6 mb-12">
//             {topUniversities.map((uni, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                   <div className="flex items-center mb-4 md:mb-0">
//                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                       <div className="text-green-700 font-bold">{uni.rank}</div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
//                       <div className="flex items-center text-gray-600 mt-1">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         {uni.location} • {uni.type} • {uni.students} students
//                       </div>
//                     </div>
//                   </div>
//                   <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-6 text-center">Types of Institutions</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🎓</div>
//                 <h4 className="text-xl font-bold mb-3">Universities</h4>
//                 <p className="text-gray-300">8 public universities offering comprehensive degree programs</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🏛️</div>
//                 <h4 className="text-xl font-bold mb-3">Institutes of Technology & Polytechnics (ITPs)</h4>
//                 <p className="text-gray-300">16 institutions offering vocational and applied education</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">📚</div>
//                 <h4 className="text-xl font-bold mb-3">Private Training Establishments (PTEs)</h4>
//                 <p className="text-gray-300">Private institutions offering specialized programs</p>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* Popular Courses Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Popular Courses in New Zealand</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {popularCourses.map((course, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                     <BookOpen className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{course.field}</h3>
//                     <div className="text-gray-600">Top universities: {course.universities}</div>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Average Duration</span>
//                     <span className="font-bold">3-4 years</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Annual Tuition</span>
//                     <span className="font-bold">$22,000 - $35,000 NZD</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Career Prospects</span>
//                     <span className="font-bold">Excellent</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique Study Fields</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🌿</div>
//                 <div className="font-bold text-gray-900 mb-2">Sustainable Agriculture</div>
//                 <div className="text-gray-600">World-leading in sustainable farming practices</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🎬</div>
//                 <div className="font-bold text-gray-900 mb-2">Film Production</div>
//                 <div className="text-gray-600">Home to The Lord of the Rings and Hobbit trilogies</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🌊</div>
//                 <div className="font-bold text-gray-900 mb-2">Marine Science</div>
//                 <div className="text-gray-600">Strong focus on ocean research and conservation</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Intakes Section */}
//         <section className=' w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Intake Periods in New Zealand</h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {intakes.map((intake, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//                 <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
//                   index === 0 ? 'bg-green-100 text-green-700' :
//                   index === 1 ? 'bg-blue-100 text-blue-700' :
//                   'bg-yellow-100 text-yellow-700'
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

//           <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Research & Choose Program (12-18 months before)</div>
//                   <div className="text-gray-600">Select universities and courses</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
//                   <div className="text-gray-600">Academic transcripts, English tests, SOP</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Apply & Visa Process (4-6 months before)</div>
//                   <div className="text-gray-600">University applications and student visa</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* English Requirements Section */}
//         <section className=' w-[92%] mx-auto py-5 mt-8'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">English Proficiency Requirements</h2>
          
//           <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Test</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Undergraduate</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Postgraduate</th>
//                   <th className="py-4 px-6 text-left font-bold text-gray-900">Validity</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {englishRequirements.map((test, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="py-4 px-6 font-medium">{test.test}</td>
//                     <td className="py-4 px-6">{test.undergraduate}</td>
//                     <td className="py-4 px-6">{test.postgraduate}</td>
//                     <td className="py-4 px-6">{test.validity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemptions & Alternatives</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Previous education in English medium (minimum 2 years)</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Citizenship of English-speaking countries</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Completion of English pathway programs in NZ</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-blue-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa English Requirements</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-blue-600">IELTS</span>
//                   </div>
//                   <span>Overall 5.5 for Student Visa (must meet university requirements)</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-blue-600">NZCEL</span>
//                   </div>
//                   <span>New Zealand Certificate in English Language accepted</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-blue-600">Pathway</span>
//                   </div>
//                   <span>English language courses available for preparation</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Cost of Living Section */}
//         <section className='py-5  w-[92%] mx-auto mt-8'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Cost of Living and Tuition Fees</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                   <DollarSign className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Tuition Fees</h3>
//               </div>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Undergraduate Programs</h4>
//                   <div className="text-2xl font-bold text-green-600">$22,000 - $32,000 NZD/year</div>
//                   <div className="text-gray-600">Arts: $22,000-28,000 • Science: $25,000-32,000 • Engineering: $30,000-40,000</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Postgraduate Programs</h4>
//                   <div className="text-2xl font-bold text-green-600">$26,000 - $45,000 NZD/year</div>
//                   <div className="text-gray-600">MBA: $40,000-55,000 • Engineering: $35,000-45,000 • Research: $7,000-10,000</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 border border-blue-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                   <Home className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Living Expenses</h3>
//               </div>
//               <div className="space-y-">
//                 {livingCosts.map((cost, index) => (
//                   <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <span className="text-gray-700">{cost.item}</span>
//                     <div className="text-right">
//                       <div className="font-bold text-gray-900">{cost.amount}</div>
//                       <div className="text-sm text-gray-500">{cost.period}</div>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="flex justify-between border-t pt-2">
//                   <span className="font-bold text-gray-900">Total Annual Living Cost</span>
//                   <span className="font-bold text-green-600">$20,000 - $35,000 NZD</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison by City</h3>
//             <div className="grid md:grid-cols-4 gap-6">
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Auckland</div>
//                 <div className="text-gray-700">$25,000 - $35,000/year</div>
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Wellington</div>
//                 <div className="text-gray-700">$22,000 - $30,000/year</div>
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Christchurch</div>
//                 <div className="text-gray-700">$20,000 - $28,000/year</div>
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-green-600 mb-2">Dunedin</div>
//                 <div className="text-gray-700">$18,000 - $25,000/year</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Work Opportunities Section */}
//         <section className=' w-[92%] mx-auto py-5 mt-8'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Opportunities During Studies</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {workOptions.map((option, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                     <Briefcase className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{option.role}</h3>
//                     <div className="text-gray-600 text-sm">{option.type}</div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <div className="text-sm text-gray-500">Hours</div>
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
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Work Regulations (Student Visa)</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Work Hours:</strong> Maximum 20 hours per week during study periods</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Full-time Work:</strong> During scheduled Christmas and New Year holidays</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Minimum Wage:</strong> $22.70 per hour (as of April 2023)</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Post-Study Work:</strong> 1-3 years depending on qualification level</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Visa & Application Process Section */}
//         <section className='py-5  w-[92%] mx-auto py-5 mt-8 '>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Visa and Application Process</h2>
          
//           <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
//             <div className="text-center mb-8">
//               <div className="text-5xl mb-4">📋</div>
//               <h3 className="text-3xl font-bold mb-4">Student Visa Requirements</h3>
//               <p className="text-xl text-green-100">Essential documents and process for studying in New Zealand</p>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Required Documents</h4>
//                 <ul className="space-y-2 text-green-100">
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Offer of place from NZQA-approved institution
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Proof of sufficient funds ($20,000 NZD/year)
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Medical and chest X-ray certificates
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Police certificate (if over 17 and staying 2+ years)
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Application Process</h4>
//                 <ul className="space-y-2 text-green-100">
//                   <li className="flex items-center">
//                     <Clock className="h-4 w-4 text-yellow-300 mr-2" />
//                     Apply online through Immigration NZ website
//                   </li>
//                   <li className="flex items-center">
//                     <DollarSign className="h-4 w-4 text-yellow-300 mr-2" />
//                     Application fee: $375 NZD
//                   </li>
//                   <li className="flex items-center">
//                     <Shield className="h-4 w-4 text-yellow-300 mr-2" />
//                     Processing time: 20-25 working days
//                   </li>
//                   <li className="flex items-center">
//                     <Users className="h-4 w-4 text-yellow-300 mr-2" />
//                     Can include partner and dependent children
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//                 <Shield className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance Requirements</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Most student visas require health insurance
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Some universities include insurance in fees
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Must cover entire duration of stay
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Emergency medical coverage required
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
//                 <TrendingUp className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Pathway to Residence</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Post-study work visa (1-3 years)
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Skilled Migrant Category residence
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Green List occupations priority
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Partner work rights available
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Post-Study Work Section */}
//         <section className=' w-[92%] mx-auto py-5 mt-8'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Post-Study Work Opportunities</h2>
          
//           <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-3xl p-12 text-white mb-12">
//             <div className="text-center mb-8">
//               <div className="text-5xl mb-4">🎓</div>
//               <h3 className="text-3xl font-bold mb-4">Post-Study Work Visa (PSWV)</h3>
//               <p className="text-xl text-blue-100">Work in New Zealand for 1-3 years after graduation</p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Level 7 Qualification</h4>
//                 <div className="text-3xl font-bold mb-2">1 Year</div>
//                 <p className="text-blue-100">Bachelor's or Graduate Diploma</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Level 8+ Qualification</h4>
//                 <div className="text-3xl font-bold mb-2">3 Years</div>
//                 <p className="text-blue-100">Postgraduate Diploma or Master's</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Doctoral Degree</h4>
//                 <div className="text-3xl font-bold mb-2">3 Years</div>
//                 <p className="text-blue-100">PhD or equivalent</p>
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
//                   Completed qualification in New Zealand
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Study duration minimum 30 weeks
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Apply within 3 months of course end date
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Meet health and character requirements
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//                 <DollarSign className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Application Details</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Application fee: $495 NZD
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Processing time: 2-4 months
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   No job offer required
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Can work in any job, any hours
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
//                   Gain New Zealand work experience
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Pathway to Skilled Migrant Visa
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Bring partner and dependent children
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Opportunity for permanent residency
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Industries</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💻</div>
//                 <div className="font-bold text-gray-900">IT & Technology</div>
//                 <div className="text-gray-600">$65,000 - $120,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🌾</div>
//                 <div className="font-bold text-gray-900">Agriculture</div>
//                 <div className="text-gray-600">$55,000 - $90,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏥</div>
//                 <div className="font-bold text-gray-900">Healthcare</div>
//                 <div className="text-gray-600">$70,000 - $130,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏗️</div>
//                 <div className="font-bold text-gray-900">Construction</div>
//                 <div className="text-gray-600">$60,000 - $100,000</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Scholarships Section */}
//         <section >
//           <h2 className="text-4xl font-bold text-gray-900 w-[92%] mx-auto mt-8">Scholarships in New Zealand</h2>
          
//           {/* <div className="space-y-6 mb-12">
//             {scholarships.map((scholarship, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                   <div className="mb-4 md:mb-0">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
//                     <div className="flex flex-wrap gap-4">
//                       <div className="flex items-center text-gray-600">
//                         <DollarSign className="h-4 w-4 mr-1" />
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
//                   <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div> */}

//           <div className="grid md:grid-cols-2 gap-8 mb-12 w-[92%] mx-auto mt-8">
//             <div className="bg-green-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Process</h3>
//               <ol className="space-y-4">
//                 <li className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                     <span className="font-bold text-green-700">1</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Research and Identify Scholarships</div>
//                     <div className="text-gray-600">Begin by researching New Zealand scholarships aligning with your academic goals</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                     <span className="font-bold text-green-700">2</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Check Eligibility Criteria</div>
//                     <div className="text-gray-600">Review eligibility criteria for potential New Zealand scholarships</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                     <span className="font-bold text-green-700">3</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Prepare Required Documentation</div>
//                     <div className="text-gray-600">Prepare essential documents—transcripts, recommendation letters, statement of purpose</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                     <span className="font-bold text-green-700">4</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Submit Applications and Follow Up</div>
//                     <div className="text-gray-600">Submit scholarship applications by deadlines and track application status</div>
//                   </div>
//                 </li>
//               </ol>
//             </div>

//             <div className="bg-blue-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Demonstrate outstanding academic achievements</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Meet the specific eligibility requirements set by the chosen university</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Admitted to elite universities, honoring exceptional academics and intellectual potential</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span>Meet English language proficiency requirements</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-green-900 to-blue-900 p-12 text-white">
//             <div className="text-center">
//               <h3 className="text-xl md:text-3xl font-bold mb-6">Study in New Zealand</h3>
//               <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
//                 For in-depth information on our New Zealand scholarships, eligibility criteria, and the application 
//                 process, enroll with Masters Visa Overseas Education Consultancy. Our dedicated team will guide 
//                 you through the intricacies of the scholarship application, ensuring you have the support you need 
//                 to turn your academic aspirations into a reality.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button onClick={()=>navigate('/contact')} className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
//                   Contact Us for New Zealand
//                 </button>
                
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//     // </div>
//   );
// };

// export default StudyNewZealandPage;



import React from 'react';
import {
  GraduationCap, PoundSterling, Home, Briefcase,
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Handshake
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaBalanceScale, FaResearchgate } from 'react-icons/fa';
import { RiFileSearchFill } from 'react-icons/ri';

const StudyNewZealandPage: React.FC = () => {
    const navigate=useNavigate()
  
  // Major Benefits
  const majorBenefits = [
    {
      title: 'Elite Academic Standards',
      description: 'All eight public universities in New Zealand are ranked within the top 3% globally in the QS World University Rankings.',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Mutual Degree Recognition',
      description: 'As of mid-2025, many Indian degrees (Bachelor’s, Master’s, and PhD) are added to the List of Qualifications Exempt from Assessment (LQEA), potentially saving you up to ₹40,000 in evaluation fees.',
      icon: <Handshake className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Unbeatable Work-Life Balance',
      description: 'New Zealand is ranked #1 globally for work-life balance and is the 3rd most peaceful country in the world, providing a low-stress environment for international students.',
      icon: <FaBalanceScale className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Practical & Research Focus',
      description: 'The education system emphasizes a balance of theoretical knowledge and hands-on teaching, ensuring graduates are industry-ready for global employers.',
      icon: <RiFileSearchFill className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'February (Autumn)', duration: 'Primary Intake', application: 'August to November (Best for Scholarships)' },
    { id: 2, term: 'July (Winter)', duration: 'Secondary Intake', application: 'January to April' },
    { id: 3, term: 'November (Spring)', duration: 'Limited Intake', application: 'July to September' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: '6.0 - 6.5 Overall', Subtitle: 'The gold standard. Standard UG entry is 6.0 (no band < 5.5), while Master\'s typically requires 6.5 (no band < 6.0).' },
    { test: 'TOEFL iBT', requirement: '80 - 90 Total',Subtitle: 'Widely accepted. A score of 80 is common for Bachelors, while 90+ is the benchmark for Research Master’s and PhDs.' },
    { test: 'PTE Academic', requirement: '50 - 58 Overall', Subtitle: 'Preferred for fast results (48hrs). Aim for 58+ if you plan to transition to Permanent Residency (PR) after your studies.' },
    { test: 'Duolingo', requirement: '105 - 115 Total', Subtitle: 'Accepted for admission by top unis like Auckland, Otago, and Waikato. Note: Always verify if your specific visa category accepts DET.' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Smart Shortlisting', description: 'We target high-probability awards like the New Zealand Excellence Awards (NZEA) specifically designed for Indian students.' },
    { step: 2, title: 'SOP & Impact Statement', description: 'NZ scholarships (especially Manaaki) focus heavily on "Development Impact." We help you write essays that prove how your degree will help you contribute back to India.' },
    { step: 3, title: 'Document Perfection', description: 'We ensure your financial proofs meet the strict "Source of Funds" criteria required by NZ Immigration and scholarship committees.' },
    { step: 4, title: 'Interview Prep', description: 'For the Manaaki Scholarship, we conduct behavioral mock interviews to help you demonstrate your resilience and leadership potential.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/new-zealand-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl">
  Study in <br />
  <span className="block ml-12 sm:ml-12 md:ml-16 lg:ml-16 mt-2">New Zealand</span>
</h1>
  </div>
</div>
</section>

        {/* Study in UK - Overview */}
       <section className="w-[80%] mx-auto scroll-mt-20">
  <div className="flex justify-center py-5 mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8  border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the New Zealand</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
            New Zealand is more than just a scenic study destination; it is a stable and predictable career launchpad. Benefit from a 
            world-class education system where all eight universities rank in the global top 3% (QS 2026), combined with a progressive 
            immigration policy that values international talent. With increased part-time work rights (now 25 hours per week) and some 
            of the world's most transparent pathways to Permanent Residency, New Zealand prepares you for a global career without the 
            cut-throat competition of larger nations. We help you navigate admissions, secure Manaaki New Zealand Scholarships, and manage 
            fast-track visa processing (often 2–4 weeks) for a seamless transition.</p>
        </div>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the New Zealand for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the New Zealand</h2>
        <p className="text-sm  text-gray-700 text-left">
         New Zealand universities align their primary academic calendar with the Southern Hemisphere summer. This offers a distinct advantage for students who want a fresh start at the beginning of the calendar year or a strategic mid-year entry.
        </p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the New Zealand</h2>
        <p className="text-sm text-gray-700 text-left mb-4">
          Unlike many other countries, the UK offers multiple entry points throughout the year. Whether you want to start immediately or need more time to prepare your finances and documents, 
          there is an intake that fits your timeline.
        </p>
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Primary Intake (February)</h4>
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Secondary Intake (July)</h4>
        <p className="text-gray-700 text-xs mb-1">Missed February? No problem. The January intake is ideal for students who need extra time for IELTS/PTE preparation or funding. While course options are slightly fewer, the competition is often lower.</p>
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Seasonal Intake (November)</h4>
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3  text-left ">English Proficiency Requirements for New Zealand</h2>
          <p className="text-sm text-gray-700 mb-4 text-left ">
           To secure university admission and a student visa, you must generally meet the following minimum score benchmarks:</p>

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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: Study in NZ Without IELTS!</h3>
                <p className="text-xs md:text-sm text-gray-700">
                 Did you score 75% or higher in English in your 12th Grade (CBSE/ICSE)? Many of New Zealand’s top-tier universities, including the University of Auckland, University of Otago, and Massey, recognize high scores from major Indian boards as a direct substitute for English proficiency tests.</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the New Zealand</h2>
      <p className="text-sm  text-gray-700">
       Maximizing Your Budget and Skills in the Southern Hemisphere.</p></div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Expanded Term-Time Hours</strong> Eligible tertiary and secondary (Years 12-13) students can now work up to 25 hours per week during the academic semester, an increase from the previous 20-hour limit.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Full-Time Holiday Work:</strong>You can work unlimited hours during all scheduled academic breaks and the summer holiday period, provided your course is at least one academic year long and worth 120 credits.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Masters & PhD Freedom:</strong> Students enrolled in a Masters by Research or Doctoral (PhD) degree at a New Zealand university typically have unlimited work rights year-round.</span>
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
            <div className='text-xs text-gray-700'>(Sales Assistant, Supermarket Stocker)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality & Events</div>
            <div className='text-xs text-gray-700'>(Waitstaff, Barista, Kitchen Hand)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">On-Campus Roles</div>
            <div className='text-xs text-gray-700'>(Student Ambassador, Resident Coordinator)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Corporate Internships</div>
            <div className='text-xs text-gray-700'>(Data Entry, Office Admin, Werkstudent)</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200">
      <div className="flex items-start">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
          <span className="font-bold text-yellow-700 text-lg md:text-xl">💷</span>
        </div>
        <div>
          <h3 className="text-med md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Did You Know? Minimum Wage Applies to You!</h3>
          <p className="text-xs md:text-sm text-gray-700">
          The adult minimum wage in New Zealand has increased to NZD $23.95 per hour. This ensures that even with a part-time role, you can earn roughly $598 per week (gross) during the semester, providing a significant boost to your financial independence. Always ensure your employer provides a written employment agreement, as this is a legal requirement in New Zealand.</p></div>
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
        Focus on the global prestige and career impact of a New Zealand degree.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Legacy of Excellence
  </span>{" "}
 New Zealand is home to a world-class education system where all 8 public universities rank in the global top 3% (QS World University Rankings 2026). Earning a degree here isn't just about the scenery; it's a credential backed by the NZQA (New Zealand Qualifications Authority), ensuring your qualification is respected by elite employers across the UK, USA, and Australia. With the 2026 introduction of the integrated Quality Assurance Framework (iQAF), you can be certain that every program meets the highest international benchmarks for academic rigor.</p>
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
   Flexible & Practical.
  </span>{" "}
   New Zealand offers a balanced academic structure that emphasizes critical thinking and hands-on skills. Gain a head start with a focused three-year curriculum that mirrors the British model, allowing you to enter the workforce sooner.Choose between a Taught Master’s (fast-track professional skills) or a Research Master’s (specialized expertise), both designed to minimize your time out of the workforce while maximizing your specialized knowledge. Many programs integrate "Work-Integrated Learning" and internships, ensuring you graduate with a resume already filled with local experience.</p>
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
   We've Got Your Back.
  </span>{" "}
    In New Zealand, we don't just host you; we look after you. Under the Education (Pastoral Care) Code of Practice 2021, universities are legally required to ensure your safety and wellbeing. Access 24/7 emergency help, "Buddy Systems" with local students, and specialized international offices to help with visa renewals and accommodation. Many institutions provide free access to safety apps that offer instant support at the touch of a button. Benefit from high-trust visa processing, with 80% of applications handled in under 3 weeks as of 2026.</p>
    </div>
  </div>

  {/* 4. Research Opportunities - Image Right, Content Left */}
  <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-6 md:-mt-6 order-2 md:order-1">
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
   Leading Global Innovation
  </span>{" "}
  Be part of an ecosystem that leads the world in Sustainability, Agri-Tech, and Creative Media. Research in New Zealand is uniquely collaborative; you’ll work closely with expert academics on projects funded by global industry partners. High-achieving 2026 applicants can access the Summer Research Scholarships, providing tax-free stipends of up to $6,750 to build your portfolio. International PhD students pay the same tuition fees as domestic students and enjoy unlimited work rights while conducting world-changing research.</p>
    </div>
  </div>

  {/* 5. Post-Study Work Options - Image Left, Content Right */}
  <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-4 order-2 md:order-1">
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
   Your Bridge to Residency
  </span>{" "}
   New Zealand offers one of the most generous and stable post-study work frameworks in the world. Graduates of any Level 7 degree (Bachelors) or higher are eligible for a 3-year Post-Study Work Visa. Unlike other countries, this is an "open" visa, allowing you to work for any employer in any role. Your work experience in NZ can directly count toward a Skilled Migrant Category Resident Visa, especially in high-demand fields on the Green List like IT, Engineering, and Healthcare. With the 2026 minimum wage at $23.95/hr, the ability to work full-time after graduation provides a secure path to recover your educational investment quickly.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the New Zealand</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Experience world-class education with robust financial support. New Zealand offers millions of NZD in government and university awards to help international students thrive.</p></div>

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
    The "Golden Ticket." Fully funded by the government for students from developing nations (including India). Covers Tuition + Living + Flights.</li>
  <li className="mb-1">
     Awards like the University of Auckland India High Achievers Scholarship offer up to $20,000 NZD towards tuition.</li>

  <li className="mb-1">
    Special partial scholarships for Indian students across all 8 NZ universities.</li></ul>
                
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   {/* What to Expect: */}
  </span>{" "}
   Full rides are rare outside of the Manaaki program. Most university awards are partial, ranging from $5,000 to $20,000 NZD. PhD students, however, pay domestic tuition fees (approx. $7k-$9k NZD/year) which is a massive saving compared to other countries.</p></div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
   {/* How to Qualify: */}
  </span>{" "}
   For University awards, a high GPA (75%+) is key. For Government awards (Manaaki), work experience (usually 2 years) and a clear vision for your home country's development are strictly required.</p></div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your New Zealand Success Story Starts Here</h3>
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

export default StudyNewZealandPage;