import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="w-full py-12 relative z-20 -mb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-[80%] mx-auto">
          <div className="rounded-3xl overflow-hidden bg-[rgb(217,214,255)] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

              {/* Left */}
              <div className="lg:col-span-2 p-12 flex items-center">
                <div className="w-full">

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Start Your 
                    <span className="text-purple-700 block">Study Abroad Journey?</span>
                  </h2>

                  <p className="text-gray-700 mb-4 leading-relaxed text-med">
                    Get personalized guidance from our experienced counselors.
                    We'll help you choose the right university, prepare documents,
                    and navigate the entire admission process successfully.
                  </p>

                  <button className="group relative px-8 py-4 bg-purple-700 text-white rounded-4xl font-bold text-lg hover:bg-purple-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 mr-3" />
                    Talk to a Counsellor
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-purple-900/30 blur-md rounded-full"></div>
                  </button>

                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-1 relative -ml-8">
                <div className="h-full min-h-[200px] flex items-center justify-center p-2">
                  <div className="relative z-10 text-center">
                    <div className="h-84 w-84 mx-auto flex items-center justify-center">
                      <img
                        src="/contact-hero1.png"
                        alt="Study Abroad Counsellor"
                        className="w-full h-full object-cover mt-20"
                      />
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

export default CallToActionSection;
