module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
  },
}
