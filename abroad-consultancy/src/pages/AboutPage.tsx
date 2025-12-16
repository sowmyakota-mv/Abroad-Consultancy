import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Curved Bottom (Image Only) */}
<section className="relative h-[64vh] md:h-[100vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-bottom"
    style={{
      backgroundImage: "url('/about-bg2.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
    {/* Optional Overlay */}
    {/* <div className="absolute inset-0 bg-black/30"></div> */}

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
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-3xl md:text-6xl font-bold mb-2">
      About Us
    </h1>
    <p className="text-lg md:text-2xl opacity-90">
      Your Trusted Partner in Global Education
    </p>
  </div>
</div>
</section>

      {/* About Us Content Section */}
      {/* <section className="py-16 md:py-24 -mt-1 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Abroad Education Consultants
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At DartGlobe Consultancy, we are dedicated to transforming your dreams of studying abroad into reality. With years of expertise and a proven track record, we provide comprehensive guidance to help you navigate the complex journey of international education.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose DartGlobe Consultation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="overflow-hidden ">
                <img 
                  src="/about1.png" 
                  alt="DartGlobe Consultation" 
                  className="w-full h-[70%] object-cover"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose DartGlobe Consultation?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We stand out as premier education consultants because of our personalized approach, extensive network of partner institutions, and unwavering commitment to student success. Our team of experienced counselors provides tailored guidance that aligns with your academic goals, financial capabilities, and career aspirations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From selecting the right university to settling in a new country, we offer end-to-end support ensuring a seamless transition. Our success is measured by your achievements, and we take pride in being part of your journey to global education excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Benefits & Application Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Section - 40% */}
            <div className="lg:w-2/5">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden ">
                  <img 
                    src="/about3.png" 
                    alt="Benefits & Application Process" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content Section - 60% */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center lg:text-left">
                Comprehensive Support for Your Journey
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Benefits Column */}
                <div>
                  <div className="mb-2 md:mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                      <span className="mr-3">✨</span>
                      Our Benefits
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Free processing for all countries",
                        "Language Proficiency Classes",
                        "Scholarship Assistance",
                        "Financial Aid",
                        "Application Fee Waiver",
                        "Visa Interview Guidance",
                        "Job Placements",
                        "Visiting & Dependents Visa Guide",
                        "Accommodation Assistance",
                        "Part Time Jobs"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 group-hover:bg-blue-500 transition-colors">
                            <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Application Guide Column */}
                <div>
                  <div className="md:mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                      <span className="mr-3">📋</span>
                      Application Guide
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Structured guidance will be given in filing your applications",
                        "Admission will be tracked throughout every step",
                        "Transcript evaluation will be carefully undertaken",
                        "Statement of purpose will be personally altered",
                        "Letter of Recommendation curated with experienced criteria",
                        "Resume structured on a global acceptance level",
                        "Visa processing in accordance with all the rules and policies by law"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 group-hover:bg-green-500 transition-colors">
                            <span className="text-xs font-bold text-green-600 group-hover:text-white">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 group-hover:text-green-600 transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>

     {/* White Cards with Hover Effects */}
<section className="py-8 md:py-16 bg-white">
  <div className="container mx-auto px-6">
    {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      End to End Services
    </h2>
    <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
      Our experts will guide you through each step of the admission process.
    </p> */}
    
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto  transition-all duration-300 rounded-2xl p-4"
    >
      {[
        {
          title: "End to End Services",
          description: "Our experts will guide you through each step of the admission process.",
          icon: "🎯"
        },
        {
          title: "Branches in AP & TS",
          description: "We offer world-class education consultation services with 9 offices in AP and TS",
          icon: "🏢"
        },
        {
          title: "High Visa Success Rate",
          description: "We have the team, vision, energy & skill to deliver high visa success rate",
          icon: "📈"
        },
        {
          title: "24/7 Priority Support",
          description: "Extremity direction existence as dashwoods do up. Always available for our students",
          icon: "🕒"
        }
      ].map((point, index) => (
       <div 
  key={index} 
  className="group border-2 border-gray-100 rounded-2xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-600"
>
  <div className="relative">
    <div className="text-xl text-center mb-2 transform group-hover:scale-110 transition-transform duration-300 group-hover:text-white">
      {point.icon}
    </div>
    <h3 className="text-2xl text-center font-bold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
      {point.title}
    </h3>
    <p className="text-gray-600 text-center group-hover:text-white transition-colors duration-300">
      {point.description}
    </p>
  </div>
</div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
<section className="bg-white py-8 md:py-12">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-xl overflow-hidden min-h-[200px]">
        {/* Image Section - 30% */}
        <div className="lg:w-3/12 w-full">
          <div className="h-full">
            <img 
              src="/about-contact.png" 
              alt="Abroad Education Consultation" 
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content Section - 70% */}
        <div className="lg:w-9/12 w-full p-6 md:p-8 lg:p-12 flex flex-col justify-center min-h-[200px]">
          <h2 className="text-xs md:text-sm font-semibold text-gray-800 mb-2 md:mb-3 text-left">
            NOT SURE WHERE TO START?
          </h2>
          <h2 className="text-lg md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 text-left">
            Want to know more about Abroad Education?
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
            Our expert consultants are here to guide you through every step of your international education journey.
          </p>
          <div className="mt-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUsPage;