/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-native", "nativewind", "react-native-css-interop"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg": "react-native-svg-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    return config;
  },
};

module.exports = nextConfig;
