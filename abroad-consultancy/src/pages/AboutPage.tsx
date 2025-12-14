import React from "react";
import { 
  Target, Globe, Zap, Shield, Heart, 
  ArrowRight, CheckCircle, Users, 
  Calendar, Award, Trophy, Star,
  Map, Compass, Lightbulb, BookOpen,
  GraduationCap, FileText, Home,
  DollarSign, Headphones, Clock,
  ShieldCheck, TrendingUp, UserCheck,
  MessageSquare, Phone, Mail, MapPin,
  Linkedin, Twitter, Facebook, Instagram
} from "lucide-react";

const AboutPage: React.FC = () => {
  // Application Process Steps
  const applicationSteps = [
    { 
      step: 1, 
      title: "Initial Consultation", 
      description: "Free 30-minute session to understand your needs and goals",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      step: 2, 
      title: "Document Collection", 
      description: "Guidance on gathering all required documents efficiently",
      icon: <FileText className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      step: 3, 
      title: "Application Preparation", 
      description: "Expert filling and review of all application forms",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    { 
      step: 4, 
      title: "Submission & Follow-up", 
      description: "Timely submission and continuous status tracking",
      icon: <ShieldCheck className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    },
    { 
      step: 5, 
      title: "Post-Approval Support", 
      description: "Assistance with accommodation, travel, and settlement",
      icon: <Home className="h-8 w-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Benefits
  const benefits = [
    {
      category: "Expert Guidance",
      items: [
        { title: "Industry Veterans", description: "15+ years average experience", icon: <UserCheck className="h-6 w-6" /> },
        { title: "Personal Consultant", description: "Dedicated expert for your journey", icon: <Users className="h-6 w-6" /> },
        { title: "Latest Updates", description: "Real-time policy change alerts", icon: <TrendingUp className="h-6 w-6" /> }
      ]
    },
    {
      category: "Comprehensive Support",
      items: [
        { title: "End-to-End Service", description: "From application to settlement", icon: <Compass className="h-6 w-6" /> },
        { title: "Document Management", description: "Secure handling of all paperwork", icon: <Shield className="h-6 w-6" /> },
        { title: "24/7 Assistance", description: "Round-the-clock support available", icon: <Headphones className="h-6 w-6" /> }
      ]
    },
    {
      category: "Value & Success",
      items: [
        { title: "High Success Rate", description: "98% application approval rate", icon: <Trophy className="h-6 w-6" /> },
        { title: "Transparent Pricing", description: "No hidden fees, clear costs", icon: <DollarSign className="h-6 w-6" /> },
        { title: "Fast Processing", description: "Average 30% faster processing", icon: <Clock className="h-6 w-6" /> }
      ]
    }
  ];

  // Services
  const services = [
    { title: "Student Visa Processing", count: "5,000+", icon: <GraduationCap className="h-8 w-8" />, color: "bg-blue-100 text-blue-600" },
    { title: "Work Permit Assistance", count: "3,200+", icon: <Users className="h-8 w-8" />, color: "bg-purple-100 text-purple-600" },
    { title: "Document Authentication", count: "12,500+", icon: <FileText className="h-8 w-8" />, color: "bg-green-100 text-green-600" },
    { title: "Accommodation Support", count: "2,800+", icon: <Home className="h-8 w-8" />, color: "bg-orange-100 text-orange-600" }
  ];

  // Timeline/Milestones
  const milestones = [
    { year: "2010", title: "Our Humble Beginning", description: "Started with visa assistance for 5 students" },
    { year: "2014", title: "Official Recognition", description: "Registered as certified immigration consultants" },
    { year: "2018", title: "Digital Transformation", description: "Launched our online application portal" },
    { year: "2020", title: "Global Expansion", description: "Extended services to 30+ countries" },
    { year: "2023", title: "10,000 Milestone", description: "Helped 10,000+ clients achieve their dreams" },
    { year: "2024", title: "Future Vision", description: "AI-powered application assistance launch" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="w-16 h-1 bg-white opacity-50"></div>
              <span className="mx-6 text-lg font-semibold uppercase tracking-wider">About Global Pathway</span>
              <div className="w-16 h-1 bg-white opacity-50"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Your Bridge to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Global Opportunities
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto mb-12 font-light">
              Transforming dreams into reality through expert guidance and personalized support since 2010.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Start Your Journey <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-3 h-5 w-5" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-6">
              <Compass className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-blue-700 font-bold">OUR JOURNEY</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              From Humble Beginnings to Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story is one of passion, perseverance, and commitment to helping individuals achieve their global aspirations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 text-right' : 'lg:pl-16'}`}>
                    <div className={`bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}>
                      <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${
                        index === 0 ? 'bg-blue-100 text-blue-700' :
                        index === 1 ? 'bg-purple-100 text-purple-700' :
                        index === 2 ? 'bg-green-100 text-green-700' :
                        index === 3 ? 'bg-orange-100 text-orange-700' :
                        index === 4 ? 'bg-pink-100 text-pink-700' :
                        'bg-indigo-100 text-indigo-700'
                      }`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative lg:w-1/2 flex justify-center my-8 lg:my-0">
                    <div className={`w-12 h-12 rounded-full border-4 border-white shadow-2xl flex items-center justify-center z-10 ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-purple-500' :
                      index === 2 ? 'bg-green-500' :
                      index === 3 ? 'bg-orange-500' :
                      index === 4 ? 'bg-pink-500' :
                      'bg-indigo-500'
                    }`}>
                      <div className="text-white font-bold">{index + 1}</div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Target className="h-5 w-5 text-blue-600 mr-3" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                MISSION & VISION
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-8">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-8">
                  To democratize access to global education and opportunities by providing transparent, 
                  efficient, and personalized immigration and relocation services that empower individuals 
                  to pursue their dreams without barriers.
                </p>
                <div className="space-y-4">
                  {["Transparency in all processes", "Personalized approach for every client", 
                    "Continuous innovation in service delivery", "Uncompromising ethical standards"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-8">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-8">
                  To become the world's most trusted partner in global mobility, creating a borderless 
                  world where talent flows freely and individuals can access opportunities anywhere 
                  based on their potential, not their passport.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">Our 2030 Goals</h4>
                  <div className="space-y-3">
                    {["Assist 100,000+ individuals globally", "Expand to 100+ countries", 
                      "Achieve 99.5% client satisfaction", "Launch AI-powered application predictor"].map((goal, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
              <Star className="h-5 w-5 text-green-600 mr-3" />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Unmatched Benefits for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive advantages that ensure your journey is smooth, secure, and successful.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  {category.category}
                </h3>
                <div className="space-y-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          catIndex === 0 ? 'bg-blue-100' :
                          catIndex === 1 ? 'bg-purple-100' :
                          'bg-green-100'
                        }`}>
                          <div className={
                            catIndex === 0 ? 'text-blue-600' :
                            catIndex === 1 ? 'text-purple-600' :
                            'text-green-600'
                          }>
                            {item.icon}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${service.color} rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-4xl font-bold mb-3">{service.count}</div>
                  <div className="font-medium text-blue-100">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Guide Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
              <Map className="h-5 w-5 text-orange-600 mr-3" />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
                APPLICATION GUIDE
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Step-by-Step Success Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven process for a smooth and successful application journey
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Number Background */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-2xl flex items-center justify-center z-20`}>
                    <div className="text-white text-2xl font-bold">{step.step}</div>
                  </div>
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 pt-16 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} bg-opacity-10 rounded-xl mb-6`}>
                      <div className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Timeline dot for mobile */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full lg:hidden z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Take the first step towards your global aspirations with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Start Free Consultation <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-3 h-5 w-5" />
                Call Now: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-3xl font-bold mb-6">Global Pathway</div>
              <p className="text-gray-400 mb-8">
                Your trusted partner for global education and immigration solutions since 2010.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                  <a key={index} href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-xl font-bold mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-xl font-bold mb-6">Services</div>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Visas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Work Permits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accommodation</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-xl font-bold mb-6">Contact Us</div>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  123 Global Street, Suite 500
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-yellow-400" />
                  info@globalpathway.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Global Pathway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;