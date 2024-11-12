/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/l",
        destination: "/l/accounts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
