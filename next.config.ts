import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/demo/ecommerce",
        destination: "/demo/commercehub",
        permanent: false,
      },
      {
        source: "/demo/ecommerce/:path*",
        destination: "/demo/commercehub/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
