module.exports = {
  env: {
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    // 一个配置文件可以从基础配置中继承已启用的规则
    'airbnb',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser', // 解析器
  parserOptions: {
    // 解析器选项
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
    'react',
    'react-native',
  ],
  settings: {
    // ESLint 支持在配置文件添加共享设置
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    },
  },
  rules: {
    // 启用的规则及其各自的错误级别
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
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
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
  },
}
