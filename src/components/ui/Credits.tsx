'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Credits = () => {
  return (
    <AnimationContainer customClassName="w-full py-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-base font-medium">
              Built with <FaHeart className="inline text-red-500 mx-1" /> by{' '}
              <Link
                href={siteConfig.baseUrl}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:underline"
              >
                {siteConfig.author}
              </Link>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              All rights reserved © {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex gap-4">
            {siteConfig.social.github && (
              <SocialLink 
                href={`https://github.com/${siteConfig.social.github}`}
                icon={<FaGithub className="text-xl" />}
                label="GitHub"
              />
            )}
            {siteConfig.social.linkedin && (
              <SocialLink 
                href={`https://linkedin.com/in/${siteConfig.social.linkedin}`}
                icon={<FaLinkedin className="text-xl" />}
                label="LinkedIn"
              />
            )}
            {siteConfig.social.twitter && (
              <SocialLink 
                href={`https://twitter.com/${siteConfig.social.twitter}`}
                icon={<FaTwitter className="text-xl" />}
                label="Twitter"
              />
            )}
            {siteConfig.email && (
              <SocialLink 
                href={`mailto:${siteConfig.email}`}
                icon={<FaEnvelope className="text-xl" />}
                label="Email"
              />
            )}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
      aria-label={label}
    >
      {icon}
    </Link>
  );
};

export default Credits;
