import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: 'build', // specify the output directory for Cloudflare Pages

  // Optimize the build size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Use Terser to minimize JS files
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove console logs
                drop_debugger: true, // Remove debugger statements
              },
              output: {
                comments: false, // Remove comments
              },
            },
          }),
        ],
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {},

  // Future options to improve bundle size with granular chunks
  modularizeImports: {
    // Example: if you use lodash or other large libraries, load only what’s needed
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
};

export default nextConfig;
