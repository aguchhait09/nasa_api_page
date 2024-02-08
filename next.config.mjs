/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov'
      },
      {
        protocol: 'https',
        hostname: "apod.nasa.gov"
      }
    ],
    domains:[
      'mars.jpl.nasa.gov', "apod.nasa.gov"
    ]
  },
 
 
};

export default nextConfig;
