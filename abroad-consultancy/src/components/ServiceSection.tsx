import React from "react";
import { 
   Users, Award, BookOpen, Briefcase, Home, DollarSign, 
  GraduationCap, Globe, Target, HeartHandshake, ClipboardList 
} from "lucide-react";

const ServicesSection: React.FC = () => {
  // Stats highlighting free services (8 stats only + PNG image icons)
  const stats = [
    {
      icon: "/services-icon.png",
      count: "12+",
      title: "Services Support",
      description: "Core assistance for every student"
    },
    // {
    //   icon: "/students-icon.png",
    //   count: "10,000+",
    //   title: "Students Guided",
    //   description: "Trusted by students across India"
    // },
    // {
    //   icon: "/country-icon.png",
    //   count: "25+",
    //   title: "Countries Supported",
    //   description: "Top destinations for study abroad"
    // },
    {
  icon: "/application-icon.png",
  count: "25,000+",
  title: "Applications Processed",
  description: "Successfully submitted student applications globally."
},
{
  icon: "/visa-interview-icon.png",
  count: "100%",
  title: "Visa Interview Success ",
  description: "Expert coaching to help students clear visa interviews confidently."
},
    {
      icon: "/admission-icon.png",
      count: "100%",
      title: "Admission & Visa Success",
      description: "High success rate with expert guidance"
    },
    {
      icon: "/loan-support-icon.png",
      count: "100%",
      title: "Loan Approvals Support",
      description: "Through partnered banks & NBFCs"
    },
    {
      icon: "/exam-icon.png",
      count: "10,000+",
      title: "IELTS Training + Applications",
      description: "Test prep & university submissions"
    },
    {
      icon: "/accomodation-icon.png",
      count: "3000+",
      title: "Accommodation Support",
      description: "Hostels, PGs & apartments"
    },
    {
      icon: "/scholarship-icon.png",
      count: "5000+",
      title: "Scholarships Guided",
      description: "University & government grants"
    }
  ];

 const services = [
  {
    image: "/student-profile.png",
    title: "Comprehensive Student Profile Analysis",
    description: "Quick review of academics and goals to create your study plan.",
    icon: <Target className="h-8 w-8 text-blue-500" />,
    imagePosition: "object-center"
  },
  {
    image: "/career-img2.png",
    title: "Professional Career Guidance",
    description: "Guidance to choose the right program and long-term career path.",
    icon: <Target className="h-8 w-8 text-teal-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/exam-img-3.png",
    title: "IELTS/TOEFL/PTE Preparation",
    description: "Focused training with mock tests and materials for exam success.",
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/counselling-img.png",
    title: "One-on-One Expert Counselling",
    description: "Personal sessions to guide your entire study abroad process.",
    icon: <HeartHandshake className="h-8 w-8 text-rose-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/university-img.png",
    title: "University Application Support",
    description: "Support for SOP, LOR, documents, and complete applications.",
    icon: <ClipboardList className="h-8 w-8 text-pink-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/scholar-img1.png",
    title: "Scholarship & Financial Aid Assistance",
    description: "Help in identifying scholarships and preparing strong applications.",
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/bank-img.png",
    title: "Education Loan Processing Support",
    description: "End-to-end support for bank loans and financial approval steps.",
    icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
    imagePosition: "object-right-top"
  },
  {
    image: "/mock-img2.png",
    title: "Mock Visa Interviews Support",
    description: "Practice interviews with tips to confidently clear visa rounds.",
    icon: <Users className="h-10 w-10 text-purple-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/onboarding-img1.png",
    title: "Pre-Departure & Onboarding Support",
    description: "Help with flights, arrival guidance, and complete travel support.",
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    imagePosition: "object-top"
  },
  {
    image: "/accommodation-img.png",
    title: "Student Accommodation Assistance",
    description: "Guidance to find safe and affordable stays near your campus.",
    icon: <Home className="h-8 w-8 text-orange-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/parttime-img.png",
    title: "Abroad Part-Time Job Support",
    description: "Help with resumes, job search, and interview preparation abroad.",
    icon: <Briefcase className="h-8 w-8 text-indigo-500" />,
    imagePosition: "object-top"
  },
  {
    image: "/internship-img1.png",
    title: "Post-Masters Internship Placement",
    description: "Connections and guidance to secure internships after graduation.",
    icon: <GraduationCap className="h-8 w-8 text-red-500" />,
    imagePosition: "object-top"
  }
];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Full Width Stats Section */}
      <div className="w-full ">
        {/* Desktop: 8 columns full width */}
        <div className="hidden md:grid md:grid-cols-8">
          {stats.map((stat, index) => (
            <div key={index} className="last:border-r-0">
              {/* Grid with 3 rows */}
              <div className="grid grid-rows-3 h-[100px]">
                {/* Row 1: Icon - Top aligned */}
                <div className="flex items-center justify-center pt-3">
                  <div className="h-13 w-13 rounded-full border-2 border-black flex items-center justify-center bg-white">
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      className="h-8 w-8 md:h-9 md:w-9 object-contain"
                    />
                  </div>
                </div>
                
                {/* Row 2: Count - Middle aligned */}
                <div className="flex items-center justify-center mt-4">
                  <div className="text-lg font-bold text-blue-700">
                    {stat.count}
                  </div>
                </div>
                
                {/* Row 3: Title - Fixed 2 lines with consistent spacing */}
                <div className="flex items-start justify-center pb-2">
                  <div className="text-sm font-medium text-black text-center px-6 leading-tight h-[40px] flex items-center justify-center">
                    <span className="block line-clamp-2">
                      {stat.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2 tables */}
        <div className="md:hidden">
          {/* Table 1 */}
          <div className="grid grid-cols-4">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-28">
                  {/* Row 1: Icon */}
                  <div className="flex items-start justify-center pt-3">
                    <div className="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center bg-white">
                      <img 
                        src={stat.icon} 
                        alt={stat.title}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center mt-3">
                    <div className="text-base font-bold text-blue-700">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title */}
                  <div className="flex items justify-center pb-2">
                    <div className="text-xs font-medium text-black text-center px-2">
                      <span className="block line-clamp-2">
                        {stat.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table 2 */}
          <div className="grid grid-cols-4">
            {stats.slice(4).map((stat, index) => (
              <div key={index + 4} className="">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-28">
                  {/* Row 1: Icon */}
                  <div className="flex items-start justify-center pt-3">
                    <div className="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center bg-white">
                      <img 
                        src={stat.icon} 
                        alt={stat.title}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center mt-3">
                    <div className="text-base font-bold text-blue-700">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title */}
                  <div className="flex items justify-center pb-2">
                    <div className="text-xs font-medium text-black text-center px-2">
                      <span className="block line-clamp-2">
                        {stat.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the Services Section */}
      <div className="w-full py-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Complete Free Study Abroad Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end free support from application to arrival.
          </p>
        </div>

        {/* Services Grid - Using 80% width with 10% margin on both sides */}
        <div className="w-[70%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-700 hover:border-purple-700 group transform hover:scale-105"
              >
                <div className="w-full h-36  relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${service.imagePosition || 'object-center'}`}
                  />
                </div>

                <div className="p-2">
                  <h3 className="text-med font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-xs mb-2 leading-relaxed ">{service.description}</p>
                  <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-3xl group-hover:bg-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;