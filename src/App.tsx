import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeachersSection from './components/TeachersSection';
import MissionSection from './components/MissionSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import ProblemsSection from './components/ProblemsSection';
import TimelineSection from './components/TimelineSection';
import WhatWillLearnSection from './components/WhatWillLearnSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { TranslationProvider } from './TranslationContext';
import { useAnimateOnScroll } from './useAnimateOnScroll';

function App() {
  useAnimateOnScroll();
  return (
    <TranslationProvider>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <MissionSection />
      <WhyDifferentSection />
      <ProblemsSection />
      <TimelineSection />
      <WhatWillLearnSection />
      <AboutSection />
      <CoursesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </TranslationProvider>
  );
}

export default App;
