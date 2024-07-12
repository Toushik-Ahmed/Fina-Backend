/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/l',
        destination: '/l/accounts',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
