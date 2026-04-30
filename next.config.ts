import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.idphotosnap.com' }],
        destination: 'https://idphotosnap.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
