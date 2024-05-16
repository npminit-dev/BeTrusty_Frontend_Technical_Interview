import million from "million/compiler";

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
  
const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
