const path = require('path');

module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api/': {
                target: 'https://api.github.com/search/',
                pathRewrite: { '^/api/': '' },
            },
        },
        disableHostCheck: true,
    },
    productionSourceMap: false,
    configureWebpack: {
        performance: {
            hints: false,
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            },
        },
    },
}
