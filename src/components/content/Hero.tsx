'use client';

import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2">
          <span className="font-mono text-[#FF004F] dark:text-[#FF004F]">
            Hello!{' '}
          </span>
          <span className="font-mono text-[#FF004F] dark:text-[#FF004F]">
            I am
          </span>
        </p>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-2 sm:mb-3 text-gray-900 dark:text-white">
          {siteConfig.author} {/* Dynamic author name */}
        </h1>

        <h2 className="flex flex-col sm:flex-row items-center gap-2 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-6 sm:mb-8">
          <span className="relative w-[max-content] font-mono sm:typing-animation text-gray-800 dark:text-gray-200">
            I'm a Software Engineer<span className="hidden sm:inline"> & </span>
          </span>
          <span className="relative w-[max-content] font-mono text-gray-800 dark:text-gray-200 sm:hidden">&</span>
          <span className="relative w-[max-content] font-mono sm:typing-animation text-gray-800 dark:text-gray-200">
            AI Enthusiast
          </span>
        </h2>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
