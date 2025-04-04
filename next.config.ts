import { NextConfig } from 'next';
// Instead of importing validateEnvVars, we'll create a simpler validation
// that doesn't require GitHub tokens

// Optional validation function
const validateOptionalEnvVars = () => {
  // Set optional environment variables with default values if not set
  process.env.HASHNODE_API_KEY = process.env.HASHNODE_API_KEY || '';
  process.env.HASHNODE_USERNAME = process.env.HASHNODE_USERNAME || '';
  process.env.ADSENSE_ID = process.env.ADSENSE_ID || '';
  process.env.SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
  process.env.NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'default_nextauth_secret';
  
  // Log a warning if GEMINI_API_KEY is missing, but don't exit
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Warning: GEMINI_API_KEY environment variable is not set. Some features may not work properly.');
  }
};

// Run the optional validation
validateOptionalEnvVars();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',  // Configure static exports
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons'
      },
      {
        protocol: 'https',
        hostname: 'github-profile-trophy.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats-seven-azure.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-contributor-stats.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'api.daily.dev',
        port: '',
        pathname: '/devcards/v2/**'
      },
      {
        protocol: 'https',
        hostname: 'holopin.me',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/api/wakatime'
      },
      {
        protocol: 'https',
        hostname: 'wakatime.com',
        port: '',
        pathname: '/**'
      }
    ],
    unoptimized: true,  // Required for static export
    dangerouslyAllowSVG: true // Allow SVG images
  }
};

export default nextConfig;
