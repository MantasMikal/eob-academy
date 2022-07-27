module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    '../../.eslintrc',
    'next'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    '@next/next/no-img-element': 'off',
    'no-dupe-args': 'error',
    'no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
    'linebreak-style': 'off'
  },
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
