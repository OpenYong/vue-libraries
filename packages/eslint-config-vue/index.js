module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
        },
      ],
    },
  }
  