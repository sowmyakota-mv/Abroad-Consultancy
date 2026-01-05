// import React from 'react';
// import { 
//   GraduationCap, Euro, Home, Briefcase, 
//   Award, Globe, Users, Calendar, BookOpen,
//   CheckCircle, Clock, MapPin, Star,
//   ChevronRight, Search, Download, Phone,
//   Mail, MessageSquare, Shield, Target,
//   Trophy, TrendingUp, Building, Heart,
//   Factory, Car, Wifi,
//   Castle, Beer, Train, Leaf
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyGermanyPage: React.FC = () => {
//     const navigate=useNavigate()
//   // Top Universities
//   const topUniversities = [
//     { name: 'Technical University of Munich', rank: '#1', location: 'Munich', type: 'Public', students: '50,000+' },
//     { name: 'Ludwig Maximilian University of Munich', rank: '#2', location: 'Munich', type: 'Public', students: '51,000+' },
//     { name: 'Heidelberg University', rank: '#3', location: 'Heidelberg', type: 'Public', students: '30,000+' },
//     { name: 'Humboldt University of Berlin', rank: '#4', location: 'Berlin', type: 'Public', students: '36,000+' },
//     { name: 'Free University of Berlin', rank: '#5', location: 'Berlin', type: 'Public', students: '38,000+' },
//     { name: 'RWTH Aachen University', rank: '#6', location: 'Aachen', type: 'Public', students: '47,000+' },
//     { name: 'University of Freiburg', rank: '#7', location: 'Freiburg', type: 'Public', students: '25,000+' },
//     { name: 'University of Tübingen', rank: '#8', location: 'Tübingen', type: 'Public', students: '28,000+' },
//   ];

//   // Popular Courses
//   const popularCourses = [
//     { field: 'Engineering & Technology', universities: 'TU Munich, RWTH Aachen, TU Berlin' },
//     { field: 'Medicine & Health Sciences', universities: 'Heidelberg, Charité Berlin, LMU Munich' },
//     { field: 'Business & Economics', universities: 'Mannheim, Frankfurt School, WHU' },
//     { field: 'Computer Science & IT', universities: 'TU Munich, KIT, TU Berlin' },
//     { field: 'Natural Sciences', universities: 'Heidelberg, LMU Munich, TU Dresden' },
//     { field: 'Automotive Engineering', universities: 'TU Munich, Stuttgart, Braunschweig' },
//   ];

//   // Scholarships
//   const scholarships = [
//     { name: 'DAAD Scholarships', amount: '€850-€1,200/month', eligibility: 'International students', deadline: 'Varies' },
//     { name: 'Deutschlandstipendium', amount: '€300/month', eligibility: 'All students', deadline: 'University specific' },
//     { name: 'Erasmus+ Programme', amount: '€300-€400/month', eligibility: 'EU exchange students', deadline: 'Mar 31, 2024' },
//     { name: 'Friedrich Ebert Foundation', amount: '€750/month', eligibility: 'Socially engaged students', deadline: 'Nov 30, 2024' },
//     { name: 'Konrad-Adenauer-Stiftung', amount: '€850/month', eligibility: 'Postgraduate students', deadline: 'Jul 15, 2024' },
//   ];

//   // Intakes
//   const intakes = [
//     { term: 'Winter Semester', months: 'October - March', application: 'May - Jul 15', features: 'Main intake, all courses' },
//     { term: 'Summer Semester', months: 'April - September', application: 'Dec - Jan 15', features: 'Limited courses' },
//     { term: 'Language Course Intakes', months: 'Monthly/Quarterly', application: '3 months before', features: 'German language preparation' },
//   ];

//   // Language Requirements
//   const languageRequirements = [
//     { language: 'German', test: 'TestDaF/DSH', level: 'B2-C1', programs: 'German-taught programs' },
//     { language: 'English', test: 'IELTS/TOEFL', level: '6.0-7.0', programs: 'English-taught programs' },
//     { language: 'Mixed', test: 'Both required', level: 'B1 German + B2 English', programs: 'Bilingual programs' },
//   ];

//   // Key Points
//   const keyPoints = [
//     { title: 'Tuition-Free Education', description: 'No tuition fees at public universities', icon: <Euro className="h-6 w-6" /> },
//     { title: 'World-Class Engineering', description: '#1 in automotive and mechanical engineering', icon: <Car className="h-6 w-6" /> },
//     { title: 'Work Opportunities', description: '120 full days/240 half days per year', icon: <Briefcase className="h-6 w-6" /> },
//     { title: 'Post-Study Work', description: '18-month job seeker visa', icon: <TrendingUp className="h-6 w-6" /> },
//     { title: 'Strong Economy', description: 'Largest economy in Europe', icon: <Factory className="h-6 w-6" /> },
//     { title: 'Central Location', description: 'Heart of Europe, easy travel', icon: <Train className="h-6 w-6" /> },
//   ];

//   // Types of Institutions
//   const institutionTypes = [
//     { type: 'Universities', count: '120+', focus: 'Research & theoretical education', degrees: 'Bachelor, Master, PhD' },
//     { type: 'Universities of Applied Sciences', count: '250+', focus: 'Practical & industry-oriented', degrees: 'Bachelor, Master' },
//     { type: 'Colleges of Art, Film & Music', count: '50+', focus: 'Creative arts & performing arts', degrees: 'Diploma, Bachelor, Master' },
//   ];

//   // Cost of Living
//   const livingCosts = [
//     { city: 'Munich', amount: '€900 - €1,300', notes: 'Most expensive, strong job market' },
//     { city: 'Berlin', amount: '€850 - €1,200', notes: 'Cultural hub, startup scene' },
//     { city: 'Hamburg', amount: '€800 - €1,200', notes: 'Port city, media industry' },
//     { city: 'Frankfurt', amount: '€850 - €1,250', notes: 'Financial center, international' },
//     { city: 'Cologne', amount: '€800 - €1,150', notes: 'Historic city, media companies' },
//     { city: 'Leipzig/Dresden', amount: '€700 - €1,000', notes: 'Affordable, growing student cities' },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
// <section className="relative h-[44vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
//     style={{
//       backgroundImage: "url('/germany-bghero.png')",
//       backgroundSize: "100% auto" // ✅ shows full image
//     }}
//   >
//   </div>

//   {/* Content */}
//   <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
//   <div className="max-w-xl text-center md:text-left">
//     <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb- max-w-3xl">
//   Study in <br />
//   <span className="block ml-16 mt-4">Germany</span>
// </h1>
//   </div>
// </div>
// </section>
//       {/* Quick Stats */}
//       <section className=''>
//         <div className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-black mb-2">0€</div>
//               <div className="text-gray-600">Tuition at Public Universities</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-black mb-2">350,000+</div>
//               <div className="text-gray-600">International Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-black mb-2">420+</div>
//               <div className="text-gray-600">Higher Education Institutions</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-black mb-2">1,800+</div>
//               <div className="text-gray-600">English-Taught Programs</div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </section>

//       {/* Main Content - All sections visible */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-8"> */}

//          <section className="w-[80%] mx-auto scroll-mt-20">
//   <div className="flex justify-center mt-12 sm:mt-12">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center ">
//         <h2 className="text-4xl font-bold text-gray-900 ">Why study in Germany?</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//             Study in Germany as an international student presents a unique and rewarding experience 
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
        
//         {/* Overview Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <div className="text-left mb-4 mt-8">
//             <h2 className="text-4xl font-bold text-gray-900 mb-3">Study in Germany - Complete Overview</h2>
//             <p className="text-xl text-gray-600 text-left">
//               Germany offers tuition-free education at public universities, world-class engineering programs, 
//               and excellent career opportunities in Europe's economic powerhouse.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//             {[
//               { icon: '🎓', title: 'Tuition-Free', desc: 'No tuition fees at public universities' },
//               { icon: '🏭', title: 'Engineering Hub', desc: 'World leader in automotive & manufacturing' },
//               { icon: '🌍', title: 'English Programs', desc: '1,800+ English-taught programs' },
//               { icon: '💼', title: 'Strong Economy', desc: 'Largest economy in Europe' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow">
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <div className="font-bold text-gray-900 mb-2">{item.title}</div>
//                 <div className="text-gray-600">{item.desc}</div>
//               </div>
//             ))}
//           </div>
// <div className='py-5 '>
//           <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-4 mt-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Germany?</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="bg-white p-4 rounded-xl">
//                 <div className="text-2xl font-bold text-black mb-2">#1</div>
//                 <div className="font-bold text-gray-900 mb-2">Engineering Education</div>
//                 <div className="text-gray-600">Top-ranked engineering programs worldwide</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-black mb-2">100+</div>
//                 <div className="font-bold text-gray-900 mb-2">Nobel Laureates</div>
//                 <div className="text-gray-600">From German universities and research institutes</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-black mb-2">€4.5B</div>
//                 <div className="font-bold text-gray-900 mb-2">Annual Research Budget</div>
//                 <div className="text-gray-600">Significant investment in innovation</div>
//               </div>
//             </div>
//           </div>
//           </div>
//         </section>

//         {/* Why Germany Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Why Study in Germany?</h2>
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
//                   <Euro className="h-6 w-6 text-gray-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Tuition-Free Education</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Germany is one of the few countries in the world that offers tuition-free education 
//                 at public universities for both domestic and international students, making quality 
//                 education accessible to all.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>No tuition fees at public universities in most federal states</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Only semester contribution: €150-€350 per semester</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Includes public transport ticket in many cities</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
//                   <Factory className="h-6 w-6 text-red-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Strong Economy & Industry</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 As Europe's largest economy and a global leader in engineering, manufacturing, 
//                 and innovation, Germany offers excellent career opportunities and industry connections.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-black mb-2">#1</div>
//                   <div className="text-gray-600">Automotive Industry</div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-black mb-2">4.0</div>
//                   <div className="text-gray-600">Industry 4.0 Leader</div>
//                 </div>
//               </div>
//             </div>
//           </div>
// <div className='py-5'>
//           <div className="mt-8 bg-gradient-to-r from-black to-red-900 rounded-3xl p-4 text-white">
//             <h3 className="text-3xl font-bold mb-8 text-left">German Education Excellence</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🔬</div>
//                 <h4 className="text-xl font-bold mb-3">Research Excellence</h4>
//                 <p className="text-gray-300">Home to Max Planck, Fraunhofer, and Helmholtz research institutes</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🏭</div>
//                 <h4 className="text-xl font-bold mb-3">Industry Integration</h4>
//                 <p className="text-gray-300">Strong partnerships with global companies like Siemens, BMW, Bosch</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🌐</div>
//                 <h4 className="text-xl font-bold mb-3">International Recognition</h4>
//                 <p className="text-gray-300">German degrees highly respected worldwide</p>
//               </div>
//             </div>
//           </div></div>
//         </section>

//         {/* Key Points Section */}
//         <section className='mt-8 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 ">Key Advantages of Studying in Germany</h2>
//           <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {keyPoints.map((point, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
//                 <div className="text-black mb-4">{point.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
//                 <p className="text-gray-600">{point.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gray-50 rounded-2xl p-6 py-5">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">German Higher Education System</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               {institutionTypes.map((institution, index) => (
//                 <div key={index} className="bg-white p-6 rounded-xl">
//                   <div className="text-2xl font-bold text-black mb-2">{institution.count}</div>
//                   <div className="font-bold text-gray-900 mb-2">{institution.type}</div>
//                   <div className="text-gray-600 mb-2">{institution.focus}</div>
//                   <div className="text-sm text-gray-500">{institution.degrees}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Popular Courses Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Popular Courses in Germany</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {popularCourses.map((course, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
//                     <BookOpen className="h-6 w-6 text-gray-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{course.field}</h3>
//                     <div className="text-gray-600">Top universities: {course.universities}</div>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Language</span>
//                     <span className="font-bold">German/English</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Duration</span>
//                     <span className="font-bold">3-4 years (Bachelor)</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Career Prospects</span>
//                     <span className="font-bold text-green-600">Excellent</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-6">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Unique Study Fields in Germany</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🚗</div>
//                 <div className="font-bold text-gray-900 mb-2">Automotive Engineering</div>
//                 <div className="text-gray-600">Home to BMW, Mercedes-Benz, Volkswagen, Audi</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏭</div>
//                 <div className="font-bold text-gray-900 mb-2">Industry 4.0</div>
//                 <div className="text-gray-600">Leader in smart manufacturing and automation</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💚</div>
//                 <div className="font-bold text-gray-900 mb-2">Renewable Energy</div>
//                 <div className="text-gray-600">Pioneer in wind and solar energy technology</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Intakes Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Intake Periods in Germany</h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {intakes.map((intake, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//                 <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
//                   index === 0 ? 'bg-gray-100 text-gray-700' :
//                   index === 1 ? 'bg-yellow-100 text-yellow-700' :
//                   'bg-red-100 text-red-700'
//                 }`}>
//                   <Calendar className="h-4 w-4 mr-2" />
//                   {intake.term}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{intake.months}</h3>
//                 <div className="mb-4">
//                   <div className="text-sm text-gray-500 mb-2">Application Deadline</div>
//                   <div className="font-medium">{intake.application}</div>
//                 </div>
//                 <div className="text-gray-600">{intake.features}</div>
//               </div>
//             ))}
//           </div>
// <div className='py-5'>
//           <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-6 ">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline for Germany</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Research & Language Preparation (18-24 months before)</div>
//                   <div className="text-gray-600">Choose program and start German/English preparation</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Prepare Documents & Apply (6-12 months before)</div>
//                   <div className="text-gray-600">APS certificate, language tests, university applications</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Visa Process & Arrival (3-6 months before)</div>
//                   <div className="text-gray-600">Blocked account, health insurance, student visa</div>
//                 </div>
//               </div>
//             </div>
//           </div></div>
//         </section>

//         {/* Language Requirements Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//   <h2 className="text-4xl font-bold text-gray-900 mb-8">Language Requirements</h2>
  
//   <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
//     {/* Add mobile scrolling wrapper */}
//     <div className="overflow-x-auto md:overflow-x-visible">
//       <table className="w-full min-w-[640px] md:min-w-0">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="py-4 px-6 text-left font-bold text-gray-900">Language</th>
//             <th className="py-4 px-6 text-left font-bold text-gray-900">Proficiency Test</th>
//             <th className="py-4 px-6 text-left font-bold text-gray-900">Required Level</th>
//             <th className="py-4 px-6 text-left font-bold text-gray-900">Program Type</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {languageRequirements.map((lang, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="py-4 px-6 font-medium">{lang.language}</td>
//               <td className="py-4 px-6">{lang.test}</td>
//               <td className="py-4 px-6">{lang.level}</td>
//               <td className="py-4 px-6">{lang.programs}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">German Language Preparation</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Intensive Courses:</strong> 3-6 months to reach B2 level</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Studienkolleg:</strong> Preparatory year for international students</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>Language Schools:</strong> Goethe-Institut, DeutschAkademie, etc.</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span><strong>University Courses:</strong> Many universities offer preparatory courses</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-red-50 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">English-Taught Programs</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-red-600">🎓</span>
//                   </div>
//                   <span><strong>Master's Programs:</strong> 1,300+ English-taught Master's programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-red-600">🎓</span>
//                   </div>
//                   <span><strong>Bachelor's Programs:</strong> 500+ English-taught Bachelor's programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-red-600">🔬</span>
//                   </div>
//                   <span><strong>PhD Programs:</strong> Most PhD programs are in English</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Cost of Living Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-8">Cost of Living in Germany</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
//                   <Euro className="h-6 w-6 text-gray-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Monthly Living Costs by City</h3>
//               </div>
//               <div className="space-y-2">
//                 {livingCosts.map((cost, index) => (
//                   <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <div>
//                       <div className="font-bold text-gray-900">{cost.city}</div>
//                       <div className="text-sm text-gray-500">{cost.notes}</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="font-bold text-gray-900">{cost.amount}</div>
//                       <div className="text-sm text-gray-500">per month</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
//                   <Home className="h-6 w-6 text-red-600" />
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
//                   <span className="font-bold">€200 - €300</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Health Insurance</span>
//                   <span className="font-bold">€110 - €120</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Public Transport</span>
//                   <span className="font-bold">€30 - €100</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Study Materials</span>
//                   <span className="font-bold">€50 - €100</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Personal Expenses</span>
//                   <span className="font-bold">€100 - €200</span>
//                 </div>
//                 <div className="flex justify-between border-t pt-2">
//                   <span className="font-bold text-gray-900">Total Range</span>
//                   <span className="font-bold text-black">€800 - €1,300</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-2xl p-6">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Requirements for Student Visa</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-black mb-2">€11,208</div>
//                 <div className="font-bold text-gray-900 mb-2">Blocked Account</div>
//                 <div className="text-gray-600">Required amount for one year (as of 2024)</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-black mb-2">€934</div>
//                 <div className="font-bold text-gray-900 mb-2">Monthly Withdrawal</div>
//                 <div className="text-gray-600">Maximum monthly withdrawal from blocked account</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-black mb-2">€150-€350</div>
//                 <div className="font-bold text-gray-900 mb-2">Semester Fee</div>
//                 <div className="text-gray-600">Administrative fee per semester (includes transport)</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Work Opportunities Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 mt-8 ">Work Opportunities During Studies</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             {[
//               { role: 'Student Assistant', hours: '10-20 hrs/week', pay: '€12-€15/hour', type: 'University positions' },
//               { role: 'Internships', hours: 'Full-time', pay: '€800-€1,500/month', type: 'During semester breaks' },
//               { role: 'Working Student', hours: '20 hrs/week', pay: '€12-€20/hour', type: 'Industry positions' },
//               { role: 'Mini Jobs', hours: 'Up to 520€/month', pay: '€9-€12/hour', type: 'Tax-free casual work' },
//             ].map((option, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
//                     <Briefcase className="h-6 w-6 text-gray-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{option.role}</h3>
//                     <div className="text-gray-600 text-sm">{option.type}</div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <div className="text-sm text-gray-500">Hours/Earnings</div>
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

//           <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Work Regulations</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Work Hours:</strong> 120 full days or 240 half days per year</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>During Studies:</strong> Maximum 20 hours per week during semester</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>During Breaks:</strong> Full-time work allowed during semester breaks</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Tax Benefits:</strong> Mini-jobs up to €520/month are tax-free</span>
//               </div>
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-yellow-600 mr-3" />
//                 <span><strong>Social Security:</strong> Health insurance required for regular employment</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Visa & Application Process Section */}
//         <section className='py-5 w-[92%] mx-auto'>
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">Visa and Application Process</h2>
          
//           <div className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-4 text-white mb-12">
//             {/* <div className="text-center mb-8">
//               <div className="text-5xl mb-4">📋</div>
//               <h3 className="text-3xl font-bold mb-4">Student Visa Requirements for Germany</h3>
//               <p className="text-xl text-gray-200">Essential steps and documents for studying in Germany</p>
//             </div> */}
//             <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
//   <div className="flex flex-col items-center md:items-start">
//     <div className="text-5xl mb-4">📋</div>
//   </div>
  
//   <div className="text-left">
//     <h3 className="text-3xl font-bold mb-4">Student Visa Requirements for Germany</h3>
//     <p className="text-xl text-gray-200">Essential steps and documents for studying in Germany</p>
//   </div>
// </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                 <h4 className="text-xl font-bold mb-4">Required Documents</h4>
//                 <ul className="space-y-2 text-gray-200">
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     University admission letter (Zulassungsbescheid)
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Proof of financial means (Blocked account: €11,208)
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Health insurance coverage confirmation
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     APS certificate (for applicants from China, Vietnam, India)
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
//                     Language proficiency certificate
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
//                 <h4 className="text-xl font-bold mb-4">Application Steps</h4>
//                 <ul className="space-y-2 text-gray-200">
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-black font-bold text-xs">1</span>
//                     </div>
//                     <span>Get university admission</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-black font-bold text-xs">2</span>
//                     </div>
//                     <span>Open blocked account with €11,208</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-black font-bold text-xs">3</span>
//                     </div>
//                     <span>Get health insurance (TK, AOK, etc.)</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-black font-bold text-xs">4</span>
//                     </div>
//                     <span>Schedule visa appointment at German embassy</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-black font-bold text-xs">5</span>
//                     </div>
//                     <span>Submit visa application with all documents</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
//                 <Shield className="h-6 w-6 text-gray-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Mandatory for all students in Germany
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Public insurance: €110-€120/month
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Private insurance for students over 30
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Major providers: TK, AOK, DAK, Barmer
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
//                 <Building className="h-6 w-6 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Blocked Account (Sperrkonto)</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Required amount: €11,208 per year
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Monthly withdrawal: €934 maximum
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Providers: Deutsche Bank, Fintiba, Expatrio
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Can be opened from home country
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
//                 <TrendingUp className="h-6 w-6 text-yellow-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">APS Certificate</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Required for China, Vietnam, India, Mongolia
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Academic verification of qualifications
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Processing time: 1-3 months
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Valid for unlimited time
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Post-Study Work Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Post-Study Work Opportunities</h2>
          
//           <div className="bg-gradient-to-r from-red-900 to-yellow-600 rounded-3xl p-12 text-white mb-12">
//             {/* <div className="text-center mb-8">
//               <div className="text-5xl mb-4">🎓</div>
//               <h3 className="text-3xl font-bold mb-4">Job Seeker Visa & Work Permits</h3>
//               <p className="text-xl text-gray-200">Stay and work in Germany after completing your studies</p>
//             </div> */}
//             <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
//   <div className="flex flex-col items-center md:items-start">
//     <div className="text-5xl mb-4">🎓</div>
//   </div>
  
//   <div className="text-left">
//     <h3 className="text-2xl md:text-3xl font-bold mb-4">Job Seeker Visa & Work Permits</h3>
//     <p className="text-xl text-gray-200">Stay and work in Germany after completing your studies</p>
//   </div>
// </div>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Job Seeker Visa</h4>
//                 <div className="text-3xl font-bold mb-2">18 Months</div>
//                 <p className="text-gray-200">To search for employment after graduation</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">EU Blue Card</h4>
//                 <div className="text-3xl font-bold mb-2">4 Years</div>
//                 <p className="text-gray-200">For graduates with job offer (€45,300+ salary)</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4">Work Permit</h4>
//                 <div className="text-3xl font-bold mb-2">2+ Years</div>
//                 <p className="text-gray-200">Regular work permit for qualified professionals</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
//                 <CheckCircle className="h-6 w-6 text-gray-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Job Seeker Visa Requirements</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Recognized university degree from Germany
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Proof of financial means (€934/month)
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Health insurance coverage
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Apply within 18 months of graduation
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
//                 <Euro className="h-6 w-6 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">EU Blue Card Requirements</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Recognized university degree
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Job offer matching qualification
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Minimum salary: €45,300 (2024)
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   STEM fields: €41,041.80 minimum
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 border border-gray-200">
//               <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
//                 <TrendingUp className="h-6 w-6 text-yellow-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Pathway to permanent residence
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Family reunification possible
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Work in any EU country after 18 months
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                   Permanent residence after 33 months
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-gray-50 rounded-2xl p-6">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Demand Industries for Graduates</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🚗</div>
//                 <div className="font-bold text-gray-900">Automotive</div>
//                 <div className="text-gray-600">€45,000 - €80,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💻</div>
//                 <div className="font-bold text-gray-900">IT & Software</div>
//                 <div className="text-gray-600">€50,000 - €85,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏭</div>
//                 <div className="font-bold text-gray-900">Engineering</div>
//                 <div className="text-gray-600">€48,000 - €75,000</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🏥</div>
//                 <div className="font-bold text-gray-900">Healthcare</div>
//                 <div className="text-gray-600">€55,000 - €90,000</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Scholarships Section */}
//         <section className='py-5'>
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 mt-4 w-[92%] mx-auto ">Scholarships in Germany</h2>
          
//           <div className="space-y-2 mb-12 w-[92%] mx-auto ">
//             {scholarships.map((scholarship, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow">
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
//                   <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12 w-[92%] mx-auto ">
//             <div className="bg-gray-50 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">DAAD Scholarships</h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Study Scholarships</h4>
//                   <div className="text-gray-600">For graduates, doctoral students, and postdocs to study in Germany</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Research Grants</h4>
//                   <div className="text-gray-600">For doctoral candidates and postdocs to conduct research in Germany</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Development-Related Scholarships</h4>
//                   <div className="text-gray-600">For students from developing countries to study in Germany</div>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">University Summer Courses</h4>
//                   <div className="text-gray-600">For students to attend German language and subject-specific courses</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-red-50 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Funding Options</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span><strong>Deutschlandstipendium:</strong> €300/month for talented students from all countries</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span><strong>Political Foundations:</strong> Friedrich Ebert, Konrad Adenauer, Heinrich Böll foundations</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span><strong>University Scholarships:</strong> Most universities offer their own scholarship programs</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <span><strong>Industry Scholarships:</strong> Companies like Siemens, Bosch, BMW offer scholarships</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full bg-gradient-to-r from-black to-red-900 -mb-6 p-8 text-white">
//             <div className="text-center">
//               <h3 className="text-xl md:text-3xl font-bold mb-4">Study in Germany</h3>
//               <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
//                 Compare your options and make the right choice for your international education journey. 
//                 Germany offers unique advantages with tuition-free education, strong industry connections, 
//                 and excellent career prospects in Europe's economic powerhouse.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button onClick={()=>navigate('/contact')} className="bg-white text-black px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all">
//                   Contact Us for Germany
//                 </button>
                
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     // </div>
//   );
// };

// export default StudyGermanyPage;



import React from 'react';
import { Briefcase,Globe, CheckCircle,Trophy,  Heart, GraduationCap, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyGermanyPage: React.FC = () => {
    const navigate=useNavigate()

  // Major Benefits
  const majorBenefits = [
    {
      title: 'Tuition-Free Excellence',
      description: 'High-achieving students can study at public universities with zero to very low tuition fees, paying only a nominal semester contribution of €100–€350.',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Global Innovation Hub',
      description: 'Home to 15 universities in the global top 250, Germany leads in Engineering, IT, and Automotive technology, with €539 million annually invested in its "Excellence Strategy" for research.',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Powerful Career Prospects',
      description: 'As Europe’s strongest economy, Germany faces a critical skill shortage, offering graduates excellent outcomes in high-demand sectors like Renewable Energy and AI.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'APS Mandatory Certification',
      description: 'For Indian students, the Academic Evaluation Centre (APS) certificate is a mandatory prerequisite for both university admission and visa processing to verify academic authenticity.',
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'September (Fall)', duration: 'Primary Intake', application: 'May to July (Best for Scholarships)' },
    { id: 2, term: 'March (Winter)', duration: 'Secondary Intake', application: 'December to January' },
    
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: '6.0 – 6.5 Overall', Subtitle: 'Widely accepted by German universities. (Most require no band less than 5.5 or 6.0).' },
    { test: 'TOEFL iBT', requirement: '80 – 95',Subtitle: 'Commonly accepted. (Some top universities or competitive programs may require 100+).' },
    { test: 'PTE Academic', requirement: '58 – 65', Subtitle: 'Accepted by a growing number of German universities.' },
    { test: 'Duolingo', requirement: '105 – 120', Subtitle: 'Accepted by select universities, especially for undergraduate programs. Always check your university’s specific requirements.' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Smart Shortlisting', description: 'We match your profile with government-funded awards like the Deutschl and stipendium and university-specific grants.' },
    { step: 2, title: 'Letter of Motivation (LOM)', description: 'German committees prefer directness over storytelling. We help you write a precise Letter of Motivation that focuses on your academic technicalities and future research intent.' },
    { step: 3, title: 'Document Perfection', description: 'We ensure your Indian grades are correctly converted to the German Grading Scale (where 1.0 is excellent and 4.0 is passing) and handle your APS Certificate coordination.' },
    { step: 4, title: 'Interview Prep', description: 'For elite awards (like DAAD or Erasmus+), we conduct technical mock interviews to ensure you can defend your Bachelors thesis and future research plans.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/germany-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl">
  Study in Germany<br />
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the Germany</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
           Germany is far more than a study destination; it is a powerful career engine in the heart of Europe. Benefit from world-class, 
           tuition-free education at prestigious public universities, where cutting-edge research meets practical industry application. With 
           English-taught programs and a booming economy hungry for skilled professionals in Engineering, IT, and Healthcare, Germany prepares 
           you for high-impact roles in the global job market. We guide you through the APS certification, university admissions, and the Blocked 
           Account process for a smooth, stress-free transition to your German future.</p>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the Germany for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the Germany</h2>
        <p className="text-sm  text-gray-700 text-left">
         Germany offers a structured and predictable academic calendar. While public universities follow a standard two-intake policy, many private institutions and specialized English-taught programs provide additional flexibility to suit your professional and financial preparations.</p>
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
          Germany offers a structured and predictable academic calendar. While public universities follow a standard two-intake policy, many private institutions and specialized English-taught programs provide additional flexibility to suit your professional and financial preparations.</p>
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
  <div className="grid md:grid-cols-2 gap-10">
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Secondary Intake (March)</h4>
        <p className="text-gray-700 text-xs mb-1">Missed September? No problem. The January intake is ideal for students who need extra time for IELTS/PTE preparation or funding. While course options are slightly fewer, the competition is often lower.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Extra preparation time without wasting a full year.</span>
        </p>
      </div>
    </div>

    {/* Card 3 - Seasonal Intake */}
    {/* <div className="bg-purple-50 p-4 rounded-xl border border-gray-200 relative"> */}
      {/* Tagline - Half inside, half outside */}
      {/* <div className="absolute -top-3 right-0 z-10">
        <div className="bg-purple-600 text-white pl-6 pr-3 py-1 text-xs font-semibold relative">
          <span>Specialized</span> */}
          {/* Diagonal cut effect on left side */}
          {/* <div className="absolute left-0 top-0 w-0 h-0 border-l-[12px] border-l-white border-t-[24px] border-t-purple-600 border-b-purple-600"></div>
        </div>
      </div> */}
      
      {/* Content with padding to accommodate tag */}
      {/* <div className="pt-1">
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Seasonal Intake (May)</h4>
        <p className="text-gray-700 text-xs mb-1">A smaller, specialized intake offered by select universities. It is best suited for students targeting specific vocational courses or those who want to align their graduation with specific job market cycles.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Limited competition for specific programs.</span>
        </p>
      </div>
    </div> */}
  </div>
</div>
  </div>
</section>

        {/* English Requirements */}
        <section className=''>
        <div className='py-5 mb-4 w-[92%] mx-auto mt-8 '>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3  text-left ">English Proficiency Requirements for Studying in Germany</h2>
          <p className="text-sm text-gray-700 mb-4 text-left ">
            Most German universities require proof of English proficiency for admission to English-taught programs. While specific score requirements vary by university and program, aiming for these standard benchmarks will keep your options open.</p>

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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: You May Not Need an English Test!</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  If you completed your 12th Grade (CBSE/ICSE) with 70% or higher in English, some German universities may accept this as proof of English proficiency. Additionally, if you have studied in an English-medium school or completed a degree in English, you might qualify for a waiver. Ask our counselors if you are eligible!</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the Germany</h2>
      <p className="text-sm  text-gray-700">
        International students in Germany have the opportunity to work part-time while studying, helping you cover living expenses and gain valuable professional experience in Europe.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Term Time (Classes On):</strong> International students from non-EU/EEA countries are allowed to work up to 120 full days or 240 half days per year during active semesters.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Holiday Time (Breaks):</strong>You may work full-time during official university breaks, such as summer and winter holidays, without consuming your allowed days from the 120/240 quota.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>On-Campus:</strong> Working as a student assistant (Werkstudent) or in university facilities often comes with flexible hours and may have separate, more favorable regulations.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 md:p-8 border border-red-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Job Sectors</h3>
        <p className="text-sm md:text-base text-gray-700 mb-3">
          Part-time work is available across various fields:
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🛒</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Retail & Supermarkets</div>
            <div className='text-xs text-gray-700'>(Supermarkets like Lidl, Aldi, Rewe; cafés, restaurants, hotels)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality & Events</div>
            <div className='text-xs text-gray-700'>(Cafes, Restaurants, Stadium Stewarding)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">On-Campus Roles</div>
            <div className='text-xs text-gray-700'>(Research assistant, library staff, student tutor, administrative support)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Corporate Internships</div>
            <div className='text-xs text-gray-700'>(Werkstudent roles in companies related to your field, part-time internships)</div>
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
           Germany has a nationwide minimum wage. As of 2025, the general minimum wage is €12.41 per hour, ensuring fair payment for all workers, including international students.</p>
        </div>
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
      <h3 className="text-sm md:text-base font-semibold text-orange-500 mb-3">
        Focus on the global prestige and career impact of a Germany degree.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Hallmark of Precision and Research Excellence.
  </span>{" "}
 Germany is home to some of the world’s most advanced technical institutions, with 15 universities ranked in the global top 250 (QS 2026). Earning a degree here signifies you have been trained within the "German Excellence Strategy"—a national initiative that funds elite clusters of research. Unlike other destinations, Germany offers world-class public education with no tuition fees for most programs, providing you with a high-prestige credential that is respected by global industry giants like Siemens, Volkswagen, and SAP.</p>
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
      <h3 className="text-sm md:text-base font-semibold text-orange-500 mb-3">
        Highlight the biggest advantage: saving time and money with shorter degrees.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Industry-Ready Degrees with the Werkstudent Edge.
  </span>{" "}
   The German academic structure is designed for depth. While UK Master's are typically one year, German Master's programs are usually two years, allowing ample time for the specialized "Werkstudent" (Working Student) system. Universities of Applied Sciences (Fachhochschulen) offer 50% theory and 50% practical application, often including a mandatory semester-long internship in a German firm. You graduate not just with a degree, but with significant professional experience, making you a "day-one ready" candidate for the international job market.</p>
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
      <h3 className="text-sm md:text-base font-semibold text-orange-500 mb-3">
        Reassure students that they won't be alone and help is always available.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   We've Got Your Back.
  </span>{" "}
    Germany’s support system starts before you even arrive. For Indian students, the mandatory APS (Academic Evaluation Centre) certification ensures a transparent and verified pathway for your documents, speeding up visa processing. Once on campus, the Studierendenwerk (Student Services) provides affordable housing, subsidized meals, and legal advice. From dedicated international offices to "Buddy Programs" that pair you with local students, Germany’s robust welfare network ensures you are supported from enrollment through to your first job. </p>
    </div>
  </div>

  {/* 4. Research Opportunities - Image Right, Content Left */}
  <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
    {/* Image - 30% */}
    <div className="md:w-3/10 -mt-8 md:-mt-8 order-2 md:order-1">
      <img 
        src="/research-uk.png" 
        alt="Research Opportunities"
        className="w-full h-65 object-contain"
      />
    </div>
    {/* Content - 70% */}
    <div className="md:w-9/10 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Research Opportunities</h2>
      <h3 className="text-sm md:text-base font-semibold text-orange-500 mb-3">
        Frame research not just for academics, but as cutting-edge learning that builds skills.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Collaborating with Global Leaders in Science.
  </span>{" "}
   In Germany, research isn't confined to a library; it happens in collaboration with world-renowned bodies like the Max Planck Society and the Fraunhofer Institute. You will be part of an ecosystem that leads the world in Artificial Intelligence, Green Energy, and Robotics. With the government investing billions in future-tech clusters, students gain access to state-of-the-art labs and are often paid to contribute to groundbreaking research, building the technical skills that command top-tier salaries.</p>
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
      <h3 className="text-sm md:text-base font-semibold text-orange-500 mb-3">
        Clearly explain the visa benefit as a career launchpad.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   18 Months to Find Your Future.
  </span>{" "}
   Your German journey reaches its peak upon graduation. The 18-month Job Seeker Visa allows you to stay in Germany and work in any field while you hunt for a role that matches your academic qualifications. Unlike many other countries, you can work full-time without restrictions during these 18 months. Once you secure a job in your field, you can transition to an EU Blue Card or a German Skilled Worker Visa. With Germany’s 2026 streamlined immigration laws, you can qualify for Permanent Residency (PR) in as little as 21 months of professional work.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the Germany</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
             Enjoy world-class education for (mostly) free. While tuition is often zero, Germany offers millions of Euros in stipends to cover your living costs. Our experts help you navigate the DAAD and university systems to secure your funding.</p></div>

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
    The largest funding organization in the world, offering monthly stipends (approx. €992 for Master's) + health insurance.
  </li>

  <li className="mb-1">
     A merit-based award offering €300/month for top performers, regardless of income.</li>

  <li className="mb-1">
    For PhD students, fully funded positions (TV-L E13 scale) act as a salary rather than just a scholarship.</li>
</ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   
  </span>{" "}
   Since tuition is often free (except in Baden-Württemberg), scholarships cover living expenses. A typical award provides €992 to €1,400 per month, completely negating the need for a Blocked Account withdrawal.</p></div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
   {/* How to Qualify: */}
  </span>{" "}
   Grades are King. German universities are highly academic. A high CGPA (above 8.5/10) is the primary driver for scholarships. Work experience is valuable for Universities of Applied Sciences (Fachhochschulen).</p></div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your Germany Success Story Starts Here</h3>
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

export default StudyGermanyPage;