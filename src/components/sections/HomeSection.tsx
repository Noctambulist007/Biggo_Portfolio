'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import SkillsSection from '@/src/components/sections/SkillsSection';

const HomeSection = () => {
  return (
    <SectionContainer>
      {/* Hero Section - Adjusted height for better mobile responsiveness */}
      <div className="w-full min-h-[60vh] md:h-[calc(100vh-11rem)] flex items-center justify-center px-4 sm:px-6">
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-10 md:mt-16 px-4 sm:px-6">
        <AboutMe />
      </AnimationContainer>

      {/* Timeline Section */}
      <AnimationContainer customClassName="w-full mt-10 md:mt-16 px-4 sm:px-6">
        <CurrentTimeLineExp />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-10 md:mt-16 px-4 sm:px-6">
        <SkillsSection />
      </AnimationContainer>

      {/* Contact Section */}
      <AnimationContainer customClassName="w-full mt-10 md:mt-16 px-4 sm:px-6">
        <ContactMe />
      </AnimationContainer>
    </SectionContainer>
  );
};

export default HomeSection;
