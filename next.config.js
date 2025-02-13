// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Désactivé pour permettre la prévisualisation en développement
//   // output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { 
//     domains: ['images.unsplash.com','github.com'],
//     // Désactivé pour permettre la prévisualisation en développement
//     // unoptimized: true 
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optionnel : définir un port ou un chemin spécifique
        // port: '',
        // pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        // Optionnel : définir un port ou un chemin spécifique
        // port: '',
        // pathname: '/**',
      },
    ],
    // Désactivé pour permettre la prévisualisation en développement
    // unoptimized: true 
  },
};

module.exports = nextConfig;