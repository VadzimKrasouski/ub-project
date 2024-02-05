import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
