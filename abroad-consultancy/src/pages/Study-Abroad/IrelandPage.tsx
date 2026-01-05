// import React from 'react';
// import { 
//   GraduationCap, Euro, Home, Briefcase, 
//   Award, Globe, Users, Calendar, BookOpen,
//   CheckCircle, Clock, MapPin, Star,
//   ChevronRight, Search, Download, Phone,
//   Mail, MessageSquare, Shield, Target,
//   Trophy, TrendingUp, Building, Heart,
//   Coffee, Music, Code, Microscope,
//   Book, CloudRain, Beer
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyIrelandPage: React.FC = () => {
//     const navigate=useNavigate()
//   // Top Universities
//   const topUniversities = [
//     { name: 'Trinity College Dublin', rank: '#1', location: 'Dublin', type: 'Public', students: '18,000+' },
//     { name: 'University College Dublin', rank: '#2', location: 'Dublin', type: 'Public', students: '33,000+' },
//     { name: 'University College Cork', rank: '#3', location: 'Cork', type: 'Public', students: '21,000+' },
//     { name: 'National University of Ireland, Galway', rank: '#4', location: 'Galway', type: 'Public', students: '19,000+' },
//     { name: 'Dublin City University', rank: '#5', location: 'Dublin', type: 'Public', students: '17,000+' },
//     { name: 'University of Limerick', rank: '#6', location: 'Limerick', type: 'Public', students: '16,000+' },
//     { name: 'Maynooth University', rank: '#7', location: 'Maynooth', type: 'Public', students: '14,000+' },
//     { name: 'Technological University Dublin', rank: '#8', location: 'Dublin', type: 'Public', students: '28,000+' },
//   ];

//   // Popular Courses
//   const popularCourses = [
//     { field: 'Computer Science & IT', universities: 'TCD, UCD, DCU', companies: 'Google, Facebook, Microsoft' },
//     { field: 'Pharmaceutical Sciences', universities: 'UCC, TCD, UCD', companies: 'Pfizer, Johnson & Johnson' },
//     { field: 'Business & Finance', universities: 'UCD, TCD, DCU', companies: 'Irish banks, multinationals' },
//     { field: 'Engineering', universities: 'UCD, TCD, UL', companies: 'Intel, IBM, Medtronic' },
//     { field: 'Literature & Humanities', universities: 'TCD, UCC, NUIG', companies: 'Publishing, media, education' },
//     { field: 'Food Science & Agriculture', universities: 'UCD, UCC', companies: 'Kerry Group, Glanbia' },
//   ];

//   // Scholarships
//   const scholarships = [
//     { name: 'Government of Ireland Scholarships', amount: '€10,000-€24,000', eligibility: 'All nationalities', deadline: 'Mar 25, 2024' },
//     { name: 'Trinity College Dublin Scholarships', amount: '€5,000-€10,000', eligibility: 'International students', deadline: 'Varies' },
//     { name: 'UCD Global Scholarships', amount: '€3,000-€10,000', eligibility: 'Non-EU students', deadline: 'Apr 30, 2024' },
//     { name: 'Sport Scholarships', amount: '€1,500-€5,000', eligibility: 'Athletes', deadline: 'Varies' },
//     { name: 'Claddagh Scholarship Program', amount: '€2,000-€8,000', eligibility: 'US & Canadian students', deadline: 'Feb 15, 2024' },
//   ];

//   // Intakes
//   const intakes = [
//     { term: 'Autumn Semester', months: 'September - December', application: 'Nov - Jun', features: 'Main intake, all courses' },
//     { term: 'Spring Semester', months: 'January - May', application: 'Aug - Nov', features: 'Limited courses' },
//     { term: 'Summer Programs', months: 'June - August', application: 'Jan - Apr', features: 'Short courses, research' },
//   ];

//   // English Requirements
//   const englishRequirements = [
//     { test: 'IELTS', undergraduate: '6.0-6.5', postgraduate: '6.5-7.5', validity: '2 years' },
//     { test: 'TOEFL iBT', undergraduate: '80-90', postgraduate: '90-100', validity: '2 years' },
//     { test: 'PTE Academic', undergraduate: '63', postgraduate: '63-70', validity: '2 years' },
//     { test: 'Cambridge English', undergraduate: '169-176', postgraduate: '176-185', validity: 'Lifetime' },
//     { test: 'Duolingo', undergraduate: '105-110', postgraduate: '110-120', validity: '2 years' },
//   ];

//   // Key Points
//   const keyPoints = [
//     { title: 'English-Speaking EU Country', description: 'Only English-speaking country in Eurozone', icon: <Globe className="h-6 w-6" /> },
//     { title: 'Tech Hub of Europe', description: 'European HQ for Google, Facebook, Apple', icon: <Code className="h-6 w-6" /> },
//     { title: 'Work Opportunities', description: '20 hours/week during studies', icon: <Briefcase className="h-6 w-6" /> },
//     { title: 'Post-Study Work Visa', description: '2 years after graduation', icon: <TrendingUp className="h-6 w-6" /> },
//     { title: 'Friendly Culture', description: 'Known for hospitality and warmth', icon: <Heart className="h-6 w-6" /> },
//     { title: 'Rich Literary Heritage', description: 'Home to Nobel laureates in Literature', icon: <Book className="h-6 w-6" /> },
//   ];

//   // Cost of Living
//   const livingCosts = [
//     { item: 'Accommodation', amount: '€500 - €1,200', period: 'per month', notes: 'Dublin highest, other cities cheaper' },
//     { item: 'Food & Groceries', amount: '€250 - €400', period: 'per month', notes: 'Supermarkets and eating out' },
//     { item: 'Transportation', amount: '€100 - €150', period: 'per month', notes: 'Student Leap Card discounts' },
//     { item: 'Utilities & Internet', amount: '€50 - €100', period: 'per month', notes: 'Electricity, heating, WiFi' },
//     { item: 'Health Insurance', amount: '€45 - €120', period: 'per month', notes: 'Mandatory for non-EU students' },
//     { item: 'Books & Materials', amount: '€75 - €150', period: 'per month', notes: 'Varies by course' },
//   ];

//   // Major Companies in Ireland
//   const majorCompanies = [
//     { name: 'Google', sector: 'Technology', headquarters: 'Dublin', employees: '8,000+' },
//     { name: 'Facebook/Meta', sector: 'Technology', headquarters: 'Dublin', employees: '3,000+' },
//     { name: 'Apple', sector: 'Technology', headquarters: 'Cork', employees: '6,000+' },
//     { name: 'Microsoft', sector: 'Technology', headquarters: 'Dublin', employees: '2,000+' },
//     { name: 'Intel', sector: 'Semiconductors', headquarters: 'Leixlip', employees: '5,000+' },
//     { name: 'Pfizer', sector: 'Pharmaceuticals', headquarters: 'Dublin', employees: '4,000+' },
//   ];

//   return (
//     <div id='study-abroad/ireland' className="bg-white">
//       {/* Hero Section */}
// <section className="relative h-[44vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
//     style={{
//       backgroundImage: "url('/ireland-bghero.png')",
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
//   <span className="block ml-16 mt-4">Ireland</span>
// </h1>
//   </div>
// </div>
//   </section>

//       {/* Quick Stats */}
//       <section className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-700 mb-2">35,000+</div>
//               <div className="text-gray-600">International Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-700 mb-2">1,000+</div>
//               <div className="text-gray-600">Multinational Companies</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-700 mb-2">#1</div>
//               <div className="text-gray-600">EU for FDI per capita</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-700 mb-2">2 Years</div>
//               <div className="text-gray-600">Post-Study Work Visa</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content - All sections visible */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-16"> */}
        
//         {/* Overview Section */}
//           <section className="scroll-mt-20">
//   <div className="flex justify-center mt-12 sm:mt-12 w-[80%] mx-auto ">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center ">
//         <h2 className="text-4xl font-bold text-gray-900 ">Study in Ireland - Complete Overview</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//           Ireland offers world-class education in an English-speaking EU country, 
//               with vibrant culture, leading multinational companies, and excellent graduate employment rates.
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

//           <div className="w-[92%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-12">
//             {[
//               { icon: '💻', title: 'Tech Hub', desc: 'European HQ for tech giants' },
//               { icon: '🇪🇺', title: 'EU Country', desc: 'English-speaking EU member' },
//               { icon: '🎓', title: 'Quality Education', desc: '7 universities in global rankings' },
//               { icon: '🍀', title: 'Friendly Culture', desc: 'Warm hospitality and vibrant social life' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <div className="font-bold text-gray-900 mb-2">{item.title}</div>
//                 <div className="text-gray-600">{item.desc}</div>
//               </div>
//             ))}
//           </div>

//           <div className="w-[92%] mx-auto bg-gradient-to-r from-green-50 to-white rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Ireland?</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">#1</div>
//                 <div className="font-bold text-gray-900 mb-2">Globalized Economy</div>
//                 <div className="text-gray-600">Highest globalized economy in EU</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">90%</div>
//                 <div className="font-bold text-gray-900 mb-2">Graduate Employment</div>
//                 <div className="text-gray-600">Within 9 months of graduation</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">12.5%</div>
//                 <div className="font-bold text-gray-900 mb-2">Corporate Tax Rate</div>
//                 <div className="text-gray-600">Attracts multinational companies</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Ireland Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Why Study in Ireland?</h2>
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                   <Code className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Europe's Tech Hub</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Ireland is known as the "Silicon Valley of Europe" with European headquarters 
//                 for major tech companies like Google, Facebook, Apple, Microsoft, and Intel. 
//                 This creates unparalleled internship and employment opportunities for students.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>9 of top 10 global software companies in Ireland</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>16 of top 20 medical technology companies</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>8 of top 10 global pharmaceutical companies</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
//                   <Heart className="h-6 w-6 text-orange-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Irish Culture & Lifestyle</h3>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Ireland is famous for its friendly people, rich literary heritage, 
//                 vibrant music scene, and welcoming atmosphere. Students enjoy a 
//                 high quality of life with beautiful landscapes and historic cities.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-green-700 mb-2">#4</div>
//                   <div className="text-gray-600">World's most peaceful country</div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl border">
//                   <div className="text-2xl font-bold text-green-700 mb-2">4 Nobel</div>
//                   <div className="text-gray-600">Literature laureates</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-green-700 to-orange-500 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-8 text-center">Irish Education Excellence</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🎓</div>
//                 <h4 className="text-xl font-bold mb-3">Ancient Universities</h4>
//                 <p className="text-gray-200">Trinity College Dublin founded in 1592</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🔬</div>
//                 <h4 className="text-xl font-bold mb-3">Research Excellence</h4>
//                 <p className="text-gray-200">World-leading in ICT, biotech, and agriculture</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-5xl mb-4">🤝</div>
//                 <h4 className="text-xl font-bold mb-3">Industry Links</h4>
//                 <p className="text-gray-200">Strong partnerships with multinational companies</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Key Points Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Key Advantages of Studying in Ireland</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {keyPoints.map((point, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
//                 <div className="text-green-600 mb-4">{point.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
//                 <p className="text-gray-600">{point.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-green-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Irish Higher Education System</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">Universities</div>
//                 <div className="text-gray-700">7 universities offering comprehensive degree programs</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">Institutes of Technology</div>
//                 <div className="text-gray-700">14 IoTs offering technical and vocational education</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl">
//                 <div className="text-2xl font-bold text-green-700 mb-2">Colleges</div>
//                 <div className="text-gray-700">Private and specialized colleges</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Top Universities Section */}
//         {/* <section>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Universities in Ireland</h2>
          
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

//           <div className="bg-gradient-to-r from-green-800 to-orange-600 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-6 text-center">University Groups & Rankings</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🏛️</div>
//                 <h4 className="text-xl font-bold mb-3">Trinity College Dublin</h4>
//                 <p className="text-gray-200">Ranked #1 in Ireland, top 100 globally</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🎯</div>
//                 <h4 className="text-xl font-bold mb-3">Irish Universities Association</h4>
//                 <p className="text-gray-200">7 member universities promoting excellence</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🔬</div>
//                 <h4 className="text-xl font-bold mb-3">Research Funding</h4>
//                 <p className="text-gray-200">€800M+ annual research expenditure</p>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* Popular Courses Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Popular Courses in Ireland</h2>
          
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
//                     <span className="text-gray-700">Industry Partners</span>
//                     <span className="font-bold">{course.companies}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Average Duration</span>
//                     <span className="font-bold">3-4 years</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Starting Salary</span>
//                     <span className="font-bold text-green-600">€35,000 - €50,000</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique Study Fields in Ireland</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl mb-2">💊</div>
//                 <div className="font-bold text-gray-900 mb-2">Pharmaceutical Sciences</div>
//                 <div className="text-gray-600">World leader in pharmaceutical manufacturing</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🍺</div>
//                 <div className="font-bold text-gray-900 mb-2">Brewing & Distilling</div>
//                 <div className="text-gray-600">Home to Guinness, Jameson, and Irish whiskey</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl mb-2">🎵</div>
//                 <div className="font-bold text-gray-900 mb-2">Music & Performing Arts</div>
//                 <div className="text-gray-600">Rich musical heritage and vibrant scene</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Intakes Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Intake Periods in Ireland</h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {intakes.map((intake, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//                 <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
//                   index === 0 ? 'bg-green-100 text-green-700' :
//                   index === 1 ? 'bg-orange-100 text-orange-700' :
//                   'bg-blue-100 text-blue-700'
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

//           <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline for Ireland</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Research & Choose Course (12-18 months before)</div>
//                   <div className="text-gray-600">Explore universities and programs through CAO or direct applications</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Prepare Documents (6-12 months before)</div>
//                   <div className="text-gray-600">Personal statement, references, academic transcripts, English tests</div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
//                 <div className="flex-1">
//                   <div className="font-bold text-gray-900">Apply & Visa Process (4-6 months before)</div>
//                   <div className="text-gray-600">Submit applications, secure admission, apply for student visa</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* English Requirements Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">English Proficiency Requirements</h2>
          
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
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemptions</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Previous education taught entirely in English (minimum 2 years)</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Nationals of majority English-speaking countries</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Completion of recognized foundation program in Ireland</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-orange-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Preparatory Programs</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">📚</span>
//                   </div>
//                   <span>International Foundation Year (IFY)</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">🎓</span>
//                   </div>
//                   <span>Pre-Master's programs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">💬</span>
//                   </div>
//                   <span>English language preparation courses</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>     

//         {/* Cost of Living Section - Continued from where it left off */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Cost of Living and Tuition Fees</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
//               {/* ... Tuition Fees content ... */}
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
//                   <Home className="h-6 w-6 text-orange-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Monthly Living Expenses</h3>
//               </div>
//               <div className="space-y-4">
//                 {livingCosts.map((cost, index) => (
//                   <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <div>
//                       <div className="text-gray-700">{cost.item}</div>
//                       <div className="text-sm text-gray-500">{cost.notes}</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="font-bold text-gray-900">{cost.amount}</div>
//                       <div className="text-sm text-gray-500">{cost.period}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-green-700 to-orange-600 rounded-3xl p-8 text-white mb-12">
//             <h3 className="text-3xl font-bold mb-8 text-left">Financial Planning Tips</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">💰</div>
//                 <h4 className="text-xl font-bold mb-3">Student Budget</h4>
//                 <p className="text-gray-200">Plan €10,000-€15,000 per year for living expenses</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🏦</div>
//                 <h4 className="text-xl font-bold mb-3">Bank Account</h4>
//                 <p className="text-gray-200">Open an Irish bank account upon arrival</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">💳</div>
//                 <h4 className="text-xl font-bold mb-3">Student Discounts</h4>
//                 <p className="text-gray-200">Use student cards for transport, food, and entertainment</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Scholarships Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Scholarships for International Students</h2>
          
//           <div className="space-y-6 mb-12">
//             {scholarships.map((scholarship, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                   <div className="mb-4 md:mb-0">
//                     <div className="flex items-center mb-2">
//                       <Award className="h-5 w-5 text-green-600 mr-2" />
//                       <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
//                     </div>
//                     <div className="text-gray-600">Eligibility: {scholarship.eligibility}</div>
//                   </div>
//                   <div className="flex flex-col md:items-end">
//                     <div className="text-2xl font-bold text-green-700 mb-2">{scholarship.amount}</div>
//                     <div className="flex items-center text-gray-600">
//                       <Clock className="h-4 w-4 mr-2" />
//                       Deadline: {scholarship.deadline}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-green-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Application Tips</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//                     <span className="font-bold text-green-600">1</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 mb-1">Early Applications</div>
//                     <div className="text-gray-600">Apply 6-12 months before deadlines</div>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//                     <span className="font-bold text-green-600">2</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 mb-1">Strong Personal Statement</div>
//                     <div className="text-gray-600">Highlight achievements and goals</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//                     <span className="font-bold text-green-600">3</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 mb-1">Academic Excellence</div>
//                     <div className="text-gray-600">Maintain high GPA and test scores</div>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//                     <span className="font-bold text-green-600">4</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 mb-1">Extra-curricular Activities</div>
//                     <div className="text-gray-600">Show leadership and community involvement</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Major Companies Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Major Companies in Ireland</h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {majorCompanies.map((company, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                     <Building className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
//                     <div className="text-gray-600">{company.sector}</div>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Headquarters</span>
//                     <span className="font-bold">{company.headquarters}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Employees</span>
//                     <span className="font-bold">{company.employees}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-700">Student Programs</span>
//                     <span className="font-bold text-green-600">Internships & Graduate</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-green-800 to-orange-700 rounded-3xl p-8 text-white">
//             <h3 className="text-3xl font-bold mb-8 text-center">Career Opportunities in Ireland</h3>
//             <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">💼</div>
//                 <h4 className="text-xl font-bold mb-3">Work During Studies</h4>
//                 <p className="text-gray-200">20 hours/week during term, 40 hours/week during holidays</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🎓</div>
//                 <h4 className="text-xl font-bold mb-3">Graduate Employment</h4>
//                 <p className="text-gray-200">90% find employment within 9 months of graduation</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🇪🇺</div>
//                 <h4 className="text-xl font-bold mb-3">EU Work Rights</h4>
//                 <p className="text-gray-200">Work anywhere in the EU after Irish education</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Student Life Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-8">Student Life in Ireland</h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                   <Music className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Cultural Experience</h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-green-600">🎵</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Traditional Music</div>
//                     <div className="text-gray-600">Live sessions in pubs across the country</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-green-600">🏛️</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Historic Sites</div>
//                     <div className="text-gray-600">Castles, ancient ruins, and heritage centers</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-green-600">🎭</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Festivals</div>
//                     <div className="text-gray-600">St. Patrick's Day, Galway Arts Festival, and more</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
//                   <Users className="h-6 w-6 text-orange-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Campus Life</h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">🤝</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Student Societies</div>
//                     <div className="text-gray-600">200+ clubs and societies in major universities</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">⚽</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Sports Facilities</div>
//                     <div className="text-gray-600">GAA, rugby, soccer, and fitness centers</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="font-bold text-orange-600">📚</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">Library Access</div>
//                     <div className="text-gray-600">24/7 access to extensive digital and physical collections</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6 mb-12">
//             <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
//               <div className="text-4xl mb-4">🍀</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Irish Hospitality</h3>
//               <p className="text-gray-600">Famous for friendly locals and welcoming atmosphere</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
//               <div className="text-4xl mb-4">🌍</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">International Community</h3>
//               <p className="text-gray-600">Diverse student population from 160+ countries</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
//               <div className="text-4xl mb-4">🏙️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Vibrant Cities</h3>
//               <p className="text-gray-600">Modern amenities with rich historical heritage</p>
//             </div>
//           </div>
//         </section>

//         {/* Application Process Section */}
//         <section className='w-[92%] mx-auto py-5'>
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 ">Application Process</h2>
          
//           <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-3xl p-12 text-white mb-12">
//             <h3 className="text-3xl font-bold mb-8 text-center">Step-by-Step Guide</h3>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="text-2xl font-bold">1</div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">Choose Course</h4>
//                 <p className="text-gray-200">Select program and university</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="text-2xl font-bold">2</div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">Check Requirements</h4>
//                 <p className="text-gray-200">Academic and English requirements</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="text-2xl font-bold">3</div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">Prepare Documents</h4>
//                 <p className="text-gray-200">Transcripts, personal statement, references</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="text-2xl font-bold">4</div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">Apply for Visa</h4>
//                 <p className="text-gray-200">Submit visa application with required documents</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-green-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Academic transcripts and certificates</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>English proficiency test scores</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Personal statement or statement of purpose</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Letters of recommendation</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>CV/Resume</span>
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span>Copy of passport</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-orange-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa Requirements</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Letter of acceptance from Irish institution</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Proof of sufficient funds (€7,000-€10,000)</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Medical insurance coverage</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Academic qualifications</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Proof of English proficiency</span>
//                 </li>
//                 <li className="flex items-center">
//                   <Shield className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Passport-sized photographs</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="w-full mt-8">
//           <div className="bg-gradient-to-r from-green-700 to-orange-600 p-12 text-white text-center">
//             <h2 className="text-xl md:text-4xl font-bold mb-6">Start Your Irish Education Journey Today!</h2>
//             <p className="text-sm md:text-xl mb-10 max-w-2xl mx-auto">
//               Join thousands of international students experiencing world-class education 
//               in Ireland's welcoming and innovative environment.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button onClick={()=>navigate('/contact')} className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl transition-all flex items-center justify-center">
//                 <Mail className="mr-2 h-5 w-5" />
//                 Contact Admissions Team
//               </button>
//               </div>
//           </div>
//         </section>
//       </div>  
//     // </div>
//   );
// };

// export default StudyIrelandPage;



import React from 'react';
import {
  GraduationCap, PoundSterling, Home, Briefcase,
  Award, Globe, Users, Calendar, BookOpen,
  CheckCircle, Clock, MapPin, Star,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Target,
  Trophy, TrendingUp, Building, Heart,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyIrelandPage: React.FC = () => {
    const navigate=useNavigate()

  // Major Benefits
  const majorBenefits = [
    {
      title: 'Elite Academic Standards',
      description: 'Irelands institutions, including Trinity College Dublin (Ranked 75th globally), offer degrees recognized worldwide via the National Framework of Qualifications (NFQ).',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'A Global Community',
      description: 'Home to the European HQs of Google, Meta, Apple, and Pfizer, Ireland provides direct access to high-impact internships and global career networking.',
      icon: <Rocket className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Earn While You Learn',
      description: 'Master’s graduates (Level 9) enjoy a 24-month post-study work visa, allowing you to build your career in the EU without immediate sponsorship pressure.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Safety & Global Community',
      description: 'Ranked as the 2nd most peaceful country in the world (2025 Global Peace Index), Ireland offers a safe, inclusive, and vibrant multicultural environment.',
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'September (Fall)', duration: 'Primary Intake', application: 'November to May (Best for Scholarships)' },
    { id: 2, term: 'January (Winter)', duration: 'Secondary Intake', application: 'May to October' },
    { id: 3, term: 'May (Spring)', duration: 'Limited Intake', application: 'September to January' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: '6.0 – 6.5 Overall', Subtitle: 'The gold standard for Ireland. For Undergraduate, a 6.0 (no band < 5.5) is typical. For Postgraduate, 6.5 (no band < 6.0) is the general requirement.' },
    { test: 'TOEFL iBT', requirement: '80 – 92',Subtitle: 'A trusted traditional test. Standard requirements range from 80 to 92, with a minimum of 21 in writing and 18-19 in other sections.' },
    { test: 'PTE Academic', requirement: '59 – 65', Subtitle: 'Highly popular due to fast results. Most universities require a minimum of 59-63, while elite programs may look for 65+ with no skill below 59.' },
    { test: 'Duolingo', requirement: '120 – 130 Overall', Subtitle: 'A fast, online alternative widely accepted for 2026. Most top universities require a 120 overall with sub-scores not falling below 110.' },
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
      backgroundImage: "url('/ireland-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl">
  Study in Ireland<br />
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the Ireland</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
            As the primary English-speaking gateway to the European Union, Ireland offers a high-octane career environment where academic theory meets global industry. Home to the European headquarters of giants like Google, Apple, and Pfizer, the "Silicon Docks" provide an unmatched ecosystem for graduates in tech, pharma, and finance. With a generous 24-month post-study work visa for Master’s graduates and a thriving economy, Ireland doesn't just grant you a degree it bridges the gap to a high-earning international career in the heart of Europe.</p></div>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the Ireland for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the Ireland</h2>
        <p className="text-sm  text-gray-700 text-left">
         Ireland’s intake system is built for career success. Whether you are aiming for the major academic kick-off or need a flexible mid-year start, each window is designed to ensure you graduate right when the world’s top tech and pharma giants are hiring.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the Ireland</h2>
        <p className="text-sm text-gray-700 text-left mb-4">
          Ireland’s intake system is built for career success. Whether you are aiming for the major academic kick-off or need a flexible mid-year start, each window is designed to ensure you graduate right when the world’s top tech and pharma giants are hiring.</p>
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
            Teaching in Ireland is conducted through English, requiring all non-native applicants to demonstrate high competence. While universities often set their own targets, aiming for a B2+ or C1 level on the CEFR scale is recommended for competitive programs.</p>

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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: Is an IELTS Waiver Possible in Ireland?</h3>
                <p className="text-xs md:text-sm text-gray-700">
                 Yes, but with a unique Irish twist! For the 2026 intake, many leading Irish institutions including University College Dublin (UCD) allow students to skip the IELTS if they have achieved 80% or higher in English in their Standard XII (CBSE/ISC) exams.</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the Ireland</h2>
      <p className="text-sm  text-gray-700">
        As an international student on a Stamp 2 Visa, you have the legal right to work without needing a separate work permit, provided you are enrolled in a full-time course listed on the Interim List of Eligible Programmes (ILEP).</p></div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Term Time (Classes On):</strong> During active semesters, you can work up to 20 hours weekly to ensure your studies remain the priority.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Holiday Time (Breaks):</strong>During standardized holiday periods (June–Sept and Dec 15–Jan 15), you are permitted to work full-time.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>On-Campus:</strong> Universities offer roles like Library Aides, Student Ambassadors, and Admin Assistants that often align perfectly with your timetable.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Post-Study:</strong> Upon graduation, the Stamp 1G permission allows you to work 40 hours/week for up to 24 months (for Master's/PhD).</span>
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
            <div className='text-xs text-gray-700'>(Sales Assistant, Stock Replenisher, and Customer Experience Rep)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality & Events</div>
            <div className='text-xs text-gray-700'>(Barista, Waitstaff, Hotel Receptionist, and Event Steward.)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">On-Campus Roles</div>
            <div className='text-xs text-gray-700'>(Student Ambassador, Library Aide, Peer Tutor, and Administrative Support.)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Corporate Internships</div>
            <div className='text-xs text-gray-700'>(Paid "Working Student" roles or summer internships in your specific field of study.)</div>
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
          <h3 className="text-med md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Did You Know? Ireland’s Record-High Minimum Wage!</h3>
          <p className="text-xs md:text-sm text-gray-700">
          International students in Ireland are legally entitled to the National Minimum Wage. As of January 1, 2026, this has increased to €14.15 per hour for those aged 20 and over, ensuring your part-time work significantly supports your lifestyle.</p></div>
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
        Focus on the global prestige and career impact of a Ireland degree.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Global Hub for Academic Excellence.
  </span>{" "}
  Ireland is home to world-renowned institutions like Trinity College Dublin (Top 75 globally) and University College Dublin, all operating under the National Framework of Qualifications (NFQ). Earning an Irish degree is a "Global Stamp of Excellence" that connects you directly to the European market, as Ireland is now the largest native English-speaking nation in the EU.</p>
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
   Specialized, High-Impact Learning.
  </span>{" "}
   Ireland offers a streamlined and cost-effective academic structure. Most Master’s degrees (Level 9) are completed in just one year, while Honours Bachelor’s degrees (Level 8) typically take 3 to 4 years. This allows you to enter the workforce sooner and reduces your overall tuition and living expenses compared to 2-year programs elsewhere.</p>
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
    Moving to Ireland is a seamless transition thanks to robust university support networks. From the Global Student Officers who assist with IRP (Immigration) registration to dedicated accommodation teams and 24/7 mental health services, Irish universities consistently rank among the world's best for international student satisfaction and safety.</p>
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
   The Silicon Valley of Europe.
  </span>{" "}
   Ireland is a global powerhouse in Tech, Pharma, and MedTech. You will be taught by academics who collaborate with industry giants like Google, Meta, Apple, and Pfizer. Through the "Impact 2030" strategy, students gain access to world-class research facilities and internships that build the high-demand skills preferred by global employers.</p>
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
   Launch Your Career in the EU.
  </span>{" "}
   The Third Level Graduate Scheme (Stamp 1G) is your ultimate career bridge. It allows Master’s and PhD graduates to stay and work in Ireland for 24 months after graduation (12 months for Bachelor's). This is a perfect window to secure a role with a multinational firm and transition toward a Critical Skills Employment Permit.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the Ireland</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Don't let tuition fees stand in the way of your ambitions. Ireland is committed to attracting global talent, providing millions of euros in funding annually. Our experts specialize in navigating the Irish "Higher Education Authority" (HEA) landscape to ensure you secure the best financial package possible.</p></div>

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
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your Ireland Success Story Starts Here</h3>
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

export default StudyIrelandPage;