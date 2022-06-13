const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

//PWA Config

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

// End PWA Config

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
