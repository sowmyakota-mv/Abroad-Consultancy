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

const StudyUKPage: React.FC = () => {
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
      title: 'World-Class Universities',
      description: 'The UK plays host to some of the most renowned institutions in the world. The country has a large number of institutions that are world leaders in the fields of academics and research.',
      icon: <Trophy className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Multicultural Environment',
      description: 'Studying in the UK means that you will be a part of the global community, as there are students from all parts of the world.',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Part-Time Job Opportunities',
      description: 'Part-time work is available to most international students in the UK, whereby they could benefit from the experience and support themselves financially.',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'A Rich Cultural Experience',
      description: 'From historic monuments to modern art scenes, the UK provides a vibrant cultural life, which enriches the student experience.',
      icon: <Heart className="h-6 w-6 text-blue-600" />
    },
  ];

  // Intakes
  const intakes = [
    { id: 1, term: 'September Intake/Fall', duration: 'September to December', application: 'December to July' },
    { id: 2, term: 'January Intake/Winter', duration: 'January to April', application: 'September to November' },
    { id: 3, term: 'May Intake/Spring', duration: 'May to August', application: 'October to November' },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', requirement: 'Minimum band score can be as low as 5.0' },
    { test: 'TOEFL-iBT', requirement: 'A minimum of 100' },
    { test: 'PTE', requirement: '59' },
    { test: 'Duolingo', requirement: 'Between 105 and 120' },
  ];

  // Scholarship Process
  const scholarshipProcess = [
    { step: 1, title: 'Application', description: 'Begin your journey by submitting a scholarship application through our streamlined online portal. Provide essential information, including academic achievements, extracurricular activities, and a compelling personal statement.' },
    { step: 2, title: 'Selection Criteria', description: 'Our expert panel evaluates applications based on academic merit, leadership potential, and the impact you can make in your chosen field. Letters of recommendation and a strong academic record will enhance your chances of selection.' },
    { step: 3, title: 'Interview', description: 'Shortlisted candidates will participate in a virtual interview, providing an opportunity to showcase your passion for your field of study and your aspirations for the future.' },
    { step: 4, title: 'Notification', description: 'Successful candidates will receive a formal scholarship offer, outlining the details of the award and the next steps in the enrollment process.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
<section className="relative h-[44vh] sm:h-[76vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-center"
    style={{
      backgroundImage: "url('/uk-bghero2.png')",
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
  <div className="max-w-xl text-left sm:text-left md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 max-w-3xl">
  Study in <br />
  <span className="block ml-12 sm:ml-12 md:ml-16 lg:ml-16 mt-4">United Kingdom</span>
</h1>
  </div>
</div>
</section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12 space-y-2">

        {/* Study in UK - Overview */}
       <section className="w-[90%] mx-auto scroll-mt-20">
  <div className="flex justify-center sm:mt-12">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-900 ">Study In UK</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
            The United Kingdom has always been one of the most famous destinations for international students. With a rich history of academia and a booming culture, the UK is an unusual blend of experiences awaiting prospective students who seek quality education. If a student looks forward to constructing a career at the undergraduate level, or one looks forward to an advanced line of postgraduate studies, then the UK offers a base of resources and support to thoroughly ensure that likes of props of merit remain resource-filled indeed.
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

        {/* Major Benefits */}
        <section>
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 text-center mt-16 py-5">Major Benefits of Studying in the UK: Key Reasons to Study in the UK</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {majorBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">{benefit.title}</h3>
                <p className="text-sm text-gray-700 flex-grow ">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intakes in the UK */}
<section className="bg-gray-100 w-full min-h-screen py-5 md:py-5 mt-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 -mb-6 text-left p-4 mt-10">Intakes in the UK</h2>
      <p className="text-sm md:text-lg text-gray-700 mb- text-left p-4">
        Intakes are in plenty throughout the year, thus giving the students the flexibility they need to make their decision on when to begin their studies. Outlined below are detailed intakes at a glance.
      </p>
    </div>

    {/* Desktop Table */}
    <div className="hidden md:block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg mb-10">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <tr>
            <th className="py-6 px-8 text-left font-bold text-lg">#</th>
            <th className="py-6 px-8 text-left font-bold text-lg">UK Intakes</th>
            <th className="py-6 px-8 text-left font-bold text-lg">Duration</th>
            <th className="py-6 px-8 text-left font-bold text-lg">Applications Open</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {intakes.map((intake) => (
            <tr key={intake.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-6 px-8 font-bold text-lg">{intake.id}</td>
              <td className="py-6 px-8">
                <div className="font-bold text-gray-900 text-lg">{intake.term}</div>
              </td>
              <td className="py-6 px-8 text-gray-700">{intake.duration}</td>
              <td className="py-6 px-8">
                <span className="font-medium text-gray-900">{intake.application}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-4 mb-10">
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

    <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-10 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Intake Summary</h3>
      <div className="grid  md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">September Intake/Fall</h4>
          <p className="text-gray-700">The most competitive is the September intake, wherein nearly all courses are available.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">January Intake/Winter</h4>
          <p className="text-gray-700">January Intake gives another opportunity to students missing the Fall Intake.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">May Intake/Spring</h4>
          <p className="text-gray-700">May Intake allows students to start their programs in the middle of the year.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* English Requirements */}
        <section className='py-5 mt-8'>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 -mb-4 mt-8 text-left p-4">English Proficiency Requirements for Study in UK</h2>
          <p className="text-sm md:text-lg text-gray-700 mb-3 text-left p-4">
            Since it is located in the UK, one needs to know how to communicate in English since most of the courses taught follow the English language. The requirements always differ in universities, but here are the common English language proficiency marks:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {englishRequirements.map((test, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-lg md:text-2xl font-bold text-blue-700 mb-4">{test.test}</div>
                <div className="text-sm md:text-2xl text-gray-700">{test.requirement}</div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="font-bold text-yellow-700 text-xl">!</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Important Note</h3>
                <p className="text-sm md:text-lgtext-gray-700">
                  Some universities accept the 12th grade's English score as a certificate of proof, which obviously makes it an easier way out for students for meeting their requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities */}
        {/* <section>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 mb-4 text-center">Top Universities</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            The UK hosts some of the world's most renowned universities that boast of always featuring in the top lists of global rankings. The universities are known for their innovative research, the quality of teaching, and the strong links with industries.
          </p>

          <div className="space-y-4 mb-12">
            {topUniversities.map((uni, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 mb-4 md:mb-0">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900">{uni.name}</h3>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all w-full md:w-auto">
                    Explore Programs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Part-time Work Opportunities */}
<section className="bg-gray-100 w-full py-8 md:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Opportunities of Part-time Work in the UK</h2>
      <p className="text-base md:text-lg text-gray-700">
        Part-time working is allowed for international students in the UK to facilitate living requirements and gain some experience while studying.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Work Regulations</h3>
        <ul className="space-y-4 md:space-y-5">
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Term Time:</strong> Work is allowed for 20 hours per week; permitted working hours are up to 20 each week when classes are in session.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>Holidays:</strong> Full-time work is allowed during holidays and breaks.</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-blue-600" />
            </div>
            <span className="text-sm md:text-base text-gray-700"><strong>On-Campus:</strong> On-campus employment is also available in some universities.</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 md:p-8 border border-red-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Job Sectors</h3>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Part-time work can be found in various sectors, including:
        </p>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">🛒</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Retail</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">☕</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Hospitality</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">💼</div>
            <div className="text-sm md:text-base font-bold text-gray-900">Administration</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">🎓</div>
            <div className="text-sm md:text-base font-bold text-gray-900">University Roles</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200">
      <div className="flex items-start">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
          <span className="font-bold text-yellow-700 text-lg md:text-xl">!</span>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Important Note</h3>
          <p className="text-sm md:text-base text-gray-700">
            Some universities accept the 12th grade's English score as a certificate of proof, which obviously makes it an easier way out for students for meeting their requirements.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Quality Education & Support */}
        <section className='py-5 mt-12'>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 py-4">Quality Education</h2>
              <p className="text-lg text-gray-700 mb-6 bg-blue-100 p-6 rounded-2xl">
                The UK boasts some of the world's foremost universities celebrated for their academic prowess and groundbreaking research contributions. A diverse array of undergraduate and postgraduate programs spans various disciplines, enabling students to select courses aligned with their individual interests and future career aspirations.
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Structure</h3>
                <p className="text-gray-700 mb-4">
                  Renowned for its flexibility, the UK academic system empowers students to customize their courses to match specific interests by combining different subjects. Undergraduate degrees typically require three years for completion, while postgraduate programs generally span one year, with research-focused programs potentially extending beyond.
                </p>
              </div>
            </div>

            <div >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Services</h2>
              <p className="text-lg text-gray-700 mb-6 bg-red-100 p-4 rounded-2xl">
                To ease the transition for international students, Study in UK universities provide comprehensive support services. These include orientation programs, academic counselling, and assistance with visa applications.
              </p>
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
                <p className="text-gray-700">
                  Dedicated international student offices guide individuals on matters such as accommodation, healthcare, and cultural integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Opportunities */}
<section className="bg-gradient-to-r from-blue-100 to-red-100 rounded-3xl p-8 md:p-12">
  <div className="text-center mb-8 md:mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Research Opportunities</h2>
    <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
      Explore abundant research opportunities Study in UK for international students pursuing higher education.
    </p>
  </div>
  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
      <div className="text-4xl md:text-5xl mb-4 md:mb-6">🔬</div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">World-Leading Research</h3>
      <p className="text-gray-700">
        Renowned for its world-class universities, the UK offers a diverse range of research fields and state-of-the-art facilities. From innovative technology to groundbreaking discoveries, students can engage in cutting-edge research while enjoying a vibrant academic and cultural experience.
      </p>
    </div>
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
      <div className="text-4xl md:text-5xl mb-4 md:mb-6">🌍</div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Global Contribution</h3>
      <p className="text-gray-700">
        Embrace the chance to contribute to global knowledge and enhance your academic journey in the United Kingdom.
      </p>
    </div>
  </div>
</section>

        {/* Post-Study Work Options */}
        <section className='py-5 mt-12'>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 p-4">Post-Study Work Options</h2>
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-10 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 lg:pr-12 mb-8 lg:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Graduate Route Visa</h3>
                <p className="text-med md:text-lg text-gray-700 mb-8">
                  An appealing feature for many, the UK provides post-study work options, enabling international students to stay and work in the country for a specified period after completing their studies. This facilitates gaining valuable work experience in the UK.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">2 Years</div>
                    <div className="text-gray-700">Bachelor's Graduates</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">3 Years</div>
                    <div className="text-gray-700">Master's/ PhD Graduates</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="text-7xl mb-4">🎯</div>
                <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section className='bg-gray-100 py-5 mt-8'>
          <div className="text-left p-4 mb-12 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarships In UK</h2>
            <p className="text-med md:text-xl text-gray-700 text-left">
              Embark on a transformative educational journey in the United Kingdom with our exclusive scholarship program designed for international students.
            </p>
          </div>

          <div className="w-[96%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Scholarship Process</h3>
              <div className="space-y-2">
                {scholarshipProcess.map((step) => (
                  <div key={step.step} className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl flex items-center justify-center mr-6 text-white font-bold text-2xl">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                        <p className="text-sm text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Scholarship Details</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Coverage</h4>
                  <p className="text-gray-700">
                    The scholarship covers a significant portion of tuition fees, making quality education in the UK more accessible to talented international students.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 border border-red-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Duration</h4>
                  <p className="text-gray-700">
                    The scholarship is typically awarded for the duration of your program, ensuring sustained support throughout your academic journey.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Renewal</h4>
                  <p className="text-gray-700">
                    Maintain a high level of academic performance, and you may be eligible for the renewal of the scholarship in subsequent years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-red-800 rounded-3xl p-10 text-white text-center -mb-5 sm:-mb-6 md:-mb-18">
            <h3 className="text-xl md:text-3xl font-bold mb-4">Your Academic Success Awaits</h3>
            <p className="text-sm md:text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              Your academic success in the UK awaits - let Masters Visa be your guide. Enroll with us today for a brighter tomorrow.
            </p>
            <p className="text-sm md:text-lg text-blue-100 mb-10 max-w-3xl mx-auto">
              Ready to take the next step toward your educational dreams in the UK? Enroll with Masters Visa Overseas Education Consultancy for personalized guidance on the scholarship application process, detailed eligibility criteria, and insights into the educational landscape in the UK. Our expert team is dedicated to helping you navigate the scholarship journey and ensure a seamless enrollment process.
            </p>
            <button onClick={()=>navigate("/contact")} className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-sm md:text-xl hover:shadow-2xl transition-all flex items-center justify-center mx-auto">
              <MessageSquare className="mr-3 h-6 w-6" />
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudyUKPage;