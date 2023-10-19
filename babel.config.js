module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@enums': './src/enums',
        '@models': './src/models',
        '@screens': './src/screens',
        '@navigator': './src/navigator',
        '@constants': './src/constants',
        '@utils': './src/utils',
        '@hooks': './src/hooks'
      }
    }]
  ]
};
