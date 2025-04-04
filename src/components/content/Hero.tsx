'use client';

import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          <span className="font-mono text-[#FF004F] dark:text-[#FF004F]">
            Hello!{' '}
          </span>
          <span className="font-mono text-[#FF004F] dark:text-[#FF004F]">
            I am
          </span>
        </p>
        <h1 className="font-bold text-3xl lg:text-5xl tracking-tight mb-3 text-gray-900 dark:text-white">
          {siteConfig.author} {/* Dynamic author name */}
        </h1>

        <h2 className="flex items-center gap-2 text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-8">
          <span className="relative w-[max-content] font-mono typing-animation text-gray-800 dark:text-gray-200">
            I'm a Software Engineer & AI Enthusiast
          </span>
        </h2>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
