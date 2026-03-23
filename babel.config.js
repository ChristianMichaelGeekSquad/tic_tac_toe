module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'babel-plugin-react-compiler',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigation: './src/navigation',
          tailwind: './tailwind',
          features: './src/features',
          tailwindConfig: './tailwind.config.js',
          general_utils: './general_utils',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
