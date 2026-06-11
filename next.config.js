/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Disable static export of pages/ directory error pages (not used with App Router)
  experimental: {},
}

module.exports = nextConfig
