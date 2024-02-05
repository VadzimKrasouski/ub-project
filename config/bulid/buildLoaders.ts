import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[local]--[hash:base64:6]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env',
          ['@babel/preset-react', {
            development: isDev,
            runtime: 'automatic',
          }]],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
          'react-refresh/babel',
        ],
      },
    },
  };

  const loaders = [
    assetsLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
  ].filter(Boolean);
  return loaders;
}
