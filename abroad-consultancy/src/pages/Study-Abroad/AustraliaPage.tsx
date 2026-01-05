// import React, { useState } from 'react';
// import { 
//   GraduationCap, DollarSign, Home, Briefcase, 
//   Award, Globe, Users, Calendar, BookOpen,
//   CheckCircle, Clock, MapPin, Star,
//   ChevronRight, Search, Download, Phone,
//   Mail, MessageSquare, Shield, Target,
//   Trophy, TrendingUp, Building, Heart,
//   Stethoscope, Sun, Coffee, Plane
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyAustraliaPage: React.FC = () => {
//     const navigate=useNavigate()
//   const [activeSection, setActiveSection] = useState('overview');

//   // Top Universities
//   const topUniversities = [
//     { name: 'University of Melbourne', rank: '#1', location: 'Melbourne', type: 'Public', students: '52,000+' },
//     { name: 'Australian National University', rank: '#2', location: 'Canberra', type: 'Public', students: '20,000+' },
//     { name: 'University of Sydney', rank: '#3', location: 'Sydney', type: 'Public', students: '73,000+' },
//     { name: 'University of New South Wales', rank: '#4', location: 'Sydney', type: 'Public', students: '62,000+' },
//     { name: 'University of Queensland', rank: '#5', location: 'Brisbane', type: 'Public', students: '55,000+' },
//     { name: 'Monash University', rank: '#6', location: 'Melbourne', type: 'Public', students: '86,000+' },
//     { name: 'University of Western Australia', rank: '#7', location: 'Perth', type: 'Public', students: '25,000+' },
//     { name: 'University of Adelaide', rank: '#8', location: 'Adelaide', type: 'Public', students: '27,000+' },
//   ];

//   // Scholarships
//   const scholarships = [
//     { name: 'Australia Awards Scholarships', amount: 'Full tuition + living', eligibility: 'Developing countries', deadline: 'Apr 30, 2024' },
//     { name: 'Endeavour Scholarships', amount: 'Up to $272,500', eligibility: 'International students', deadline: 'Jun 30, 2024' },
//     { name: 'Research Training Program', amount: 'Tuition fee offset', eligibility: 'Research students', deadline: 'Varies' },
//     { name: 'University-specific Scholarships', amount: 'Up to $40,000', eligibility: 'Merit-based', deadline: 'Varies' },
//     { name: 'Destination Australia', amount: '$15,000/year', eligibility: 'Regional areas', deadline: 'Varies' },
//   ];

//   // Intakes
//   const intakes = [
//     { term: 'Semester 1', months: 'February - June', application: 'Aug - Nov', features: 'Main intake, all courses' },
//     { term: 'Semester 2', months: 'July - November', application: 'Feb - May', features: 'Most courses available' },
//     { term: 'Summer Term', months: 'November - February', application: 'Aug - Oct', features: 'Limited courses' },
//   ];

//   // English Requirements
//   const englishRequirements = [
//     { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.0', validity: '2 years' },
//     { test: 'TOEFL iBT', undergraduate: '60-79', postgraduate: '79-94', validity: '2 years' },
//     { test: 'PTE Academic', undergraduate: '50-58', postgraduate: '58-65', validity: '2 years' },
//     { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-185', validity: 'Lifetime' },
//   ];

//   // Key Points
//   const keyPoints = [
//     { title: 'World-Class Education', description: '7 universities in global top 100', icon: <Trophy className="h-6 w-6" /> },
//     { title: 'Research Excellence', description: 'World-leading research facilities', icon: <Target className="h-6 w-6" /> },
//     { title: 'Work Opportunities', description: '40 hours/fortnight during studies', icon: <Briefcase className="h-6 w-6" /> },
//     { title: 'Post-Study Work Rights', description: '2-6 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
//     { title: 'Quality of Life', description: 'Top 10 most liveable cities', icon: <Heart className="h-6 w-6" /> },
//     { title: 'Multicultural Society', description: 'Students from 140+ countries', icon: <Globe className="h-6 w-6" /> },
//   ];

//   // Part-time Work Options
//   const partTimeOptions = [
//     { role: 'Retail & Hospitality', hours: '20-40 hrs/fortnight', pay: '$21-25/hour', type: 'Flexible hours' },
//     { role: 'Tutoring', hours: '10-20 hrs/fortnight', pay: '$30-50/hour', type: 'Academic support' },
//     { role: 'Internships', hours: '20-40 hrs/fortnight', pay: '$25-35/hour', type: 'Industry experience' },
//     { role: 'Research Assistant', hours: '15-20 hrs/fortnight', pay: '$35-45/hour', type: 'Academic research' },
//   ];

//   // Accommodation Options
//   const accommodationOptions = [
//     { type: 'University Accommodation', cost: '$250-400/week', features: 'On-campus, utilities included' },
//     { type: 'Private Student Housing', cost: '$300-500/week', features: 'Modern amenities, social spaces' },
//     { type: 'Shared Apartments', cost: '$150-300/week', features: 'Independence, shared facilities' },
//     { type: 'Homestay', cost: '$200-350/week', features: 'Cultural immersion, meals included' },
//   ];

//   // Popular Courses
//   const popularCourses = [
//     { field: 'Business & Management', universities: 'Melbourne, UNSW, Sydney' },
//     { field: 'Engineering & Technology', universities: 'ANU, Monash, Queensland' },
//     { field: 'Health & Medicine', universities: 'Sydney, Melbourne, Monash' },
//     { field: 'Computer Science', universities: 'Melbourne, ANU, UNSW' },
//   ];

//   // Cost of Living Breakdown
//   const livingCosts = [
//     { item: 'Accommodation', amount: '$8,000 - $15,000', period: 'per year' },
//     { item: 'Food & Groceries', amount: '$4,000 - $7,000', period: 'per year' },
//     { item: 'Transportation', amount: '$1,000 - $2,000', period: 'per year' },
//     { item: 'Utilities', amount: '$1,000 - $2,000', period: 'per year' },
//     { item: 'Entertainment', amount: '$2,000 - $4,000', period: 'per year' },
//     { item: 'Health Insurance', amount: '$600 - $1,000', period: 'per year' },
//   ];

//   const sections = [
//     'overview', 'why-australia', 'key-points', 'intakes', 'english', 
//     'universities', 'cost-living', 'work-rights', 'healthcare',
//     'post-study', 'courses', 'scholarships'
//   ];

//   return (
//     <div className="bg-white overflow-hidden">
//      {/* Hero Section */}
// <section className="relative mt-12 sm:mt-0 md:mt-0 h-[30vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
//     style={{
//       backgroundImage: "url('/australia-bghero.png')",
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
//     <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb- max-w-3xl">
//   Study in <br />
//   <span className="block ml-16 mt-4">Australia</span>
// </h1>
//   </div>
// </div>
// </section>

//       {/* Quick Stats */}
//       <section className='-mt-8 sm:mt-0 md:mt-0'>
//         <div className="py-5 bg-gray-50 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">7</div>
//               <div className="text-gray-600">Top 100 Global Universities</div>
//             </div>
//             <div className="text-center">
//               <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">720,000+</div>
//               <div className="text-gray-600">International Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">2-6 Years</div>
//               <div className="text-gray-600">Post-Study Work Rights</div>
//             </div>
//             <div className="text-center">
//               <div className="text-xl md:text-3xl font-bold text-green-900 mb-2">95%</div>
//               <div className="text-gray-600">Graduate Employability</div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </section>

//       {/* Main Content - All sections in one column without scrolling */}
//       {/* <div className="px-4 sm:px-6 lg:px-8 py-5"> */}
//         <div className="space-y-2">
          
//           {/* Check Eligibility Section - NEW */}
//           <section className="w-[80%] mx-auto scroll-mt-20">
//   <div className="flex justify-center mt-12 sm:mt-12">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center ">
//         <h2 className="text-4xl font-bold text-gray-900 ">Why study in Australia?</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//             Study in Australia as an international student presents a unique and rewarding experience 
//                 that sets it apart from other destinations. Here is a summary of what to expect when 
//                 pursuing education in Australia.
//               </p>
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
          
//           {/* Overview Section */}
//           <section id="overview" className="scroll-mt-20 py-5 w-[92%] mx-auto">
//             <div className="text-left mb-4 mt-8 ">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Overview</h2>
//               <p className="text-lg text-gray-600 text-left">
//                 Australia offers world-class education with globally recognized degrees, 
//                 cutting-edge research opportunities, and excellent post-study work options 
//                 in a beautiful, multicultural environment.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 ">
//               {[
//                 { icon: '🏫', title: 'Top Universities', desc: '7 in Top 100' },
//                 { icon: '⏱️', title: 'Study Duration', desc: '3-4 years' },
//                 { icon: '💼', title: 'Work Rights', desc: '40 hrs/fortnight' },
//                 { icon: '🌏', title: 'Multicultural', desc: '140+ countries' },
//               ].map((item, index) => (
//                 <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow">
//                   <div className="text-3xl mb-2">{item.icon}</div>
//                   <div className="font-bold text-gray-900 mb-1 text-lg">{item.title}</div>
//                   <div className="text-sm text-gray-600">{item.desc}</div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Cost of Living and Healthcare Combined Section - NEW */}
//           <section className="grid md:grid-cols-2 gap-8 py-5 w-[92%] mx-auto">
//             <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100 mt-8">
//               <div className="flex items-center mb-4 ">
//                 <DollarSign className="h-8 w-8 text-yellow-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Cost of Living and Tuition Fees</h3>
//               </div>
//               <p className="text-gray-700 mb-4">
//                 While Australia has a reputation for being relatively expensive, the cost of 
//                 education and living expenses can vary based on your location and chosen institution. 
//                 Financial aid options and scholarships are available to eligible students.
//               </p>
//               <div className="bg-white p-4 rounded-lg border border-yellow-200">
//                 <h4 className="font-bold text-gray-900 mb-2">Undergraduate Programs</h4>
//                 <div className="text-xl font-bold text-green-600">$20,000 - $45,000 AUD/year</div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 mt-8">
//               <div className="flex items-center mb-4">
//                 <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Healthcare System</h3>
//               </div>
//               <p className="text-gray-700 mb-4">
//                 Australia prioritizes the well-being of its international students by providing 
//                 access to a world-class healthcare system. The Overseas Student Health Cover (OSHC) 
//                 ensures affordable medical care.
//               </p>
//               <div className="bg-white p-4 rounded-lg border border-blue-200">
//                 <h4 className="font-bold text-gray-900 mb-2">OSHC Coverage</h4>
//                 <div className="text-xl font-bold text-blue-600">$600 - $1,000/year</div>
//                 <div className="text-sm text-gray-600">Doctor visits, hospital treatment, prescriptions</div>
//               </div>
//             </div>
//           </section>

//           {/* Post-Study Work Section - Enhanced */}
//           <section id="post-study" className="scroll-mt-20 py-8 w-[92%] mx-auto">
//             <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-8 text-white">
//               <div className="flex items-center mb-6">
//                 <Briefcase className="h-10 w-10 text-yellow-300 mr-4" />
//                 <h2 className="text-3xl font-bold">Post-Study Work Opportunities</h2>
//               </div>
//               <p className="text-lg mb-6 text-blue-100">
//                 Upon completing their study in Australia, international students have the opportunity 
//                 to gain practical experience through the Temporary Graduate visa (subclass 485). This 
//                 allows graduates to work in Australia, providing valuable exposure to the local job market.
//               </p>
              
//               <div className="grid grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
//                   <div className="text-xl md:text-3xl font-bold mb-2">2 Years</div>
//                   <div className="text-blue-100">Bachelor Degree</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
//                   <div className="text-xl md:text-3xl font-bold mb-2">3 Years</div>
//                   <div className="text-blue-100">Master Degree</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
//                   <div className="text-xl md:text-3xl font-bold mb-2">4 Years</div>
//                   <div className="text-blue-100">PhD Degree</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center text-green-200">
//                 <CheckCircle className="h-5 w-5 mr-2" />
//                 <span>Enhances employability on a global scale</span>
//               </div>
//             </div>
//           </section>

//           {/* Multicultural Environment Section - NEW */}
//           <section className='py-5 mt-8 w-[92%] mx-auto'>
//           <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 py-5">
//             <div className="text-left mb-8">
//               <div className="flex mb-4">
//                 <Globe className="h-12 w-12 text-purple-600 mr-4" />
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Multicultural Environment</h2>
//               </div><p className="text-lg text-gray-700 text-left">
//                 Australia's multicultural society creates a vibrant and inclusive atmosphere for 
//                 international students. Students from diverse backgrounds come together, fostering 
//                 a rich cultural exchange that prepares students for a globalized world.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-white rounded-lg p-2 text-center">
//                 <div className="text-2xl mb-2">🌏</div>
//                 <div className="font-bold text-gray-900">Diverse Backgrounds</div>
//               </div>
//               <div className="bg-white rounded-lg p-2 text-center">
//                 <div className="text-2xl mb-2">🤝</div>
//                 <div className="font-bold text-gray-900">Cultural Exchange</div>
//               </div>
//               <div className="bg-white rounded-lg p-2 text-center">
//                 <div className="text-2xl mb-2">🎯</div>
//                 <div className="font-bold text-gray-900">Global Perspective</div>
//               </div>
//               <div className="bg-white rounded-lg p-2 text-center">
//                 <div className="text-2xl mb-2">💡</div>
//                 <div className="font-bold text-gray-900">Understanding</div>
//               </div>
//             </div>
//             </div>
//           </section>

//           {/* World-Class Education Section - Enhanced */}
//           <section className='py-5 mt-8 w-[92%] mx-auto'>
//           <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg ">
//             <div className="flex items-center mb-6">
//               <Trophy className="h-10 w-10 text-green-600 mr-4" />
//               <h2 className="text-3xl font-bold text-gray-900">World-Class Education</h2>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">
//               Home to several top-ranked universities and institutions, Australia upholds high 
//               academic standards and fosters innovative research. Degrees obtained from Australian 
//               universities are not only highly respected within the country but also recognized 
//               globally, adding prestige to your academic credentials.
//             </p>
            
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <h4 className="font-bold text-gray-900 mb-2">Top-Ranked Institutions</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                     <span>7 universities in QS World Top 100</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                     <span>Innovative teaching methods</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
//                     <span>Internationally respected degrees</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
//                     <span>Industry-relevant curriculum</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             </div>
//           </section>

//           {/* Scholarships Section - Enhanced */}
//           <section id="scholarships" className="scroll-mt-20 py-5 w-[92%] mx-auto">
//             <div className="text-left  mb-8 mt-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarships in Australia</h2>
//               <p className="text-lg text-gray-600">
//                 Discover exclusive scholarship opportunities for international students with Masters Visa. 
//                 We provide specialized guidance to unlock financial aid for your academic journey.
//               </p>
//             </div>

//             {/* Scholarship Application Process */}
//             <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Process</h3>
//               <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="bg-white p-4 rounded-lg border border-gray-200">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
//                     <span className="font-bold text-green-600">1</span>
//                   </div>
//                   <h4 className="font-bold text-gray-900 mb-2 text-center">Application Submission</h4>
//                   <p className="text-sm text-gray-600 text-center">
//                     Submit comprehensive application with all required documents
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg border border-gray-200">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
//                     <span className="font-bold text-green-600">2</span>
//                   </div>
//                   <h4 className="font-bold text-gray-900 mb-2 text-center">Assessment</h4>
//                   <p className="text-sm text-gray-600 text-center">
//                     Review of academic achievements and extracurricular activities
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg border border-gray-200">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
//                     <span className="font-bold text-green-600">3</span>
//                   </div>
//                   <h4 className="font-bold text-gray-900 mb-2 text-center">Interview</h4>
//                   <p className="text-sm text-gray-600 text-center">
//                     Virtual interview to assess aspirations and potential
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg border border-gray-200">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
//                     <span className="font-bold text-green-600">4</span>
//                   </div>
//                   <h4 className="font-bold text-gray-900 mb-2 text-center">Final Selection</h4>
//                   <p className="text-sm text-gray-600 text-center">
//                     Notification of successful candidates
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Eligibility Criteria */}
//             <div className="bg-white rounded-2xl p-8 border border-gray-200">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                     <span>Hold an offer of admission to an Australian institution through Masters Visa</span>
//                   </div>
//                   <div className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                     <span>Showcase involvement in extracurricular activities or community service</span>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                     <span>Demonstrate outstanding academic achievements</span>
//                   </div>
//                   <div className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                     <span>Meet English language proficiency requirements</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

         
//           {/* Existing Compact Sections */}
//           <div className="grid md:grid-cols-3 gap-8 py-5 mt-8 w-[92%] mx-auto">
//             {/* Intakes Section */}
//             <section id="intakes" className="scroll-mt-20">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Intake Periods</h2>
//               <div className="space-y-3">
//                 {intakes.map((intake, index) => (
//                   <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
//                     <div className={`inline-flex items-center px-3 py-1 rounded-full mb-2 text-xs ${
//                       index === 0 ? 'bg-green-100 text-green-700' :
//                       index === 1 ? 'bg-blue-100 text-blue-700' :
//                       'bg-yellow-100 text-yellow-700'
//                     }`}>
//                       {intake.term}
//                     </div>
//                     <div className="text-sm font-bold text-gray-900">{intake.months}</div>
//                     <div className="text-xs text-gray-600">{intake.features}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* English Requirements Section */}
//             <section id="english" className="scroll-mt-20">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">English Requirements</h2>
//               <div className="space-y-2">
//                 {englishRequirements.map((test, index) => (
//                   <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
//                     <div className="font-medium text-gray-900">{test.test}</div>
//                     <div className="text-sm text-gray-600">UG: {test.undergraduate} | PG: {test.postgraduate}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Popular Courses Section */}
//             <section id="courses" className="scroll-mt-20">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Courses</h2>
//               <div className="space-y-3">
//                 {popularCourses.map((course, index) => (
//                   <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">{course.field}</h3>
//                     <div className="text-xs text-gray-600">{course.universities}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>

//            {/* Masters Visa Services Section - NEW */}       
//           <section className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900  p-12 text-white ">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Study in Australia with DartGlobe</h2>
//               <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
//                 Explore the gateway to world-class education in Australia with our DartGlobe 
//                 Overseas Education Consultancy. We simplify the complex process, providing expert 
//                 guidance on admissions, visa procedures, and more.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-8 mb-10">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                 <div className="text-4xl mb-4">🎓</div>
//                 <h3 className="text-xl font-bold mb-3">Admissions Guidance</h3>
//                 <p className="text-blue-100">Expert assistance with university applications</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                 <div className="text-4xl mb-4">📋</div>
//                 <h3 className="text-xl font-bold mb-3">Visa Procedures</h3>
//                 <p className="text-blue-100">Complete support for student visa applications</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                 <div className="text-4xl mb-4">🤝</div>
//                 <h3 className="text-xl font-bold mb-3">Comprehensive Support</h3>
//                 <p className="text-blue-100">End-to-end assistance for smooth transition</p>
//               </div>
//             </div>

//             <div className="text-center">
//               <p className="text-xl font-semibold mb-8">
//                 Elevate your academic journey with our comprehensive support, ensuring a smooth 
//                 transition to Australian universities. Unleash your potential and embrace a 
//                 vibrant learning experience in a culturally diverse environment.
//               </p>
              
//               <button 
//                 onClick={() => navigate('/contact')} 
//                 className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
//               >
//                 Contact Us for Australia
//               </button>
//             </div>
//           </section>

//         </div>
//       </div>
//     // </div>
//   );
// };

// export default StudyAustraliaPage;




import React from 'react';
import {
  GraduationCap, PoundSterling, Home, Briefcase,
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyAustraliaPage: React.FC = () => {
    const navigate=useNavigate()
  // Top Universities
  const topUniversities = [
    { name: 'University of Oxford' },
    { name: 'University of Cambridge' },
    { name: 'Imperial College London' },
    { name: 'London School of Economics (LSE)' },
    { name: 'University College London (UCL)' },
  ];

  // Major Benefits
  const majorBenefits = [
    {
      title: 'Global Academic Distinction',
      description: 'Graduate from world-renowned institutions; nine Australian universities are ranked in the top 100 of the QS World University Rankings',
      icon: <Trophy className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Industry-Linked Learning',
      description: 'Benefit from the Australian Qualifications Framework (AQF), which ensures degrees focus on practical, industry-relevant skills and real-world case studies.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Guaranteed Student Rights',
      description: 'Be protected by the ESOS Act, a unique legal framework that guarantees high-quality education and consumer protection for every international student.',
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Vibrant Multicultural Hub',
      description: 'Thrive in a safe, diverse environment with cities like Melbourne and Sydney consistently ranked among the world’s most livable.',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'February / March (Autumn)', duration: 'Primary Intake', application: 'October - November (Best for Scholarships)' },
    { id: 2, term: 'July (Winter)', duration: 'Secondary Intake', application: 'April - May' },
    { id: 3, term: 'November (Spring)', duration: 'Limited Intake', application: 'August - September' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: '6.5 Overall', Subtitle: 'Most undergraduate and postgraduate programs require no individual band less than 6.0.' },
    { test: 'TOEFL iBT', requirement: '70 – 94',Subtitle: 'Widely accepted, though some high-demand programs may require overall scores of 94 or higher.' },
    { test: 'PTE Academic', requirement: '58 – 65', Subtitle: 'Popular for its fast results; most standard entry programs accept a score of 58 overall.' },
    // { test: 'Duolingo', requirement: '105 – 120', Subtitle: 'A convenient, home-based testing option accepted by many modern universities.' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Smart Shortlisting', description: 'We match your profile with high-probability awards, focusing on the "Group of Eight" universities and regional destination grants.' },
    { step: 2, title: 'SOP & Research Proposal', description: '(Changed from Essay Strategy) Australian scholarships are often merit-based, but research awards require a solid Research Proposal. We help you refine your topic to align with university strengths.' },
    { step: 3, title: 'Document Perfection', description: 'We ensure your academic transcripts and grading scales are converted correctly to the Australian GPA equivalent (7.0 scale) to maximize your ranking.' },
    { step: 4, title: 'Interview Prep', description: 'For high-value awards (like the RTP or Vice-Chancellor’s Scholars), we prepare you to discuss your research impact and leadership goals.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/australia-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl">
  Study in Australia<br />
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the Australia</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
           Australia is more than just a study destination; it’s a premier gateway to the Asia-Pacific and the global economy. Benefit
            from world-class education with nine universities ranked in the global top 100, industry-integrated learning, and an unbeatable
             quality of life. With a strong focus on practical skills and future-ready innovation, an Australian degree prepares you to lead 
             in the international job market. We help you navigate elite admissions, secure high-value scholarships, and manage your visa for 
             a seamless transition to your new life Down Under.</p></div>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the Australia for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the Australia</h2>
        <p className="text-sm  text-gray-700 text-left">
          Australia offers a flexible academic calendar designed to welcome international students at multiple points throughout the year. Whether you are aiming for the major academic kick-off or a mid-year transition, Australia’s intake system ensures you can start your journey on your own terms.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the Australia</h2>
        <p className="text-sm text-gray-700 text-left mb-4">
         Australia offers a flexible academic calendar designed to welcome international students at multiple points throughout the year. Whether you are aiming for the major academic kick-off or a mid-year transition, Australia’s intake system ensures you can start your journey on your own terms.</p>
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Primary Intake (February/March)</h4>
        <p className="text-gray-700 text-xs mb-1">This is the largest intake cycle, offering the widest range of courses and the highest availability of university scholarships.</p>
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
        <p className="text-gray-700 text-xs mb-1">An excellent choice for students needing extra time for test preparation; most major courses in Business, IT, and Engineering remain open.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Extra preparation time without a gap year.</span>
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
          <span className='text-xs'>Accelerated graduation & higher visa success.</span>
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
            To secure your 2026 admission and visa, you must meet specific English benchmarks:</p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Study in Australia Without IELTS!</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  You may qualify for an English language waiver if you have completed senior secondary schooling in a designated English-speaking country or have a recognized qualification where the Medium of Instruction (MOI) was English.</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the Australia</h2>
      <p className="text-sm  text-gray-700">
        Australia offers some of the most generous student work rights in the world.</p></div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Working Hours:</strong>You can work up to 48 hours per fortnight while your course is in session and unlimited hours during scheduled term breaks.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>PhD & Research Privileges:</strong>Masters by Research and PhD students enjoy full-time, unlimited work rights once their program begins.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Record Minimum Wage:</strong>The minimum wage is $24.95 per hour. Casual employees can earn up to $31.19 per hour including a 25% casual loading.

Top Student Job Sectors</span>
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
            <div className='text-xs text-gray-700'>(Tesco, Sainsbury's, Primark, etc.)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality & Events</div>
            <div className='text-xs text-gray-700'>(Cafes, Restaurants, Stadium Stewarding)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">On-Campus Roles</div>
            <div className='text-xs text-gray-700'>(Library Assistant, Student Ambassador, Admin Support)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Corporate Internships</div>
            <div className='text-xs text-gray-700'>(Part-time paid internships in your field of study)</div>
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
          <h3 className="text-med md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Did You Know? Minimum Wage Protections Apply to You!</h3>
          <p className="text-xs md:text-sm text-gray-700">
           As an international student in Australia, you are legally entitled to the same minimum wage as any Australian citizen. The National Minimum Wage is $24.95 per hour (for those 21 and older). If you are hired as a "casual" employee which is common for student roles you are also entitled to a 25% casual loading, bringing your minimum pay to $31.19 per hour. This ensures you are fairly compensated for your time and protected by the Fair Work Ombudsman.</p></div>
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
        Focus on the global prestige and career impact of a Australian degree.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Global Stamp of Distinction for Your Career.
  </span>{" "}
 Australia is home to a world-class education system where 9 universities are ranked in the Global Top 100 (QS 2026 Rankings). Earning an Australian degree isn't just about learning; it’s about holding a credential protected by the ESOS Act, which guarantees the highest quality of tuition and student protection. Recognized by employers worldwide, an Australian qualification is a powerful endorsement of your skills, opening doors to top-tier global corporations and innovation hubs.</p>
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
        The Australian Qualifications Framework (AQF) Advantage.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Smarter Pathways and Global Portability.
  </span>{" "}
   Australia offers a unique, structured pathway called the AQF, which allows for seamless movement between vocational and higher education. Save time by choosing 2-year Fast-track Bachelors or specialized 1-year Graduate Diplomas. The 10-level AQF system ensures your credits are easily transferable worldwide, giving you a distinct head start over peers in traditional 4-year systems. Whether you choose a research-heavy University or a skills-focused TAFE, your education is directly mapped to the 2026 global job market.</p>
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
   We’ve Got Your Back, Every Step of the Way.
  </span>{" "}
    Moving to Australia is a life-changing step, but you are never alone. Australian institutions are world-leaders in student welfare, offering dedicated International Student Support Centers that assist with everything from "Safe-Space" accommodation to mental wellbeing and legal rights. With a multicultural society where nearly 30% of the population was born overseas, you’ll find a sense of belonging in a country consistently ranked as one of the safest and most livable destinations for international students.</p>
    </div>
  </div>

  {/* 4. Research Opportunities - Image Right, Content Left */}
  <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-8 md:-mt-6 order-2 md:order-1">
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
   Hands-On Learning at the Cutting Edge.
  </span>{" "}
  In Australia, research is the heartbeat of education. You won't just study history; you'll help write the future in sectors like Quantum Computing, Green Energy, and Medical Science. Under the guidance of world-leading academics, you’ll gain access to state-of-the-art facilities and "Industry-Integrated Research" projects. This hands-on approach builds the critical analysis and technical skills that are highly prized by modern employers looking for innovators, not just graduates.</p>
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
   The Ultimate Professional Launchpad.
  </span>{" "}
  The journey doesn't end with your degree. The Temporary Graduate Visa (Subclass 485) is your bridge to the Australian workforce.
Bachelor’s and Master’s graduates can stay for 2 to 3 years, while PhD graduates can stay for up to 4 years. Study in designated regional areas (like Perth, Adelaide, or the Gold Coast) to unlock additional 1–2 years of stay-back rights. This is the perfect opportunity to gain invaluable international experience, recover your investment, and build a pathway toward Australian Permanent Residency (PR).</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the Australia</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Australia offers generous support for high achievers. From government-funded awards to university fee waivers, we help you secure the funding you need to manage your education costs in AUD.</p></div>

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
    Government funding (up to $15,000 AUD/year) for students studying in regional campuses (e.g., Gold Coast, Perth, Adelaide).
  </li>

  <li className="mb-1">
   Common awards that deduct 15% – 25% from your total tuition fees automatically based on your undergraduate grades.
  </li>

  <li className="mb-1">
   The "Holy Grail" for Masters by Research/PhD students—covers 100% tuition + a living stipend.</li>
</ul>

                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   
  </span>{" "}
   Full rides are rare for coursework (Bachelor/Master) degrees. Expect partial scholarships valued between $5,000 and $20,000 AUD. However, PhD students often receive full funding + living allowances (approx. $30k-$40k AUD/year).</p></div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
  
  </span>{" "}
  Australia is heavily Merit-Driven. A high GPA in your Bachelor's is the single biggest factor. Unlike the US, extracurriculars matter less for coursework scholarships but are vital for leadership-specific awards.</p></div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your Australia Success Story Starts Here</h3>
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

export default StudyAustraliaPage;