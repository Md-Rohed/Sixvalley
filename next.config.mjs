/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        });
    
        return config;
      },
};

export default nextConfig;
