require('dotenv').config();

const webpack = require('webpack');
const fs = require('fs');
const trash = require('trash'); // 刪除 skeleton-loader 所產生的檔案

const path = require('path');
const Dotenv = require('dotenv-webpack');
const glob = require('glob');


module.exports = {

    assetPrefix: process.env.CDN_URL ? process.env.CDN_URL : '',

    webpack: (config) => {
        config.plugins = config.plugins || [];

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),
        ];


        // skeleton-loader 範例中所使用(不確定用途為何)
        config.plugins = config.plugins.filter(
            plugin => (plugin.constructor.name !== 'UglifyJsPlugin'),
        );

        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                JQuery: 'jquery',
                "window.jQuery": "jquery"
            })
        );

        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader'],
            },
            {
                test: /\.s(a|c)ss$/,
                use:
                    [
                        {
                            loader: 'skeleton-loader',
                            options: {
                                procedure(content) {
                                    const fileName = `${this._module.userRequest}.json`;
                                    const classNames = fs.readFileSync(fileName, 'utf8');

                                    trash(fileName);

                                    return ['module.exports = {',
                                        `styles: ${classNames},`,
                                        `stylesheet: \`${content}\``,
                                        '}',
                                    ].join('');
                                },
                            },
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['src/styles', 'node_modules']
                                    .map(d => path.join(__dirname, d))
                                    .map(g => glob.sync(g))
                                    .reduce((a, c) => a.concat(c), []),
                            },
                        },
                    ],
            }
        );


        return config;
    },
};
