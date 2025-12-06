import React from "react";

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "100% Free Services",
      description: "Complete guidance without any hidden charges or consultancy fees."
    },
    {
      number: "02",
      title: "End-to-End Support",
      description: "From profile assessment to post-arrival assistance in destination."
    },
    {
      number: "03",
      title: "High Success Rate",
      description: "Proven track record with 100% university admission success."
    },
    {
      number: "04",
      title: "10,000+ Students Guided",
      description: "Trusted by thousands of students across India with proven results."
    },
    {
      number: "05",
      title: "Financial Assistance",
      description: "Expert help with scholarships, education loans, and financial aid."
    },
    {
      number: "06",
      title: "25+ Countries Expertise",
      description: "Specialized guidance for top study destinations worldwide."
    },
    {
      number: "07",
      title: "Visa Success Support",
      description: "Comprehensive visa assistance with mock interviews and document filing."
    },
    {
      number: "08",
      title: "Accommodation & Job Support",
      description: "Help with housing, part-time jobs, and post-study internships."
    },
    {
      number: "09",
      title: "Personalized Counselling",
      description: "One-on-one expert sessions for customized study abroad plans."
    }
  ];

  return (
    <section className="w-full py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center ">
            <div className="w-20 h-1 bg-blue-200"></div>
            <span className="mx-4 text-blue-600 font-semibold">WHY CHOOSE US</span>
            <div className="w-20 h-1 bg-blue-200"></div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-2  hover:shadow-md hover:rounded-xl transition-all duration-300">
              
              {/* Number, Horizontal Line (w-12), and Title with gap-2 */}
              <div className="flex items-start gap-2 mb-4">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-[#FF6603] font-bold text-xl">
                    {reason.number}
                  </span>
                </div>
                
                {/* Horizontal Line - Fixed width w-12 */}
                <div className="flex-shrink-0 mt-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-orange-200 rounded-full"></div>
                </div>
                
                {/* Title - Aligned with line with gap-2 */}
                <div className="flex-shrink-0">
                  <h3 className="text-lg font-bold text-gray-900 ">
                    {reason.title}
                  </h3>
                </div>
              </div>

              {/* Paragraph - Starts from same position as title */}
              <div className="ml-[calc(3rem+2.5rem)]"> {/* ml-[number width + line width + gaps] */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;