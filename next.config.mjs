/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "dummyjson.com" },
      { hostname: "fakestoreapi.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "robohash.org" },
      { hostname: "cdn.dummyjson.com" },
    ],
  },
};

export default nextConfig;
