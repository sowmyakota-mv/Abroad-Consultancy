import React from 'react';
import { 
  Target, Briefcase, TrendingUp, Users,
  BookOpen, Globe, Award, CheckCircle,
  Clock, MapPin, Star, Heart,
  ChevronRight, Search, Download, Phone,
  Mail, MessageSquare, Shield, Zap,
  BarChart, GraduationCap, Building, Coffee,
  Calendar, Flag, Rocket, Lightbulb,
  Brain, Code, Microscope, Palette,
  DollarSign, Network, UserCheck, ThumbsUp
} from 'lucide-react';

const EducationLoanProcessing: React.FC = () => {
  // Career Paths
  const careerPaths = [
    {
      title: 'Technology & Engineering',
      description: 'Software development, data science, cybersecurity, AI/ML, and engineering fields',
      icon: <Code className="h-8 w-8" />,
      demand: 'High',
      avgSalary: '$85,000 - $150,000',
      growth: '22% (2020-2030)',
      countries: 'USA, Canada, UK, Germany, Australia'
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'Medical research, pharmaceuticals, biotechnology, and healthcare management',
      icon: <Microscope className="h-8 w-8" />,
      demand: 'Very High',
      avgSalary: '$75,000 - $140,000',
      growth: '16% (2020-2030)',
      countries: 'USA, UK, Germany, Switzerland, Singapore'
    },
    {
      title: 'Business & Finance',
      description: 'Investment banking, financial analysis, consulting, and business management',
      icon: <DollarSign className="h-8 w-8" />,
      demand: 'High',
      avgSalary: '$70,000 - $130,000',
      growth: '8% (2020-2030)',
      countries: 'USA, UK, UAE, Singapore, Hong Kong'
    },
    {
      title: 'Creative & Design',
      description: 'UX/UI design, digital marketing, content creation, and creative direction',
      icon: <Palette className="h-8 w-8" />,
      demand: 'Moderate-High',
      avgSalary: '$55,000 - $110,000',
      growth: '13% (2020-2030)',
      countries: 'USA, Canada, UK, Netherlands, Australia'
    }
  ];

  // Career Development Stages
  const careerStages = [
    {
      stage: 'Stage 1',
      title: 'Self-Assessment & Discovery',
      description: 'Identify your strengths, interests, values, and personality traits to determine suitable career paths',
      icon: <Target className="h-10 w-10" />,
      activities: [
        'Personality assessments (MBTI, Holland Code)',
        'Skills inventory analysis',
        'Value clarification exercises',
        'Interest profiling'
      ]
    },
    {
      stage: 'Stage 2',
      title: 'Career Exploration',
      description: 'Research various industries, roles, and job markets to understand opportunities and requirements',
      icon: <Search className="h-10 w-10" />,
      activities: [
        'Industry research and analysis',
        'Job market trends study',
        'Networking with professionals',
        'Informational interviews'
      ]
    },
    {
      stage: 'Stage 3',
      title: 'Goal Setting & Planning',
      description: 'Establish clear career objectives and create a strategic roadmap for achievement',
      icon: <Flag className="h-10 w-10" />,
      activities: [
        'Short-term & long-term goal setting',
        'Educational pathway planning',
        'Skill development roadmap',
        'Timeline creation'
      ]
    },
    {
      stage: 'Stage 4',
      title: 'Skill Development',
      description: 'Acquire and enhance technical and soft skills required for your chosen career path',
      icon: <Zap className="h-10 w-10" />,
      activities: [
        'Technical skills training',
        'Soft skills workshops',
        'Certification programs',
        'Practical experience building'
      ]
    },
    {
      stage: 'Stage 5',
      title: 'Job Search Strategy',
      description: 'Develop effective job search techniques and application strategies',
      icon: <Briefcase className="h-10 w-10" />,
      activities: [
        'Resume and cover letter optimization',
        'LinkedIn profile enhancement',
        'Interview preparation',
        'Networking strategy'
      ]
    },
    {
      stage: 'Stage 6',
      title: 'Career Advancement',
      description: 'Plan for professional growth, promotions, and long-term career success',
      icon: <TrendingUp className="h-10 w-10" />,
      activities: [
        'Performance optimization',
        'Leadership development',
        'Mentorship seeking',
        'Continuous learning planning'
      ]
    }
  ];

  // Industry Insights
  const industryInsights = [
    {
      industry: 'Artificial Intelligence',
      trends: 'AI ethics, explainable AI, edge computing, AI in healthcare',
      skills: 'Python, TensorFlow, PyTorch, NLP, Computer Vision',
      outlook: 'Exceptional growth with increasing integration across all sectors'
    },
    {
      industry: 'Renewable Energy',
      trends: 'Solar technology, energy storage, green hydrogen, sustainable infrastructure',
      skills: 'Engineering, project management, sustainability analysis',
      outlook: 'Rapid expansion driven by global sustainability initiatives'
    },
    {
      industry: 'Digital Healthcare',
      trends: 'Telemedicine, health tech, wearable devices, personalized medicine',
      skills: 'Data analytics, healthcare regulations, digital literacy',
      outlook: 'Transforming traditional healthcare delivery models'
    },
    {
      industry: 'FinTech',
      trends: 'Blockchain, digital banking, insurtech, regtech',
      skills: 'Blockchain development, financial analysis, cybersecurity',
      outlook: 'Disrupting traditional financial services globally'
    }
  ];

  // Services Offered
  const services = [
    {
      title: 'Personal Career Assessment',
      description: 'Comprehensive evaluation of your personality, strengths, values, and interests using validated assessment tools',
      icon: <UserCheck className="h-8 w-8" />,
      features: [
        'MBTI personality profiling',
        'StrengthsFinder assessment',
        'Career interest inventory',
        'Value clarification workshop'
      ]
    },
    {
      title: 'Industry Analysis',
      description: 'In-depth research on target industries, market trends, and emerging opportunities',
      icon: <BarChart className="h-8 w-8" />,
      features: [
        'Market trend analysis',
        'Growth sector identification',
        'Salary benchmarking',
        'Future skills forecasting'
      ]
    },
    {
      title: 'Educational Pathway Planning',
      description: 'Strategic planning of academic qualifications and certifications needed for career success',
      icon: <GraduationCap className="h-8 w-8" />,
      features: [
        'University program selection',
        'Certification roadmap',
        'Skill gap analysis',
        'Educational timeline planning'
      ]
    },
    {
      title: 'Job Search Strategy',
      description: 'Comprehensive job search methodology including application optimization and interview preparation',
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        'Resume and cover letter crafting',
        'LinkedIn optimization',
        'Interview simulation',
        'Salary negotiation coaching'
      ]
    },
    {
      title: 'Professional Networking',
      description: 'Strategic networking guidance to build valuable professional connections',
      icon: <Network className="h-8 w-8" />,
      features: [
        'LinkedIn networking strategy',
        'Industry event participation',
        'Mentor identification',
        'Professional relationship building'
      ]
    },
    {
      title: 'Long-Term Career Planning',
      description: 'Strategic planning for career advancement, leadership roles, and professional growth',
      icon: <Rocket className="h-8 w-8" />,
      features: [
        '5-10 year career roadmap',
        'Leadership development plan',
        'Succession planning',
        'Work-life balance strategy'
      ]
    }
  ];

  // Success Stories
  const successStories = [
    {
      name: 'Ananya Sharma',
      from: 'Computer Science Graduate',
      to: 'AI Research Scientist at Google',
      timeline: '2 years',
      quote: 'The career assessment helped me identify my true passion for AI research. The strategic guidance was instrumental in securing my dream role.',
      image: 'AS'
    },
    {
      name: 'Raj Patel',
      from: 'MBA Graduate',
      to: 'Investment Banking Associate at JP Morgan',
      timeline: '18 months',
      quote: 'The industry analysis and networking strategy gave me the competitive edge in the highly competitive finance sector.',
      image: 'RP'
    },
    {
      name: 'Sophia Chen',
      from: 'Biotechnology Graduate',
      to: 'Clinical Research Manager at Pfizer',
      timeline: '3 years',
      quote: 'The educational pathway planning ensured I had the right qualifications and experience for career advancement.',
      image: 'SC'
    }
  ];

  return (
    <div id='/services/education-loan-processing' className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl">🚀</div>
          <div className="absolute bottom-20 right-10 text-8xl">💼</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6">
              <Target className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Education Loan Processing
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Transform your career aspirations into reality with strategic planning, expert guidance, 
              and personalized support from Masters Visa Career Consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
                <Target className="mr-3 h-5 w-5" />
                Start Career Assessment
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                <Calendar className="mr-3 h-5 w-5" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Career Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">5000+</div>
              <div className="text-gray-600">Professionals Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Industries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">40%</div>
              <div className="text-gray-600">Higher Salary Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Introduction */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Strategic Career Planning for Professional Success
          </h2>
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-3xl p-12 border border-gray-200">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In today's rapidly evolving job market, strategic career planning is no longer optional—it's essential. 
              Our Professional Career Guidance program provides a comprehensive framework for individuals at all career 
              stages to make informed decisions, develop relevant skills, and achieve their professional goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalized Approach</h3>
                <p className="text-gray-600">Tailored guidance based on your unique profile and aspirations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
                <p className="text-gray-600">Informed decisions backed by market research and industry analysis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
                <p className="text-gray-600">Guidance from industry professionals and career experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore High-Demand Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover growing industries and lucrative career opportunities aligned with global market trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-white">
                    {path.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Market Demand</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      path.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                      path.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {path.demand}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average Salary</span>
                    <span className="font-bold text-blue-600">{path.avgSalary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Growth Rate</span>
                    <span className="font-bold text-green-600">{path.growth}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-500 mb-2">Top Countries</div>
                    <div className="text-gray-700 text-sm">{path.countries}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Development Framework */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">6-Stage Career Development Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to career planning and professional growth
            </p>
          </div>

          <div className="space-y-8">
            {careerStages.map((stage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="lg:w-1/4">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4">
                        <div className="text-blue-600">
                          {stage.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-600 mb-1">{stage.stage}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <p className="text-gray-700 mb-6 text-lg">{stage.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {stage.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Career Guidance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to support every aspect of your professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Insights */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Insights & Future Trends</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with insights into emerging industries and future job market trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{insight.industry}</h3>
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                    Emerging
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Key Trends</div>
                    <div className="text-gray-700">{insight.trends}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Essential Skills</div>
                    <div className="text-gray-700">{insight.skills}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Market Outlook</div>
                    <div className="text-gray-700">{insight.outlook}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skills of the Future</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <div className="font-bold text-gray-900">Critical Thinking</div>
                <div className="text-sm text-gray-600">Problem-solving & analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <div className="font-bold text-gray-900">Emotional Intelligence</div>
                <div className="text-sm text-gray-600">Leadership & collaboration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <div className="font-bold text-gray-900">Digital Literacy</div>
                <div className="text-sm text-gray-600">Tech adaptation & innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <div className="font-bold text-gray-900">Cultural Agility</div>
                <div className="text-sm text-gray-600">Global mindset & adaptability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Transformation Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real professionals who achieved remarkable career growth with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {story.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <div className="text-sm text-gray-600">Achieved in {story.timeline}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {story.from}
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
                    <div className="text-blue-600 text-sm bg-blue-50 px-3 py-1 rounded-full font-bold">
                      {story.to}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 border-l-4 border-blue-500 pl-4">
                  "{story.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Career satisfaction: 100%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-16 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Start Your Career Transformation Today</h2>
              <p className="text-xl mb-10 opacity-90">
                Take the first step towards a fulfilling and successful career with expert guidance from 
                Masters Visa Career Consultants.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Personalized Strategy</h3>
                  <p className="text-blue-200">Tailored to your unique goals and aspirations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
                  <p className="text-blue-200">Informed by market research and industry analysis</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                  <p className="text-blue-200">Track record of successful career transformations</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center">
                  <Target className="mr-3 h-6 w-6" />
                  Get Started Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">
                  <Phone className="mr-3 h-6 w-6" />
                  Schedule Free Consultation
                </button>
              </div>
              
              <p className="mt-8 text-blue-200 text-sm">
                Limited spots available for personalized career coaching. Book your session today!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Masters Visa Career Guidance</h3>
              <p className="text-gray-400">
                Transforming careers through expert guidance, strategic planning, and personalized support 
                for professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Career Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Career Assessment</a></li>
                <li><a href="#" className="hover:text-white">Resume Building</a></li>
                <li><a href="#" className="hover:text-white">Interview Coaching</a></li>
                <li><a href="#" className="hover:text-white">Career Planning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Industry Reports</a></li>
                <li><a href="#" className="hover:text-white">Salary Guides</a></li>
                <li><a href="#" className="hover:text-white">Career Webinars</a></li>
                <li><a href="#" className="hover:text-white">Blog & Articles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Career Experts</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (800) CAREER-01
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  career@mastersvisa.com
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Masters Visa Professional Career Guidance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationLoanProcessing;