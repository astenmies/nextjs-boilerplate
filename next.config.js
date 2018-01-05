require('dotenv').config();

const fs = require('fs');
const trash = require('trash');

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

    config.plugins = config.plugins.filter(
      plugin => (plugin.constructor.name !== 'UglifyJsPlugin'),
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
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
        'sass-loader',
      ],
    });


    return config;
  },
};
