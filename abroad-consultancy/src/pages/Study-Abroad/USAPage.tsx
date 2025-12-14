import React, { useState } from 'react';
import { 
  GraduationCap, Shield, DollarSign, Briefcase, 
  BookOpen, Globe, Home, Users, 
  Award, Mail, Phone, MapPin,
  CheckCircle, Calendar, FileText, MessageSquare,
  ArrowRight, Download, ChevronDown,
  University, Target, TrendingUp, Star
} from 'lucide-react';

const StudyUSAPage: React.FC = () => {
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
      
     {/* Hero Banner */} 
<section className="relative h-screen overflow-hidden bg-[url('/usa-bg1.jpg')] bg-cover bg-center bg-no-repeat">
  
  {/* Bottom Curve (part of hero bg) */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-[100px]"
    >
      <path
        d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
        className="fill-white"
      ></path>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center">
    <div className="text-center">
      <h1 className="text-5xl md:text-5xl font-bold text-white mb-28">
        Study in United States
      </h1>
    </div>
  </div>
</section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Content Wrapper – 80% Width */}
    <div className="w-full lg:w-[80%] ml-auto flex flex-col lg:flex-row items-start gap-8">

      {/* Left Image – 30% */}
      <div className="w-full lg:w-[30%]">
        <img
          src="/usa-why-study.jpg"
          alt="Why Study in USA"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Content – 70% */}
      <div className="w-full lg:w-[80%]">
        <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Why study in USA
      </h2>
      <p className="text-sm text-gray-600 max-w-4xl mx-auto">
        The United States of America continues to be one of the most coveted places for 
        higher education in the world and provides an invitation to students across the world.The USA Study is offering numerous world-class universities, sprawling with a wide 
            array of multicultural environments and numerous latest research opportunities. 
            This guide will walk you through everything you need to know about study in USA.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Best Universities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Best Universities in the USA
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              It is home to some of the world's most prestigious universities, be it in academic 
              excellence, research opportunities, or campus life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {topUniversities.map((uni, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="font-bold text-red-600">{uni.rank}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                    <div className="text-gray-600 text-sm">{uni.location}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-700 font-medium mb-2">Popular Programs:</div>
                  <div className="text-gray-600">{uni.programs}</div>
                </div>
                <div className="text-gray-700">{uni.students} students</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes in USA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intakes in the USA
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The academic calendar in the USA provides three intakes in main:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {intakes.map((intake, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">{intake.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{intake.term}</h3>
                <div className="text-xl text-blue-600 font-bold mb-4">{intake.months}</div>
                <p className="text-gray-600">{intake.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Proficiency Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              English Proficiency Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Common tests accepted for studying in the USA:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {englishRequirements.map((test, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-4">{test.score}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{test.test}</h3>
                <p className="text-gray-600">{test.description}</p>
              </div>
            ))}
          </div>

          {/* Study Without IELTS */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Study in the USA Without IELTS
            </h3>
            <p className="text-lg text-gray-600 mb-8 text-center">
              If you are really concerned about the eligibility criteria with regard to the 
              English Proficiency Test, then feel tension. A few numbers of institutions have an alternative pathway:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
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
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tips to Enhance Chances of Admission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
              To be eligible for the Masters Visa Scholarship in the USA, candidates typically must meet the following criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-4xl mb-4">{criteria.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{criteria.title}</h3>
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
                Study in the USA—that's going to be life-changing. The education is world-class; 
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
          <h2 className="text-4xl font-bold mb-6">
            We encourage you to enroll with Masters Visa Overseas Education Consultancy.
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-10">
            Embarking on a transformative academic journey in the USA is a dream for many, and our 
            overseas education consultancy is here to turn that dream into reality. With our expert 
            guidance, navigating the intricacies of the Masters Visa process becomes seamless, 
            ensuring a smooth transition for international students.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-3 h-5 w-5" />
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              <Download className="mr-3 h-5 w-5" />
              Download USA Guide
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive services cover everything from university selection and application 
              assistance to visa documentation support. Benefit from personalized advice on course 
              selection, financial planning, and cultural acclimatization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600">info@mastersvisa.com</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600">456 Education Avenue, New York, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6">Masters Visa</div>
              <p className="text-gray-400">
                Your premier overseas education consultancy for studying in USA.
              </p>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-4">Study Destinations</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Study in USA</a></li>
                <li><a href="#" className="hover:text-white">Study in UK</a></li>
                <li><a href="#" className="hover:text-white">Study in Canada</a></li>
                <li><a href="#" className="hover:text-white">Study in Europe</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-4">Services</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">University Selection</a></li>
                <li><a href="#" className="hover:text-white">Visa Assistance</a></li>
                <li><a href="#" className="hover:text-white">Scholarship Guidance</a></li>
                <li><a href="#" className="hover:text-white">Test Preparation</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Masters Visa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyUSAPage;