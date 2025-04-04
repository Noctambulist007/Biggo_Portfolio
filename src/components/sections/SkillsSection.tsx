'use client';

import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';
import { 
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, 
  FaPython, FaDatabase, FaGitAlt, FaAndroid, FaApple, FaCode 
} from 'react-icons/fa';
import { 
  SiSwift, SiKotlin, SiCplusplus, SiTensorflow, SiPandas, 
  SiNumpy, SiFirebase, SiJupyter, SiFlutter
} from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb';

const SkillsSection = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-8">
        <SectionHeader
          title="Skills"
          content="I have experience with a diverse set of programming languages, frameworks, and tools for both software development and machine learning. My expertise spans mobile application development, research, and problem-solving."
        />

        <div className="w-full">
          {/* Frameworks */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Frameworks & Architecture
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<SiFlutter className="text-[#02569B] text-3xl" />} name="Flutter" />
              <SkillCard icon={<SiSwift className="text-[#F05138] text-3xl" />} name="Swift UI" />
              <SkillCard icon={<FaJava className="text-[#ED8B00] text-3xl" />} name="Java Swing" />
              <SkillCard icon={<BsCodeSlash className="text-gray-700 dark:text-gray-300 text-3xl" />} name="MVC" />
              <SkillCard icon={<BsCodeSlash className="text-gray-700 dark:text-gray-300 text-3xl" />} name="MVVM" />
              <SkillCard icon={<BsCodeSlash className="text-gray-700 dark:text-gray-300 text-3xl" />} name="Clean Architecture" />
            </div>
          </div>

          {/* Languages */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<TbBrandCpp className="text-[#00599C] text-3xl" />} name="C" />
              <SkillCard icon={<SiCplusplus className="text-[#00599C] text-3xl" />} name="C++" />
              <SkillCard icon={<FaJava className="text-[#ED8B00] text-3xl" />} name="Java" />
              <SkillCard icon={<FaPython className="text-[#3776AB] text-3xl" />} name="Python" />
              <SkillCard icon={<SiFlutter className="text-[#02569B] text-3xl" />} name="Dart" />
              <SkillCard icon={<SiSwift className="text-[#F05138] text-3xl" />} name="Swift" />
              <SkillCard icon={<SiKotlin className="text-[#7F52FF] text-3xl" />} name="Kotlin" />
            </div>
          </div>

          {/* Web Technologies */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Web Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<FaHtml5 className="text-[#E34F26] text-3xl" />} name="HTML" />
              <SkillCard icon={<FaCss3Alt className="text-[#1572B6] text-3xl" />} name="CSS" />
              <SkillCard icon={<FaJs className="text-[#F7DF1E] text-3xl" />} name="JavaScript" />
            </div>
          </div>

          {/* Tools & Software */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Tools & Software
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<SiFirebase className="text-[#FFCA28] text-3xl" />} name="Firebase" />
              <SkillCard icon={<FaGitAlt className="text-[#F05032] text-3xl" />} name="Git & GitHub" />
              <SkillCard icon={<FaAndroid className="text-[#3DDC84] text-3xl" />} name="Android Studio" />
              <SkillCard icon={<FaApple className="text-gray-700 dark:text-gray-300 text-3xl" />} name="Xcode" />
              <SkillCard icon={<TbBrandVscode className="text-[#007ACC] text-3xl" />} name="VS Code" />
              <SkillCard icon={<FaDatabase className="text-[#4479A1] text-3xl" />} name="MySQL" />
              <SkillCard icon={<FaDatabase className="text-[#003B57] text-3xl" />} name="SQLite" />
            </div>
          </div>

          {/* Machine Learning Technologies */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Machine Learning Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<SiNumpy className="text-[#013243] text-3xl" />} name="NumPy" />
              <SkillCard icon={<SiPandas className="text-[#150458] text-3xl" />} name="Pandas" />
              <SkillCard icon={<FaPython className="text-[#3776AB] text-3xl" />} name="ScikitLearn" />
              <SkillCard icon={<SiTensorflow className="text-[#FF6F00] text-3xl" />} name="TensorFlow" />
              <SkillCard icon={<SiJupyter className="text-[#F37626] text-3xl" />} name="Jupyter Notebook" />
              <SkillCard icon={<FaCode className="text-gray-700 dark:text-gray-300 text-3xl" />} name="Google Colab" />
              <SkillCard icon={<FaCode className="text-[#20BEFF] text-3xl" />} name="Kaggle" />
            </div>
          </div>

          {/* Problem Solving */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
              Problem Solving
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard icon={<FaCode className="text-gray-700 dark:text-gray-300 text-3xl" />} name="450+ problems solved" />
              <SkillCard icon={<FaCode className="text-[#1F8ACB] text-3xl" />} name="Codeforces" />
              <SkillCard icon={<FaCode className="text-[#5B4638] text-3xl" />} name="Codechef" />
              <SkillCard icon={<FaCode className="text-[#FFA116] text-3xl" />} name="Leetcode" />
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

// Skill Card Component
const SkillCard = ({ icon, name }: { icon: React.ReactNode, name: string }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full">
          {icon}
        </div>
        <h4 className="font-medium text-center text-gray-800 dark:text-gray-200">{name}</h4>
      </div>
    </div>
  );
};

export default SkillsSection;
