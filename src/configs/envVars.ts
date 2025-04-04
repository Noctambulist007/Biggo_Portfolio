'use client';
export function validateEnvVars() {
  const requiredEnvVars = [
    // Removed GitHub tokens as they're no longer required
    'GEMINI_API_KEY'
  ];

  // Check if all required environment variables are set
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      console.error(`Error: Missing environment variable: ${envVar}`);
      process.exit(1); // Terminate application if a required env var is missing
    }
  });

  // Set optional environment variables with default values if not set
  process.env.HASHNODE_API_KEY = process.env.HASHNODE_API_KEY || ''; // Optional, default to empty string
  process.env.HASHNODE_USERNAME = process.env.HASHNODE_USERNAME || ''; // Optional, default to empty string
  process.env.ADSENSE_ID = process.env.ADSENSE_ID || ''; // Not needed, default to empty string
  process.env.SITE_URL = process.env.SITE_URL || 'http://localhost:3000'; // Default URL
  process.env.NEXTAUTH_SECRET =
    process.env.NEXTAUTH_SECRET || 'default_nextauth_secret'; // Default secret
}

export function getEnvVars() {
  return {
    // Removed GitHub tokens
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    HASHNODE_API_KEY: process.env.HASHNODE_API_KEY,
    HASHNODE_USERNAME: process.env.HASHNODE_USERNAME,
    ADSENSE_ID: process.env.ADSENSE_ID,
    SITE_URL: process.env.SITE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  };
}
