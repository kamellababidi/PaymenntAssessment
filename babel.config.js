module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@assets': './src/assets',
        '@images': './src/assets/images',
        '@components': './src/components',
        '@enums': './src/enums',
        '@models': './src/models',
        '@sagas': './src/sagas',
        '@screens': './src/screens',
        '@navigator': './src/navigator',
        '@constants': './src/constants',
        '@store': './src/store',
        '@uikit': './src/uikit',
        '@utils': './src/utils'
      }
    }]
  ]
};
