// import React, { useState } from 'react';
// import { 
//   GraduationCap, Shield, DollarSign, Briefcase, 
//   BookOpen, Globe, Home, Users, 
//   Award, Mail, Phone, MapPin,
//   CheckCircle, Calendar, FileText, MessageSquare,
//   ArrowRight, Download, ChevronDown,
//   University, Target, TrendingUp, Star
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const StudyUSAPage: React.FC = () => {
//     const navigate=useNavigate()
//   const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

//   const toggleAccordion = (id: string) => {
//     setActiveAccordion(activeAccordion === id ? null : id);
//   };

//   // Top USA Universities
//   const topUniversities = [
//     { name: 'Harvard University', rank: '#1', location: 'Cambridge, MA', students: '22,000+', programs: 'Law, Business, Medical' },
//     { name: 'Stanford University', rank: '#2', location: 'Stanford, CA', students: '17,000+', programs: 'Engineering, Business, Computer Science' },
//     { name: 'Massachusetts Institute of Technology', rank: '#3', location: 'Cambridge, MA', students: '11,000+', programs: 'Technology, Science, Engineering' },
//     { name: 'University of California System', rank: '#4', location: 'California', students: '285,000+', programs: 'Varied subjects across campuses' },
//     { name: 'California Institute of Technology', rank: '#5', location: 'Pasadena, CA', students: '2,200+', programs: 'Engineering, Physical Sciences' },
//     { name: 'Yale University', rank: '#6', location: 'New Haven, CT', students: '13,000+', programs: 'Liberal Arts, Law, Medicine' },
//   ];

//   // Intakes
//   const intakes = [
//     { 
//       term: 'Fall Intake', 
//       months: 'September', 
//       description: 'Most popular intake; it offers maximum courses and programs to students. Deadlines are usually December to March of the previous year.',
//       icon: '🍂'
//     },
//     { 
//       term: 'Spring Intake', 
//       months: 'January', 
//       description: 'This is the time for admission for people missing the fall intake. Deadlines usually lie from July to October of the previous year.',
//       icon: '🌸'
//     },
//     { 
//       term: 'Summer Intake', 
//       months: 'May', 
//       description: 'This is less frequent, especially in specific programs or courses. In most cases, deadlines run from January to March.',
//       icon: '☀️'
//     },
//   ];

//   // English Requirements
//   const englishRequirements = [
//     { test: 'IELTS', score: '6.5', description: 'Minimum score required to study in USA' },
//     { test: 'TOEFL (IBT)', score: '80', description: 'Typically, a minimum score of 80 would be required' },
//     { test: 'PTE', score: '50-70', description: '50–70 is usually through' },
//   ];

//   // Study Without IELTS Options
//   const noIELTSoptions = [
//     { 
//       title: 'Conditional Admission', 
//       description: 'Sometimes, full admission will be awarded after first students get admitted to an English language program, and thereafter their admission can be changed into a degree program.'
//     },
//     { 
//       title: 'Previous Education in English', 
//       description: 'You will be exempted from these tests if you have had any previous education where the mode of instruction was in English.'
//     },
//     { 
//       title: 'University-Specific Tests', 
//       description: 'Some universities have their internal English proficiency tests, which are conducted during the admission process.'
//     },
//     { 
//       title: 'Pathway Programs', 
//       description: 'These programs combine language studies with undergraduate classes, and then you would transition to a full degree program.'
//     },
//   ];

//   // Admission Tips
//   const admissionTips = [
//     { 
//       title: 'Solid Application', 
//       description: 'A holistic application backed by strong academic records, compelling essays, and excellent recommendation letters will make all the difference.'
//     },
//     { 
//       title: 'Early Preparation', 
//       description: 'Plan early so as to meet the deadlines and have all the documents required in place.'
//     },
//     { 
//       title: 'Do the research', 
//       description: 'On the various universities and what they look for. Some may have distinct criteria or even be quite flexible in the admission process.'
//     },
//     { 
//       title: 'Consult Experts', 
//       description: 'You may get in touch with educational counsellors or agencies who deal with overseas education for reaching out to help in the application process.'
//     },
//   ];

//   // Eligibility Criteria
//   const eligibilityCriteria = [
//     { 
//       title: 'Academic Excellence', 
//       description: 'Demonstrated high academic achievement',
//       icon: '📚'
//     },
//     { 
//       title: 'Leadership and Involvement', 
//       description: 'Active involvement in extracurricular activities or community service.',
//       icon: '🏆'
//     },
//     { 
//       title: 'Admission to Qualifying Program', 
//       description: 'Acceptance into an eligible academic program at a U.S. institution.',
//       icon: '🎓'
//     },
//   ];

//   // Quick Stats
//   const quickStats = [
//     { value: '5,300', label: 'Universities in USA', icon: '🏛️' },
//     { value: '6.5', label: 'Minimum IELTS Score', icon: '🔤' },
//     { value: '80', label: 'Minimum TOEFL (IBT) Score', icon: '📝' },
//     { value: '50-70', label: 'Minimum PTE Score', icon: '📊' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//     {/* Hero Section */}
// <section className="relative h-[32vh] sm:h-[62vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
//   {/* Background Image Wrapper */}
//   <div
//     className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-bottom"
//     style={{
//       backgroundImage: "url('/us-bghero.png')",
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
//   <span className=""> USA</span>
// </h1>
//   </div>
// </div>
// </section>

//       {/* Quick Stats */}
//       <section className="py-5 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-4 gap-8">
//             {quickStats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Study in USA */}
//       <section className="w-[90%] mx-auto scroll-mt-20 py-12">
//   <div className="flex justify-center">
//     <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold text-gray-900 ">Study In USA</h2>
//         <div className="rounded-xl p-4 md:p-4 ">
//           <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
//              The United States of America continues to be one of the most coveted places for 
//         higher education in the world and provides an invitation to students across the world.The USA Study is offering numerous world-class universities, sprawling with a wide 
//             array of multicultural environments and numerous latest research opportunities. 
//             This guide will walk you through everything you need to know about study in USA.
//           </p>
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

//       {/* Best Universities Section */}
//       <section className="py-5 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
//     <div className="text-left mb-12 p-4">
//       <h2 className="text-4xl font-bold text-gray-900 mb-3">
//         Best Universities in the USA
//       </h2>
//       <p className="text-lg text-left text-gray-600">
//         It is home to some of the world's most prestigious universities, be it in academic 
//         excellence, research opportunities, or campus life.
//       </p>
//     </div>

//     <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-8 p-4">
//       {topUniversities.map((uni, index) => (
//         <div 
//           key={index}
//           className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//         >
//           <div className="flex items-start mb-2">
//             {/* Fixed size rank circle */}
//             <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//               <div className="font-bold text-red-600">{uni.rank}</div>
//             </div>
            
//             {/* University name and location - will wrap if needed */}
//             <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 */}
//               <h3 className="text-xl font-bold text-gray-900 break-words">{uni.name}</h3>
//               <div className="text-gray-600 text-sm mt-1">{uni.location}</div>
//             </div>
//           </div>
          
//           <div className="mb-2 mt-4">
//             <div className="text-gray-700 font-medium mb-1">Popular Programs:</div>
//             <div className="text-gray-600">{uni.programs}</div>
//           </div>
//           <div className="text-gray-700">{uni.students} students</div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Intakes in USA */}
//       <section className="py-5 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 mt-8">
//           <div className="text-left mb-12 p-4">
//             <h2 className="text-4xl font-bold text-gray-900 mb-2">
//               Intakes in the USA
//             </h2>
//             <p className="text-lg text-gray-600 text-left">
//               The academic calendar in the USA provides three intakes in main:
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 -mt-8 p-4">
//             {intakes.map((intake, index) => (
//               <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
//                 <div className="text-4xl mb-2">{intake.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{intake.term}</h3>
//                 <div className="text-xl text-blue-600 font-bold mb-2">{intake.months}</div>
//                 <p className="text-gray-600">{intake.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* English Proficiency Requirements */}
//       <section className="py-5 bg-white mb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="text-left mb-12 p-4">
//             <h2 className="text-4xl font-bold text-gray-900 mb-2">
//               English Proficiency Requirements
//             </h2>
//             <p className="text-lg text-gray-600 text-left">
//               Common tests accepted for studying in the USA:
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-12 p-4 -mt-12">
//             {englishRequirements.map((test, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">{test.score}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{test.test}</h3>
//                 <p className="text-gray-600">{test.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Study Without IELTS */}
//           <div className="py-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4  mb-1 border border-blue-100">
//             <h3 className="mt-8 text-3xl font-bold text-gray-900 mb-3 text-left p-4">
//               Study in the USA Without IELTS
//             </h3>
//             <p className="text-lg text-gray-600 mb-2 -mt-6 text-left p-4">
//               If you are really concerned about the eligibility criteria with regard to the 
//               English Proficiency Test, then feel tension. A few numbers of institutions have an alternative pathway:
//             </p>
            
//             <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
//               {noIELTSoptions.map((option, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6">
//                   <h4 className="text-lg font-bold text-gray-900 mb-3">{option.title}</h4>
//                   <p className="text-gray-600 text-sm">{option.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tips to Enhance Admission Chances */}
//       <section className="py-5 bg-gradient-to-r from-red-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
//           <div className="text-left p-4 mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 ">
//               Tips to Enhance Chances of Admission
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 -mt-8">
//             {admissionTips.map((tip, index) => (
//               <div key={index} className="bg-white rounded-xl p-6">
//                 <div className="text-2xl mb-3">💡</div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
//                 <p className="text-gray-600 text-sm">{tip.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Eligibility Criteria */}
//       <section className="py-5 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
//           <div className="text-left p-4 mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Eligibility Criteria
//             </h2>
//             <p className="text-lg text-gray-600 text-left">
//               To be eligible for the Masters Visa Scholarship in the USA, candidates typically must meet the following criteria.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 p-4 -mt-8">
//             {eligibilityCriteria.map((criteria, index) => (
//               <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
//                 <div className="text-4xl mb-2">{criteria.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{criteria.title}</h3>
//                 <p className="text-gray-600">{criteria.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Conclusion */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-2xl p-12 border border-gray-200">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               Conclusion
//             </h2>
//             <div className="text-lg text-gray-600 space-y-4">
//               <p>
//                 Study in the USA - that's going to be life-changing. The education is world-class; 
//                 the opportunities are endless. Knowing the intakes, targeting some of the top 
//                 universities, and knowing requirements and alternatives in English proficiency 
//                 will help you turn your dreams of studying in the USA into reality.
//               </p>
//               <p>
//                 The bottom line, whether one is to take the traditional route or one of the 
//                 alternatives available to a student instead of taking the English proficiency tests, 
//                 is good planning and presenting a nice application.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enrollment CTA */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-xl md:text-4xl font-bold mb-6">
//             We encourage you to enroll with Masters Visa Overseas Education Consultancy.
//           </h2>
//           <p className="text-xs text-gray-200 max-w-4xl mx-auto mb-10">
//             Embarking on a transformative academic journey in the USA is a dream for many, and our 
//             overseas education consultancy is here to turn that dream into reality. With our expert 
//             guidance, navigating the intricacies of the Masters Visa process becomes seamless, 
//             ensuring a smooth transition for international students.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button onClick={()=>navigate('/contact')} className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
//               <Phone className="mr-3 h-5 w-5" />
//               Contact Us Today
//             </button>
            
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StudyUSAPage;


import React from 'react';
import { Briefcase,
   Globe, CheckCircle, Trophy, Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyUSAPage: React.FC = () => {
    const navigate=useNavigate()

  // Major Benefits
  const majorBenefits = [
    {
      title: 'Academic Excellence & Flexibility',
      description: 'Study at top-tier universities leading the world in research and technology, offering flexible degree programs tailored to your specific interests and goals.',
      icon: <Trophy className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Industry & Innovation Hub',
      description: 'Gain a competitive edge with access to the world’s largest job market, internships at industry giants, and specialized post-study work opportunities.',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Inclusive Campus Culture',
      description: 'Join a vibrant, multicultural community that fosters personal growth, leadership skills, and a global professional network that lasts a lifetime.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Hands-On Learning',
      description: 'Benefit from an education system that prioritizes practical skills, providing students with real-world experience and high employability in every sector.',
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
    { test: 'IELTS', requirement: '6.5 – 7.0 Overall', Subtitle: 'Widely accepted by thousands of US institutions (Typically, no band less than 6.0 is the standard for competitive schools).' },
    { test: 'TOEFL iBT', requirement: '80 – 100',Subtitle: 'The gold standard for US admissions; a score of 100+ is usually required for Ivy League or top-30 universities.' },
    { test: 'PTE Academic', requirement: '60 – 68', Subtitle: 'A computer-based test offering fast results, recognized by an increasing number of US colleges.' },
    { test: 'Duolingo', requirement: '110 – 125', Subtitle: 'A fast, convenient, home-based testing option that has gained massive acceptance across modern US universities.' },
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
      backgroundImage: "url('/us-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-2 max-w-3xl">
  Study in <br />
  <span className="block ml-12 sm:ml-12 md:ml-16 lg:ml-16 mt-2">United States</span>
</h1>
  </div>
</div>
</section>

        {/* Study in UK - Overview */}
       <section className="w-[80%] mx-auto scroll-mt-20">
  <div className="flex justify-center py-5 mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8  border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">Study in the United States</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
            The USA is more than just a study destination; it’s a global powerhouse for innovation and academic excellence. Benefit from world-leading research facilities, a flexible curriculum that allows you to explore diverse majors, and unparalleled networking opportunities within the world’s largest economy. Whether you are aiming for Ivy League prestige or cutting-edge STEM programs, we provide expert guidance on admissions, financial aid, and the F-1 visa process to ensure your American dream becomes a reality.</p>
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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left sm:mt-12 mt-16 py-5 w-[92%] mx-auto">Why Choose the UK for Your Education?</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">Flexible Study Intakes in the USA</h2>
        <p className="text-sm  text-gray-700 text-left">
          Unlike many other destinations, the USA offers multiple entry points that cater to different academic goals. Whether you want to join the major research cycle or need extra time for test prep, there is an intake that fits your timeline perfectly.</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left mt-10">Flexible Study Intakes in the USA</h2>
        <p className="text-sm text-gray-700 text-left mb-4">
          Unlike many other destinations, the USA offers multiple entry points that cater to different academic goals. Whether you want to join the major research cycle or need extra time for test prep, there is an intake that fits your timeline perfectly.
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
        <p className="text-gray-700 text-xs mb-1">This is the primary intake for all US universities, offering the largest selection of programs, maximum financial aid opportunities, and access to all on-campus recruitment cycles.</p>
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
        <p className="text-gray-700 text-xs mb-1">Missed September? No problem. An excellent secondary option for students who missed the Fall deadline or need extra time for GRE/SAT/TOEFL preparation. It allows you to start your journey without waiting a full year.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Accelerated processing and smaller class sizes.</span>
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
        <p className="text-gray-700 text-xs mb-1">A limited intake typically reserved for specialized bridge programs, language courses, or specific vocational certifications offered by select universities and community colleges.</p>
        <p className="text-gray-700">
          <span className="font-bold text-sm">Key Benefit :</span>{" "}
          <span className='text-xs'>Ideal for quick-start professional certifications.</span>
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
            While specific requirements vary by institution, aiming for these standard benchmarks will keep your options open for top-tier US universities.</p>

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
                <h3 className="text-med md:text-lg font-bold text-gray-900 mb-3">Pro Tip: IELTS Waiver is Possible!</h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Many US universities now offer "Test-Optional" or "Test-Blind" admissions, allowing you to skip GRE/GMAT or even English tests if you have a strong academic record or graduated from an English-medium school. Ask our counselors to find your eligible universities!</p>
              </div>
            </div>
          </div>
        </div></section>

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-5 ">
  <div className="w-[92%] mx-auto mt-8 mb-4">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">Earn While You Learn: Part-Time Work in the USA</h2>
      <p className="text-sm  text-gray-700">
       International students in the USA have specific legal work rights to help offset living expenses while gaining professional experience.</p></div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Term Time (Classes On):</strong> You are legally permitted to work up to 20 hours per week on university premises during active semesters.</span></li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Holiday Time (Breaks):</strong>During official university breaks (Summer/Winter), you are allowed to work full-time (up to 40 hours per week).</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>On-Campus:</strong>After your first year, you may be eligible for Curricular Practical Training (CPT) to work in internships directly related to your field of study.</span>
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
            <div className="text-2xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">University Roles</div>
            <div className='text-xs text-gray-700'>(Library assistant, student ambassador, or administrative support)</div>
          </div>
          <div className="bg-white p-3  rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Service & Hospitality</div>
            <div className='text-xs text-gray-700'>(Dining Hall Assistant, Coffee Shop Barista, Event Staff)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💻</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Tech & Research Labs</div>
            <div className='text-xs text-gray-700'>(IT Helpdesk, Research Assistant, Lab Technician)</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Corporate Internships</div>
            <div className='text-xs text-gray-700'>(Paid professional internships in Finance, Engineering, or Marketing)</div>
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
          <h3 className="text-med md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Did You Know? Federal & State Minimum Wages Apply!</h3>
          <p className="text-xs md:text-sm text-gray-700">
           As an international student in the U.S., you are protected by the Fair Labor Standards Act (FLSA). You are entitled to at least the Federal Minimum Wage of $7.25 per hour, though many states like California or New York offer much higher rates - often ranging from $15.00 to $17.00 per hour. This ensures you receive fair compensation for all authorized on-campus or CPT work.</p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Elite Academic Excellence</h2>
      <h3 className="text-sm md:text-base font-semibold text-blue-700 mb-3">
        Harness the Power of Global Prestige and Career Innovation.
      </h3>
        <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
    A Global Leader in Excellence.
  </span>{" "}
  The USA is home to the largest concentration of top-ranked universities in the world, including the prestigious Ivy League. Earning an American degree provides you with a premier credential that signifies world-class training, opening doors to leadership roles at Fortune 500 companies and top-tier employers across the globe.</p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Academic Flexibility</h2>
      <h3 className="text-sm md:text-base font-semibold text-green-700 mb-3">
        Tailor Your Journey with a Customized and Versatile Curriculum.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Smarter, Personalized Degrees.
  </span>{" "}
   The biggest advantage of the US system is its unparalleled flexibility. Unlike other countries, you can explore various subjects before declaring a major, or even pursue "double majors" to diversify your skill set. This adaptable structure ensures you graduate with a well-rounded education specifically designed to meet your unique career ambitions.</p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Comprehensive Student Support</h2>
      <h3 className="text-sm md:text-base font-semibold text-orange-700 mb-3">
        A Dedicated Network to Ensure Your Success from Day One.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Your Home Away from Home.
  </span>{" "}
   Moving to the USA is a life-changing step, and American campuses are world-renowned for their student-centric support. From specialized International Student Services (ISS) that manage your visa and housing to career centers that offer personalized coaching and networking events, you are backed by a robust system dedicated to your personal and professional growth.</p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Research & Innovation</h2>
      <h3 className="text-sm md:text-base font-semibold text-purple-700 mb-3">
        Gain Hands-on Experience at the Forefront of Global Technology.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   Learning Through Discovery.
  </span>{" "}
   Be part of an ecosystem that fuels global innovation. In the USA, research isn't just for labs; it’s integrated into your learning. You will have access to multi-billion dollar facilities and work alongside industry-leading professors, helping you develop the critical thinking and technical skills that are highly prized by the modern job market.</p>
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
      <h3 className="text-sm md:text-base font-semibold text-red-700 mb-3">
        Leverage Practical Training to Launch Your Career in the World’s Largest Economy.
      </h3>
      <p className="text-gray-700 mb-3 text-xs md:text-base">
  <span className="font-bold text-gray-900 text-sm md:text-base">
   The Ultimate Career Launchpad.
  </span>{" "}
   Your American journey translates directly into professional success. Through Optional Practical Training (OPT), you can work in the USA for 12 months after graduation with STEM students eligible for an extension of up to 36 months. This allows you to gain invaluable experience at world-leading organizations and maximize the return on your educational investment.</p>
    </div>
  </div>
</section>

        {/* Scholarships Section */}
        <section className='w-full bg-gray-100 py-5 mt-8'>
          <div className="w-[92%] mx-auto text-left mb-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid in the UK</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">
              Don't let tuition fees hold you back. The UK offers millions of pounds in scholarships for international students. Our experts help you identify, target, and apply for the best financial aid packages to significantly lower your education costs.</p>
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
                  <div className=''>
                  <p className="text-gray-700 text-xs md:text-sm mb-1">
  <span className="font-bold text-gray-900 text-sm">
   Merit-Based:
  </span>{" "}
   For high academic achievers.</p>
        <p className="text-gray-700 mb-1 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   University Discounts:
  </span>{" "}
   Automatic bursaries (often £1,000–£3,000) for early applicants.</p>
        <p className="text-gray-700 mb-1 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   Government Awards:
  </span>{" "}
   Prestigious full-funding options like Chevening and GREAT Scholarships.</p>
   </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Coverage & Value</h4>
                  <p className="text-gray-700 mb-2 text-xs md:text-sm">
  <span className="font-bold text-gray-900 text-sm">
   What to Expect:
  </span>{" "}
   While full rides exist, most UK university scholarships offer a tuition reduction ranging from £1,000 to £5,000. Top-tier candidates can secure 50% to 100% waivers in competitive rounds.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-4 border border-purple-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h4>
                  <p className="text-gray-700 text-xs md:text-sm mb-2">
  <span className="font-bold text-gray-900 text-sm">
   How to Qualify:
  </span>{" "}
   Committees look beyond just grades. They seek leadership potential, extracurricular achievements, and a clear vision of how you will use your degree to make an impact.</p>
                </div>
              </div>
            </div>
          </div>
          </section>

<section className='mt-16'>
          <div className="bg-gradient-to-r from-blue-900 to-red-800  p-10 text-white text-center ">
            <h3 className="text-xl md:text-3xl font-bold mb-1">Your UK Success Story Starts Here</h3>
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

export default StudyUSAPage;