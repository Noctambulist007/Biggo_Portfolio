export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://portfolio-biggo.com',
  domain: 'portfolio-biggo.com',
  author: 'Biggo Bushon Routh',
  author_surname: 'Routh',
  titlePrefix: 'Biggo Bushon Routh',
  github_org_name: 'EzyCourse',
  country: 'Bangladesh',
  profile_image: '/images/biggo-demo.jpeg',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/biggorouth',
    sponsor: 'https://github.com/sponsors/Biggo111',
    email: 'routh.biggo123@gmail.com',
    twitter: '@BiggoBushon',
    github: 'Biggo111',
    linkedin: 'https://www.linkedin.com/in/biggo-bushon-routh/',
    blog: 'https://portfolio-biggo.com/blog',
    medium: 'https://medium.com/@biggo-routh',
    dev: 'https://dev.to/biggo111',
    hashnode: 'https://hashnode.com/@Biggo111',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/EzyCourse',
    daily_dev: {
      username: 'biggorouth',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'biggorouth'
  },
  metadata: {
    description: `Hi! I'm Biggo Bushon Routh, a Software Engineer at EzyCourse, specializing in mobile application development with nearly a year of professional experience. Alongside my software engineering role, I am a research assistant at Intex Research Lab, where my work focuses on thesis-based projects leveraging machine learning, deep learning, and image processing.`,
    keywords:
      'Biggo Bushon Routh, Software Engineer, Mobile Development, Machine Learning, Deep Learning, Image Processing, Flutter, AI, Healthcare, EzyCourse, Intex Research Lab',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/Biggo111/Biggo111/output/github-contribution-grid-snake.svg'
  }
};
