import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Left Column - 30% width - Company Details */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Consultancy</h2>
              <p className="text-gray-400 text-sm">
                Your trusted partner for study abroad guidance and IELTS preparation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Call us on:</p>
                  <p className="font-medium">91 9876543210</p>
                  <p className="text-gray-400 text-xs">(10am to 7pm)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Whatsapp us on:</p>
                  <p className="font-medium">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Mail us on:</p>
                  <p className="font-medium">contact@contact.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns - 70% width - Links Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              
              {/* Countries Column */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-500">COUNTRIES</h3>
                <ul className="space-y-3">
                  {['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Germany', 'New Zealand'].map((country) => (
                    <li key={country}>
                      <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        {country}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Universities Column */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-500">TOP UNIVERSITIES</h3>
                <ul className="space-y-3">
                  {[
                    'Top Universities in USA',
                    'Top Universities in UK',
                    'Top Universities in Canada',
                    'Top Universities in Australia',
                    'Top Universities in Ireland',
                    'Top Universities in Germany'
                  ].map((university) => (
                    <li key={university}>
                      <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        {university}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-500">COMPANY</h3>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Leap in the news!', 'Press & Media', 'Contact Us'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Offerings Column */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-500">OUR OFFERINGS</h3>
                <ul className="space-y-3">
                  {[
                    'Free IELTS Masterclass',
                    'Talk to a counsellor',
                    'Twinning Programs',
                    'Cost Calculator',
                    'Blog',
                    'Study Abroad Knowledge Center',
                    'Events'
                  ].map((offering) => (
                    <li key={offering}>
                      <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        {offering}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exam Information Column */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-orange-500">EXAM INFORMATION</h3>
                <ul className="space-y-3">
                  {['IELTS', 'TOEFL', 'SAT', 'PTE', 'DET', 'GRE', 'GMAT', 'ACT'].map((exam) => (
                    <li key={exam}>
                      <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        {exam}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Download Apps Section */}
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"> */}
              {/* Study Abroad App */}
              {/* <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-start">
                  <Download className="h-10 w-10 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Download Study Abroad App</h3>
                    <div className="flex space-x-4 mt-4">
                      <button className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Download on</div>
                          <div className="font-semibold">Google Play</div>
                        </div>
                      </button>
                      <button className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Download on</div>
                          <div className="font-semibold">App Store</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}

              {/* IELTS Prep App */}
              {/* <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-start">
                  <Download className="h-10 w-10 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Download IELTS Prep App</h3>
                    <div className="flex space-x-4 mt-4">
                      <button className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Download on</div>
                          <div className="font-semibold">Google Play</div>
                        </div>
                      </button>
                      <button className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Download on</div>
                          <div className="font-semibold">App Store</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>

        {/* Location Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bangalore HQ */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <h4 className="font-bold">BANGALORE</h4>
              </div>
              <p className="text-gray-400 text-sm">
                 Bengaluru, Karnataka 560102
              </p>
            </div>
        
            {/* Singapore */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                <h4 className="font-bold">UK (International)</h4>
              </div>
              <p className="text-gray-400 text-sm">
                London, UK
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Consultancy. All rights reserved
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Refund Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;