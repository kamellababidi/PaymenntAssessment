module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 'off',
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'no-useless-escape': 'off',
    'dot-notation': 'off',
    'no-control-regex': 'off',
    'react-hooks/exhaustive-deps': ['error', {
      'additionalHooks': '(useDebouncedCallback)'
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': true
    }]
  }
};
