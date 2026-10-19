/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole demo is plain HTML/CSS/JS and deploys to Netlify or Vercel with no server.
  output: "export",
  trailingSlash: true,
  images: {
    // Product photos are the company's own images served from their IndiaMART catalogue CDN.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
