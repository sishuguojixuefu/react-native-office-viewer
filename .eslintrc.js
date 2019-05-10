// yarn add eslint eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-native -D
// yarn add typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript -D
// yarn add eslint-import-resolver-babel-plugin-root-import -D
// yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
module.exports = {
  extends: [
    'airbnb',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  rules: {
    'global-require': 0,
    'linebreak-style': [2, 'unix'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info', 'log'],
      },
    ],
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'jsx-a11y/accessible-emoji': 0,
    'react-native/no-color-literals': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    },
    '@typescript-eslint/no-explicit-any': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
}
