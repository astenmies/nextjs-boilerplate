/* eslint-disable */
// module.exports = {
//     plugins: [
//         require('postcss-easy-import')({ prefix: '_' }), // keep this first
//         require('autoprefixer')({ /* ...options */ }), // so imports are auto-prefixed too
//     ],
// };

module.exports = (ctx) => ({
    plugins: {
        'postcss-cssnext'     : true,
        'postcss-modules'     : {generateScopedName: '[path][name]__[local]--[hash:base64:5]'},
        'cssnano'             : ctx.env === 'production' ? true : false
    }
})