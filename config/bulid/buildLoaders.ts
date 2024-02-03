import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[local]--[hash:base64:6]'
                            : '[hash:base64:8]'
                    },
                },
            },
            "sass-loader",
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const assetsLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    }

    return [
        typeScriptLoader,
        cssLoader,
        svgLoader,
        assetsLoader
    ]
}
