import webpack from 'webpack';
import {buildCssLoader} from './loaders/buildCssLoaders';
import {BuildOptions} from './types/config';
import {buildBabelLoader} from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    //const babelLoader = buildBabelLoader(options);
    const cssLoader = buildCssLoader(options.isDev);

    const  fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        fileLoader,
        svgLoader,
        //babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}