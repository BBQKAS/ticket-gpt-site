/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // 忽略 ESLint 报错进行构建
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  