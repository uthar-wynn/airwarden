/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true, // Enable React Strict Mode for better error reporting
    webpack(config, { dev, isServer }) {
        if (dev || isServer) {
            config.optimization.minimize = false; // Disable minification in development for better debugging
        } else {
            config.optimization.minimizer = [];
        }
        return config;
    },
};

export default nextConfig;