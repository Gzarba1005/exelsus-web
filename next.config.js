/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'maps.googleapis.com'], // Para placeholders y mapa
  },
}

module.exports = nextConfig