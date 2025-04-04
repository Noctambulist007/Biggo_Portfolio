'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0); // In seconds
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug) {
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
  }, []);

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

      <div className="w-full flex flex-col mx-auto max-w-screen-xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-5">
                  <ContactCard 
                    icon={<FaEnvelope className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                    title="Email"
                    value={siteConfig.social.email}
                    link={`mailto:${siteConfig.social.email}`}
                  />
                  
                  <ContactCard 
                    icon={<FaPhone className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                    title="Phone"
                    value="+880-172-980-7254"
                    link="tel:+8801729807254"
                  />
                  
                  <ContactCard 
                    icon={<FaMapMarkerAlt className="h-5 w-5 text-[#FF004F] dark:text-[#FF004F]" />}
                    title="Location"
                    value="Sylhet, Sylhet Sadar - 3100"
                    subtitle="Bangladesh"
                  />
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300 mb-4">
                  CONNECT WITH ME
                </h4>
                <div className="flex space-x-4">
                  <Link 
                    href={`https://github.com/${siteConfig.social.github}`} 
                    target="_blank"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                  <Link 
                    href={siteConfig.social.linkedin} 
                    target="_blank"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <FaLinkedin className="h-5 w-5 text-[#0A66C2]" />
                  </Link>
                  <Link 
                    href={`https://twitter.com/${siteConfig.social.twitter}`} 
                    target="_blank"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <FaTwitter className="h-5 w-5 text-[#1DA1F2]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF004F] to-[#FF004F]/70">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                    <svg className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for your message. I'll get back to you soon!</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full space-y-5"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF004F] dark:bg-gray-700"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  {siteConfig.contact.debug && (
                    <input
                      type="hidden"
                      name="userInfo"
                      value={JSON.stringify(userInfo)}
                    />
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isWaiting}
                      className="px-6 py-3 bg-gradient-to-r from-[#FF004F] to-[#FF004F]/80 text-white font-medium rounded-lg flex items-center"
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>

                  {isWaiting && (
                    <div className="text-yellow-500 text-sm mt-3">
                      Please wait {waitTime} seconds before sending another message.
                    </div>
                  )}
                </form>
              )}
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
    <div className="group flex items-start space-x-3">
      <div className="bg-white dark:bg-gray-700 p-2.5 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase">{title}</h4>
        <p className="font-medium text-sm truncate text-gray-800 dark:text-white">{value}</p>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block group hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
};

export default ContactMe;
