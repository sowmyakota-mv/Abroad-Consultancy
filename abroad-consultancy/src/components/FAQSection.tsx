import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    "doc-1": true,
    "adm-1": false,
    "fin-1": false
  });

  const faqData = [
    {
      id: "documents",
      title: "Documents & Requirements",
      questions: [
        {
          id: "doc-1",
          question: "What documents do I need for studying abroad?",
          answer: "Typically, you'll need: academic transcripts, passport, standardized test scores (IELTS/TOEFL/GRE/GMAT), letters of recommendation, statement of purpose, resume/CV, proof of funds, and passport-sized photographs. Specific requirements vary by country and university."
        },
        {
          id: "doc-2",
          question: "How long does it take to get a student visa?",
          answer: "Processing times vary by country: USA (3-8 weeks), UK (3-6 weeks), Canada (4-12 weeks), Australia (4-8 weeks), Germany (4-10 weeks). We recommend applying at least 3 months before your course start date."
        }
      ]
    },
    {
      id: "admission",
      title: "Admission Process",
      questions: [
        {
          id: "adm-1",
          question: "When should I start my application process?",
          answer: "Start 12-18 months before your intended intake. This gives you enough time for test preparation, university research, document collection, and application submission before deadlines."
        },
        {
          id: "adm-2",
          question: "What are the intakes available?",
          answer: "Main intakes: Fall (August-September), Spring (January-February). Some universities also offer Summer (May-June) intake. Deadlines are usually 6-8 months before the intake begins."
        },
        {
          id: "adm-3",
          question: "How do I choose the right university?",
          answer: "Consider factors like: course curriculum, university ranking, location, tuition fees, scholarship opportunities, post-study work options, and alumni network. Our counselors provide personalized university shortlisting based on your profile."
        }
      ]
    },
    {
      id: "finance",
      title: "Finances & Scholarships",
      questions: [
        {
          id: "fin-1",
          question: "How much does it cost to study abroad?",
          answer: "Annual costs vary: USA ($20,000-$50,000), UK (£15,000-£35,000), Canada (CAD$15,000-CAD$35,000), Australia (AUD$20,000-AUD$45,000), Germany (€0-€20,000). This includes tuition + living expenses."
        },
        {
          id: "fin-2",
          question: "What scholarships are available for international students?",
          answer: "Merit-based scholarships, need-based grants, country-specific scholarships (like DAAD for Germany, Commonwealth for UK), university-specific awards, and external funding. We help identify and apply for suitable scholarships."
        }
      ]
    }
  ];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section className="w-full py-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title & Description */}
          <div>
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-1 bg-orange-200"></div>
              <span className="mx-4 text-orange-600 font-semibold">GET ANSWERS</span>
              <div className="w-12 h-1 bg-orange-200"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-orange-600 block">Questions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions about studying abroad. 
              From admission processes to visa requirements, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-orange-50 rounded-lg px-4 py-3">
                <Phone className="h-5 w-5 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="font-semibold text-gray-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center bg-orange-50 rounded-lg px-4 py-3">
                <Mail className="h-5 w-5 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="font-semibold text-gray-900">info@studyabroad.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-72 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">❓</div>
                  <h3 className="text-2xl font-bold mb-2">Got Questions?</h3>
                  <p className="opacity-90">We have answers for everything you need to know</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-50 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - 30% - Titles */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Important Categories
                  </h2>
                  <div className="space-y-1">
                    {faqData.map((category) => (
                      <div key={category.id} className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 px-4">
                          {category.title}
                        </h3>
                        <div className="space-y-0">
                          {category.questions.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => toggleQuestion(item.id)}
                              className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors duration-200 ${
                                openQuestions[item.id] 
                                  ? 'text-orange-700 font-semibold' 
                                  : 'text-gray-800 hover:text-gray-900'
                              }`}
                            >
                              <span className="text-sm pr-4">{item.question}</span>
                              {openQuestions[item.id] ? (
                                <ChevronUp className="h-4 w-4 text-orange-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - 50% - Questions & Answers */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8">
                  {/* Questions List */}
                  <div className="space-y-0">
                    {faqData.map((category) => (
                      <div key={category.id} className="mb-8 last:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                          {category.title}
                        </h3>
                        <div className="space-y-0">
                          {category.questions.map((item) => (
                            <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                              <button
                                className="w-full text-left py-5 flex items-center justify-between hover:text-gray-900 transition-colors duration-200"
                                onClick={() => toggleQuestion(item.id)}
                              >
                                <h4 className="font-semibold text-gray-900 pr-4 text-base">
                                  {item.question}
                                </h4>
                                {openQuestions[item.id] ? (
                                  <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                              </button>
                              
                              {openQuestions[item.id] && (
                                <div className="pb-5 animate-fadeIn">
                                  <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.answer}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View More Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">
                        Didn't find what you were looking for?
                      </p>
                      <a 
                        href="/faq" 
                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                      >
                        View all FAQ questions
                        <ChevronDown className="h-4 w-4 ml-2 rotate-[-90deg]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom animation
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default FAQSection;