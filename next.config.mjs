/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
};

export default nextConfig;
