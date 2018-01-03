// webpack設定至 next.config.js, 這裡設定為 webstorm 識別對應路徑

const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
            alias: {
            // CUSTOM PACKAGES:
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@templates': path.resolve(__dirname, 'src/components/template'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@i18n': path.resolve(__dirname, 'src/i18n'),
        }
    },
}
