import React, { useState } from 'react';
import { 
  GraduationCap, Shield, DollarSign, Briefcase, 
  BookOpen, Globe, Home, Users, 
  Award, Mail, Phone, MapPin,
  CheckCircle, Calendar, FileText, MessageSquare,
  ArrowRight, Download, ChevronDown
} from 'lucide-react';

const StudyCanadaPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Top Canadian Universities
  const topUniversities = [
    { name: 'University of Toronto', rank: '#1', location: 'Toronto, Ontario', students: '95,000+' },
    { name: 'University of British Columbia', rank: '#2', location: 'Vancouver, BC', students: '66,000+' },
    { name: 'McGill University', rank: '#3', location: 'Montreal, Quebec', students: '40,000+' },
    { name: 'University of Alberta', rank: '#4', location: 'Edmonton, Alberta', students: '40,000+' },
    { name: 'University of Montreal', rank: '#5', location: 'Montreal, Quebec', students: '66,000+' },
    { name: 'McMaster University', rank: '#6', location: 'Hamilton, Ontario', students: '33,000+' },
  ];

  // Scholarship Steps
  const scholarshipSteps = [
    { 
      title: 'Online Application Submission', 
      description: 'Most scholarship applications are submitted online through dedicated portals. Adhere to deadlines and carefully follow the application guidelines to ensure a successful submission.',
      icon: <FileText className="h-6 w-6" />
    },
    { 
      title: 'Selection Criteria', 
      description: 'Our expert panel evaluates applications based on academic merit, leadership potential, and the impact you can make in your chosen field. Letters of recommendation and a strong academic record will enhance your chances of selection.',
      icon: <Award className="h-6 w-6" />
    },
    { 
      title: 'Notifications', 
      description: 'Stay informed about scholarship opportunities for studying in Canada by regularly checking official notifications to enhance your chances of securing financial aid for your abroad education.',
      icon: <MessageSquare className="h-6 w-6" />
    },
    { 
      title: 'Interview Preparation', 
      description: 'Be ready for interviews, which may be part of the selection process for certain scholarships. Articulate your academic achievements, career goals, and reasons why you are deserving of the scholarship.',
      icon: <Users className="h-6 w-6" />
    },
  ];

  // Eligibility Criteria
  const eligibilityCriteria = [
    { 
      title: 'Extracurricular Activities', 
      description: 'Scholarships highly value extracurriculars, community service, and leadership involvement.',
      icon: '🏆'
    },
    { 
      title: 'Academic Excellence', 
      description: 'Academic success crucial; meeting specific GPA criteria is often necessary.',
      icon: '📚'
    },
    { 
      title: 'English Proficiency', 
      description: 'English proficiency crucial; scholarships often demand IELTS or TOEFL scores.',
      icon: '🔤'
    },
    { 
      title: 'Field of Study', 
      description: 'Some scholarships may specify eligibility criteria based on chosen academic disciplines.',
      icon: '🎓'
    },
  ];

  // Benefits Data
  const benefits = [
    {
      id: 'world-class-education',
      title: 'World-Class Education',
      description: 'Canada hosts very top-ranked universities, including the University of Toronto, McGill University, and UBC, which offer a myriad of programs globally recognized for their high degree of academic excellence; therefore, Canada has emerged as a premier destination to seek higher education.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'blue'
    },
    {
      id: 'safe-environment',
      title: 'Safe and Welcoming Environment',
      description: 'Canada is a safe and inviting country: among others, it is enlisted as one of the safest countries in the world by the Global Peace Indices. It offers a comfortable zone for individuals from multicultural and multi-ethnic diversified backgrounds to feel it is their country.',
      icon: <Shield className="h-8 w-8" />,
      color: 'green'
    },
    {
      id: 'inexpensive-fees',
      title: 'Inexpensive Tuition Fees',
      description: 'Quality education is offered to students in Canada, in comparison to the low fees charged for tuition fees in Canada if compared to the USA, UK, among other countries, making it very attractive to the students who wish to incur reasonable fees without affecting quality.',
      icon: <DollarSign className="h-8 w-8" />,
      color: 'purple'
    },
    {
      id: 'post-graduation-work',
      title: 'Post Graduation Work Opportunities',
      description: 'Canada has excellent work opportunities available after graduation. The country, in its bid to create valuable work experiences within its country, is offering great work opportunities to all international students through the Post-Graduation Work Permit.',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'orange'
    },
    {
      id: 'diverse-courses',
      title: 'Diverse Courses and Programs',
      description: 'The diverse range of courses and programs available to Study in Canada is another compelling factor for students worldwide. Whether one is interested in business, engineering, arts, or sciences, Canadian universities offer a plethora of options to cater to diverse academic interests.',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'red'
    },
    {
      id: 'global-recognition',
      title: 'Global Recognition',
      description: 'Moreover, the global recognition of Canadian degrees adds immense value to an international student\'s academic and professional journey. Canadian qualifications are widely respected and accepted around the world, opening doors to global opportunities.',
      icon: <Globe className="h-8 w-8" />,
      color: 'indigo'
    },
    {
      id: 'work-opportunities',
      title: 'Work Opportunities',
      description: 'International students in Canada are typically allowed to work part-time during their studies and full-time during scheduled breaks. Post-graduation work opportunities are also available, enabling students to gain valuable work experience in Canada after completing their studies.',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'teal'
    },
    {
      id: 'quality-of-life',
      title: 'Quality of Life',
      description: 'The high quality of life in Canada is another aspect that attracts students from around the world. The country consistently ranks high in global quality of life indices, offering a blend of vibrant cities, picturesque landscapes, and a variety of recreational and cultural activities.',
      icon: <Home className="h-8 w-8" />,
      color: 'pink'
    },
    {
      id: 'study-permits',
      title: 'Study Permits',
      description: 'To embark on this educational journey, obtaining a study in Canada permit is crucial. Canada\'s study permit process is known for its efficiency and transparency. With clear guidelines and support systems in place, international students can navigate the application process smoothly.',
      icon: <FileText className="h-8 w-8" />,
      color: 'cyan'
    },
  ];

  return (
    <div id='study-abroad/canada' className="min-h-screen bg-white">
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-red-600 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-lg">
              <div className="text-4xl">🍁</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Study in Canada
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Canada becomes the first preference for international students to complete an 
              excellent education in a lively, multi-cultural setting.
            </p>
            <button className="bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center mx-auto">
              Check Your Eligibility
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why study in Canada
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Canada becomes the first preference for international students to complete an 
              excellent education in a lively, multi-cultural setting. If you are going to 
              complete your higher education in another country, then here comes the most 
              interesting part of why studying in Canada will help you out.
            </p>
          </div>
        </div>
      </section>

      {/* Major Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Major Benefits of Studying in Canada
            </h2>
          </div>

          {/* Benefits Grid - First 4 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.slice(0, 4).map((benefit) => (
              <div 
                key={benefit.id}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                  benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                  benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Study in Canada Banner */}
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 mb-12 border border-red-100">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Study in Canada</h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Diverse Courses and Programs - The diverse range of courses and programs 
                available to Study in Canada is another compelling factor for students worldwide.
              </p>
            </div>
          </div>

          {/* Benefits Grid - Next 4 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.slice(4, 8).map((benefit) => (
              <div 
                key={benefit.id}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                  benefit.color === 'red' ? 'bg-red-100 text-red-600' :
                  benefit.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                  benefit.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                  'bg-pink-100 text-pink-600'
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Study Permits Card */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Permits</h3>
                <p className="text-gray-600">
                  To embark on this educational journey, obtaining a study in Canada permit is crucial. 
                  Canada's study permit process is known for its efficiency and transparency. With clear 
                  guidelines and support systems in place, international students can navigate the 
                  application process smoothly, ensuring a hassle-free entry into the Canadian academic landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Top Canadian Universities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topUniversities.map((uni, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="font-bold text-red-600">{uni.rank}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{uni.name}</h3>
                    <div className="text-gray-600 text-sm">{uni.location}</div>
                  </div>
                </div>
                <div className="text-gray-700">{uni.students} students</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Scholarships In Canada
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
              Masters Visa is dedicated to assisting you at every step, from identifying 
              relevant scholarship programs to aiding with application documentation. Our 
              team ensures that you are well-informed about eligibility criteria, deadlines, 
              and the application procedures specific to each scholarship opportunity.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
              Contact Masters Visa Today
            </button>
          </div>

          {/* Scholarship Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {scholarshipSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6 mx-auto">
                  <div className="text-red-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Eligibility Criteria
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-3xl mb-4">{criteria.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{criteria.title}</h4>
                  <p className="text-gray-600">{criteria.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PGWP & Work Opportunities */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Post-Graduation Work Permit (PGWP)
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-600">Up to 3 years based on program length</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility</h3>
                    <p className="text-gray-600">Graduate from designated learning institution</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application</h3>
                    <p className="text-gray-600">Apply within 180 days of graduation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work During Studies</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Part-time during semester</span>
                  <span className="font-bold text-green-600">20 hours/week</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Full-time during breaks</span>
                  <span className="font-bold text-green-600">40 hours/week</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Co-op/Internship</span>
                  <span className="font-bold text-green-600">Work integrated learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cost Comparison (Annual Tuition)
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$20,000</div>
              <div className="font-bold text-gray-900 mb-2">Canada</div>
              <div className="text-gray-600">Undergraduate Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">$35,000</div>
              <div className="font-bold text-gray-900 mb-2">USA</div>
              <div className="text-gray-600">Undergraduate Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">$28,000</div>
              <div className="font-bold text-gray-900 mb-2">UK</div>
              <div className="text-gray-600">Undergraduate Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">$25,000</div>
              <div className="font-bold text-gray-900 mb-2">Australia</div>
              <div className="text-gray-600">Undergraduate Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            We encourage you to enroll with Masters Visa Overseas Education Consultancy.
          </h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto mb-10">
            Embark on a transformative academic journey to Study in Canada with Masters Visa, 
            your premier overseas education consultancy. Our expert team provides comprehensive 
            guidance for international students seeking to pursue higher education, ensuring a 
            seamless process from university selection to visa assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-3 h-5 w-5" />
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              <Download className="mr-3 h-5 w-5" />
              Download Brochure
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
              Let Masters Visa be your trusted partner in realizing your Canadian academic dreams, 
              offering personalized support to make your educational experience enriching and successful.
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
              <p className="text-gray-600">123 Education Street, Toronto, ON</p>
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
                Your premier overseas education consultancy for studying in Canada.
              </p>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-4">Study Destinations</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Study in Canada</a></li>
                <li><a href="#" className="hover:text-white">Study in UK</a></li>
                <li><a href="#" className="hover:text-white">Study in USA</a></li>
                <li><a href="#" className="hover:text-white">Study in Europe</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-4">Services</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">University Selection</a></li>
                <li><a href="#" className="hover:text-white">Visa Assistance</a></li>
                <li><a href="#" className="hover:text-white">Scholarship Guidance</a></li>
                <li><a href="#" className="hover:text-white">Pre-departure Briefing</a></li>
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

export default StudyCanadaPage;