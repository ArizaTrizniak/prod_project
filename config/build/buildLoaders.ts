import webpack from 'webpack';
import {buildCssLoader} from './loaders/buildCssLoaders';
import {BuildOptions} from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const  fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    /*const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    };*/

    const cssLoader = buildCssLoader(options.isDev);

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