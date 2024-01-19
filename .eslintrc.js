module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        /*		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",*/
        'react-app',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.test.{ts,tsx}'
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
        'i18next'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
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
                'ignoreAttribute': ['data-testid']
            }
        ],
        'max-len': [
            'error',
            {ignoreComments: true, code: 100}
        ]
    }
};
