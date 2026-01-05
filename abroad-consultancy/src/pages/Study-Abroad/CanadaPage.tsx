// import React, { useState } from 'react';
// import { 
//   GraduationCap, Shield, DollarSign, Briefcase, 
//   BookOpen, Globe, Home, Users, 
//   Award, Mail, Phone, MapPin,
//   CheckCircle, Calendar, FileText, MessageSquare,
//   ArrowRight, Download, ChevronDown
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyCanadaPage: React.FC = () => {
//     const navigate=useNavigate()
//   const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

//   const toggleAccordion = (id: string) => {
//     setActiveAccordion(activeAccordion === id ? null : id);
//   };

//   // Top Canadian Universities
//   const topUniversities = [
//     { name: 'University of Toronto', rank: '#1', location: 'Toronto, Ontario', students: '95,000+' },
//     { name: 'University of British Columbia', rank: '#2', location: 'Vancouver, BC', students: '66,000+' },
//     { name: 'McGill University', rank: '#3', location: 'Montreal, Quebec', students: '40,000+' },
//     { name: 'University of Alberta', rank: '#4', location: 'Edmonton, Alberta', students: '40,000+' },
//     { name: 'University of Montreal', rank: '#5', location: 'Montreal, Quebec', students: '66,000+' },
//     { name: 'McMaster University', rank: '#6', location: 'Hamilton, Ontario', students: '33,000+' },
//   ];

//   // Scholarship Steps
//   const scholarshipSteps = [
//     { 
//       title: 'Online Application Submission', 
//       description: 'Most scholarship applications are submitted online through dedicated portals. Adhere to deadlines and carefully follow the application guidelines to ensure a successful submission.',
//       icon: <FileText className="h-6 w-6" />
//     },
//     { 
//       title: 'Selection Criteria', 
//       description: 'Our expert panel evaluates applications based on academic merit, leadership potential, and the impact you can make in your chosen field. Letters of recommendation and a strong academic record will enhance your chances of selection.',
//       icon: <Award className="h-6 w-6" />
//     },
//     { 
//       title: 'Notifications', 
//       description: 'Stay informed about scholarship opportunities for studying in Canada by regularly checking official notifications to enhance your chances of securing financial aid for your abroad education.',
//       icon: <MessageSquare className="h-6 w-6" />
//     },
//     { 
//       title: 'Interview Preparation', 
//       description: 'Be ready for interviews, which may be part of the selection process for certain scholarships. Articulate your academic achievements, career goals, and reasons why you are deserving of the scholarship.',
//       icon: <Users className="h-6 w-6" />
//     },
//   ];

//   // Eligibility Criteria
//   const eligibilityCriteria = [
//     { 
//       title: 'Extracurricular Activities', 
//       description: 'Scholarships highly value extracurriculars, community service, and leadership involvement.',
//       icon: '🏆'
//     },
//     { 
//       title: 'Academic Excellence', 
//       description: 'Academic success crucial; meeting specific GPA criteria is often necessary.',
//       icon: '📚'
//     },
//     { 
//       title: 'English Proficiency', 
//       description: 'English proficiency crucial; scholarships often demand IELTS or TOEFL scores.',
//       icon: '🔤'
//     },
//     { 
//       title: 'Field of Study', 
//       description: 'Some scholarships may specify eligibility criteria based on chosen academic disciplines.',
//       icon: '🎓'
//     },
//   ];

//   // Benefits Data
//   const benefits = [
//     {
//       id: 'world-class-education',
//       title: 'World-Class Education',
//       description: 'Canada hosts very top-ranked universities, including the University of Toronto, McGill University, and UBC, which offer a myriad of programs globally recognized for their high degree of academic excellence; therefore, Canada has emerged as a premier destination to seek higher education.',
//       icon: <GraduationCap className="h-8 w-8" />,
//       color: 'blue'
//     },
//     {
//       id: 'safe-environment',
//       title: 'Safe and Welcoming Environment',
//       description: 'Canada is a safe and inviting country: among others, it is enlisted as one of the safest countries in the world by the Global Peace Indices. It offers a comfortable zone for individuals from multicultural and multi-ethnic diversified backgrounds to feel it is their country.',
//       icon: <Shield className="h-8 w-8" />,
//       color: 'green'
//     },
//     {
//       id: 'inexpensive-fees',
//       title: 'Inexpensive Tuition Fees',
//       description: 'Quality education is offered to students in Canada, in comparison to the low fees charged for tuition fees in Canada if compared to the USA, UK, among other countries, making it very attractive to the students who wish to incur reasonable fees without affecting quality.',
//       icon: <DollarSign className="h-8 w-8" />,
//       color: 'purple'
//     },
//     {
//       id: 'post-graduation-work',
//       title: 'Post Graduation Work Opportunities',
//       description: 'Canada has excellent work opportunities available after graduation. The country, in its bid to create valuable work experiences within its country, is offering great work opportunities to all international students through the Post-Graduation Work Permit.',
//       icon: <Briefcase className="h-8 w-8" />,
//       color: 'orange'
//     },
//     {
//       id: 'diverse-courses',
//       title: 'Diverse Courses and Programs',
//       description: 'The diverse range of courses and programs available to Study in Canada is another compelling factor for students worldwide. Whether one is interested in business, engineering, arts, or sciences, Canadian universities offer a plethora of options to cater to diverse academic interests.',
//       icon: <BookOpen className="h-8 w-8" />,
//       color: 'red'
//     },
//     {
//       id: 'global-recognition',
//       title: 'Global Recognition',
//       description: 'Moreover, the global recognition of Canadian degrees adds immense value to an international student\'s academic and professional journey. Canadian qualifications are widely respected and accepted around the world, opening doors to global opportunities.',
//       icon: <Globe className="h-8 w-8" />,
//       color: 'indigo'
//     },
//     {
//       id: 'work-opportunities',
//       title: 'Work Opportunities',
//       description: 'International students in Canada are typically allowed to work part-time during their studies and full-time during scheduled breaks. Post-graduation work opportunities are also available, enabling students to gain valuable work experience in Canada after completing their studies.',
//       icon: <Briefcase className="h-8 w-8" />,
//       color: 'teal'
//     },
//     {
//       id: 'quality-of-life',
//       title: 'Quality of Life',
//       description: 'The high quality of life in Canada is another aspect that attracts students from around the world. The country consistently ranks high in global quality of life indices, offering a blend of vibrant cities, picturesque landscapes, and a variety of recreational and cultural activities.',
//       icon: <Home className="h-8 w-8" />,
//       color: 'pink'
//     },
//     {
//       id: 'study-permits',
//       title: 'Study Permits',
//       description: 'To embark on this educational journey, obtaining a study in Canada permit is crucial. Canada\'s study permit process is known for its efficiency and transparency. With clear guidelines and support systems in place, international students can navigate the application process smoothly.',
//       icon: <FileText className="h-8 w-8" />,
//       color: 'cyan'
//     },
//   ];

//   return (
//     <div id='study-abroad/canada' className="min-h-screen bg-white">
      
//        {/* Hero Section */}
// <section className="relative h-[32vh] sm:h-[62vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-bottom"
//     style={{
//       backgroundImage: "url('/canada-bghero2.png')",
//       backgroundSize: "100% auto" // ✅ shows full image
//     }}
//   >
//     {/* Optional Overlay */}
//     {/* <div className="absolute inset-0 bg-black/30"></div> */}

//     {/* Bottom Curve (part of hero bg) */}
//   {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//     <svg
//       viewBox="0 0 900 100"
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
//     <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 max-w-3xl">
//   Study in 
//   <span className=""> Canada</span>
// </h1>
//   </div>
// </div>
// </section>

//       {/* Why Study in Canada */}
//       <section className="w-[80%] mx-auto scroll-mt-20 py-12">
//   <div className="flex justify-center">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold text-gray-900 ">Study In Canada</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//              Canada becomes the first preference for international students to complete an 
//               excellent education in a lively, multi-cultural setting. If you are going to 
//               complete your higher education in another country, then here comes the most 
//               interesting part of why studying in Canada will help you out.
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

//       {/* Major Benefits Section */}
//       <section className="py-5 bg-white">
//         <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="text-left p- ">
//             <h2 className="text-4xl font-bold text-gray-900 mb-12">
//               Major Benefits of Studying in Canada
//             </h2>
//           </div>

//           {/* Benefits Grid - First 4 */}
//           <div className="grid md:grid-cols-2 gap-8 mb-12  ">
//             {benefits.slice(0, 4).map((benefit) => (
//               <div 
//                 key={benefit.id}
//                 className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-2 ${
//                   benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
//                   benefit.color === 'green' ? 'bg-green-100 text-green-600' :
//                   benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
//                   'bg-orange-100 text-orange-600'
//                 }`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Study in Canada Banner */}
//           <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 mb-12 border border-red-100">
//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Study in Canada</h3>
//               <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//                 Diverse Courses and Programs - The diverse range of courses and programs 
//                 available to Study in Canada is another compelling factor for students worldwide.
//               </p>
//             </div>
//           </div>

//           {/* Benefits Grid - Next 4 */}
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {benefits.slice(4, 8).map((benefit) => (
//               <div 
//                 key={benefit.id}
//                 className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-2 ${
//                   benefit.color === 'red' ? 'bg-red-100 text-red-600' :
//                   benefit.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
//                   benefit.color === 'teal' ? 'bg-teal-100 text-teal-600' :
//                   'bg-pink-100 text-pink-600'
//                 }`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Study Permits Card */}
//           <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8  border border-blue-100">
//             <div className="flex items-start">
//               <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
//                 <FileText className="h-8 w-8 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Permits</h3>
//                 <p className="text-gray-600">
//                   To embark on this educational journey, obtaining a study in Canada permit is crucial. 
//                   Canada's study permit process is known for its efficiency and transparency. With clear 
//                   guidelines and support systems in place, international students can navigate the 
//                   application process smoothly, ensuring a hassle-free entry into the Canadian academic landscape.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Top Universities Section */}
//       {/* <section className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="text-left p-4 mb-">
//             <h2 className="text-4xl font-bold text-gray-900 ">
//               Top Canadian Universities
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//             {topUniversities.map((uni, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
//                     <div className="font-bold text-red-600">{uni.rank}</div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900">{uni.name}</h3>
//                     <div className="text-gray-600 text-sm">{uni.location}</div>
//                   </div>
//                 </div>
//                 <div className="text-gray-700">{uni.students} students</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Scholarships Section */}
//       <section className="py-5 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="text-left p-4 mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-2">
//               Scholarships In Canada
//             </h2>
//             <p className="text-lg text-gray-600 text-left mb-">
//               Masters Visa is dedicated to assisting you at every step, from identifying 
//               relevant scholarship programs to aiding with application documentation. Our 
//               team ensures that you are well-informed about eligibility criteria, deadlines, 
//               and the application procedures specific to each scholarship opportunity.
//             </p>
//             {/* <button onClick={()=>navigate('/contact')} className="bg-red-600 text-white p-4 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
//               Contact DartGlobe Today
//             </button> */}
//           </div>

//           {/* Scholarship Process Steps */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-4 -mt-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
//             {scholarshipSteps.map((step, index) => (
//               <div key={index} className="text-center bg-white rounded-xl p-4 border border-blue-100 ">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6 mx-auto">
//                   <div className="text-red-600">{step.icon}</div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Eligibility Criteria */}
//           <div className=''>
//           <div className="mb-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
//             <h3 className="text-3xl font-bold text-gray-900 mb-8 text-left">
//               Eligibility Criteria
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {eligibilityCriteria.map((criteria, index) => (
//                 <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
//                   <div className="text-3xl mb-2">{criteria.icon}</div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">{criteria.title}</h4>
//                   <p className="text-gray-600">{criteria.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div></div>
//         </div>
//       </section>

//       {/* PGWP & Work Opportunities */}
//       <section className="py-5 bg-gradient-to-r from-green-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center p-4">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Post-Graduation Work Permit (PGWP)
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
//                     <p className="text-gray-600">Up to 3 years based on program length</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility</h3>
//                     <p className="text-gray-600">Graduate from designated learning institution</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Application</h3>
//                     <p className="text-gray-600">Apply within 180 days of graduation</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Work During Studies</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                   <span className="font-medium">Part-time during semester</span>
//                   <span className="font-bold text-green-600">20 hours/week</span>
//                 </div>
//                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                   <span className="font-medium">Full-time during breaks</span>
//                   <span className="font-bold text-green-600">40 hours/week</span>
//                 </div>
//                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//                   <span className="font-medium">Co-op/Internship</span>
//                   <span className="font-bold text-green-600">Work integrated learning</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cost Comparison */}
//       {/* <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Cost Comparison (Annual Tuition)
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-red-600 mb-2">$20,000</div>
//               <div className="font-bold text-gray-900 mb-2">Canada</div>
//               <div className="text-gray-600">Undergraduate Programs</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-600 mb-2">$35,000</div>
//               <div className="font-bold text-gray-900 mb-2">USA</div>
//               <div className="text-gray-600">Undergraduate Programs</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-600 mb-2">$28,000</div>
//               <div className="font-bold text-gray-900 mb-2">UK</div>
//               <div className="text-gray-600">Undergraduate Programs</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-600 mb-2">$25,000</div>
//               <div className="font-bold text-gray-900 mb-2">Australia</div>
//               <div className="text-gray-600">Undergraduate Programs</div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Enrollment CTA */}
//       <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-xl md:text-4xl font-bold mb-6">
//             We encourage you to enroll with Masters Visa Overseas Education Consultancy.
//           </h2>
//           <p className="text-sm md:text-xl text-red-100 max-w-4xl mx-auto mb-10">
//             Embark on a transformative academic journey to Study in Canada with Masters Visa, 
//             your premier overseas education consultancy. Our expert team provides comprehensive 
//             guidance for international students seeking to pursue higher education, ensuring a 
//             seamless process from university selection to visa assistance.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button onClick={()=>navigate('/contact')} className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
//               <Phone className="mr-3 h-5 w-5" />
//               Contact Us Today
//             </button>
            
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StudyCanadaPage;



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

const StudyCanadaPage: React.FC = () => {
    const navigate=useNavigate()
  
  // Major Benefits
  const majorBenefits = [
    {
      title: 'World-Class Academics',
      description: 'Graduate from top-tier institutions consistently ranked among the best worldwide, ensuring your degree carries a global stamp of quality and prestige.',
      icon: <Trophy className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Inclusive & Safe Society',
      description: 'Thrive in one of the worlds safest and most diverse countries, where you will find supportive international communities and vibrant, inclusive campus lives.',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Affordable Excellence',
      description: 'Gain professional experience with the ability to work up to 24 hours per week off-campus during terms and full-time during breaks.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Pathway to Residency',
      description: 'Leverage unique opportunities like the Post-Graduation Work Permit (PGWP) to transition seamlessly from your studies to permanent residency in a welcoming nation.',
      icon: <Heart className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'September (Fall)', duration: 'Primary Intake', application: 'December to July (Best for Scholarships)' },
    { id: 2, term: 'January (Winter)', duration: 'Secondary Intake', application: 'June to September' },
    { id: 3, term: 'May (Spring)', duration: 'Limited Intake', application: 'October to January' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: '6.5 Overall', Subtitle: 'The standard for most undergraduate and postgraduate programs, typically requiring no individual band less than 6.0.' },
    { test: 'TOEFL iBT', requirement: '80 – 100',Subtitle: 'Widely accepted by over 95% of universities, with top schools often requiring scores above 90.' },
    { test: 'PTE Academic', requirement: '58 – 65', Subtitle: 'A rapid, computer-based option widely recognized for both admission and study permits.' },
    { test: 'Duolingo', requirement: '115 – 125', Subtitle: 'A modern, convenient online test gaining massive acceptance across Canadian institutions.' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Smart Shortlisting', description: 'We match your profile with high-value awards (Entrance Scholarships, Government Grants, and Private Bursaries) where you have the highest win rate.' },
    { step: 2, title: 'Essay Strategy', description: 'Scholarship essays are different from admission SOPs. Our editors help you craft a compelling narrative that highlights your leadership and merit to the committee.' },
    { step: 3, title: 'Document Perfection', description: 'A single missing document can lead to rejection. We meticulously review your transcripts, recommendation letters, and financial proofs before submission.' },
    { step: 4, title: 'Interview Prep', description: 'For prestigious awards (like Lester B. Pearson or Vanier Scholarships), we conduct mock interviews to ensure you articulate your vision confidently.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/canada-bghero2.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-3xl md:ml-16">
  Study in Canada<br />
  {/* <span className="block ml-12 sm:ml-12 md:ml-16 lg:ml-16 mt-2">Canada</span> */}
</h1>
  </div>
</div>
</section>

        {/* Study in UK - Overview */}
       <section className="w-[80%] mx-auto scroll-mt-20">
  <div className="flex justify-center py-5 mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8  border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the Canada</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
           Canada is more than just a study destination; it’s a premier gateway to global career opportunities and permanent residency. 
           Benefit from world-class education at top-ranked universities, affordable tuition compared to other major destinations, and a 
           welcoming, multicultural society. With the ability to work part-time while you study and eligible graduates qualifying for up to 
           three years of post-graduation work permits, Canada provides a seamless bridge from education to a professional career. We help 
           you navigate admissions, secure merit-based scholarships, and manage the study permit process for a smooth transition to your new life in Canada.</p>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the Canada for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the Canada</h2>
        <p className="text-sm  text-gray-700 text-left">
         Canada offers multiple entry points to accommodate your academic readiness and preparation timeline.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the UK</h2>
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
        <h4 className="font-bold text-gray-900 mb-1 text-lg">The Primary Intake (September)</h4>
        <p className="text-gray-700 text-xs mb-1">The largest cycle with the widest course selection and maximum scholarship opportunities.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Access to all academic programs and peak on-campus recruitment.</span>
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
        <p className="text-gray-700 text-xs mb-1">Missed September? No problem. A vital second chance for those who missed the Fall deadline or need extra test prep time.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Smaller class sizes and more flexible admission reviews.</span>
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
        <p className="text-gray-700 text-xs mb-1">Primarily for specialized diplomas, certificate programs, and specific vocational courses.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Quiet, focused campus environment with less competition for seats.</span>
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
            Standard benchmarks to ensure admission into top-tier Canadian colleges and universities:
          </p>

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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: Study in Canada Without IELTS!</h3>
                <p className="text-xs md:text-sm text-gray-700">
                 Did you score 75% or higher in English in your 12th Grade (CBSE/ICSE)? The top Canadian institutions (like the University of Toronto, University of Saskatchewan, and many colleges) typically look for 75% or higher to grant an English Language Proficiency (ELP) waiver. If you’ve studied in an English-medium school for the last 3–4 years, you may be eligible to skip the IELTS/TOEFL entirely for your admission!</p></div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the Canada</h2>
      <p className="text-sm  text-gray-700">
        International students in Canada can work to help cover costs and gain Canadian experience.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>New 24-Hour Rule:</strong>As of November 2024, eligible students can work off-campus for up to 24 hours per week during classes.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Unlimited Breaks:</strong>You are permitted to work full-time (40+ hours) during regular academic breaks like Summer and Winter holidays.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Fair Compensation:</strong>You are entitled to the provincial minimum wage, which ranges from $15.00 to over $19.00 per hour in 2026.</span>
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
            <div className="text-sm md:text-base font-bold text-gray-900">Retail & Hospitality</div>
            <div className='text-xs text-gray-700'>(Sales Associate, Barista, Server)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🏢</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Administrative Support</div>
            <div className='text-xs text-gray-700'>(Data Entry, Front Desk, Office Assistant)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🏫</div>
            <div className="text-sm md:text-base font-bold text-gray-900">On-Campus Roles</div>
            <div className='text-xs text-gray-700'>(Library Aide, Peer Tutor, Research Assistant)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">🏢</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Logistics & Delivery</div>
            <div className='text-xs text-gray-700'>(Delivery Driver, Warehouse Associate)</div>
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
           As an international student in Canada, you are legally entitled to the same minimum wage as any Canadian citizen. In 2026, Canada’s federal minimum wage has risen to $17.75 per hour (effective April 1, 2025, with an expected increase to $18.10 on April 1, 2026). However, most student jobs follow Provincial Rates, which currently range from $15.00 to $19.75 per hour. These rates ensure you are fairly compensated for every hour of authorized work.</p></div>
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
        Focus on the world-class standards and high employability of a Canadian degree.</h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Global Gold Standard.
  </span>{" "}
 Canada is home to elite institutions like the University of Toronto, UBC, and McGill, which consistently rank among the top 50 in the world. A Canadian credential is more than an education—it is a "Global Gold Standard" recognized by employers in every corner of the world. By studying here, you gain a prestigious pedigree that positions you at the top of the global talent pool.</p>
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
        Highlight the choice between research-intensive universities and career-focused colleges.</h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Pathways Tailored to You.
  </span>{" "}
   Canada offers a unique, flexible academic structure that fits your career goals perfectly. Choose between research-intensive University degrees (3–4 years) for academic mastery or career-oriented College diplomas (1–3 years) for rapid entry into the workforce. This versatility allows you to maximize your budget and time, ensuring you graduate with the specific skills the 2026 labor market demands.</p>
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
        Reassure students with Canada’s famous multicultural "wraparound" support.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   We've Got Your Back.
  </span>{" "}
    Canada is globally renowned for its inclusivity and warmth. From the moment you arrive, you’ll be supported by dedicated International Student Offices, comprehensive health coverage (UHIP), and specialized "Peer Mentor" programs. Whether you need help with housing, visa extensions, or mental wellness, Canadian institutions provide a robust "wraparound" network to ensure you don’t just study you thrive.</p>
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
        Frame Canada’s R&D leadership as a hands-on skill-building experience.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Drive Global Innovation.
  </span>{" "}
   Canada is a powerhouse in sectors like AI, Biotechnology, and Clean Energy. As a student, you aren't just reading textbooks; you are part of the innovation. Through Co-op placements and Research Assistantships, you’ll work alongside world-leading scientists in cutting-edge facilities, gaining the critical analysis and problem-solving skills that 2026's top-tier employers value most.</p>
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
        Highlight the PGWP as the most powerful career launchpad in North America.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Build Your Future in Canada.
  </span>{" "}
   Your graduation is just the beginning. The Post-Graduation Work Permit (PGWP) allows you to stay and work in Canada for up to 3 years. This is widely considered the most powerful career launchpad in the world, providing you with the essential "Canadian Experience" needed to transition into Permanent Residency (PR) through the Canadian Experience Class or Provincial Nominee Programs.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the Canada</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Don’t let tuition fees hold you back. Canada offers millions of CAD in awards for international students. Our experts help you identify, target, and apply for the best financial aid packages to lower your education costs.</p></div>

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
    Automatic merit awards (often $2,000–$5,000 CAD) based on your GPA/IELTS score. No separate application needed.
  </li>

  <li className="mb-1">
    Prestigious fully-funded options like the Vanier Canada Graduate Scholarship and Shastri Indo-Canadian Fellowships.
  </li>

  <li className="mb-1">
    Need-based aid offered by colleges/universities for students facing financial gaps.
  </li>
</ul></div>


                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   
  </span>{" "}
   Full rides are rarer than in the US. Most Canadian university scholarships offer tuition credits ranging from $2,000 to $10,000 CAD. However, PhD students often receive fully funded stipends (approx. $25,000+ CAD/year).</p></div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
   
  </span>{" "}
   Canadian committees value Community Impact highly. For top awards (like UBC's International Leader of Tomorrow), they look for leadership, volunteerism, and ability to contribute to the campus community.</p></div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your Canada Success Story Starts Here</h3>
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

export default StudyCanadaPage;