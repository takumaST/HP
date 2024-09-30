/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": 'export',
    'images': {  unoptimized: true  },
    'trailingSlash': true,
    // fast refresh を有効にする
    reactStrictMode: true,
    // fast refresh を有効にした場合、開発中に ESW が起きるのを回避する
    experimental: {
        esmExternals: true,
    },
};

export default nextConfig;