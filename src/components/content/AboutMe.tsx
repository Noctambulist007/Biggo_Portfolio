'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Image from 'next/image';
import { FaGraduationCap, FaLaptopCode, FaMicroscope, FaHeart } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col items-center justify-start">
            <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-[#FF004F] dark:border-[#FF004F]">
              <Image 
                src={siteConfig.profile_image} 
                alt={siteConfig.author}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-6 space-y-4 w-full">
              <ProfileAttribute 
                icon={<FaGraduationCap className="text-[#FF004F] dark:text-[#FF004F]" />}
                title="Education"
                value="B.Sc. in Computer Science"
                detail="Leading University, Bangladesh"
              />
              
              <ProfileAttribute 
                icon={<FaLaptopCode className="text-[#FF004F] dark:text-[#FF004F]" />}
                title="Specialization"
                value="Mobile Development"
                detail="Flutter, Swift UI"
              />
              
              <ProfileAttribute 
                icon={<FaMicroscope className="text-[#FF004F] dark:text-[#FF004F]" />}
                title="Research"
                value="Machine Learning"
                detail="Healthcare Applications"
              />
              
              <ProfileAttribute 
                icon={<FaHeart className="text-[#FF004F] dark:text-[#FF004F]" />}
                title="Passion"
                value="AI in Healthcare"
                detail="Making positive impact"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
                Hey there! 👋 I'm{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70 dark:from-[#FF004F] dark:to-[#FF004F]/70">
                  {siteConfig.author}
                </span>, a Software Engineer at EzyCourse, specializing in mobile application development with nearly a year of
                professional experience. Alongside my software engineering role, I am a research assistant at Intex Research Lab,
                where my work focuses on thesis-based projects leveraging machine learning, deep learning, and image processing.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
                I'm passionate about exploring innovative applications of AI in healthcare, contributing to both practical software
                solutions and academic research. My research work has led to publications in areas like skin cancer classification
                and chronic kidney disease prediction using machine learning algorithms.
              </p>

              <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
                With a Bachelor's degree in Computer Science and Engineering from Leading University in Sylhet, Bangladesh, I've developed
                a strong foundation in both theoretical computer science and practical software development. I'm skilled in various
                programming languages including C, C++, Java, Python, Dart, Swift, and Kotlin, and have experience with frameworks
                like Flutter and Swift UI.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                If you're interested in collaborating on research in machine learning, AI applications in healthcare, or mobile application
                development, feel free to reach out. I'm always eager to work on projects that can make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

const ProfileAttribute = ({ icon, title, value, detail }: { 
  icon: React.ReactNode, 
  title: string, 
  value: string,
  detail: string
}) => {
  return (
    <div className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-sm text-gray-500 dark:text-gray-300">{title}</h4>
        <p className="font-medium text-gray-800 dark:text-white">{value}</p>
        <p className="text-xs text-gray-500 dark:text-gray-300">{detail}</p>
      </div>
    </div>
  );
};

export default AboutMe;
