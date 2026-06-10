/**
 * Next.js config — dual-deploy aware.
 *
 *  - On Vercel: NEXT_PUBLIC_BASE_PATH is unset, output stays default.
 *  - On GitHub Pages: set NEXT_PUBLIC_BASE_PATH="/<repo-name>" and run `npm run build`.
 *    The static export lands in /out — copy it to your gh-pages branch.
 *
 * If your repo is `aryanmohan5.github.io` (a user/org page), leave BASE_PATH empty.
 * If it's a project repo (e.g. `portfolio`), set BASE_PATH="/portfolio".
 */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? basePath : '',
  assetPrefix: isProd && basePath ? `${basePath}/` : undefined,
  experimental: { optimizePackageImports: ['framer-motion', 'gsap'] },
};

module.exports = nextConfig;
