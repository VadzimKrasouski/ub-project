module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    // 'plugin:i18next/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    // 'i18next',
  ],
  rules: {
    // 'react/jsx-indent': [2, 4],
    // 'react/jsx-indent-props': [2, 4],
    // indent: [2, 4],
    'react/jsx-filename-extension': [2,
      { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    // 'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // 'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error',
      { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': 'off',
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
    // // 'i18next/no-literal-string': ['error',
    // //     { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    // 'max-len': ['error', { code: 100, ignoreComments: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};