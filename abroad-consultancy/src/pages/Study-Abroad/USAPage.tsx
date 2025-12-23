import React, { useState } from 'react';
import { 
  GraduationCap, Shield, DollarSign, Briefcase, 
  BookOpen, Globe, Home, Users, 
  Award, Mail, Phone, MapPin,
  CheckCircle, Calendar, FileText, MessageSquare,
  ArrowRight, Download, ChevronDown,
  University, Target, TrendingUp, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudyUSAPage: React.FC = () => {
    const navigate=useNavigate()
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Top USA Universities
  const topUniversities = [
    { name: 'Harvard University', rank: '#1', location: 'Cambridge, MA', students: '22,000+', programs: 'Law, Business, Medical' },
    { name: 'Stanford University', rank: '#2', location: 'Stanford, CA', students: '17,000+', programs: 'Engineering, Business, Computer Science' },
    { name: 'Massachusetts Institute of Technology', rank: '#3', location: 'Cambridge, MA', students: '11,000+', programs: 'Technology, Science, Engineering' },
    { name: 'University of California System', rank: '#4', location: 'California', students: '285,000+', programs: 'Varied subjects across campuses' },
    { name: 'California Institute of Technology', rank: '#5', location: 'Pasadena, CA', students: '2,200+', programs: 'Engineering, Physical Sciences' },
    { name: 'Yale University', rank: '#6', location: 'New Haven, CT', students: '13,000+', programs: 'Liberal Arts, Law, Medicine' },
  ];

  // Intakes
  const intakes = [
    { 
      term: 'Fall Intake', 
      months: 'September', 
      description: 'Most popular intake; it offers maximum courses and programs to students. Deadlines are usually December to March of the previous year.',
      icon: '🍂'
    },
    { 
      term: 'Spring Intake', 
      months: 'January', 
      description: 'This is the time for admission for people missing the fall intake. Deadlines usually lie from July to October of the previous year.',
      icon: '🌸'
    },
    { 
      term: 'Summer Intake', 
      months: 'May', 
      description: 'This is less frequent, especially in specific programs or courses. In most cases, deadlines run from January to March.',
      icon: '☀️'
    },
  ];

  // English Requirements
  const englishRequirements = [
    { test: 'IELTS', score: '6.5', description: 'Minimum score required to study in USA' },
    { test: 'TOEFL (IBT)', score: '80', description: 'Typically, a minimum score of 80 would be required' },
    { test: 'PTE', score: '50-70', description: '50–70 is usually through' },
  ];

  // Study Without IELTS Options
  const noIELTSoptions = [
    { 
      title: 'Conditional Admission', 
      description: 'Sometimes, full admission will be awarded after first students get admitted to an English language program, and thereafter their admission can be changed into a degree program.'
    },
    { 
      title: 'Previous Education in English', 
      description: 'You will be exempted from these tests if you have had any previous education where the mode of instruction was in English.'
    },
    { 
      title: 'University-Specific Tests', 
      description: 'Some universities have their internal English proficiency tests, which are conducted during the admission process.'
    },
    { 
      title: 'Pathway Programs', 
      description: 'These programs combine language studies with undergraduate classes, and then you would transition to a full degree program.'
    },
  ];

  // Admission Tips
  const admissionTips = [
    { 
      title: 'Solid Application', 
      description: 'A holistic application backed by strong academic records, compelling essays, and excellent recommendation letters will make all the difference.'
    },
    { 
      title: 'Early Preparation', 
      description: 'Plan early so as to meet the deadlines and have all the documents required in place.'
    },
    { 
      title: 'Do the research', 
      description: 'On the various universities and what they look for. Some may have distinct criteria or even be quite flexible in the admission process.'
    },
    { 
      title: 'Consult Experts', 
      description: 'You may get in touch with educational counsellors or agencies who deal with overseas education for reaching out to help in the application process.'
    },
  ];

  // Eligibility Criteria
  const eligibilityCriteria = [
    { 
      title: 'Academic Excellence', 
      description: 'Demonstrated high academic achievement',
      icon: '📚'
    },
    { 
      title: 'Leadership and Involvement', 
      description: 'Active involvement in extracurricular activities or community service.',
      icon: '🏆'
    },
    { 
      title: 'Admission to Qualifying Program', 
      description: 'Acceptance into an eligible academic program at a U.S. institution.',
      icon: '🎓'
    },
  ];

  // Quick Stats
  const quickStats = [
    { value: '5,300', label: 'Universities in USA', icon: '🏛️' },
    { value: '6.5', label: 'Minimum IELTS Score', icon: '🔤' },
    { value: '80', label: 'Minimum TOEFL (IBT) Score', icon: '📝' },
    { value: '50-70', label: 'Minimum PTE Score', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
<section className="relative h-[36vh] sm:h-[48vh] md:h-[80vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-bottom"
    style={{
      backgroundImage: "url('/us-bghero.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
    {/* Optional Overlay */}
    {/* <div className="absolute inset-0 bg-black/30"></div> */}

    {/* Bottom Curve (part of hero bg) */}
  {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 900 100"
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
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 max-w-3xl">
  Study in 
  <span className=""> USA</span>
</h1>
  </div>
</div>
</section>

      {/* Quick Stats */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in USA */}
      <section className="w-[90%] mx-auto scroll-mt-20 py-12">
  <div className="flex justify-center">
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 w-fit max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 ">Study In USA</h2>
        <div className="rounded-xl p-4 md:p-4 ">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
             The United States of America continues to be one of the most coveted places for 
        higher education in the world and provides an invitation to students across the world.The USA Study is offering numerous world-class universities, sprawling with a wide 
            array of multicultural environments and numerous latest research opportunities. 
            This guide will walk you through everything you need to know about study in USA.
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

      {/* Best Universities Section */}
      <section className="py-5 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
    <div className="text-left mb-12 p-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Best Universities in the USA
      </h2>
      <p className="text-lg text-left text-gray-600">
        It is home to some of the world's most prestigious universities, be it in academic 
        excellence, research opportunities, or campus life.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-8 p-4">
      {topUniversities.map((uni, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start mb-2">
            {/* Fixed size rank circle */}
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <div className="font-bold text-red-600">{uni.rank}</div>
            </div>
            
            {/* University name and location - will wrap if needed */}
            <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 */}
              <h3 className="text-xl font-bold text-gray-900 break-words">{uni.name}</h3>
              <div className="text-gray-600 text-sm mt-1">{uni.location}</div>
            </div>
          </div>
          
          <div className="mb-2 mt-4">
            <div className="text-gray-700 font-medium mb-1">Popular Programs:</div>
            <div className="text-gray-600">{uni.programs}</div>
          </div>
          <div className="text-gray-700">{uni.students} students</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Intakes in USA */}
      <section className="py-5 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 mt-8">
          <div className="text-left mb-12 p-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Intakes in the USA
            </h2>
            <p className="text-lg text-gray-600 text-left">
              The academic calendar in the USA provides three intakes in main:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 -mt-8 p-4">
            {intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="text-4xl mb-2">{intake.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{intake.term}</h3>
                <div className="text-xl text-blue-600 font-bold mb-2">{intake.months}</div>
                <p className="text-gray-600">{intake.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Proficiency Requirements */}
      <section className="py-5 bg-white mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="text-left mb-12 p-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              English Proficiency Requirements
            </h2>
            <p className="text-lg text-gray-600 text-left">
              Common tests accepted for studying in the USA:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-12 p-4 -mt-12">
            {englishRequirements.map((test, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{test.score}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{test.test}</h3>
                <p className="text-gray-600">{test.description}</p>
              </div>
            ))}
          </div>

          {/* Study Without IELTS */}
          <div className="py-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4  mb-1 border border-blue-100">
            <h3 className="mt-8 text-3xl font-bold text-gray-900 mb-3 text-left p-4">
              Study in the USA Without IELTS
            </h3>
            <p className="text-lg text-gray-600 mb-2 -mt-6 text-left p-4">
              If you are really concerned about the eligibility criteria with regard to the 
              English Proficiency Test, then feel tension. A few numbers of institutions have an alternative pathway:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
              {noIELTSoptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{option.title}</h4>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips to Enhance Admission Chances */}
      <section className="py-5 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-left p-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 ">
              Tips to Enhance Chances of Admission
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 -mt-8">
            {admissionTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-left p-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 text-left">
              To be eligible for the Masters Visa Scholarship in the USA, candidates typically must meet the following criteria.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 p-4 -mt-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <div className="text-4xl mb-2">{criteria.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{criteria.title}</h3>
                <p className="text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Conclusion
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Study in the USA - that's going to be life-changing. The education is world-class; 
                the opportunities are endless. Knowing the intakes, targeting some of the top 
                universities, and knowing requirements and alternatives in English proficiency 
                will help you turn your dreams of studying in the USA into reality.
              </p>
              <p>
                The bottom line, whether one is to take the traditional route or one of the 
                alternatives available to a student instead of taking the English proficiency tests, 
                is good planning and presenting a nice application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-6">
            We encourage you to enroll with Masters Visa Overseas Education Consultancy.
          </h2>
          <p className="text-xs text-gray-200 max-w-4xl mx-auto mb-10">
            Embarking on a transformative academic journey in the USA is a dream for many, and our 
            overseas education consultancy is here to turn that dream into reality. With our expert 
            guidance, navigating the intricacies of the Masters Visa process becomes seamless, 
            ensuring a smooth transition for international students.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>navigate('/contact')} className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-3 h-5 w-5" />
              Contact Us Today
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyUSAPage;