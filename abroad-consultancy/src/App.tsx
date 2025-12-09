import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CountriesSection from './components/CountrySection';
import ServicesSection from './components/ServiceSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialSection';

import CallToActionSection from './components/CallToActionSection';
import FooterSection from './components/FooterSection';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={
      <div className="w-full">  
        <HeroSection/>
        <CountriesSection/>
        <ServicesSection/>
        <WhyChooseUsSection/>
        <TestimonialsSection/>
        <FAQ/>
        <CallToActionSection/>
      </div> }/>
       </Routes> 
        <FooterSection/>       
        </Router>
    </>
  );
}

export default App;