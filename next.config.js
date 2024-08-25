
const withVercelToolbar = require('@vercel/toolbar/plugins/next')({
    devServerPort: 3000,
    enableInProduction: true,
  });
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    },
    // basePath: '/github-pages',
    // assetPrefix: '/github-pages',
    // future: {
    //     webpack4: true, // by default, if you customize webpack config, they switch back to version 4. 
    //     // Looks like backward compatibility approach.
    // },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
            // dgram: false,
            // "child_process": false,
            // net: false,
        };

        return config;
    },
};

module.exports = withVercelToolbar(nextConfig);