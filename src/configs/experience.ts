'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Software Engineer L2 | July. 2023 - Present',
    description:
      'Develop and maintain the Ezycourse mobile application, focusing on scalability, efficiency, issue resolution, and enhancing user experience, while collaborating with teams to implement new features.',
    startDate: 'July 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: 'https://ezycourse.com'
  },
  {
    title: 'Undergraduate Research Assistant | Sep. 2023 - Present',
    description:
      'Conduct research on machine learning and deep learning at Intex Research Lab. Assist in thesis projects by collaborating with senior researchers to design and implement models, contributing to research papers. Continuously stay informed on the latest developments in ML and DL technologies.',
    startDate: 'Sep 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: 'https://intexresearchlab.com'
  },
  {
    title: 'IEEE CS BDC Summer Symposium | Jan. 2023',
    description:
      'Presented an extended abstract of my thesis at the IEEE CS BDC Summer Symposium 2023, Islamic University, Kushtia, Bangladesh (Paper ID: 162), gaining valuable insights and sharing my research with experts and peers.',
    startDate: 'Jan 2023',
    endDate: 'Jan 2023',
    isActive: false,
    companyUrl: 'https://ieee.org'
  },
  {
    title: 'IEEE IEMCON 2022 Presenter | Oct. 2022',
    description:
      'My co-authors and I successfully presented our paper titled "Performance Analysis of Machine Learning Algorithms in Chronic Kidney Disease Prediction" at the 2022 IEEE IEMCON.',
    startDate: 'Oct 2022',
    endDate: 'Oct 2022',
    isActive: false,
    companyUrl: 'https://ieee.org'
  },
  {
    title: 'Code Samurai Hackathon Participant | Dec. 2022',
    description:
      'My team placed 27th nationwide in the preliminary round of the Code Samurai Hackathon 2022, out of around 500 teams. We qualified for the finals at Dhaka University, where we presented our project and gained valuable experience.',
    startDate: 'Dec 2022',
    endDate: 'Dec 2022',
    isActive: false,
    companyUrl: 'https://codesamurai.org'
  },
  {
    title: 'Secretary, IEEE Computer Society LU SB Chapter | May. 2023 - Sep. 2024',
    description:
      'Organized events such as seminars and webinars, leading content writing and operations teams. Strengthened my network while enhancing leadership and communication skills.',
    startDate: 'May 2023',
    endDate: 'Sep 2024',
    isActive: false,
    companyUrl: 'https://ieee.org'
  },
  {
    title: 'Bachelor of Science in Computer Science and Engineering | Jan. 2020 - Dec. 2023',
    description:
      'Leading University, Sylhet, Bangladesh. Final grade: 3.65 out of 4 | Type of credits: Bangladesh Credit System | Number of credits: 152',
    startDate: 'Jan 2020',
    endDate: 'Dec 2023',
    isActive: false,
    companyUrl: 'https://lus.ac.bd'
  }
];
