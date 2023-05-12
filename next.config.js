/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/app/watson2023",
  images: {
    unoptimized: true,
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/face": { page: "/face" },
    };
    return paths;
  },
  trailingSlash: true,
  env: {
    HOST: "https://www.gforcesolution.com/app/watson2023",
  },
};

module.exports = nextConfig;
