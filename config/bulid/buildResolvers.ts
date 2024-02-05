import webpack from 'webpack';
import { BuildOptions } from './types';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
