/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactivé pour permettre la prévisualisation en développement
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['images.unsplash.com'],
    // Désactivé pour permettre la prévisualisation en développement
    // unoptimized: true 
  },
};

module.exports = nextConfig;