import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Globe, Search, 
  MessageSquare, Phone, Mail, GraduationCap,
  MapPin, Award, Briefcase, Users,
  CheckCircle, Star, HelpCircle, BookOpen
} from 'lucide-react';

const FAQPage: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState('usa');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Countries data
  const countries = [
    { id: 'usa', name: 'United States', flag: '🇺🇸', title: 'Masters in USA', color: 'from-blue-500 to-red-500' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', title: 'Education in UK', color: 'from-blue-600 to-red-600' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦', title: 'Education in Canada', color: 'from-red-500 to-white' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪', title: 'Education in Germany', color: 'from-black to-red-500 to-yellow-500' },
    { id: 'newzealand', name: 'New Zealand', flag: '🇳🇿', title: 'Education in New Zealand', color: 'from-blue-800 to-red-800' },
    { id: 'europe', name: 'European Countries', flag: '🇪🇺', title: 'Education in Europe', color: 'from-blue-900 to-yellow-500' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺', title: 'Education In Australia', color: 'from-blue-700 to-red-700' },
  ];

  // FAQ data for each country
  const faqData: Record<string, Array<{id: string, question: string, answer: string}>> = {
    usa: [
      {
        id: 'usa-1',
        question: 'Why study in the US?',
        answer: 'The U.S. provides a diverse academic environment, extensive research opportunities, and exposure to a dynamic culture, fostering holistic development. This helps the students in advancing their level of education with world-class facilities and global networking opportunities.'
      },
      {
        id: 'usa-2',
        question: 'What qualifications do I need for U.S. universities?',
        answer: 'While each university has unique requirements, a strong academic background, standardized test scores (SAT, ACT, GRE, GMAT), impactful extracurricular activities, letters of recommendation, and a compelling statement of purpose are often valued. Minimum GPA requirements typically range from 3.0-3.5 on a 4.0 scale.'
      },
      {
        id: 'usa-3',
        question: 'Are there unique scholarships for Indians in the US?',
        answer: 'Absolutely. The Fulbright Scholarship, Hubert H. Humphrey Fellowship, Inlaks Scholarships, Tata Scholarships, and various university-specific scholarships cater to diverse fields and backgrounds. Many universities also offer merit-based and need-based financial aid specifically for international students.'
      },
      {
        id: 'usa-4',
        question: 'Share insights into the U.S. student visa process?',
        answer: 'The process involves obtaining Form I-20 from your university, paying the SEVIS fee, completing the DS-160 application, scheduling a visa interview at the U.S. embassy, attending the interview, and demonstrating financial stability. The F-1 visa allows you to stay for the duration of your program plus optional practical training (OPT).'
      },
      {
        id: 'usa-5',
        question: 'Tell me more about work opportunities for international students in the US?',
        answer: 'International students can engage in on-campus employment (up to 20 hours/week during term, full-time during breaks). After one year, they may qualify for Curricular Practical Training (CPT) and Optional Practical Training (OPT) for practical work experience. STEM graduates can extend OPT for an additional 24 months.'
      }
    ],
    uk: [
      {
        id: 'uk-1',
        question: 'Why choose the UK for higher education?',
        answer: 'The UK offers world-renowned universities with shorter degree durations (3 years for Bachelor\'s, 1 year for Master\'s), research-intensive programs, strong industry connections, and post-study work opportunities through the Graduate Route visa allowing 2-3 years of work after graduation.'
      },
      {
        id: 'uk-2',
        question: 'What are the English language requirements?',
        answer: 'Most UK universities require IELTS (typically 6.0-7.0), TOEFL, or PTE Academic scores. Some may accept alternative qualifications or offer pre-sessional English courses for those who need to improve their language skills before starting their main program.'
      },
      {
        id: 'uk-3',
        question: 'Are there scholarships available for international students?',
        answer: 'Yes, scholarships include Chevening Scholarships, Commonwealth Scholarships, GREAT Scholarships, university-specific scholarships, and various funding options from external organizations and government bodies.'
      }
    ],
    canada: [
      {
        id: 'ca-1',
        question: 'Why study in Canada?',
        answer: 'Canada offers high-quality education, affordable tuition fees, multicultural environment, post-graduation work permit (PGWP) allowing up to 3 years of work experience, and pathways to permanent residency through programs like Express Entry.'
      },
      {
        id: 'ca-2',
        question: 'What is the cost of studying in Canada?',
        answer: 'Tuition fees range from CAD 15,000-35,000 per year for undergraduate programs and CAD 10,000-30,000 for graduate programs. Living expenses are approximately CAD 10,000-15,000 per year depending on the city and lifestyle.'
      }
    ],
    germany: [
      {
        id: 'de-1',
        question: 'Is education free in Germany?',
        answer: 'Most public universities in Germany charge minimal administrative fees (€150-€350 per semester), but tuition is generally free for both domestic and international students at undergraduate and consecutive Master\'s levels at public institutions.'
      },
      {
        id: 'de-2',
        question: 'Do I need to know German to study in Germany?',
        answer: 'While many Master\'s programs are offered in English, basic German knowledge is beneficial for daily life. Some programs may require German proficiency (TestDaF or DSH) while others require only English proficiency (IELTS/TOEFL).'
      }
    ],
    newzealand: [
      {
        id: 'nz-1',
        question: 'Why choose New Zealand for education?',
        answer: 'New Zealand offers globally recognized qualifications, a safe and peaceful environment, post-study work rights, opportunities for permanent residency, and universities consistently ranked among the world\'s best.'
      },
      {
        id: 'nz-2',
        question: 'What are the work rights for students?',
        answer: 'International students can work up to 20 hours per week during semester and full-time during scheduled breaks. After graduation, they can apply for a post-study work visa for 1-3 years depending on their qualification level.'
      }
    ],
    europe: [
      {
        id: 'eu-1',
        question: 'Which European countries offer English-taught programs?',
        answer: 'Many European countries including Netherlands, Sweden, Denmark, Finland, Norway, France, Spain, Italy, and Switzerland offer a wide range of English-taught programs, particularly at Master\'s and PhD levels.'
      },
      {
        id: 'eu-2',
        question: 'What is the Bologna Process?',
        answer: 'The Bologna Process ensures comparability in the standards and quality of higher education qualifications across 48 European countries, making it easier for students to move between countries and have their qualifications recognized.'
      }
    ],
    australia: [
      {
        id: 'au-1',
        question: 'Why study in Australia?',
        answer: 'Australia offers world-class education, a welcoming multicultural society, post-study work opportunities, a high standard of living, and universities consistently ranked among the top 100 globally.'
      },
      {
        id: 'au-2',
        question: 'What is the Temporary Graduate visa (subclass 485)?',
        answer: 'The Temporary Graduate visa allows international students who have recently graduated from an Australian institution to live, study, and work in Australia temporarily. The duration varies from 18 months to 4 years depending on the qualification.'
      }
    ]
  };

  // Additional questions for each country
  const additionalQuestions = [
    {
      id: 'general-1',
      question: 'When should I start my application process?',
      answer: 'Start 12-18 months before your intended start date. This allows time for research, test preparation, document gathering, and meeting application deadlines which are typically 6-12 months before the program starts.'
    },
    {
      id: 'general-2',
      question: 'What documents are typically required?',
      answer: 'Common requirements include academic transcripts, standardized test scores, English proficiency test results, letters of recommendation, statement of purpose, resume/CV, passport copy, and financial documentation.'
    },
    {
      id: 'general-3',
      question: 'How do I choose the right university?',
      answer: 'Consider factors like program ranking, faculty expertise, research opportunities, location, cost, scholarship availability, alumni network, career services, and cultural fit. Our counselors can help you create a balanced list of reach, match, and safety schools.'
    }
  ];

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev =>
      prev.includes(id)
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    );
  };

  const currentFAQs = [...(faqData[activeCountry] || []), ...additionalQuestions];
  const filteredFAQs = searchTerm
    ? currentFAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : currentFAQs;

  return (
    <div id='faq' className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">❓</div>
          <div className="absolute bottom-10 right-10 text-6xl">💡</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Got questions? Find answers here about studying abroad, application processes, 
              visa requirements, scholarships, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country.id)}
                className={`flex flex-col items-center justify-center w-40 p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeCountry === country.id
                    ? `border-blue-500 bg-gradient-to-br ${country.color} text-white shadow-lg scale-105`
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="font-bold text-center">{country.title}</div>
                <div className="text-sm opacity-90 mt-1">{country.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Active Country Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4">
            <div className="text-3xl">
              {countries.find(c => c.id === activeCountry)?.flag}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {countries.find(c => c.id === activeCountry)?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to commonly asked questions about studying in {countries.find(c => c.id === activeCountry)?.name}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isExpanded = expandedQuestions.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Globe className="h-4 w-4 mr-2" />
                          {countries.find(c => c.id === activeCountry)?.name}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="h-6 w-6 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-8 pb-8 pt-2 border-t border-gray-100">
                      <div className="flex">
                        <div className="w-10 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-4">{faq.answer}</p>
                            <div className="flex flex-wrap gap-3 mt-6">
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                Study Abroad
                              </span>
                              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                {countries.find(c => c.id === activeCountry)?.name}
                              </span>
                              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                                International Education
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No questions found</h3>
              <p className="text-gray-600 mb-8">
                Try searching with different keywords or browse questions by selecting a country above.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Questions Answered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NOT SURE WHERE TO START?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Want to know more about Abroad Education? Our expert counselors are here to help 
              you navigate your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center">
                <Phone className="mr-3 h-6 w-6" />
                Get Free Counseling
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all flex items-center justify-center">
                <Mail className="mr-3 h-6 w-6" />
                Ask Your Question
              </button>
            </div>
            <p className="mt-8 text-gray-500 text-sm">
              Connect with our education experts within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Study Abroad FAQ</h3>
              <p className="text-gray-400">
                Your comprehensive guide to studying abroad. Find answers to all your questions 
                about international education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Popular Countries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">USA</a></li>
                <li><a href="#" className="hover:text-white">UK</a></li>
                <li><a href="#" className="hover:text-white">Canada</a></li>
                <li><a href="#" className="hover:text-white">Australia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Visa Information</a></li>
                <li><a href="#" className="hover:text-white">Scholarships</a></li>
                <li><a href="#" className="hover:text-white">Application Process</a></li>
                <li><a href="#" className="hover:text-white">Cost Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Need Help?</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (800) STUDY-ABROAD
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  faq@mastersvisa.com
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Masters Visa Study Abroad FAQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;