const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: `${__dirname}/dist`,
        port: 9000,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        },
    },
});