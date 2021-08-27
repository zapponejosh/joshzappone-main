module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
