/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      '@mui/x-date-pickers',
      'dayjs',
      '@/mui_styles',
      'react-simply-carousel'
    ]
  }
};
  
export default nextConfig;
