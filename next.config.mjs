/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['6valley.6amtech.com'],
  },
    webpack: function (config) {
        config.module.rules.push({
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        });
    
        return config;
      },
};

export default nextConfig;
