'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a Software Engineer at EzyCourse, specializing in mobile 
            application development with nearly a year of professional experience. Alongside my software 
            engineering role, I am a research assistant at Intex Research Lab, where my work focuses on 
            thesis-based projects leveraging machine learning, deep learning, and image processing.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              🎓 I graduated with a Bachelor of Science in Computer Science and Engineering from Leading University, 
              Sylhet, Bangladesh with a final grade of 3.65 out of 4.
            </li>
            <li>
              🔬 My research work has led to publications in areas like skin cancer classification and chronic 
              kidney disease prediction using machine learning algorithms.
            </li>
            <li>
              📱 At EzyCourse, I develop and maintain mobile applications, focusing on scalability, efficiency, 
              issue resolution, and enhancing user experience.
            </li>
            <li>
              🤖 As a research assistant at Intex Research Lab, I conduct research on machine learning and deep learning, 
              assisting in thesis projects by collaborating with senior researchers.
            </li>
            <li>
              🧠 I'm passionate about exploring innovative applications of AI in healthcare, contributing to both 
              practical software solutions and academic research.
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            I'm skilled in various programming languages including C, C++, Java, Python, Dart, Swift, and Kotlin, 
            and have experience with frameworks like Flutter and Swift UI. If you're interested in collaborating 
            on research in machine learning, AI applications in healthcare, or mobile application development, 
            feel free to reach out!
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
