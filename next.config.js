/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
    webpack(config, { dev, isServer }) {
        if (!dev && !isServer) {
            const terserPlugin = new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true // 콘솔 로그 제거
                    }
                }
            });

            config.optimization.minimizer.push(terserPlugin);
        }

        return config;
    }
};

module.exports = nextConfig;
