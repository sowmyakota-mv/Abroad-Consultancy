import React from "react";
import { 
  Users, Target, Trophy, Award, CheckCircle, 
  Star, Shield, Zap, Heart, Globe, 
  ArrowRight, Quote, Building, Calendar,
  UserCheck, Lightbulb, Handshake,
  Brain
} from "lucide-react";

const AboutPage: React.FC = () => {
  const teamMembers = [
    { id: 1, name: "Alex Johnson", role: "CEO & Founder", image: "/team/alex.jpg" },
    { id: 2, name: "Sarah Chen", role: "Head of Operations", image: "/team/sarah.jpg" },
    { id: 3, name: "Mike Rodriguez", role: "Tech Director", image: "/team/mike.jpg" },
    { id: 4, name: "Priya Sharma", role: "Marketing Lead", image: "/team/priya.jpg" },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: <Trophy className="h-8 w-8" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="h-8 w-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-8 w-8" /> },
    { number: "10+", label: "Years Experience", icon: <Calendar className="h-8 w-8" /> },
  ];

  const testimonials = [
    { id: 1, quote: "Transformative experience! Their team exceeded all expectations.", author: "David Miller", company: "TechCorp Inc." },
    { id: 2, quote: "Professional, innovative, and delivered beyond what we imagined.", author: "Lisa Wang", company: "Global Solutions" },
    { id: 3, quote: "Outstanding service and exceptional results every single time.", author: "Robert Kim", company: "NextGen Enterprises" },
  ];

  const partners = [
    { id: 1, name: "Tech Giant", logo: "/partners/tech-giant.svg" },
    { id: 2, name: "Innovate Corp", logo: "/partners/innovate-corp.svg" },
    { id: 3, name: "Future Systems", logo: "/partners/future-systems.svg" },
    { id: 4, name: "Global Partners", logo: "/partners/global-partners.svg" },
    { id: 5, name: "Next Wave", logo: "/partners/next-wave.svg" },
  ];

  const processSteps = [
    { step: 1, title: "Discovery", description: "Understanding your unique needs and goals", icon: <Lightbulb className="h-6 w-6" /> },
    { step: 2, title: "Planning", description: "Creating detailed strategies and roadmaps", icon: <Target className="h-6 w-6" /> },
    { step: 3, title: "Execution", description: "Implementing solutions with precision", icon: <Zap className="h-6 w-6" /> },
    { step: 4, title: "Delivery", description: "Handing over successful results", icon: <CheckCircle className="h-6 w-6" /> },
  ];

  const whyChooseUs = [
    { title: "Expert Team", description: "Industry veterans with proven track records", icon: <UserCheck className="h-6 w-6" /> },
    { title: "Innovation Focus", description: "Cutting-edge solutions for modern challenges", icon: <Zap className="h-6 w-6" /> },
    { title: "Client-Centric", description: "Your success is our primary metric", icon: <Heart className="h-6 w-6" /> },
    { title: "Quality Assurance", description: "Rigorous standards for exceptional results", icon: <Shield className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-white opacity-50"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider">About Us</span>
            <div className="w-12 h-1 bg-white opacity-50"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Story & Vision
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            Transforming ideas into reality with innovation, passion, and excellence since 2010.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center mx-auto">
            Explore Our Journey <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full"></div>
      </section>

      {/* About / Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey Begins
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2010, we started as a small team with a big dream: to revolutionize how businesses approach digital transformation. What began in a modest office space has grown into a global enterprise serving clients across 50+ countries.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and deep passion for creating meaningful impact. Every challenge we've faced has strengthened our resolve and refined our approach.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Global Presence</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Expert Team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="h-24 w-24 text-blue-600 opacity-50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create sustainable competitive advantages in an ever-evolving marketplace.
              </p>
              <ul className="mt-6 space-y-3">
                {["Innovation First", "Client Success", "Sustainable Growth", "Continuous Improvement"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To be the global leader in digital transformation, recognized for our groundbreaking innovations, exceptional client experiences, and positive impact on businesses worldwide.
              </p>
              <ul className="mt-6 space-y-3">
                {["Global Leadership", "Industry Innovation", "Client Excellence", "Community Impact"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Transformation", description: "Complete modernization of business processes and systems", icon: <Zap className="h-8 w-8" /> },
              { title: "Custom Software", description: "Tailored applications built for your specific requirements", icon: <Award className="h-8 w-8" /> },
              { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure and services", icon: <Globe className="h-8 w-8" /> },
              { title: "AI & Machine Learning", description: "Intelligent solutions that learn and adapt", icon: <Brain className="h-8 w-8" /> },
              { title: "Cybersecurity", description: "Comprehensive protection for your digital assets", icon: <Shield className="h-8 w-8" /> },
              { title: "Consulting Services", description: "Strategic guidance from industry experts", icon: <Users className="h-8 w-8" /> },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The advantages that set us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of satisfied clients who have experienced the difference with our innovative solutions.
                </p>
              </div>
              <div className="text-right">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A systematic approach that ensures success at every stage
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 mx-auto">
                      <div className="text-white text-2xl font-bold">{step.step}</div>
                    </div>
                    <div className="text-blue-600 mb-2 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The brilliant minds behind our success stories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Users className="h-20 w-20 text-blue-600 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
                      View Profile
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              View All Team Members <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-yellow-400 mb-4">
                  <Star className="h-6 w-6 inline" />
                  <Star className="h-6 w-6 inline mx-1" />
                  <Star className="h-6 w-6 inline mx-1" />
                  <Star className="h-6 w-6 inline mx-1" />
                  <Star className="h-6 w-6 inline" />
                </div>
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-center">
                  <div className="h-12 flex items-center justify-center mb-3">
                    <Building className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="font-semibold text-gray-700">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful businesses that have transformed with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-8 text-blue-100">
            Contact us at: <span className="font-semibold">hello@company.com</span> | <span className="font-semibold">+1 (555) 123-4567</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Company</div>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions since 2010.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold mb-4">Services</div>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white">Custom Software</a></li>
                <li><a href="#" className="hover:text-white">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold mb-4">Contact</div>
              <ul className="space-y-2 text-gray-400">
                <li>123 Business Street</li>
                <li>New York, NY 10001</li>
                <li>hello@company.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;