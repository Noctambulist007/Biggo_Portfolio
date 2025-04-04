'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  // Check if we're in static export mode
  const isStaticExport = process.env.NEXT_PUBLIC_OUTPUT_MODE === 'export' || 
                        typeof window !== 'undefined' && window.location.protocol === 'file:';
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0); // In seconds
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug && !isStaticExport) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
          const browserInfo = {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            timezone: data.timezone,
            isp: data.org,
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            chromeVersion: navigator.userAgent.match(
              /Chrom(e|ium)\/([0-9]+)\./
            )?.[2],
            domain: window.location.href
          };
          setUserInfo(browserInfo);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, [isStaticExport]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is trying to send an email before the ratelimit window is up
    const lastSubmittedTime = sessionStorage.getItem('lastSubmittedTime');
    const lastEmail = sessionStorage.getItem('lastEmail');
    const currentTime = Date.now();
    const rateLimit = siteConfig.contact.rateLimit;
    const FIVE_MINUTES = rateLimit * 60 * 1000; // default 10 minutes in milliseconds

    if (
      lastSubmittedTime &&
      currentTime - parseInt(lastSubmittedTime) < FIVE_MINUTES
    ) {
      // If less than 10 minutes have passed since last submission
      setIsWaiting(true);
      setWaitTime(
        Math.ceil(
          (FIVE_MINUTES - (currentTime - parseInt(lastSubmittedTime))) / 1000
        )
      ); // Show wait time in seconds
      return;
    }

    if (lastEmail && lastEmail !== email) {
      // If email is different and already used
      setIsWaiting(true);
      setWaitTime(Math.ceil(FIVE_MINUTES / 1000)); // Show 5 minutes wait time
      return;
    }

    // Simulate form submission and success
    setTimeout(() => {
      setIsSubmitted(true);
      sessionStorage.setItem('lastSubmittedTime', currentTime.toString());
      sessionStorage.setItem('lastEmail', email);
    }, 500);
  };

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Have a question or want to work together? Feel free to reach out!"
      />

      <div className="w-full flex flex-col mx-auto max-w-screen-xl mt-6 sm:mt-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-4 mb-6 lg:mb-0">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 h-full">
              <div className="w-full overflow-hidden">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70 px-1">
                  Contact Information
                </h3>
                
                <div className="space-y-2 sm:space-y-4 px-1">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="w-full overflow-hidden pr-1">
                      <ContactCard 
                        icon={<FaEnvelope className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                        title="Email"
                        value={siteConfig.social.email}
                        link={`mailto:${siteConfig.social.email}`}
                      />
                    </div>
                    
                    <div className="w-full overflow-hidden pr-1">
                      <ContactCard 
                        icon={<FaPhone className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                        title="Phone"
                        value="+880-172-980-7254"
                        link="tel:+8801729807254"
                      />
                    </div>
                    
                    <div className="w-full overflow-hidden pr-1">
                      <ContactCard 
                        icon={<FaMapMarkerAlt className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                        title="Location"
                        value="Sylhet, Sylhet Sadar - 3100"
                        subtitle="Bangladesh"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-4 sm:mt-6">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase text-gray-500 dark:text-gray-300 mb-3 sm:mb-4 px-1">
                    CONNECT WITH ME
                  </h4>
                  <div className="flex space-x-3 sm:space-x-4 px-1 pb-2">
                    <Link 
                      href={`https://github.com/${siteConfig.social.github}`} 
                      target="_blank"
                      className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <FaGithub className="h-4 sm:h-5 w-4 sm:w-5 text-gray-700 dark:text-gray-300" />
                    </Link>
                    <Link 
                      href={siteConfig.social.linkedin} 
                      target="_blank"
                      className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <FaLinkedin className="h-4 sm:h-5 w-4 sm:w-5 text-[#0A66C2]" />
                    </Link>
                    <Link 
                      href={`https://twitter.com/${siteConfig.social.twitter}`} 
                      target="_blank"
                      className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <FaTwitter className="h-4 sm:h-5 w-4 sm:w-5 text-[#1DA1F2]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 p-4 pt-4 pb-6 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="mx-auto w-full max-w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70 px-2">
                  Send a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-10 px-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 dark:bg-green-900 mb-3 sm:mb-4">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400 px-2">Thank you for your message. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full space-y-4 sm:space-y-5 px-2 sm:px-3"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <div className="w-full">
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full box-border px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      <div className="w-full">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full box-border px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full box-border px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full box-border px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>

                    {isWaiting ? (
                      <div className="mt-3 text-center p-3 sm:p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                        <p className="text-amber-600 dark:text-amber-400 text-sm">
                          Please wait {waitTime} seconds before sending another message.
                        </p>
                      </div>
                    ) : null}

                    {/* Debug info hidden in static export */}
                    {siteConfig.contact.debug && !isStaticExport && (
                      <pre className="text-xs overflow-auto bg-gray-100 dark:bg-gray-900 p-2 rounded-lg mt-2 max-h-32">
                        {JSON.stringify(userInfo, null, 2)}
                      </pre>
                    )}

                    {/* Submit Button */}
                    <div className="w-[95%] mx-auto mt-5 mb-4">
                      <button
                        type="submit"
                        className="w-full text-white rounded-lg font-medium py-3"
                        style={{ 
                          backgroundColor: '#FF004F',
                          maxWidth: '100%'
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

// Contact Card Component
const ContactCard = ({ 
  icon, 
  title, 
  value, 
  subtitle,
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
  subtitle?: string;
  link?: string;
}) => {
  const content = (
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg mr-3">
        {icon}
      </div>
      <div className="flex-1 min-w-0 text-left overflow-hidden pr-2">
        <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          {title}
        </h4>
        <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 truncate">
          {value}
          {subtitle && (
            <span className="text-xs sm:text-sm block text-gray-500 dark:text-gray-400 mt-1">
              {subtitle}
            </span>
          )}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        className="block hover:bg-gray-50 dark:hover:bg-gray-750 rounded-lg transition-colors duration-200 mb-2"
      >
        {content}
      </a>
    );
  }

  return <div className="mb-2">{content}</div>;
};

export default ContactMe;
