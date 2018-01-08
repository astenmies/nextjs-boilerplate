/* eslint-disable */
module.exports = (ctx) => ({
    plugins: {
        'postcss-cssnext': true,
        'postcss-modules': {generateScopedName: '[path][name]__[local]--[hash:base64:5]'},
        'cssnano': ctx.env === 'production' ? true : false,
        'postcss-easy-import': {prefix: '_'}, // keep this first
    }
})
