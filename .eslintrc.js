module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': ['react-app', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.{test,stories}.{ts,tsx}',
            ],
            'rules': {
                'i18next/no-literal-string': 'off',
            },
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        /*"@typescript-eslint",
		"react",*/
        'i18next',
        'react-hooks',
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                'ignoreAttribute': ['data-testid', 'to']
            }
        ],
        'max-len': [
            'error',
            {ignoreComments: true, code: 100}
        ],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    }
};
