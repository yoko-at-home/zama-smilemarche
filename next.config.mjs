/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        // pathname: "/assets/", // `account123` を正しいパスに修正
      },
    ],
  },
};

export default nextConfig;
