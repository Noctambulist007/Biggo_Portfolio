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
      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <AboutMe />
      </AnimationContainer>

      {/* Timeline Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <CurrentTimeLineExp />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <SkillsSection />
      </AnimationContainer>

      {/* Contact Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <ContactMe />
      </AnimationContainer>
    </SectionContainer>
  );
};

export default HomeSection;
